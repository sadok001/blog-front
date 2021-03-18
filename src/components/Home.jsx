    import React from 'react'
import { TextField, Password,Form } from "@react-md/form";

export default function Home() {
    return (
        <Form>
            <TextField id="email" onChange={e => console.log(e.target.value)} />
            <Password
                id="example-password-field"
                label="Password"
                placeholder="Super secret password"
            />
        </Form>
    )
}
