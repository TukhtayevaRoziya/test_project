import React, { useState } from "react";
import style from "./login.module.css";
import { message, Checkbox } from "antd";
import Image from "next/image";
import img from "../../image/Login1.svg";
export const Login = () => {
  return (
    <div className={style.Wrapper__Login}>
      <div className={style.Wrapper}>
        <div className={style.Login__Block}>
          <h1>LAS analytics</h1>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries.
          </p>
        </div>
      </div>
      <Input />
    </div>
  );
};
export const Input = () => {
  const [message2, setMessage] = useState(null);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (message2 === null) {
      message.error("You must enter information in the input");
    } else {
      message.success("Successfully completed");
    }
  };
  return (
    <div className={style.login__input}>
      <div>
        <h1>Get info about your Token</h1>
        <Image
          src={img}
          className={style.login__input__img}
          alt="rasm bor edi!"
        />
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
          autoComplete="off"
        />
        <br />
        <label className={style.login__input__blog__label} htmlFor="text">
          Token Address
        </label>
        <br />
        <input className={style.Input__type__text} type="text" />
        <br />
        <Checkbox className={style.Input__type__checkbox}>
          Check blacklisted wallets{" "}
        </Checkbox>
        ;
        <button type="button" onClick={handleClick}>
          Get info
        </button>
      </div>
    </div>
  );
};
