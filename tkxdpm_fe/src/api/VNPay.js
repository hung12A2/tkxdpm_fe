import axios from "../setup/CustomAxios"

const Pay = async (amountMoney) => {
  try {
    const response = await axios.post('user/order/pay',{
      amount_money: amountMoney,
    });
    if (response.data) {
      window.location.href = response.data;
    } 
  } catch (error) {
    return error.response.data;
  }
};

export default Pay;