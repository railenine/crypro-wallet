import ReactFrappeChart from "react-frappe-charts";

export default function FrappeChartDon(props) {
  return (
    <ReactFrappeChart
      type="donut"
      colors={["#546e7a", "#3949AB"]}
      axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
      height={300}
      data={{
        labels: ["BTC" ,"ETH"],
        datasets: [{ values: [props.btc, props.eth] }],
      }}
    />
  );
}