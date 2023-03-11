import React from "react";
import { CardFooter, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CardFoter = ({ Title, handleSubmit }) => {
  return (
    <>
      <CardFooter className="pt-0">
        <Button
          variant="gradient"
          type="submit"
          onSubmit={handleSubmit}
          color="orange"
          fullWidth
        >
          {Title}
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          {Title === "Login"
            ? "Don't You have an Account"
            : "Already Have an Account"}
          <Link to={Title === "Login" ? "/signup" : "/"}>
            <Typography
              as="span"
              variant="small"
              color="orange"
              className="ml-1 font-bold"
            >
              {Title === "Login" ? "signUp" : "SignIn"}
            </Typography>
          </Link>
        </Typography>
      </CardFooter>
    </>
  );
};

export default CardFoter;
