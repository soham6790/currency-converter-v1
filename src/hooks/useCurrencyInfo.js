import { useEffect, useState } from "react";

/**
 * 
 * @param {*} curency 
 */
function useCurrencyInfo(curency) {

    const [data, setData] = useState({});

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curency}.json`)
        .then((res)=> res.json())
        .then((res) => setData({date: res.date, exchange: res[curency]}))
        console.log(data);
        return data;
    },[])

}

export default useCurrencyInfo;