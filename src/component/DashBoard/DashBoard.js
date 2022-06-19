import MyAreaChart from "../ReCharts/MyAreaChart";
import MyBarChart from "../ReCharts/MyBarChart";

const DashBoard = () => {
    return (
        <div className="container">
        <MyAreaChart></MyAreaChart>
        <MyBarChart></MyBarChart>
        </div>
    );
};

export default DashBoard;