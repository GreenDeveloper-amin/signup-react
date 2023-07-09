import React, { useEffect, useState } from "react";
import Inputs from "./inputs";
import { validate } from "./validate";
import { ToastContainer, Zoom } from "react-toastify";
import { notify } from "./toast";
import "react-toastify/dist/ReactToastify.css";
const Signin = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccept: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data));
  }, [data]);

  const focusHandler = (event) => {
    setTimeout(() => {
      setTouched({ ...touched, [event.target.name]: true });
    }, 200);
  };

  const changeHandler = (event) => {
    if (event.target.name === "isAccept") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length) {
      notify("error", "ثبت نام با خطا مواجه شد 😔");
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccept: true,
      });
    } else {
      if (data.name === "behnam") {
        notify("success", "داش بهنام ثبت نام کردی 😂");
      } else if (data.name === "fati") {
        notify("success", "عشقم ثبت نام کردی 🥹😂");
      } else {
        notify("success", " با موفقیت ثبت نام کردید 🙂");
      }
    }
  };
  return (
    <article className=" w-full fixed  flex justify-center items-center top-0 h-full bg-neutral-100 ">
      <form
        onSubmit={submitHandler}
        action="#"
        className="flex flex-col w-[300px] items-center    border border-green-300 pb-8  rounded bg-white ">
        <p className="text-3xl mt-4 mb-3 text-green-400 transition-all duration-300">
          ثبت نام
        </p>

        <Inputs
          LableStyle=" text-slate-500"
          onTouch={focusHandler}
          onChange={changeHandler}
          value={data.name}
          containerStyle="flex-col mb-2  transition-all duration-300"
          type="text"
          name="name"
          label="نام کاربری"
        />

        {errors.name && touched.name && (
          <div className="text-left w-[76%] animate-pulse">
            <span className="text-[12px] transition-all duration-300 m-0 text-left px-2 py-1 bg-red-200 mb-2 rounded   text-rose-500 shadow-lg ">
              {errors.name}
            </span>
          </div>
        )}

        <Inputs
          LableStyle=" text-slate-500"
          onTouch={focusHandler}
          onChange={changeHandler}
          value={data.email}
          containerStyle="flex-col mb-2  transition-all duration-300"
          type="email"
          name="email"
          label="ایمیل"
        />

        {errors.email && touched.email && (
          <div className="text-left w-[76%] animate-pulse">
            <span className="text-[12px] transition-all duration-300 m-0 text-left px-2 py-1 bg-red-200 mb-2 rounded   text-rose-500 shadow-lg ">
              {errors.email}
            </span>
          </div>
        )}

        <Inputs
          LableStyle=" text-slate-500"
          onTouch={focusHandler}
          onChange={changeHandler}
          value={data.password}
          containerStyle="flex-col mb-2  transition-all duration-300"
          type="password"
          name="password"
          label="رمز"
        />

        {errors.password && touched.password && (
          <div className="text-left w-[76%] animate-pulse">
            <span className="text-[12px] transition-all duration-300 m-0 text-left px-2 py-1 bg-red-200 mb-2 rounded   text-rose-500 shadow-lg ">
              {errors.password}
            </span>
          </div>
        )}

        <Inputs
          LableStyle=" text-slate-500"
          onTouch={focusHandler}
          onChange={changeHandler}
          value={data.confirmPassword}
          containerStyle="flex-col mb-2  transition-all duration-300"
          type="password"
          name="confirmPassword"
          label="تایید رمز"
        />

        {errors.confirmPassword && touched.confirmPassword && (
          <div className="text-left w-[76%] animate-pulse">
            <span className="text-[12px] transition-all duration-300 m-0 text-left px-2 py-1 bg-red-200 mb-2 rounded   text-rose-500 shadow-lg ">
              {errors.confirmPassword}
            </span>
          </div>
        )}

        <Inputs
          onTouch={focusHandler}
          onChange={changeHandler}
          value={data.isAccept}
          containerStyle="justify-between items-center my-6 w-[76%] flex-row-reverse"
          LableStyle=" text-blue-400 text-[17px] w-full "
          inputstyle="w-[31px] h-[30px] checked:bg-green-300 border-2 border-blue-400 transition-all duration-300 
          checked:rounded-[80%] checked:border-2 checked:border-blue-500 hover:animate-spin"
          type="checkbox"
          label="من با تمام قوانین موافقم"
          name="isAccept"
        />
        {errors.isAccept && touched.isAccept && (
          <div className="text-right w-[76%] animate-pulse">
            <span className="text-[12px] transition-all duration-300 text-left px-2 py-1 bg-red-200 mb-2 rounded relative bottom-5  text-rose-500 shadow-lg ">
              {errors.isAccept}
            </span>
          </div>
        )}
        <div className="flex justify-between items-center w-[76%] pt-4">
          <a href="/#">
            <div className="border border-blue-300 hover:pl-8 text-blue-400 px-3 py-2 rounded text-xl transition-all duration-300 ">
              ورود
            </div>
          </a>
          <button
            type="submit"
            className="bg-green-400 hover:pr-8 text-white px-3 py-2 rounded text-xl transition-all duration-300">
            ثبت نام
          </button>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        limit
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        transition={Zoom}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </article>
  );
};

export default Signin;
