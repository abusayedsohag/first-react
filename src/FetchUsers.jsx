import { useEffect, useState } from "react"
import FetchUser from "./FetchUser";

export default function FetchUsers () {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(info => setData(info))
    },[])

    return (
        <>
            <button>Fetch Data Button</button>
            <h1>{data.length}</h1>
            {
                data.map(user => <FetchUser user={user}></FetchUser>)
            }
        </>
    );
}