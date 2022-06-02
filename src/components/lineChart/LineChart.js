import ReactFrappeChart from "react-frappe-charts";

export default function LineChart(props) {
  return (
    <ReactFrappeChart
      type="line"
      colors={[props.color]}
      axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
      lineOptions={{heatline: 1, spline: 1, regionFill: 1  }}
      height={300}
      data={{
        labels: [1,2,3,4,5,6,7,8,9,10, 11, 12, 13,14],
        datasets: [{ values: props.val }],
      }}
    />
  );
}