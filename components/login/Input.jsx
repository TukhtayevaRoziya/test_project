import React, { useState } from "react";
import style from "./login.module.css";
import { message, Checkbox } from "antd";
import Image from "next/image";
import img from "../../assets/Login1.svg";
import Link  from 'next/link'
import Router from 'next/router'

export const Input = () => {
  const [message2, setMessage] = useState("");
  const [message3, setMessage2] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleChange2 = (event) => {
    setMessage2(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (message2 === "" ||  message3==="") {
      message.error("You must enter information in the input");
    } else {
      message.success("Successfully completed");
      Router.push('/home')
    }
  };
  return (
    <div className={style.login__input}>
      <div className={style.login__input__title}>
        <h1>Get info about your Token</h1>
        <Image
          src={img}
          alt="rasm bor edi!" />
      </div>
      <div className={style.login__input__blog}>
        <label className={style.login__input__blog__label} htmlFor="text">
          Starting block
        </label>
        <br />
        <input
          className={style.Input__type__text}
          type="text"
          id="message"
          name="message"
          onChange={handleChange}
          value={message2}
          autoComplete="off" />
        <br />
        <label className={style.login__input__blog__label} htmlFor="text">
          Token Address
        </label>
        <br />
        <input
         type="text"
         id="message2"
         name="message2"
         onChange={handleChange2}
         value={message3}
         autoComplete="off"
        className={style.Input__type__text} />
        <br />
        <div>
  <input type="checkbox" className={style.Input__type__checkbox}/>
        <label className={style.Input__type__checkbox__label}>Check blacklisted wallets</label>
        </div>  

        <button type="button" onClick={handleClick}>
          Get info
        </button>
      </div>
    </div>
  );
};
