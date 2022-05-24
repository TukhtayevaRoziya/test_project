import { Input } from "./Input";

import style from "./login.module.css";
import {Navbar} from '../navbar/Navbar'

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
      <div className={style.Footer__Stayle}>
      <div className={'margin'}>

      <Navbar display='none' smNavbarDisplay={'smNavbarDisplay'}/>
      </div>
      </div>
    </div>
  );
};

