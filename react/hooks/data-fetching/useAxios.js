import axios from "./axios";
import { useState, useEffect } from "react";

// for fetching data on mount
export const useAxios = (url) => {
    const [value, setValue] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(url);
            setValue(data);
        })();
    }, []);

    return value;
};
