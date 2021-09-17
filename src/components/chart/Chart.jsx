import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <div className="giongnhau">
        <div className="greenWrapper">
          <div className="greenLine"> </div>
          <p>Đi trên vỉa hè</p>
        </div>

        <div className="redWrapper">
          <div className="redLine"></div>
          <p>Vượt đèn đỏ</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" aspect={3 / 1} className="Respondsive">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            className="XAxis"
            dataKey="name"
            stroke="#b0e5ff"
            fontSize="12px"
          />
          <YAxis className="YAxis" stroke="#b0e5ff" fontSize="12px" />
          <Line
            type="monotone"
            dataKey="CrossingRedLine"
            stroke="#ea5455"
            activeDot={{ r: 4 }}
          />
          <Line type="monotone" dataKey="DriveOnPaveway" stroke="#28c76f" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
