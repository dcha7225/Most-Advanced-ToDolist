import axios from "axios";

export async function getRow(id: string) {
    try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);
        return JSON.parse(
            JSON.stringify(JSON.parse(JSON.stringify(response.data)).post)
        )[0];
        //parse through json object
    } catch (error) {
        alert(error);
        throw error;
    }
}

interface Data {
    username: string;
    password: string;
    items: string[];
}

export async function createRow(
    username: string,
    password: string,
    items: string[]
) {
    const data: Data = { username, password, items };
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
