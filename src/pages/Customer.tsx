import { ReactElement, useState, useCallback } from "react";
import AdminSidebar from "../components/AdminSidebar"
import { Column } from "react-table";
import Table from "../components/Table";
import { FaTrash } from "react-icons/fa6";

interface DataType {
    Avatar: ReactElement;
    name: string;
    email: string;
    gender: string;
    role: string;
    action: ReactElement
}

const columns: Column<DataType>[] = [
    {
        Header: "Avatar",
        accessor: 'Avatar'
    },
    {
        Header: "Name",
        accessor: "name"
    },
    {
        Header: "Email",
        accessor: "email"
    },
    {
        Header: "Gender",
        accessor: "gender"
    },
    {
        Header: "Role",
        accessor: "role"
    },
    {
        Header: "Action",
        accessor: "action"
    },
];

const img = "https://randomuser.me/api/portraits/women/54.jpg";
const img2 = "https://randomuser.me/api/portraits/women/50.jpg";

const arr: DataType[] = [
    {
        Avatar: (
            <img
                style={{
                    borderRadius: "50%",
                }}
                src={img}
                alt="Shoes"
            />
        ),
        name: "Emily Palmer",
        email: "emily.palmer@example.com",
        gender: "female",
        role: "user",
        action: (
            <button>
                <FaTrash />
            </button>
        ),
    },

    {
        Avatar: (
            <img
                style={{
                    borderRadius: "50%",
                }}
                src={img2}
                alt="Shoes"
            />
        ),
        name: "May Scoot",
        email: "aunt.may@example.com",
        gender: "female",
        role: "user",
        action: (
            <button>
                <FaTrash />
            </button>
        ),
    },
];


const Customer = () => {
    const [data] = useState<DataType[]>(arr);

    const customerTable = useCallback(
        Table<DataType>(
            columns,
            data,
            "dashboard-product-box",
            "Customers",
            true
        ), []
    );


    return (
        <div className="adminContainer">
            {/* Sidebar */}
            <AdminSidebar />


            {/* main */}
            <main>
                {customerTable()}
            </main>
        </div>
    )
}

export default Customer
