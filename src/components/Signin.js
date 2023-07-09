import React, { useEffect, useState } from "react";
import Inputs from "./inputs";
import { validate } from "./validate";
import { ToastContainer } from "react-toastify";
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
      notify("error", "Sign Up is Failed");
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccept: true,
      });
    } else {
      notify("success", "Sign Up Successfuly 😁");
    }
  };
  return (
    <article className=" w-full fixed  flex justify-center items-center top-0 h-full bg-neutral-100 ">
      <form
        onSubmit={submitHandler}
        action="#"
        className="flex flex-col w-[400px] items-center    border border-green-300 pb-8  rounded bg-white ">
        <p className="text-3xl mt-4 mb-3 text-green-400">Sign Up</p>

        <Inputs
          onTouch={focusHandler}
          onChange={changeHandler}
          value={data.name}
          containerStyle="flex-col mb-2"
          type="text"
          name="name"
          label="name"
        />

        {errors.name && touched.name && (
          <span className="text-sm w-[76%] m-0 text-left mb-2 text-rose-500">
            {errors.name}
          </span>
        )}

        <Inputs
          onTouch={focusHandler}
          onChange={changeHandler}
          value={data.email}
          containerStyle="flex-col mb-2"
          type="email"
          name="email"
          label="email"
        />

        {errors.email && touched.email && (
          <span className="text-sm w-[76%] m-0 text-left mb-2 text-rose-500">
            {errors.email}
          </span>
        )}

        <Inputs
          onTouch={focusHandler}
          onChange={changeHandler}
          value={data.password}
          containerStyle="flex-col mb-2"
          type="password"
          name="password"
          label="password"
        />

        {errors.password && touched.password && (
          <span className="text-sm w-[76%] m-0 text-left mb-2 text-rose-500">
            {errors.password}
          </span>
        )}

        <Inputs
          onTouch={focusHandler}
          onChange={changeHandler}
          value={data.confirmPassword}
          containerStyle="flex-col mb-2"
          type="password"
          name="confirmPassword"
          label="confirm Password"
        />

        {errors.confirmPassword && touched.confirmPassword && (
          <span className="text-sm w-[76%] m-0 text-left mb-2 text-rose-500">
            {errors.confirmPassword}
          </span>
        )}

        <Inputs
          onTouch={focusHandler}
          onChange={changeHandler}
          value={data.isAccept}
          containerStyle="justify-between items-center my-6 w-[76%]"
          LableStyle="text-[16px] w-full "
          inputstyle="w-[40px] h-12 "
          type="checkbox"
          label="I accept terms of privacy policy"
          name="isAccept"
        />
        {errors.isAccept && touched.isAccept && (
          <span className=" w-[76%] text-left relative bottom-8 text-[12px] text-rose-500">
            {errors.isAccept}
          </span>
        )}
        <div className="flex justify-between items-center w-[76%] pt-4">
          <a href="/#">
            <button className=" text-blue-400 px-3 py-2 rounded text-xl transition-all duration-300 hover:rotate-6 hover:scale-110">
              Login
            </button>
          </a>
          <button
            type="submit"
            className="bg-green-400 text-white px-3 py-2 rounded text-xl transition-all duration-300 hover:-rotate-6 hover:scale-110">
            Sign Up
          </button>
        </div>
      </form>
      <ToastContainer />
    </article>
  );
};

export default Signin;
