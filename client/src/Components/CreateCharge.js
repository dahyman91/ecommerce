import StripeCheckout from "react-stripe-checkout";

import React from "react";

function CreateCharge({ amount, testButton }) {
  let onToken = (token) => {
    let body = {
      token: token.id,
      email: token.email,
      amount: amount,
    };
    fetch("/api/charges", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
        alert(`We are in business, ${token.email}`);
      });
    });
  };
  return (
    <>
      <StripeCheckout
        name="Card # 424242424..."
        description="Date needs to be in future, cvc can be anything."
        image="https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_1280.png"
        ComponentClass="div"
        token={onToken}
        panelLabel="Give Money"
        stripeKey="pk_test_51KO3LrKp7Mm0L1BeWPYYfAnCuY8Lj0UjEEcO9yW4JApMstsmnsCo6saVcPpoWvp0OvMzhzvHLY9pRpqGYgirIr1O00soISPK2e"
        amount={amount}
      >
        {/* <button data-locale="auto" className="">
    Use your own child component, which gets wrapped in whatever
    component you pass into as "ComponentClass" (defaults to span)
  </button> */}

        {testButton}
      </StripeCheckout>
    </>
  );
}

export default CreateCharge;
