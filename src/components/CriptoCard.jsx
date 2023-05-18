<<<<<<< HEAD
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
=======
import {useState,useEffect} from 'react'
import axios from 'axios'
function CryptoCard(){

    const [cryptoData,setCryptoDat] = useState(null)
    const [cryptoToSearch,setCryptoToSearch] = useState('btc-bitcoin')
    async function callAPI(){
        const request = await axios.get(`https://api.coinpaprika.com/v1/coins/${cryptoToSearch}`)
        setCryptoDat(request.data)
    }

    useEffect(()=>{
        callAPI()
    },[cryptoToSearch])
   
    return(<>
    {
     cryptoData ?(<>
     <h2>{cryptoData.name}</h2>
     <p>{cryptoData.description}</p>
     <img src={cryptoData.logo} alt={cryptoData.name}/>
     </>) :"loading"
    }
    </>)
>>>>>>> main
}
export default CryptoCard