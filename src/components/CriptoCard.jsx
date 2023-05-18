import axios from "axios";
import { useState, useEffect } from "react";

function CryptoCard() {
  const [cryptoData, setCryptoData] = useState({});
  const [cryptoToSearch, setCryptoToSearch] = useState("btc-bitcoin");

  async function callApi() {
    const request = await axios.get(
      `https://api.coinpaprika.com/v1/coins/${cryptoToSearch}`
    );
    setCryptoData(request.data);
  }

  useEffect(() => {
    callApi();
  }, [cryptoToSearch]);

  return (
    <>
      <h1>{cryptoData.name}</h1>
      <p>{cryptoData.description}</p>
      <img src={cryptoData.logo} alt="" />

    </>
  );
}
export default CryptoCard;
