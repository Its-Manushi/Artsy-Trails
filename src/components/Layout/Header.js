import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import artImage from "../../assets/art2.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1
          style={{
            fontFamily: "gabriola",
            fontSize: "50px",
            wordSpacing: "5px",
            letterSpacing: "1px",
          }}
        >
          Artsy Trails
        </h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={artImage} alt="A table full of art supplies!" />
      </div>
    </Fragment>
  );
};

export default Header;
