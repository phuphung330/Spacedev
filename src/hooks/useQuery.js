import { useEffect, useRef, useState } from "react";
import { sessionStorageCache, localStorageCache } from "@/utils/cache";

const _cache = {
    sessionStorage: sessionStorageCache,
    localStorage: localStorageCache,
};

export const useQuery = (options = {}) => {
    const {
        queryFn,
        queryKey,
        cacheTime,
        enabled = true,
        storeDriver = "localStorage",
        dependencyList = [],
    } = options;

    const cache = _cache[storeDriver];

    const fetchRef = useRef();

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [status, setStatus] = useState("idle");

    useEffect(() => {
        if (typeof fetchRef.current === "boolean") {
            fetchRef.current = true;
        }
    }, dependencyList);

    useEffect(() => {
        if (enabled) {
            fetchData();
        }
    }, [queryKey, enabled].concat(...dependencyList));

    const fetchData = async () => {
        try {
            setLoading(true);
            setStatus("pending");
            let res;
            if (queryKey && !fetchRef.current) {
                res = cache.get(queryKey);
            }
            if (!res) {
                res = await queryFn();
            }
            setStatus("success");
            setLoading(false);
            setData(res);

            if (queryKey) {
                let expired = cacheTime;
                if (cacheTime) {
                    expired += Date.now();
                }
                cache.set(queryKey, res, expired);
            }
            fetchRef.current = false;
        } catch (err) {
            setError(err);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };
    return {
        data,
        error,
        status,
        loading,
    };
};
