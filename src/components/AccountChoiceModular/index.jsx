import s from "./index.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import RadioButton from "../RadioButton";
import { AiOutlineClose } from "react-icons/ai";

const AccountChoiceModular = () => {
  const [accountChoice, setAccountChoice] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setAccountChoice(value);
  };

  return (
    <>
      <div className={s.AccountChoiceModularWrapper}>
        <h2>Join our community of professionals</h2>
        <p>Get started and connect with different professionals</p>
        <Link to="/" title="close">
          {" "}
          <AiOutlineClose />{" "}
        </Link>
        <div className={s.AccountChoiceModular}>
          <RadioButton
            label={"I'm a tech talent"}
            value={"techtalent"}
            id={"techtalent"}
            name={"account_choice"}
            onchange={handleChange}
          />
          <RadioButton
            label={"I'm an employer"}
            value={"employer"}
            id={"employer"}
            name={"account_choice"}
            onchange={handleChange}
          />
          <RadioButton
            label={"I'm an agent"}
            value={"agent"}
            id={"agent"}
            name={"account_choice"}
            onchange={handleChange}
          />
        </div>
        <Link
          className={s.ContinueButton}
          style={{
            backgroundColor: accountChoice
              ? "#2596be"
              : "rgb(194, 192, 192)",
            pointerEvents: accountChoice ? "all" : "none",
          }}
          aria-disabled={accountChoice ? false : true}
          to={`./${accountChoice}`}
        >
          Continue
        </Link>
        <p>
          Already have an account? <Link to={"/login"}> Log in </Link>
        </p>
      </div>
    </>
  );
};

export default AccountChoiceModular;
