import Button from "./Button";
import TextInput from "./TextInput";
import React, { useState } from "react";
import { getItems } from "../httpreq";

interface Props {
    update: (items: string[]) => void;
}
function Login({ update }: Props) {
    const [items, setItems] = useState<string[]>([]);
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const handleInputChangeUser = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setUser(event.target.value);
    };
    const handleInputChangePass = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPass(event.target.value);
    };

    const handleClick = async () => {
        if (user != "" && pass != "") {
            let id = user;
            setItems(await getItems(id));
            update(items);
        } else {
            alert("muste enter valid username and password!");
        }
    };
    return (
        <>
            <div style={{ display: "inline-flex", alignItems: "center" }}>
                <label style={{ display: "flex", alignItems: "center" }}>
                    Username:
                    <TextInput text={user} onChange={handleInputChangeUser} />
                </label>
                <label style={{ display: "flex", alignItems: "center" }}>
                    Password:
                    <TextInput text={pass} onChange={handleInputChangePass} />
                </label>
            </div>
            <div style={{ padding: "5px" }}>
                <Button onClick={handleClick}> Submit </Button>
            </div>
        </>
    );
}

export default Login;
