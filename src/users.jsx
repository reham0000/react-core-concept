import { useEffect, useState } from "react"
import Friend from "./friend";

export default function Users() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    const userStyle = {
        border: '2px solid tomato',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }

    return(
        <div style = {userStyle}>
            <h3>Users: {users.length}</h3>
            {
                users.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}