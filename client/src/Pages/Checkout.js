import React from "react";
import { useHistory } from "react-router-dom";

function Checkout() {
  let history = useHistory();
  setTimeout(() => history.push("/products"), 3000);
  return (
    <div>
      This is not a real store, be careful, the internet is a dangerous place.
      Redirecting to store.
    </div>
  );
}

export default Checkout;
