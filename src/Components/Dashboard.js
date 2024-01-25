import React, { useState } from "react"
import axios from "axios"


const Dashboard =({token})=>{

    const [message, setMessage] = useState("");

 
   async function getJoke(){
         try{
            const response = await axios.get("https://instagram-express-app.vercel.app/api/auth/zuku",
            {
                headers:{
                    authorization : `Bearer ${token}`
                }
            })
            // console.log("dashboard")

            setMessage(response.data.data.message)
         }
         catch(err){

            // console.log("fail ho gya",err)
//


         }

    }

    return (
        <div>
            <h1>Dashboard</h1>
            {
                message && <h2>{message}</h2>
            }
            <button onClick={getJoke}>Get Job</button>
        </div>
    )
}

export default Dashboard;



// logout api