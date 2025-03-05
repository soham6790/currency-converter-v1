import { useEffect, useState } from "react";

/**
 * Custom Hook for fetching the exchange rates on change of currency
 * @param {string} currency 
 * @returns {Object} data containing exchange rates
 */
function useCurrencyInfo(curency) {

    const [data, setData] = useState({});

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curency}.json`)
        .then((res) => res.json())
        .then((res) => setData({date: res.date, exchange: res[curency]}))
        .catch(error => console.error('Error fetching currency data:', error));;
        
    },[curency]);

    return data;

}

export default useCurrencyInfo;