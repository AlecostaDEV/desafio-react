import React from "react";

import { Input } from "./styles";

function Imputs({ children, ...props }) {
  return <Input {...props}>{children}</Input>;
}

export default Imputs;
