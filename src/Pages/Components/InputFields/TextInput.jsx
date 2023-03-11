import React from "react";
import { Input } from "@material-tailwind/react";
const TextInput = (props) => {
  return (
    <>
      <div>
        <Input
          {...props}
          color="orange"
          size="lg"
          outline={true}
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
          error={props.error}
          success={props.success}
        />
      </div>
    </>
  );
};

export default TextInput;
