import { useEffect, useState } from "react"
import User from "./User";
import './styles.css'

const GitHubFinder = () => {

    const [userName, setUserName]= useState('sangammukherjee')
    const [userData, setUserData]= useState(null);
    const [loading, setLoading]= useState(true)


    function handleSubmit(){
        fetchGitHubUserData()
    }

    async function fetchGitHubUserData(){
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/${userName}`)
        const data = await response.json();

        if(data){
            setUserData(data)
            setLoading(false)
        }
        setUserName('')
    }
    console.log(userData,loading)

    useEffect(()=>{
        fetchGitHubUserData();
    },[]);

    if(loading){
        return <div>Loading Data!</div>
    }
  return (
    <div className="gitHub-container">
        <div className="input-wrapper">
            <input onChange={(e)=>setUserName(e.target.value)}value={userName}type="text" name="search-by-username" placeholder="Search Github User" />
            <button onClick={handleSubmit}>Search</button>
        </div>
        {
            userData !==null? <User user={userData}/>:null
        }
      
    </div>
  )
}

export default GitHubFinder
