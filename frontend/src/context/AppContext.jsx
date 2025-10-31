import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [user, setUser] = useState(null)
    const [showLogin, setShowLogin] = useState(false)
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [credits, setCredits] = useState(false)
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate()
    const loadCredits = async () => {
        try {
            const { data } = await axios.get(backendUrl + "/api/user/credits", {
                headers: {token}
            });
            if (data.success) {
                setCredits(data.credits);
                setUser(data.user);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log("Error loading credits", error);
            toast.error("Failed to load credits. Please try again later.");
        }
    }
    const generateImage = async (prompt) => {
        try {
           const {data} = await axios.post(backendUrl + "/api/image/generate-image", {
                prompt
            }, {
                headers: {token}
            })
            if(data.success) {
                loadCredits();
                return data.imageUrl;
            } else {
                toast.error(data.message);
                loadCredits();
                if(data.creditBalance === 0) {
                    navigate('/buy');
                }
            }
        } catch (error) {
            toast.error("Failed to generate image. Please try again later.");
        }
    }

    const logout = () => {
        localStorage.removeItem("token");
        setToken('');
        setUser(null);
    }

    useEffect(() => {
        if (token) {
            loadCredits();
        }
    [token]})

    const value = {
        user, setUser, showLogin, setShowLogin, token, setToken, credits, setCredits, backendUrl, loadCredits, logout, generateImage
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;