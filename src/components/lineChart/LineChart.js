import { Fragment, useEffect, useState } from "react";
import ReactFrappeChart from "react-frappe-charts";
import axios from "axios";

import { useFetch } from "../../hooks/useFetch";
import Loading from "../loading/Loading";
import dayjs from "dayjs";

dayjs().format()

export default function LineChart(props) {
  
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState([]);
  
  useEffect(() => {
    axios('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=14&interval=daily')
      .then(res => {
        setValues(res.data.prices.flat())
        setLoading(true)
      })
      .catch(err => console.log(err))
  }, [])

  if (!loading) {
    return <Loading/>;
  }

  const currency = values.filter(i => i%2);

  const dates = values.filter(i => !((i + 1) % 1)).map(item => {
    return new Date(item).toLocaleDateString()
  })
  
  console.log(dates)

  return (
    <Fragment>
      <ReactFrappeChart
        type="line"
        colors={[props.color]}
        axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
        lineOptions={{heatline: 1, spline: 1, regionFill: 1  }}
        height={300}
        data={{
          labels: dates,
          datasets: [{ values: currency }],
        }}
      />
    </Fragment>
  );
}