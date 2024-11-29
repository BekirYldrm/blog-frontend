import { decodeJwt } from "jose";

const getFieldToken = () => {
    const token = localStorage.getItem("authToken");
    if (token) {
        try {
            const decoded = decodeJwt(token);
            return decoded.sub;

        } catch (error) {
            console.error("Token decode hatası:", error);
            return null;
        }
    }
    return null;
};

export default getFieldToken;