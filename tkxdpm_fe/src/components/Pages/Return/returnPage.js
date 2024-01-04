import Footer from "../../Footer/";
import Header from "../../Header";

const backToHome = () =>{
    window.location.href = "/"
}

const ReturnPage = () =>{
    return(
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