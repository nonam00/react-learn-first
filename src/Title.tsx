import React from "react";

type TitleProps = {
  children: React.ReactNode,
  color: string
}
const Title: React.FC<TitleProps> = ({
  children,
  color = 'black'
}) => {

  return <h1 style={{color: color}}>{children}</h1>;
}

export default Title;