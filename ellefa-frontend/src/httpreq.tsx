import axios from "axios";

export async function getItems(id: string) {
    try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);
        return response.data.posts[0].items;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
