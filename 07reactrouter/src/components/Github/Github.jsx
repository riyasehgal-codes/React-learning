import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github() { 

    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() =>  {
    //     fetch('https://api.github.com/users/riyasehgal-codes')
    //     .then( response => response.json())
    //     .then( data => { console.log(data); setData(data)
    //         })
    // }, []
    // )   

    return(
        <div className=" text-center m-4 bg-pink-400 text-white p-4 text-2xl ">
            GitHub Followers: {data.followers}
            <img className="py-10" src={data.avatar_url} alt="git Pic" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/riyasehgal-codes')
    return response.json() 
}