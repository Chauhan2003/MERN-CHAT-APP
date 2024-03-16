import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

axios.defaults.withCredentials = true;

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const checkCookie = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/user/checkcookie`);
                setUser(res.data.user);
            } catch (err) {
                console.log(err.message);
            }
        };
        checkCookie();
    }, [])

    return (
        <ChatContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </ChatContext.Provider>
    )
};

export const ChatState = () => {
    return useContext(ChatContext);
}

export default ChatProvider;