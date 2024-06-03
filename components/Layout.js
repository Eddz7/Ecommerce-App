import { useContext, useEffect, useState} from "react";
import Footer from "./Footer";
import { ProductsContext } from "./ProductsContext";

export default function Layout({ children }) {
    const { setSelectedProducts } = useContext(ProductsContext);
    const [success, setSuccess] = useState(false);
    useEffect(() => {
        if (window.location.href.includes('success')) {
            setSelectedProducts([]);
            setSuccess(true);
        }
    }, []);
    return (
        <div>
            <div className="p-5 bg-gray-200">
                {success && (
                    <div className="mb-5 bg-emerald-400 text-white text-xl p-5 rounded-xl text-center">
                        Thanks for your order!
                    </div>
                )}
                {children}
            </div>
            <Footer />
        </div>
    )
}