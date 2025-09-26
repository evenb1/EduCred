// File: packages/nextjs/app/api/getCertificate/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createPublicClient, http } from "viem";
import { hardhat } from "viem/chains";
import deployedContracts from "~~/contracts/deployedContracts";

const publicClient = createPublicClient({
  chain: hardhat,
  transport: http("http://127.0.0.1:8545"), // Explicit localhost URL
});

export async function POST(request: NextRequest) {
  try {
    const { contractAddress, certificateId, chainId } = await request.json();

    console.log("API called with:", { contractAddress, certificateId, chainId });

    if (!contractAddress || !certificateId) {
      return NextResponse.json({ error: "Missing contractAddress or certificateId" }, { status: 400 });
    }

    const CONTRACT_ABI = deployedContracts[chainId as keyof typeof deployedContracts]?.EduCred?.abi;

    if (!CONTRACT_ABI) {
      return NextResponse.json({ error: "Contract ABI not found" }, { status: 404 });
    }

    console.log("Calling getCertificate for ID:", certificateId);

    // Call getCertificate function
    const certificateData = (await publicClient.readContract({
      address: contractAddress as `0x${string}`,
      abi: CONTRACT_ABI,
      functionName: "getCertificate",
      args: [BigInt(certificateId)],
    })) as {
      university: string;
      student: string;
      studentName: string;
      course: string;
      ipfsHash: string;
      issueDate: bigint;
      isValid: boolean;
    };

    console.log("Certificate data received:", certificateData);

    // Get university name
    let universityName = "Unknown University";
    try {
      universityName = (await publicClient.readContract({
        address: contractAddress as `0x${string}`,
        abi: CONTRACT_ABI,
        functionName: "getUniversityName",
        args: [certificateData.university],
      })) as string;
    } catch (error) {
      console.warn("Failed to fetch university name:", error);
    }

    const result = {
      university: certificateData.university,
      student: certificateData.student,
      studentName: certificateData.studentName,
      course: certificateData.course,
      ipfsHash: certificateData.ipfsHash,
      issueDate: certificateData.issueDate.toString(),
      isValid: certificateData.isValid,
      universityName: universityName || "Unknown University",
    };

    console.log("Returning result:", result);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching certificate:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch certificate data",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
