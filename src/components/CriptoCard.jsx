import axios from "axios"
import {useState,useEffect} from 'react'
function CryptoCard(){
    const [cryptoData,setCryptoData] = useState({})
    const [cryptoToSearch,setCryptoToSearch] = useState('bit-coin')
    async function callAPI(){
        const request = await axios.get('https://api.coinpaprika.com/v1/coins/btc-bitcoin')
        setCryptoData(request.data)
    }
    useEffect(()=>{
        callAPI()
    },[])
    console.log(cryptoData)
    
    return(<h1> here i will show the crypto information</h1>)
}
export default CryptoCard