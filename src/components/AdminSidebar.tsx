import { Link, useLocation } from "react-router-dom"
import { RiDashboardFill, RiShoppingBag3Fill, RiCoupon3Fill } from "react-icons/ri"
import { AiFillFileText } from "react-icons/ai"
import { IoIosPeople } from "react-icons/io"
import { FaChartBar, FaChartPie, FaChartLine } from "react-icons/fa6"
import { useEffect, useState } from "react"
import { HiMenuAlt4 } from "react-icons/hi"

const AdminSidebar = () => {

    const location = useLocation();
    const [showModal, setShowModal] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1100);

    const ActiveLink = (currUrl: string): string => {
        if (location.pathname.includes(`/admin/${currUrl}`)) {
            return "rgba(0,115,255,0.1)";
        }
        return "white"
    }

    const resizeHandler = () => {
        setIsMobile(window.innerWidth < 1100);
    };

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        return () => {
            window.removeEventListener("resize", resizeHandler);
        }
    }, [])
    return (
        <>

            {isMobile && (
                <button id="hamburger" onClick={() => setShowModal(true)}>
                    <HiMenuAlt4 />
                </button >
            )}
            <aside style={
                isMobile ?
                    {
                        width: "13rem",
                        height: "100vh",
                        position: "fixed",
                        top: "0",
                        left: showModal ? "0rem" : "-20rem",
                        transition: "all 0.9s"
                    }
                    :
                    {}
            }>
                <h2>Logo.</h2>
                <div>
                    <h5>
                        Dashboard
                    </h5>

                    <ul>
                        <li style={{ backgroundColor: ActiveLink('dashboard') }}>
                            <Link to={'/admin/dashboard'}>
                                <RiDashboardFill />
                                Dashboard
                            </Link>
                        </li>
                        <li style={{ backgroundColor: ActiveLink('product') }}>
                            <Link to={'/admin/product'}>
                                <RiShoppingBag3Fill />
                                Products
                            </Link>
                        </li>
                        <li style={{ backgroundColor: ActiveLink('customer') }}>
                            <Link to={'/admin/customer'}>
                                <IoIosPeople />
                                Customer
                            </Link>
                        </li>
                        <li style={{ backgroundColor: ActiveLink('transaction') }}>
                            <Link to={'/admin/transaction'}>
                                <AiFillFileText />
                                Transaction
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Charts */}
                <div>
                    <h5>
                        Charts
                    </h5>

                    <ul>
                        <li style={{ backgroundColor: ActiveLink('/chart/bar') }}>
                            <Link to={'/admin/chart/bar'}>
                                <FaChartBar />
                                Bar-Chart
                            </Link>
                        </li>
                        <li style={{ backgroundColor: ActiveLink('/chart/pie') }}>
                            <Link to={'/admin/chart/pie'}>
                                < FaChartPie />
                                Pie-Chart
                            </Link>
                        </li>
                        <li style={{ backgroundColor: ActiveLink('/chart/line') }}>
                            <Link to={'/admin/chart/line'}>
                                <FaChartLine />
                                Line-Chart
                            </Link>
                        </li>
                    </ul>
                </div>


                {/* Coupon */}
                <div>
                    <h5>Coupon</h5>
                    <ul>
                        <li style={{ backgroundColor: ActiveLink('coupon') }}>
                            <Link to={'/admin/apps/coupon'}>
                                <RiCoupon3Fill />
                                Generate Coupon
                            </Link>
                        </li>
                    </ul>
                    {
                        isMobile && (<button id="close-sidebar" onClick={() => setShowModal(false)}>Close</button>)
                    }
                </div>
            </aside >
        </>
    )
}


export default AdminSidebar
