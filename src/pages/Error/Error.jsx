import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log("HelloWorld", error);

  function handleBack() {
    navigate(-1);
  }

  const navigate = useNavigate();
  return (
    <div>
      Error <button onClick={handleBack}>Back</button>{" "}
    </div>
  );
}

export default Error;
