import { useEffect, useState } from "react";

function useCurrencyinfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
            .catch((err) => console.error("Fetch error:", err));
    }, [currency]);

    // Log data only when it updates
    useEffect(() => {
        console.log("Updated data: ", data);
    }, [data]);

    return data;
}

export default useCurrencyinfo;
