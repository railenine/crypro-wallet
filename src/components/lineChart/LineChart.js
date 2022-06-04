import { Fragment, useEffect, useState } from "react";
import ReactFrappeChart from "react-frappe-charts";
import axios from "axios";

import { useFetch } from "../../hooks/useFetch";
import Loading from "../loading/Loading";

const LineChart = (props) => {
  
  const [{loading, dates, responseCurrency}, doFetch] = useFetch(props.currency, props.vsCurrency);

  useEffect(() => {
    doFetch()
  }, [])

  if (loading) {
    return <Loading />
  }

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
          datasets: [{ values: responseCurrency }],
        }}
      />
    </Fragment>
  );
}

export default LineChart;