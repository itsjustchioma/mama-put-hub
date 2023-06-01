// import React from 'react';
// import PropTypes from "prop-types";

const Logo = ({ isSignUp }) => {
  return (
    <div className="main-img-container bg-back hidden md:block">
      <div className="logo-div flex mx-20 my-4"></div>
      {isSignUp ? (
        <img src="\assets\Chef-amico.svg" alt="sign up image" />
      ) : (
        <img src="\assets\Chef-pana.svg" alt="log in image" />
      )}
    </div>
  );
};

export default Logo;
