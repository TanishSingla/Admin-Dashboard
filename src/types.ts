export type OrderItemType = {
    name: string;
    photo: string;
    price: number;
    quantity: number;
    _id: string;
}


export type OrderItem = {
    name: string;
    address: string;
    city: string;
    country: string;
    state: string;
    pincode: number;
    status: "Processing" | "Shipped" | "Delivered";
    subtotal: number;
    discount: number;
    shippingCharges: number;
    tax: number;
    total: number;
    orderItems: OrderItemType[];
    _id: string;
}