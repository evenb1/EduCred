import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

/**
 * Deploys the EduCred contract for certificate management
 */
const deployEduCred: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  console.log("Deploying EduCred contract...");
  console.log("Deployer address:", deployer);

  // For localhost testing, we'll use mock addresses since EAS contracts don't exist locally
  // These addresses will be ignored in our simplified contract
  const EAS_ADDRESS = "0x0000000000000000000000000000000000000001";
  const SCHEMA_REGISTRY_ADDRESS = "0x0000000000000000000000000000000000000002";

  const eduCredContract = await deploy("EduCred", {
    from: deployer,
    args: [EAS_ADDRESS, SCHEMA_REGISTRY_ADDRESS],
    log: true,
    autoMine: true,
  });

  console.log("EduCred deployed to:", eduCredContract.address);
  console.log("Gas used:", eduCredContract.receipt?.gasUsed?.toString());
};

export default deployEduCred;
deployEduCred.tags = ["EduCred"];
