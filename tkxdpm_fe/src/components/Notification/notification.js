import React from 'react';
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'


export default function Notification() {
    
    
    return (  
        <>
        <div className="">
            <div className="m-auto">
                <div className="bg-green-50 rounded-lg border-gray-300 border p-3 shadow-lg">
                <div className="flex flex-row">
                    <div className="px-2">
                    <svg width="24" height="24" viewBox="0 0 1792 1792" fill="#44C997" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1299 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zm141 83q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/>
                        </svg>
                    </div>
                    <div className="ml-2 mr-6">
                    <span className="font-semibold">Successfully Saved!</span>
                    <span className="block text-gray-500">Anyone with a link can now view this file</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    );
}
export function handleNotify(type, title, message){
    Store.addNotification({
        title: title,
        message: message,
        type: type,
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 1000,
          onScreen: true
        }
      });
}

