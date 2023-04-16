import React, { useState } from "react";
import { Avatar, Grid, Paper, Typography, TextField } from "@material-ui/core";
import LockOutLinedIcon from "@material-ui/icons/LockOutLined";
import Button from "./Button";
import { getRow, createRow } from "../httpreq";

interface Props {
    update: (items: string[]) => void;
    changePage: (num: number) => void;
    accountStatus: (status: boolean) => void;
}

function Signup({ update, changePage, accountStatus }: Props) {
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

    const handleSubmit = async () => {
        if (user != "" && pass != "") {
            let id = user;
            let row = await getRow(id);
            if (row != null) {
                alert("Account already exists! Try logging in");
            } else {
                console.log(createRow(user, pass, items));
                alert("account created");
                update([]); //reset list
                accountStatus(true);
                changePage(0);
            }
        } else {
            alert("must enter valid username and password!");
        }
    };
    const paperStyle = {
        padding: 20,
        height: "70vh",
        width: 280,
        margin: "20px auto",
    };
    const avatarStyle = { backgroundColor: "blue" };
    return (
        <Grid container justifyContent="center">
            <Paper elevation={10} style={paperStyle}>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item>
                        <Avatar style={avatarStyle}>
                            <LockOutLinedIcon />
                        </Avatar>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5">Sign Up</Typography>
                    </Grid>
                </Grid>
                <TextField
                    label="Username"
                    placeholder="Enter Username"
                    fullWidth
                    required
                    onChange={handleInputChangeUser}
                />
                <TextField
                    label="Password"
                    placeholder="Enter Password"
                    type="password"
                    fullWidth
                    required
                    onChange={handleInputChangePass}
                />
                <div style={{ padding: "5px" }}>
                    <Button onClick={handleSubmit}> Submit </Button>
                    <Button onClick={() => changePage(1)}>Login?</Button>
                    <Button onClick={() => changePage(0)}>Quit</Button>
                </div>
            </Paper>
        </Grid>
    );
}

export default Signup;
