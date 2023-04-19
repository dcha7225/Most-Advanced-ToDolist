import React, { useState, useEffect } from "react";
import List from "./components/List";
import Button from "./components/Button";
import TextInput from "./components/TextInput";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { UpdateRow } from "./httpreq";
import "./App.css";
import Calendar from "./components/Calendar";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

function App() {
    const [items, setItems] = useState<string[]>([]);
    let [text, setText] = useState(""); //use let to allow us to assign text synchronosouly
    const [selected, setSelect] = useState(-1);
    const [page, setPage] = useState(0); //0=list, 1=login, 2=signup 3=calendar
    const [accountStatus, setAccountStatus] = useState(false);
    const [user, setUser] = useState("");
    const [selectedDate, setSelectedDate] = useState<any>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const handleClickAdd = () => {
        if (text != "") {
            if (selectedDate != null) {
                text += " " + selectedDate.toISOString().replace(/T.*$/, ""); //append date in yyyy-mm-dd format
                console.log(text);
            }
            setItems([...items, text]);
            setText("");
            setSelectedDate(null);
        }
    };
    const handleClickRemove = () => {
        setItems(items.filter((item, i) => i !== selected));
    };

    useEffect(() => {
        setSelect(-1);
    }, [items.length]);

    useEffect(() => {
        if (accountStatus) {
            UpdateRow(user, items);
        }
    }, [items]);

    return (
        <div className="container-lg my-4">
            {page == 0 && (
                <>
                    <h1>
                        My Todo List{" "}
                        {items.length > 0 ? (
                            <span className="itemLength"> {items.length} </span>
                        ) : null}
                    </h1>
                    <br />
                    <h5>Logged In: {accountStatus ? user : "None"}</h5>
                    <br />
                    <List
                        items={items}
                        heading="items"
                        onSelect={setSelect}
                        selected={selected}
                    />
                    <label style={{ display: "flex", alignItems: "center" }}>
                        Add new:
                        <TextInput text={text} onChange={handleInputChange} />
                    </label>
                    <br />
                    <div style={{ padding: "5px" }}>
                        <Button onClick={handleClickAdd}> Submit </Button>
                        <DatePicker
                            value={selectedDate}
                            onChange={setSelectedDate}
                            format="yyyy-MM-dd"
                        />
                        <Button onClick={handleClickRemove}>
                            Delete Selected
                        </Button>
                        <Button onClick={() => setPage(3)}>
                            Show Calender
                        </Button>
                        {!accountStatus && (
                            <Button onClick={() => setPage(1)}>Login</Button>
                        )}
                        {!accountStatus && (
                            <Button onClick={() => setPage(2)}>Signup</Button>
                        )}
                        {accountStatus && (
                            <Button
                                onClick={() => {
                                    setUser("");
                                    setItems([]);
                                    setAccountStatus(false);
                                }}
                            >
                                Logout
                            </Button>
                        )}
                    </div>
                </>
            )}
            {page == 1 && (
                <Login
                    update={setItems}
                    changePage={setPage}
                    accountStatus={setAccountStatus}
                    changeUser={setUser}
                />
            )}
            {page == 2 && (
                <Signup
                    update={setItems}
                    changePage={setPage}
                    accountStatus={setAccountStatus}
                    changeUser={setUser}
                />
            )}
            {page == 3 && (
                <>
                    <Calendar items={items} />
                    <Button onClick={() => setPage(0)}>Close Calendar</Button>
                </>
            )}
        </div>
    );
}

export default App;
