/* eslint-disable jsx-a11y/alt-text */
import style from "./login.module.css";
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
  return (
    <div className={style.login__input}>
      <div>
        <h1>Get info about your Token</h1>
        <Image src={img} className={style.login__input__img} />
      </div>
      <div className={style.login__input__blog}>
        <label htmlFor="text">Starting block</label>
        <br />
        <input className={style.Input__type__text} type="text" />
        <br />
        <label htmlFor="text">Token Address</label>
        <br />
        <input className={style.Input__type__text} type="text" />
        <br />
        <input type="checkbox" />
        <label htmlFor="checkbox">Check blacklisted wallets</label>
      </div>
    </div>
  );
};
