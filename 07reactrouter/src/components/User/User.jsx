import React from "react";
import { useParams } from "react-router";

function User() { 
    const {userid} = useParams()
    return (
        <div className=" bg-pink-400 text-white text-3xl p-6 "> Hello! {userid} </div>
    )
}

export default User 