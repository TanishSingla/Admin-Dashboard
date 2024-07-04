import AdminSidebar from "../../components/AdminSidebar"
import { DoughnutChart, PieChart } from "../../components/Charts"
import { categories } from "../../assets/data.json"


const PieCharts = () => {
    return (
        <>
            <div className="adminContainer">
                <AdminSidebar />
                <main className="chart-container">

                    <h1>Pie & Doughnut Charts</h1>
                    <section>
                        <div>
                            <PieChart
                                labels={["Processing", "Shipped", "Deleivered"]}
                                data={[12, 8, 13]}
                                backgroundColor={[`hsl(110,80%,80%)`, `hsl(110,80%,50%)`, `hsl(110,40%,40%)`]}
                                offset={[0, 0, 30]}
                            />
                        </div>
                        <h2>Order Fulfillment Ratio</h2>
                    </section>

                    {/* ----------------------------------------  */}
                    <section>
                        <div>
                            <DoughnutChart
                                labels={
                                    categories.map((i) => i.heading)}
                                data={categories.map((i) => i.value)}
                                backgroundColor=
                                {categories.map(
                                    (i) => `hsl(${i.value * 4},${i.value}%,50%)`)
                                }
                                legends={false}
                                offset={[0, 0, 0, 80]}
                            />
                        </div>
                        <h2>Product Categories Ratio</h2>
                    </section>

                    {/* ---------------------------------------- */}
                    <section>
                        <div>
                            <DoughnutChart
                                labels={["In Stock", "Out of Stock"]}
                                data={[40, 20]}
                                backgroundColor={
                                    [
                                        "hsl(269,80%,40%)",
                                        "rgb(53,162,255)"
                                    ]}
                                legends={false}
                                offset={[0, 80]}
                                cutout={"70%"}
                            />
                        </div>
                        <h2>Stock Availability</h2>
                    </section>

                    {/* ---------------------------------------- */}
                    <section>
                        <div>
                            <DoughnutChart
                                labels={
                                    [
                                        "Marketing Cost",
                                        "Discount",
                                        "Burnt",
                                        "Production Cost",
                                        "Net Margin"
                                    ]
                                }
                                data={[32, 18, 5, 20, 25]}
                                backgroundColor={
                                    [
                                        "hsl(69,110%,20%)",
                                        "hsl(120,110%,40%)",
                                        "hsl(29,40%,30%)",
                                        "hsl(169,90%,10%)",
                                        "rgb(153,162,255)",
                                    ]}
                                legends={false}
                                offset={[20, 30, 20, 30, 80]}
                            />
                        </div>
                        <h2>Revenue Distribution</h2>
                    </section>

                    {/* ----------------------- */}
                    <section>
                        <div>
                            <PieChart
                                labels={
                                    [
                                        "Teenager(Below 20)",
                                        "Adults(20-40)",
                                        "Older(Above 40)"
                                    ]
                                }
                                data={[30, 250, 70]}
                                backgroundColor={
                                    [
                                        `hsl(12,80%,80%)`,
                                        `hsl(12,80%,50%)`,
                                        `hsl(12,40%,40%)`
                                    ]
                                }
                                offset={[0, 0, 30]}
                            />
                        </div>
                        <h2>Users Age Group</h2>
                    </section>


                    {/* ------------------- */}
                    <section>
                        <div>
                            <DoughnutChart
                                labels={["Admin", "Customers"]}
                                data={[40, 20]}
                                backgroundColor={
                                    [
                                        "hsl(269,80%,40%)",
                                        "rgb(53,162,255)"
                                    ]}
                                offset={[0, 80]}
                            />
                        </div>
                        <h2>Admin & Customers</h2>
                    </section>
                </main>
            </div>
        </>
    )
}

export default PieCharts
