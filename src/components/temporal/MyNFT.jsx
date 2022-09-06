import React, { useState, useEffect } from "react";
import { abi, contractAddresses } from "../../constants";
import { useWeb3Contract, useMoralis, useMoralisWeb3Api } from "react-moralis";

const MyNFT = ({ levelPreview }) => {
  const { chainId: chainIdHex, account, isWeb3Enabled } = useMoralis();

  const chainId = parseInt(chainIdHex);
  const OpenHelpAddress =
    chainId in contractAddresses ? contractAddresses[chainId][0] : null;

  const [levels, setLevels] = useState([]);

  const { runContractFunction: getPreviewNFT } = useWeb3Contract({
    abi: abi,
    contractAddress: OpenHelpAddress,
    functionName: "getPreviewNFT",
    params: {},
    msgValue: "",
  });

  useEffect(() => {
    if (isWeb3Enabled) updateData();
  }, [isWeb3Enabled]);

  const updateData = async () => {
    let levelsFromCall = await getPreviewNFT();

    if (levelsFromCall) setLevels(levelsFromCall);

  };

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column" }}>
      <span style={{ textAlign: "center" }}>The NFT That you will get is</span>
      {levelPreview && (
        <img src={levelPreview} width="200" alt="donor NFT preview" />
      )}
    </div>
  );
};

export default MyNFT;
