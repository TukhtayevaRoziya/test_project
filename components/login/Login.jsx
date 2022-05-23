import React from "react";
import style from "./login.module.css";
import { Input } from "./Input";
import { Head } from 'next/head';
export const Login = () => {
  return (
    <div className={style.Wrapper__Login}>
          <Head>
        <title>LAS ANALYTICS</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=VT323&display=swap"
          rel="stylesheet"
        />
      </Head>
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

