import React, {useState, useEffect} from 'react'
import { abi, contractAddresses } from '../../constants'
import { useWeb3Contract, useMoralis, useMoralisWeb3Api } from 'react-moralis'

import ImageLoading from "../../images/loading.gif"

const MyNFT = ({levelPreview}) => {
    console.log(levelPreview)
    const { chainId: chainIdHex, account, isWeb3Enabled } = useMoralis()
    const Web3Api = useMoralisWeb3Api();

    const chainId = parseInt(chainIdHex)
    const OpenHelpAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null


    const [levels, setLevels] = useState([])

    const [myLevel, setMyLevel] = useState(levelPreview)

    useEffect(() => {
        setMyLevel(levelPreview)
    }, [levelPreview])
    

    const { runContractFunction: getPreviewNFT } = useWeb3Contract({
        abi: abi,
        contractAddress: OpenHelpAddress,
        functionName: "getPreviewNFT",
        params: {},
        msgValue: "",
    })
    /*
    const { runContractFunction: userList } = useWeb3Contract({
        abi: abi,
        contractAddress: OpenHelpAddress, 
        functionName: "userList",
        params: {  },
        msgValue: "",
    })
    */
    useEffect(() => {
        if(isWeb3Enabled)
            updateData()
    }, [isWeb3Enabled])

    const updateData = async () => {
        let levelsFromCall = (await getPreviewNFT())

        if(levelsFromCall)
            setLevels(levelsFromCall)    
        
        /*
        let userDataFromCall = (await userList())
        console.log(account)
        console.log(userDataFromCall)
        */

        //let userDataFromCall = await Web3Api.token.userList({address: OpenHelpAddress})
        //console.log(userDataFromCall)
        //pendiente metodo retornar mapping userList
    }


    return (
        <div style={{padding: "20px", display: "flex", flexDirection: "column",}}>
        
        <span style={{textAlign: "center"}}>MyNFT</span>
        {myLevel &&
                <img src={myLevel} width="200" />
            }
        </div>
    )
}

export default MyNFT