import React, { useState, useEffect } from "react";
import List from "./components/List";
import Button from "./components/Button";
import TextInput from "./components/TextInput";
import Signup from "./components/Signup";
import Login, { userExport as user } from "./components/Login";
import { UpdateRow } from "./httpreq";
import "./App.css";

function App() {
    const [items, setItems] = useState<string[]>([]);
    const [text, setText] = useState("");
    const [selected, setSelect] = useState(-1);
    const [page, setPage] = useState(0); //0=list, 1=login, 2=signup
    const [accountStatus, setAccountStatus] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };
    const handleItemStateChange = (newItems: string[]) => {
        setItems(newItems);
    };

    const handlePageChange = (num: number) => {
        setPage(num);
    };

    const handleAccountStatus = (status: boolean) => {
        setAccountStatus(status);
    };

    const handleClickAdd = () => {
        if (text != "") {
            setItems([...items, text]);
            setText("");
        }
    };
    const handleClickRemove = () => {
        setItems(items.filter((item, i) => i !== selected));
    };

    const handleSelected = (index: number) => {
        setSelect(index);
    };

    useEffect(() => {
        setSelect(-1);
    }, [items.length]);

    useEffect(() => {
        console.log("Updated items:", items);
        if (accountStatus) {
            UpdateRow(user, items);
        }
    }, [items]);

    return (
        <div className="container-lg my-4">
            {page == 0 && (
                <>
                    <h1>My ToDos</h1>
                    <br />
                    <h5>Logged In: {accountStatus ? "true" : "false"}</h5>
                    <br />
                    <List
                        items={items}
                        heading="items"
                        onSelect={handleSelected}
                        selected={selected}
                    />
                    <label style={{ display: "flex", alignItems: "center" }}>
                        Add new:
                        <TextInput text={text} onChange={handleInputChange} />
                    </label>
                    <br />
                    <div style={{ padding: "5px" }}>
                        <Button onClick={handleClickAdd}> Submit </Button>
                        <Button onClick={handleClickRemove}>
                            Delete Selected
                        </Button>
                        <Button onClick={() => setPage(1)}>Login</Button>
                        <Button onClick={() => setPage(2)}>Signup</Button>
                    </div>
                </>
            )}
            {page == 1 && (
                <Login
                    update={handleItemStateChange}
                    changePage={handlePageChange}
                    accountStatus={setAccountStatus}
                />
            )}
            {page == 2 && (
                <Signup
                    update={handleItemStateChange}
                    changePage={handlePageChange}
                    accountStatus={setAccountStatus}
                />
            )}
        </div>
    );
}

export default App;
