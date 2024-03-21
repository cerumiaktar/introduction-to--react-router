import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'


const Users = () => {

    const users = useLoaderData();

    // state--Data
    // state--loader
    // useeffect
    // fetch--> state set --> set state
    return (
        <div>
            <h4>Our Users: {users.length}</h4>
            <p>This is awesome react users</p>
            <div className="users">
                {
                    users.map(user => <User key={user.id} user={user} ></User>)
                }
            </div>
        </div>
    );
};

export default Users;