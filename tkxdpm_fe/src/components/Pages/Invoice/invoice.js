// src/components/Pages/Invoice/Invoice.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../Header';
import Footer from '../../Footer';
import { AddContext } from '../../../App';
import { useContext } from 'react';
import Pay from "../../../api/VNPay";
import "./invoice.css"


const Invoice = () => {
  const location = useLocation();

  // Lấy thông tin đơn hàng từ location.state
  const { orderDetails } = location.state || {};
  //const {invoiceCartItems} = orderDetails.invoiceCartItems;
  const { cartItems } = useContext(AddContext);

  // Kiểm tra xem có thông tin đơn hàng hay không
  if (!orderDetails) {
    return <div>Không có thông tin đơn hàng.</div>;
  }

  const handlePayment = async () => {
    const totalMoney = orderDetails.invoiceProductPrice + orderDetails.invoiceProductPrice / 10 + orderDetails.invoiceShippingFee;
    await Pay(totalMoney);
  }

  return (
    <>
    <Header/>
  
    <div className='pt-32'>
      <h1 className='text-5xl font-bold m-auto ml-20 text-primary'>Invoice</h1>

      <div className='customer-info basis-1/3 flex flex-col items-left md:mr-16 px-2 flex ml-20'>
        <h2 className='text-2xl font-bold'>Thông tin khách hàng</h2>
        <p className='ml-20'>Họ và tên: {orderDetails.invoiceName}</p>
        <p className='ml-20'>Thành phố: {orderDetails.invoiceCity}</p>
        <p className='ml-20'>Địa chỉ cụ thể: {orderDetails.invoiceAddress}</p>
        <p className='ml-20'>Ghi chú: {orderDetails.invoiceNote}</p>
      </div>

      <div className='product-info ml-20'>
        <h2 className='text-2xl font-bold m-auto'>Thông tin sản phẩm</h2>
        {cartItems.map((cart, index) => (
          <div key={index} className='md:w-5/6 items-center justify-center flex flex-col md:flex-row flex-wrap 
          bg-gray-100 rounded-2xl pl-2 border-green-400 border-2 shadow-lg ml-20'>
            <img src={cart.image} alt="" className="w-28 h-28 p-2 "></img>
            <p>
              {cart.name} - Số lượng: {cart.quantity} - Thành tiền: ${cart.price * cart.quantity}
            </p>
          </div>
        ))}
      </div>

      <div className='payment-info ml-20'>
        <h2 className='text-2xl font-bold m-auto'>Thông tin thanh toán</h2>
        <p className="font-semibold text-xl mx-4 mt-4 ml-20">Tổng giá sản phẩm: ${orderDetails.invoiceProductPrice}</p>
        <p className="font-semibold text-xl mx-4 mt-4 ml-20">VAT (10%): ${orderDetails.invoiceProductPrice / 10}</p>   
        <p className="font-semibold text-xl mx-4 mt-4 ml-20">Phí vận chuyển: ${orderDetails.invoiceShippingFee}</p>
        <p className="font-semibold text-xl mx-4 mt-4 ml-20">Tổng thanh toán: ${orderDetails.invoiceProductPrice + orderDetails.invoiceProductPrice / 10 + orderDetails.invoiceShippingFee}</p>
      </div>

      <button className="mt-8 ml-96 whitespace-nowrap w-32 inline-flex items-center justify-center 
                  px-4 py-2 border border-transparent rounded-3xl shadow-sm text-base font-medium text-white bg-blue-400 hover:bg-blue-600"
              onClick={handlePayment}
            >
              {" "}
              Thanh toán
      </button>
    </div>
    
    <Footer />
    </>
  );
};

export default Invoice;
