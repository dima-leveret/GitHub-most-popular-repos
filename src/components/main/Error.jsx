import React from "react";

const Error = (props) => {
  return (
    <div style={{textAlign: "center"}} >
        <button onClick={() => props.history.push('/')} > Back to main page </button>
        ERROR MESSAGE
    </div>
  );
};

export default Error;
