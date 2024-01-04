import Footer from "../../Footer/";
import Header from "../../Header";
import { useContext, useEffect } from "react";
import createUserOrders from "../../../api/createOrderAPI";
import { AddContext } from "../../../App";

const backToHome = () => {
    window.location.href = "/"
}

const ReturnPage = () => {
    let shippingAddress;
    let paymentMethod;
    let shippingPrice;
    const storedData = localStorage.getItem('paymentData');
    if (storedData) {
        const { orderDetails } = JSON.parse(storedData);

        shippingAddress = orderDetails.invoiceAddress;
        if (orderDetails.invoicePaymentMethod === "vnpay" || orderDetails.invoicePaymentMethod === "normal") {
            paymentMethod = "Thanh toán qua VNPay";
        }
        else {
            paymentMethod = "Thanh toán khi nhận hàng"
        }
        shippingPrice = orderDetails.invoiceShippingFee;  
    }
    const {setCartItems} = useContext(AddContext);

    const createOrder = async () => {
        await createUserOrders(shippingAddress, paymentMethod, shippingPrice);
        setCartItems([]); // set cart to 0 items
    }
    
    useEffect(() => {
        createOrder();
    }, []);

    return (
        <>
            <Header></Header>
            <div className="flex items-center justify-center h-screen">
                <div className="text-center">
                    <h1 className="mt-40 text-green-500 text-4xl font-bold mb-4">Đặt hàng thành công!</h1>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={backToHome}>
                        Trở về trang chủ
                    </button>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default ReturnPage;