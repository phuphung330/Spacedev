import { useEffect } from "react";
import { useContext, useState } from "react";
import { createContext } from "react";
import { authService } from "../../services/auth";
import { message } from "antd";
import {
    setToken,
    getUser,
    setUser,
    getToken,
    clearToken,
    clearUser,
} from "../../utils/token";
import { userService } from "../../services/user";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../config/path";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    // const [loading, setLoading] = useState(false);
    const [user, _setUser] = useState(getUser);

    const login = async (data) => {
        try {
            // setLoading(true);
            const res = await authService.login(data);
            if (res.data) {
                setToken(res.data);
                const user = await userService.getInfo();
                setUser(user.data);
                _setUser(user.data);
                message.success("Đăng nhập thành công");
                navigate(PATH.profile.index);
            }
        } catch (err) {
            console.log(err);
            message.error(err?.response?.data?.message);
        } finally {
            // setLoading(false);
        }
    };

    const logout = () => {
        clearUser();
        clearToken();
        _setUser(null);
        message.success("Đăng xuất thành công");
    };
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
