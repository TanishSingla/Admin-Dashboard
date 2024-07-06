import { FaRegBell } from "react-icons/fa6"
import AdminSidebar from "../components/AdminSidebar"
import { BsSearch } from "react-icons/bs"
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import data from '../assets/data.json'
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import DashboardTable from "../components/DashboardTable";

const userImg = "";

const Dashboard = () => {
    return (
        <div className="adminContainer">
            {/* Sidebar */}
            <AdminSidebar />


            {/* main content*/}
            <main className="dashboard">

                {/* Input bar  */}
                <div className="input-bar">
                    <BsSearch />
                    <input type="text" placeholder="Search for data,users or docs" />
                    <FaRegBell />
                    <img src={userImg} />
                </div>

                {/* first section widget */}
                <section className="widgetContainer">
                    <WidgetItem
                        percent={40}
                        amount={true}
                        heading={'Revenue'}
                        value={-3400}
                        color="rgb(0,155,255)"
                    />
                    <WidgetItem
                        percent={70}
                        amount={false}
                        heading={'Users'}
                        value={34000}
                        color="rgb(148,158,202)"
                    />
                    <WidgetItem
                        percent={10}
                        amount={false}
                        heading={'Transactions'}
                        value={34000}
                        color="rgb(255,196,0)"
                    />
                    <WidgetItem
                        percent={57}
                        amount={false}
                        heading={'Products'}
                        value={4000}
                        color="rgb(25,116,102)"
                    />
                </section>

                {/* Second Section */}
                <section className="graphContainer">
                    <div className="revenue-chart">
                        <h2>Revenue & Transaction</h2>
                        {/* Graph Here */}
                        <BarChart
                            data_1={[300, 144, 433, 655, 237, 755, 190]}
                            data_2={[200, 44, 333, 355, 137, 355, 390]}
                            title_1="Revenue"
                            title_2="Transaction"
                            bgColor_1="rgb(0,115,255)"
                            bgColor_2="rgba(53,162,235,0.8)"
                        />
                    </div>
                    <div className="dashboard-categories">
                        <h2>
                            Inventory
                        </h2>
                        <div>
                            {/* <CategoryItem heading="Laptops" value={70} color="hsl(169,100%,50%" /> */}

                            {data.categories.map((i) => (<CategoryItem
                                heading={i.heading}
                                value={i.value}
                                color={`hsl(${i.value * 10},${i.value}%,50%`} />))}
                        </div>
                    </div>
                </section>

                {/* Gender Chart Section  */}
                <section className="transaction-container">
                    <div className="gender-chart">
                        <h2>Gender Ratio</h2>
                        {/* Add Gender chart here */}
                        <DoughnutChart
                            labels={["Female", "Male"]}
                            data={[12, 19]}
                            backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
                            cutout={90}
                        />
                        <p><BiMaleFemale /></p>
                    </div>

                    {/* Table */}
                    <DashboardTable data={data.transaction} />
                </section>
            </main>
        </div>
    )
}

interface widgetItemProps {
    heading: string;
    value: number;
    percent: number;
    color: string;
    amount?: boolean;
}


const WidgetItem = ({ heading, value, percent, color, amount }: widgetItemProps) => {

    return (
        <article className="widget-item">
            <div className="widgetInfo">
                <p>{heading}</p>
                <h4>{amount ? `$${value}` : value}</h4>
                {
                    percent > 0 ? (<span className="green">
                        <HiTrendingUp /> + {percent}%{" "}
                    </span>) : (<span className="red">
                        <HiTrendingDown /> {percent}%{" "}
                    </span>)
                }
            </div>

            <div className="widgetCircle" style={{
                background: `conic-gradient(${color} ${(Math.abs(percent) / 100) * 360}deg,
            rgb(255,255,255) 0)` }}>
                <span style={{
                    color,
                }}>{percent}%</span>
            </div>
        </article>
    )
};


interface CategoryItemProps {
    color: string;
    value: number;
    heading: string
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) =>
(
    <div className="category-item">
        <h5>{heading}</h5>

        <div>
            <div style={{
                backgroundColor: color,
                width: `${value}%`
            }}>
            </div>
        </div>
        <span>{value}%</span>
    </div>
)

export default Dashboard


