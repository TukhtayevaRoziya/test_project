import React, { useState } from "react";
import { message, Checkbox } from "antd";

import Image from "next/image";
import { useRouter } from 'next/router'

import duck from "../../assets/duck.gif";
import img from "../../assets/logintext.svg";

import style from "./login.module.css";

export const Input = () => {
  const [message2, setMessage] = useState("");
  const [message3, setMessage2] = useState("");
  const router = useRouter()

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleChange2 = (event) => {
    setMessage2(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    message.success("Successfully completed");
    router.push('/home')
  };
  return (
    <div className={style.login__input}>
      <div className={style.login__input__title}>
        <h1>Get info about your Token</h1>
        <div className={style.Wrapper__Img}>
            <Image className={style.block__duck__img}
          src={duck}
          alt="rasm bor edi!" />
        <Image
          src={img}
          alt="rasm bor edi!" />
        </div>
      
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
        <Checkbox/>
  <label className={style.Input__type__checkbox__label}>Check blacklisted wallets</label>
        </div>  

        <button type="button" onClick={handleClick}>
          Get info
        </button>
      </div>
    </div>
  );
};
