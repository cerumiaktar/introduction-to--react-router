

const UserDetails = () => {
    const user = userLoaderData();
    const{name, website} = user;
    return (
        <div>
            <h2>Details About User: {name}</h2>
        </div>
    );
};

export default UserDetails;