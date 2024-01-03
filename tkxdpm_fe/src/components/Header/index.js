/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext, useState, useEffect } from "react";
import { ItemContext } from "../../App";
import { Popover, Transition } from "@headlessui/react";
import logo from '../../images/aims_logo.png'
import search from '../../images/search.png'
import {
  BookmarkAltIcon,
  CursorClickIcon,
  MenuIcon,
  ViewGridIcon,
  XIcon,
  HomeIcon,
  InformationCircleIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import { AddContext } from "../../App";
import { userInfo } from "../../api/userApi";
import ErrorBoundary from "./Errorhandle";
import Cartlength from "./Cartlength";
import Error from "../../error";

const solutions = [
  {
    name: "Home",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Menu",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "/Menu",
    icon: CursorClickIcon,
  },
  {
    name: "Cart",
    description: "Connect with third-party tools that you're already using.",
    href: "/Cart",
    icon: BookmarkAltIcon,
  },
];
export default function Header() {
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useContext(AddContext);

  const [name, setName] = useState("");
  useEffect(() => {
    (async () => {
      const res = await userInfo();
      // console.log(res)
      if (res.fullname !== undefined) {
        setName(res.fullname);
      }
    })();
  }, []);

  // login./logout text
  var log1 = "Sign up";
  var log2 = "Sign in";
  var text1 = "Existing customer";
  if (localStorage.getItem("user") !== null) {
    log1 = "LogOut";
    text1 = "Wellcome";
    log2 = name;
  }

  return (
    <Popover className="relative bg-white z-10 ">
      <div className="mx-auto px-4 sm:px-6 fixed top-0 right-0 left-0 bg-white z-10">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <div className="cursor-pointer flex items-center">
                <img
                  className="h-8 ml-3 w-auto sm:h-10"
                  src= {logo}
                  alt=""
                />
                <span className="font-bold text-2xl px-2 text-blue-600">
                  AIMS
                </span>
              </div>
            </div>
            
            <div
              className="cursor-pointer text-lg font-medium text-gray-500 hover:text-gray-900"
              onClick={() => {
                navigate("/Search");
              }}  
            >
              <div className="cursor-pointer flex items-center">
                <img
                  className="h-8 ml-3 w-auto sm:h-10"
                  src= {search}
                  alt=""
                />
              </div>
            </div>

          </div>
          
          

          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <div
              className="cursor-pointer text-lg font-medium text-gray-500 hover:text-gray-900"
              onClick={() => {
                navigate("/");
              }}
            >
              Trang chủ
            </div>
            <div
              className="cursor-pointer text-lg font-medium text-gray-500 hover:text-gray-900"
              onClick={() => {
                navigate("/Menu");
              }}
            >
              Sản phẩm
            </div>
            <div
              className="cursor-pointer text-lg font-medium text-gray-500 hover:text-gray-900"
              onClick={() => {
                navigate("/ListOrdersUser");
              }}
            >
              Đơn hàng
            </div>
          </Popover.Group>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <p
              className="font-semibold mr-8 text-lg bg-gray-100 rounded-2xl hover:bg-blue-200  cursor-pointer"
              onClick={() => {
                navigate("/info");
              }}
            >
              {name ? `Hello ${name}` : ""}
            </p>

            <ErrorBoundary fallback={<Error haveResetButton={false} />}>
              <div
                className="cursor-pointer whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-3xl shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
                onClick={() => {
                  navigate("/Cart");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                <Cartlength />
              </div>
            </ErrorBoundary>
            <div
              className="cursor-pointer ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-3xl shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
              onClick={() => {
                if (localStorage.getItem("user") === null) {
                  navigate("/Login");
                } else {
                  localStorage.removeItem("user");
                  setCartItems([]);
                  alert("Bạn đã đăng xuất");
                  navigate("/");
                  setName("");
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        className="fixed top-0 right-0 left-0 bg-white z-10"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden "
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="flex">
                  <img
                    className="h-8 w-auto"
                    src="https://static.wixstatic.com/media/2cd43b_17040a042929442094fd1a2179d5bd29~mv2.png/v1/fill/w_320,h_320,q_90/2cd43b_17040a042929442094fd1a2179d5bd29~mv2.png"
                    alt="Luna"
                  />
                  <span className="font-bold text-2xl px-2 text-blue-600">
                    Luna Eatery
                  </span>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <div
                  onClick={() => {
                    if (localStorage.getItem("user") === null)
                      navigate("/Signup");
                    else {
                      localStorage.removeItem("user");
                      navigate("/");
                    }
                  }}
                  className="cursor-pointer w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700"
                >
                  {log1}
                </div>

                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  {text1}
                  <div
                    onClick={() => {
                      if (localStorage.getItem("user") === null) {
                        navigate("/Login");
                      } else {
                        navigate("/info");
                      }
                    }}
                    className="cursor-pointer text-indigo-600 hover:text-indigo-500"
                  >
                    {log2}
                  </div>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
