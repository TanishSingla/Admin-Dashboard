import AdminSidebar from "../../components/AdminSidebar"
import { BarChart } from "../../components/Charts"

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

const BarCharts = () => {
    return (
        <>
            <div className="adminContainer">
                <AdminSidebar />
                <main className="chart-container">

                    <h1>Bar Charts</h1>
                    <section>
                        <BarChart
                            data_1={[300, 400, 100, 500, 120, 231, 231]}
                            data_2={[122, 311, 551, 212, 331, 412, 441, 421]}
                            title_1="Products"
                            title_2="Users"
                            bgColor_1={`hsl(260,50%,30%)`}
                            bgColor_2={`hsl(360,90%,90%)`}
                        />
                        <h2>TOP SELLING PRODUCTS & TOP CUSTOMERS</h2>
                    </section>

                    <section>
                        <BarChart
                            data_1={[130, 210, 100, 200, 120, 231, 231, 123, 312, 98, 133, 343]}
                            data_2={[]}
                            title_1="Products"
                            title_2=""
                            bgColor_1={`hsl(198,100%,50%)`}
                            bgColor_2={`hsl(360,100%,100%)`}
                            horizontal={true}
                            labels={months}
                        />
                        <h2>ORDERS THROUGHOUT THE YEAR</h2>
                    </section>
                </main>
            </div>
        </>
    )
}

export default BarCharts
