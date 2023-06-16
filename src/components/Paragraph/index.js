import React from "react";

import { P } from "./styles";

function Paragraph({ children, ...props }) {
  return <P {...props}>{children}</P>;
}

export default Paragraph;
