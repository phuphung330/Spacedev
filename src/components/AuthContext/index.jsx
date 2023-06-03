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
import { useLocation, useNavigate } from "react-router-dom";
import { PATH } from "../../config/path";
import { useCallback } from "react";
import { useMemo } from "react";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const { state } = useLocation();
    // const [loading, setLoading] = useState(false);
    const [user, _setUser] = useState(getUser);

    useEffect(() => {
        setUser(user || null);
    }, user);
    const login = useCallback(async (data) => {
        try {
            const res = await authService.login(data);
            if (res.data) {
                setToken(res.data);
                getProfile();
            }
        } catch (err) {
            console.log(err);
            message.error(err?.response?.data?.message);
        } finally {
            // setLoading(false);
        }
    }, []);
    const getProfile = useCallback(async () => {
        const user = await userService.getInfo();
        _setUser(user.data);
        message.success("Đăng nhập thành công");
        if (state?.redirect) {
            navigate(state.redirect);
        } else {
            navigate(PATH.profile.index);
        }
    }, []);
    const logout = useCallback(() => {
        clearUser();
        clearToken();
        _setUser(null);
        message.success("Đăng xuất thành công");
    }, []);

    const value = useMemo(() => {
        return { user, login, logout, setUser: _setUser, getProfile };
    }, [user, login, logout, _setUser, getProfile]);
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
