// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/**
 * @title EduCred - Simplified Version
 * @notice Blockchain-based credential verification system for educational institutions
 * @dev Simplified version without EAS dependencies for local testing
 */
contract EduCred {
    address public immutable owner;
    uint256 private certificateCounter;
    
    // University verification and management
    mapping(address => bool) public verifiedUniversities;
    mapping(address => string) public universityNames;
    mapping(uint256 => bool) public revokedCertificates;
    
    // Certificate tracking
    mapping(address => uint256[]) public studentCertificates;
    mapping(uint256 => CertificateData) public certificates;
    
    // Events
    event UniversityVerified(address indexed university, string name);
    event UniversityRevoked(address indexed university);
    event CertificateIssued(
        uint256 indexed certificateId,
        address indexed university,
        address indexed student,
        string ipfsHash
    );
    event CertificateRevoked(uint256 indexed certificateId);
    
    struct CertificateData {
        address university;
        address student;
        string studentName;
        string course;
        string ipfsHash;
        uint256 issueDate;
        bool isValid;
    }
    
    modifier onlyVerifiedUniversity() {
        require(verifiedUniversities[msg.sender], "Not a verified university");
        _;
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }
    
    constructor(address, address) {
        // Constructor parameters are ignored in this simplified version
        owner = msg.sender;
        
        // Auto-verify deployer as test university for demo
        verifiedUniversities[msg.sender] = true;
        universityNames[msg.sender] = "Test University";
        
        emit UniversityVerified(msg.sender, "Test University");
    }
    
    /**
     * @notice Verify a university to issue certificates (self-verification for demo)
     * @param university Address of the university wallet
     * @param name Official name of the university
     */
    function verifyUniversity(address university, string calldata name) external {
        require(university == msg.sender, "Can only verify your own address");
        require(university != address(0), "Invalid university address");
        require(bytes(name).length > 0, "University name required");
        
        verifiedUniversities[university] = true;
        universityNames[university] = name;
        
        emit UniversityVerified(university, name);
    }
    
    /**
     * @notice Revoke university verification
     * @param university Address of the university to revoke
     */
    function revokeUniversity(address university) external onlyOwner {
        verifiedUniversities[university] = false;
        
        emit UniversityRevoked(university);
    }
    
    /**
     * @notice Issue a certificate to a student
     * @param student Address of the student's wallet
     * @param studentName Name of the student
     * @param course Course/degree name
     * @param ipfsHash IPFS hash of the certificate PDF
     * @return certificateId The unique identifier of the issued certificate
     */
    function issueCertificate(
        address student,
        string calldata studentName,
        string calldata course,
        string calldata ipfsHash
    ) external onlyVerifiedUniversity returns (uint256) {
        require(student != address(0), "Invalid student address");
        require(bytes(studentName).length > 0, "Student name required");
        require(bytes(course).length > 0, "Course required");
        require(bytes(ipfsHash).length > 0, "IPFS hash required");
        
        certificateCounter++;
        uint256 certId = certificateCounter;
        
        // Store certificate data
        certificates[certId] = CertificateData({
            university: msg.sender,
            student: student,
            studentName: studentName,
            course: course,
            ipfsHash: ipfsHash,
            issueDate: block.timestamp,
            isValid: true
        });
        
        // Add to student's certificate list
        studentCertificates[student].push(certId);
        
        emit CertificateIssued(certId, msg.sender, student, ipfsHash);
        
        return certId;
    }
    
    /**
     * @notice Revoke a certificate
     * @param certificateId The ID of the certificate to revoke
     */
    function revokeCertificate(uint256 certificateId) external {
        CertificateData storage cert = certificates[certificateId];
        require(cert.university == msg.sender, "Only issuing university can revoke");
        require(cert.isValid, "Certificate already revoked");
        
        // Mark as revoked
        revokedCertificates[certificateId] = true;
        cert.isValid = false;
        
        emit CertificateRevoked(certificateId);
    }
    
    /**
     * @notice Verify if a certificate is valid
     * @param certificateId The ID of the certificate to verify
     * @return isValid Whether the certificate is valid
     * @return cert Certificate data
     */
    function verifyCertificate(uint256 certificateId) 
        external 
        view 
        returns (bool isValid, CertificateData memory cert) 
    {
        cert = certificates[certificateId];
        
        // Check if certificate exists
        if (cert.university == address(0)) {
            return (false, cert);
        }
        
        // Check if university is still verified
        if (!verifiedUniversities[cert.university]) {
            return (false, cert);
        }
        
        // Check if certificate is revoked
        if (revokedCertificates[certificateId]) {
            return (false, cert);
        }
        
        return (cert.isValid, cert);
    }
    
    /**
     * @notice Get all certificates for a student
     * @param student Address of the student
     * @return Array of certificate IDs
     */
    function getStudentCertificates(address student) 
        external 
        view 
        returns (uint256[] memory) 
    {
        return studentCertificates[student];
    }
    
    /**
     * @notice Get certificate details by ID
     * @param certificateId ID of the certificate
     * @return Certificate data
     */
    function getCertificate(uint256 certificateId) 
        external 
        view 
        returns (CertificateData memory) 
    {
        return certificates[certificateId];
    }
    
    /**
     * @notice Get university name by address
     * @param university Address of the university
     * @return University name
     */
    function getUniversityName(address university) 
        external 
        view 
        returns (string memory) 
    {
        return universityNames[university];
    }
    
    /**
     * @notice Check if an address is a verified university
     * @param university Address to check
     * @return Whether the address is a verified university
     */
    function isVerifiedUniversity(address university) 
        external 
        view 
        returns (bool) 
    {
        return verifiedUniversities[university];
    }
    
    /**
     * @notice Get total number of certificates issued
     * @return Total certificate count
     */
    function getTotalCertificates() external view returns (uint256) {
        return certificateCounter;
    }
}