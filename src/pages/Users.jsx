import { use } from "react";
import UserCard from "../components/UserCard";

const user=[
    {id:1,name:"Aziza", email:"aziza@gmail.com"},
    {id:2,name:"Zilola", email:"zilola@gmail.com"},
    {id:1,name:"Iroda", email:"iroda@gmail.com"},
];

function Users(){
    return(
        <div>
            <h1>Foydalanuvchilar</h1>
            {users.map((u)=>(
                <UserCard key={u.id} name={u.name} email={u.email}/>
            ))}
        </div>
    );
}
export default Users;