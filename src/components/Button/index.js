import React from "react"

import { Button } from "./styles"

function MyButton({ children, ...props }) {
    return <MyButton {...props}>{children}</MyButton>
}

export default Button