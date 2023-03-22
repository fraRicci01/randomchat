import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { useNavigate } from "react-router";

const Protected = ({ children }) => {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate

    if (!currentUser) {
        navigate("/login");
    }

    return children
}

export default Protected;