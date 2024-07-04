import { useState } from "react"
import AdminSidebar from "../../components/AdminSidebar"
import { OrderItem, OrderItemType } from "../../types"
import { Link } from "react-router-dom";

const img =
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";
const orderItems: OrderItemType[] = [
    {
        name: "Puma Shoes",
        photo: img,
        price: 1110,
        quantity: 10,
        _id: "asdasd12"
    },
];

const TransactionManagement = () => {

    const [order, setOrder] = useState<OrderItem>({
        name: "DarkLord",
        address: "Hogwarts",
        city: "Boom",
        state: "ABc",
        country: "India",
        pincode: 132001,
        status: "Processing",
        subtotal: 1212,
        discount: 1200,
        shippingCharges: 12,
        tax: 200,
        total: 1211312,
        orderItems: orderItems,
        _id: "aasdjnas"
    });

    const UpdateHandler = () => {
        setOrder(prev => ({
            ...prev,
            status: prev.status === "Processing" ? "Shipped" : "Delivered"
        }))
    }

    const { name, address, city, country, state, pincode, subtotal, shippingCharges, tax, discount, total, status } = order;
    return (
        <div className="adminContainer">
            <AdminSidebar />
            <main className="product-management">
                <section style={{
                    padding: "2rem",
                }}>
                    <h2>Order Items</h2>
                    {
                        order.orderItems.map((i) => (
                            <ProductCard
                                name={i.name}
                                photo={i.photo}
                                price={i.price}
                                quantity={i.quantity}
                                _id={i._id}

                            />
                        ))
                    }
                </section>

                <article className="shipping-info-card">
                    <h1>Order Info</h1>
                    <h5>User Info</h5>
                    <p>Name:{name}</p>
                    <p>Address:{`${address},${city},${state},${country},${pincode}`}</p>
                    <h5>Amount Info</h5>
                    <p>Shipping Charges :{shippingCharges}</p>
                    <p>Subtotal :{subtotal}</p>
                    <p>Discount :{discount}</p>
                    <p>Tax :{tax}</p>
                    <p>Total :{total}</p>

                    <h5>Status</h5>
                    <p>Status:{" "}
                        <span className={status === "Delivered" ? "purple" : status === "Shipped" ? "green" : "red"}>
                            {status}
                        </span>
                    </p>
                    <button onClick={UpdateHandler}>Process Order</button>
                </article>

            </main>
        </div>
    )
}

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => (
    <div className="transaction-product-card">

        <img src={photo} alt={name} />
        <Link to={`/product/${_id}`}>{name}</Link>
        <span>${price} X {quantity} = ${price * quantity}</span>
    </div >
);

export default TransactionManagement
