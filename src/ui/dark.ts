import { CSSProperties } from "react";

const purpleColor = "#6C63FF";

const chart: CSSProperties = {
  backgroundColor: "white",
  color: "black",
  width: "20%",
};
const chartHeader: CSSProperties = {
  fontWeight: 600,
};
const moreDetails: CSSProperties = {
  fontWeight: "normal",
  color: purpleColor,
};
const variantsOfCharts: CSSProperties = {
  color: "#080723",
};
const moreDetailsButton: CSSProperties = {
  color: "white",
  backgroundColor: purpleColor,
  borderRadius: "5%",
  borderColor: purpleColor,
  width: "150px",
  height: "50px",
};
const statistics: CSSProperties = {
  color: purpleColor,
};
const footer: CSSProperties = {
  width: "100%",
  display: "inline-flex",
  background: "#2F2E41",
};
/*
const dark = {
  chart,
  chartHeader,
  moreDetails,
  moreDetailsButton,
  statistics,
  variantsOfCharts,
  footer,
}; */
const dark = {
  top: { statistics, moreDetailsButton },
  charts: { chart, chartHeader, moreDetails },
  footer: { footer },
};
export default dark;
