import axios from "axios";

export async function GetRow(id: string) {
    try {
        const response = await axios.get(`http://localhost:3000/get/${id}`);
        return JSON.parse(JSON.stringify(response.data.get))[0];
        //parse through json object
    } catch (error) {
        alert(error);
        throw error;
    }
}

interface CompleteData {
    username: string;
    password: string;
    items: string[];
}

export async function CreateRow(
    username: string,
    password: string,
    items: string[]
) {
    const data: CompleteData = { username, password, items };
    try {
        const response = await axios.post(
            `http://localhost:3000/posts/`,
            data,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        alert(error);
        throw error;
    }
}

interface PartialData {
    username: string;
    items: string[];
}
export async function UpdateRow(username: string, items: string[]) {
    const data: PartialData = { username, items };
    try {
        const response = await axios.put(`http://localhost:3000/posts/`, data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        alert(error);
        throw error;
    }
}
