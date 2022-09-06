import React, { useState, useEffect } from 'react'
import { abi, contractAddresses } from '../constants'
import { useWeb3Contract, useMoralis } from 'react-moralis'
import ImageLoading from '../images/loading.gif'

import { Button } from '../components/Button'

import '../styles/Donations.css'
import MyNFT from '../components/temporal/MyNFT'

export const Donations = () => {
  const { chainId: chainIdHex, isWeb3Enabled } = useMoralis()
  const chainId = parseInt(chainIdHex)
  const OpenHelpAddress =
    chainId in contractAddresses ? contractAddresses[chainId][0] : null

  const [amount, setAmount] = useState(0)
  const [levels, setLevels] = useState([])
  const [levelPreview, setLevelPreview] = useState('')

  const { runContractFunction: _donate } = useWeb3Contract({
    abi: abi,
    contractAddress: OpenHelpAddress,
    functionName: '_donate',
    params: {},
    msgValue: amount,
  })

  const { runContractFunction: getPreviewNFT } = useWeb3Contract({
    abi: abi,
    contractAddress: OpenHelpAddress,
    functionName: 'getPreviewNFT',
    params: {},
    msgValue: '',
  })

  useEffect(() => {
    if (isWeb3Enabled) updateData()
  }, [isWeb3Enabled])

  const updateData = async () => {
    let levelsFromCall = await getPreviewNFT()
    if (levelsFromCall) {
      setLevels(levelsFromCall)
      setLevelPreview(levelsFromCall[0])
    }
  }

  const updatePreview = (amount) => {
    if(!levels) return

    if (levels) {
      if (amount >= 0 && amount < 10) setLevelPreview(levels[0])

      if (amount >= 10 && amount < 20) setLevelPreview(levels[1])

      if (amount >= 20 && amount < 30) setLevelPreview(levels[2])

      if (amount >= 30 && amount < 40) setLevelPreview(levels[3])

      if (amount >= 40) setLevelPreview(levels[4])
      
      setAmount(amount)

    }
  }

  const handleSuccess = async (tx) => {
    await tx.wait(1)
    //hadleNewNotification(tx)
    setAmount(0)
    setLevelPreview(levels[0])
  }

  return (
    <div className='donations-container'>
      <div className='card'>
        <h1 className='card-title'>Donate</h1>
        <h3 className='card-subtitle'>You can any amount you want!</h3>
        <div className='card-input-area'>
          <input
            className='card-input'
            type='number'
            onChange={(e) => updatePreview(e.target.value)}
          />
          <p className='card-input-currency'>ETH</p>
          <p className='card-input-caption'>
            Select the amount you want to donate to Openhelp!
          </p>
        </div>
        <Button
          text='Donate'
          disabled={!amount || amount <= 0}
          onClick={async () => {
            await _donate({
              onSuccess: handleSuccess,
            })
          }}
        />
        <p className='card-input-caption-bottom'>
          Thank you very much for your donation, it helps us a lot.
        </p>
      </div>
      {amount > 0 && <MyNFT levelPreview={levelPreview} />}
    </div>
  )
}
