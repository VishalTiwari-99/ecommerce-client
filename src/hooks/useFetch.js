import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";


const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true);
            await makeRequest.get(url)
            .then((response) => {
                setData(response.data.data);
            }).catch((err)=>{
                console.log(err);
                setError(true);
            })
            setLoading(false);
        };
        fetchData();
    }, [url]);

    return {data, loading, error};
};

export default useFetch;

