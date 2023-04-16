import React, { useState, useEffect } from "react";
import List from "./components/List";
import Button from "./components/Button";
import TextInput from "./components/TextInput";
import Login from "./components/Login";
import "./App.css";

function App() {
    const [items, setItems] = useState<string[]>([]);
    const [text, setText] = useState("");
    const [selected, setSelect] = useState(-1);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };
    const handleItemStateChange = (newItems: string[]) => {
        setItems(newItems);
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

    return (
        <div className="container-lg my-4">
            <h1>My ToDos</h1>
            <br />
            <Login update={handleItemStateChange} />
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
                <Button onClick={handleClickRemove}> Delete Selected </Button>
            </div>
        </div>
    );
}

export default App;
