export default function FetchUser({user}) {
    const {name, email, phone} = user;
    return (
        <div >
            <h3>Name : {name} </h3>
            <p>Gmail : {email} </p>
            <p>Mobile : {phone} </p>
        </div>
    )
}