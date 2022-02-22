import React from "react";
import { Button } from "antd";

export default function PrimaryButton(
    props: { 
        text: string, 
        className: string 
    }
) {
  return (
    <div>
      <Button className={props.className}>{props.text}</Button>
    </div>
  );
}
