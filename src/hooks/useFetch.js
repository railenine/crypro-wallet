import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (currency, vsCurrency) => {
    
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    
    const doFetch = () => {
        setLoading(true)
    }

    useEffect(() => {
        
        if (!loading) {
            return
        }
        
        axios(`https://api.coingecko.com/api/v3/coins/${currency}/market_chart?vs_currency=${vsCurrency}&days=14&interval=daily`)
            .then(res => {
                const {prices} = res.data
                
                const dates = [];
                const responseValues = [];
                prices.forEach(value => {
                    const formatedDate = new Date(value[0]).toLocaleDateString()
                    dates.push(formatedDate)
                    responseValues.push(value[1])
                })
                setData({dates, responseValues})
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [loading])

    return [{loading, data}, doFetch]
}