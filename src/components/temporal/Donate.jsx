import React, {useState, useEffect} from 'react'
import { abi, contractAddresses } from '../../constants'
import { useWeb3Contract, useMoralis } from 'react-moralis'

import ImageLoading from "../../images/loading.gif"
//
const Donate = () => {
    const { chainId: chainIdHex, isWeb3Enabled } = useMoralis()
    const chainId = parseInt(chainIdHex)
    const OpenHelpAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null


    const [amount, setAmount] = useState(0)
    const [levels, setLevels] = useState([])
    const [levelPreview, setLevelPreview] = useState("")

    const { runContractFunction: _donate } = useWeb3Contract({
        abi: abi,
        contractAddress: OpenHelpAddress,
        functionName: "_donate",
        params: {},
        msgValue: amount,
    })

    const { runContractFunction: getPreviewNFT } = useWeb3Contract({
        abi: abi,
        contractAddress: OpenHelpAddress,
        functionName: "getPreviewNFT",
        params: {},
        msgValue: "",
    })

    useEffect(() => {
        if(isWeb3Enabled)
            updateData()
    }, [isWeb3Enabled])

    const updateData = async () => {
        console.log("entro")
        let levelsFromCall = (await getPreviewNFT())
        //console.log("ccc",levelsFromCall)
        if(levelsFromCall) {
            setLevels(levelsFromCall)
            setLevelPreview(levelsFromCall[0])
            //console.log(levelsFromCall)
        }
        
    }

    const updatePreview = (amount) => {
        
        if(!levels)
            return;
            
        setLevelPreview(ImageLoading)

        setAmount(amount)
        //console.log(amount, levels)
        
        if(levels)
        {
            if(amount >= 0 && amount < 10)   
                setLevelPreview(levels[0])            

            if(amount >= 10 && amount < 20)
                setLevelPreview(levels[1])

            if(amount >= 20 && amount < 30)
                setLevelPreview(levels[2])

            if(amount >= 30 && amount < 40)
                setLevelPreview(levels[3])

            if(amount >= 40)
                setLevelPreview(levels[4])
            }
       
    }

    const handleSuccess = async (tx) => {
        await tx.wait(1)
        //hadleNewNotification(tx)
        setAmount(0)
        setLevelPreview(levels[0]) 
    }
    
    return (
        <div style={{padding: "20px"}}>
            <input type="number" value={amount} onChange={(e) => updatePreview(e.target.value)} />
            <button onClick={async () => {
                await _donate({
                    onSuccess: handleSuccess
                })
            }}>Donate</button>
            <span>My NFT</span>
            {levelPreview &&
                <img src={levelPreview} width="200" />
            }
            
        </div>
    )
}

export default Donate