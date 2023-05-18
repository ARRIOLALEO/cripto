import {useState,useEffect} from 'react'
import axios from 'axios'
function CryptoCard(){

    const [cryptoData,setCryptoDat] = useState({})
    const [cryptoToSearch,setCryptoToSearch] = useState('btc-bitcoin')
    async function callAPI(){
        const request = await axios.get(`https://api.coinpaprika.com/v1/coins/${cryptoToSearch}`)
        setCryptoDat(request.data)
    }

    useEffect(()=>{
        callAPI()
    },[cryptoToSearch])
   
    return(<h1> here i will show the crypto information</h1>)
}
export default CryptoCard