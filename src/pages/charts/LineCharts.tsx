import AdminSidebar from "../../components/AdminSidebar"
import { LineChart } from "../../components/Charts";
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const LineCharts = () => {
    return (
        <div className="adminContainer">
            <AdminSidebar />
            <main className="chart-container">
                <h1>Line Charts</h1>
                <section>
                    <LineChart
                        labels={months}
                        label="Users"
                        borderColor="rgb(53,162,255)"
                        backgroundColor="rgba(53,162,255,0.5)"
                        data={[200, 444, 123, 154, 133, 542, 111, 222, 333, 21, 292, 119]}
                    />
                    <h2>Active Users</h2>
                </section>

                {/* -------------------------- */}
                <section>
                    <LineChart
                        labels={months}
                        label="Total Products"
                        backgroundColor="hsla(129,80%,40%,0.4)"
                        borderColor="hsl(129,80%,40%)"
                        data={[100, 141, 423, 154, 133, 232, 111, 222, 232, 221, 492, 119]}
                    />
                    <h2>Total Products (SKU)</h2>
                </section>

                {/* -------------------------- */}
                <section>
                    <LineChart
                        labels={months}
                        label="Revenue"
                        backgroundColor="hsla(269,80%,40%,0.4)"
                        borderColor="hsl(269,80%,40%)"
                        data={[2100, 2141, 3423, 2154, 1133, 2232, 2111, 1222, 1232, 4221, 6492, 3119]}
                    />
                    <h2>Total Revenue</h2>
                </section>

                {/* -------------------------- */}
                <section>
                    <LineChart
                        labels={months}
                        label="Discount"
                        backgroundColor="hsla(29,80%,40%,0.4)"
                        borderColor="hsl(29,80%,40%)"
                        data={[20, 14, 33, 15, 13, 23, 11, 22, 23, 41, 62, 39]}
                    />
                    <h2>Discout Alloted</h2>
                </section>
            </main>
        </div>
    )
}

export default LineCharts
