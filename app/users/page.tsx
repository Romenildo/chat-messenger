'use client'
import { signOut } from "next-auth/react"

const Users = () =>{
    return(
        <div>
            Principal
            <button onClick={()=> signOut()}>Logout</button>
            
        </div>

        
    )
}

export default Users;