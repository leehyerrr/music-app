import type { InputHTMLAttributes } from "react";

const Test2 = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const { readOnly, ...rest } = props;
  return <input type="text" value={"1243"} readOnly={readOnly} {...rest} />;
};

export default Test2;
