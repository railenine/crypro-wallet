import { useEffect, useState, useCallback } from "react";
import axios from "axios";

import Loading from "../components/loading/Loading";

export const useFetch = (currency, vsCurrency) => {
    
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState([]);
    
    const doFetch = () => {
        setLoading(true)
    }

    useEffect(() => {
        
        if (!loading) {
            return
        }
        
        axios(`https://api.coingecko.com/api/v3/coins/${currency}/market_chart?vs_currency=${vsCurrency}&days=14&interval=daily`)
            .then(res => {
                setValues(res.data.prices.flat())
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [loading])

    const responseCurrency = values.filter(i => i%2);

    const dates = values.filter(i => !((i + 1) % 1)).map(item => {
      return new Date(item).toLocaleDateString()
    })

    console.log(values)

    return [{loading, dates, responseCurrency}, doFetch]
}