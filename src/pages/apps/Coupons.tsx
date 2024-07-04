import { FormEvent, useEffect, useState } from "react"
import AdminSidebar from "../../components/AdminSidebar"


const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const allNumbers = "0123456789";
const allSymbols = "!@#$%^&*()_+";

const Coupons = () => {

    const [size, setSize] = useState<number>(8);
    const [prefix, setPrefix] = useState<string>("");
    const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
    const [includeCharacters, setIncludeCharacters] = useState<boolean>(false);
    const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const [coupon, setIsCoupon] = useState<string>("");

    const copyText = async (c: string) => {
        await window.navigator.clipboard.writeText(c);
        setIsCopied(true);
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!includeCharacters && !includeNumbers && !includeSymbols) {
            return alert("Please Select One At Least...");
        }
        let result: string = prefix || "";
        const loopLength: number = size - result.length;

        for (let i = 0; i < loopLength; i++) {
            let entireString: string = "";
            if (includeCharacters) entireString += allLetters;
            if (includeSymbols) entireString += allSymbols;
            if (includeNumbers) entireString += allNumbers;

            const randomNum: number = ~~(Math.random() * entireString.length);
            result += entireString[randomNum];
        }
        setIsCoupon(result);
    }

    useEffect(() => {
        setIsCopied(false);
    }, [coupon]);
    return (
        <div className="adminContainer">
            <AdminSidebar />
            <main className="dashboard-app-container">
                <h1 className="heading">Generate Coupons</h1>
                <section>
                    <form action="" className="coupon-form" onSubmit={submitHandler}>
                        <input type="text" placeholder="Text to include" value={prefix}
                            onChange={e => setPrefix(e.target.value)}
                            maxLength={size}
                        />
                        <input type="number" placeholder="Coupon Length" value={size}
                            onChange={e => setSize(Number(e.target.value))}
                            min={8}
                            max={25}
                        />
                        <fieldset>
                            <legend>Include</legend>
                            <input type="checkbox" checked={includeNumbers}
                                onChange={() => setIncludeNumbers((prev) => !prev)}
                                min={8}
                                max={25}
                            />
                            <span>Numbers</span>

                            <input type="checkbox" checked={includeCharacters}
                                onChange={() => setIncludeCharacters((prev) => !prev)}
                                min={8}
                                max={25}
                            />
                            <span>Characters</span>

                            <input type="checkbox" checked={includeSymbols}
                                onChange={() => setIncludeSymbols((prev) => !prev)}
                                min={8}
                                max={25}
                            />
                            <span>Symbols</span>
                        </fieldset>
                        <button type="submit">Generate</button>
                    </form>

                    {
                        coupon && <code className="code">
                            {coupon}
                            <span onClick={() => copyText(coupon)}>{isCopied ? "Copied" : "Copy"}</span>
                        </code>
                    }
                </section>
            </main>
        </div>
    )
}

export default Coupons
