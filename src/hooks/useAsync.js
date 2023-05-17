import { useEffect, useState } from "react";

export const useAsync = (promise) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState();
    // console.log(error);
    // console.log(error?.response?.data?.message);

    const excute = async (...data) => {
        try {
            setLoading(true);
            setStatus("pending");
            const res = await promise(...data);
            setData(res);
            setStatus("success");
            return res;
        } catch (err) {
            setError(err);
            setStatus("error");
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return {
        data,
        loading,
        excute,
        error,
        status,
    };
};
