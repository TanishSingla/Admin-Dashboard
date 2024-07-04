import { ChangeEvent, useState } from "react"
import AdminSidebar from "../../components/AdminSidebar"

const newProduct = () => {

    const [name, setName] = useState<string>("");
    const [price, setPrices] = useState<number>(); 
    const [stock, setStock] = useState<number>();
    const [photo, setPhoto] = useState<string>("");

    const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const file: File | undefined = e.target.files?.[0];
        const reader: FileReader = new FileReader();

        if (file) {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                if (typeof reader.result === 'string') setPhoto(reader.result);
            }
        }
    };

    return (
        <>
            <div className="adminContainer">
                <AdminSidebar />

                <main className="product-management">
                    {/* form */}
                    <article>
                        <form>
                            <h2>Add New Product</h2>
                            <div>
                                <label>Name</label>
                                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div>
                                <label>Price</label>
                                <input
                                    type="number"
                                    placeholder="Enter Price"
                                    value={price}
                                    onChange={(e) => setPrices(Number(e.target.value))} required />
                            </div>
                            <div>
                                <label>Stock</label>
                                <input type="number"
                                    placeholder="Enter Stock"
                                    value={stock}
                                    onChange={(e) => setStock(Number(e.target.value))}
                                    required />
                            </div>
                            <div>
                                <label>Photos</label>
                                <input type="file"
                                    placeholder="Product Photos"
                                    onChange={changeImageHandler} required />
                            </div>
                            {
                                photo && <img src={photo} alt="New Product Image" />
                            }
                            <button type="submit">Create</button>
                        </form>
                    </article>
                </main>
            </div>
        </>
    )
}

export default newProduct
