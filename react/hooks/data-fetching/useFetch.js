import { useState, useEffect } from "react";

// for fetching data on mount using fetch and graphql
export default function useFetch(url) {
    const [value, setValue] = useState([]);

    useEffect(function () {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: `
                    query {}
                `,
            }),
        })
            .then((res) => res.json())
            .then(({ data }) => {
                setValue(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return value;
}
