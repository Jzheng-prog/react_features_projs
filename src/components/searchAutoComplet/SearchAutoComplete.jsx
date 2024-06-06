import { useEffect, useState } from "react"
import Suggestions from "./Suggestions";

const SearchAutoComplete = () => {

    const [loading, setLoading]=useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const [searchParam, setSearchParam] = useState('')
    const [showDrop, setShowDown] = useState(false)
    const [filteredUsers, setFilteredUsers] = useState([])


    async function fetchUsers(){

        try{
            setLoading(true)
            const response = await fetch('https://dummyjson.com/users')
            const data = await response.json()

            if(data && data.users && data.users.length){
                setUsers(data.users.map(user => user.firstName))
                setLoading(false)
                setError(null)
            }
        }catch(e){
            setLoading(false)
            console.log(e)
            setError(e)
        }
    }
    useEffect(()=>{
        fetchUsers()
    },[]);

    function handleChange(event){
         const query = event.target.value.toLowerCase()
         setSearchParam(query)
         if(query.length >1){
            const filterData = users && users.length? 
            users.filter((user)=> user.toLowerCase().indexOf(query) > -1)
            : [];
            setFilteredUsers(filterData)
            setShowDown(true)
         }else{
            setShowDown(false)
         }
    }

    function handleClick(event){
        setShowDown(false);
        setSearchParam(event.target.innerText)
    }

    console.log(users, filteredUsers, showDrop)
  return (
    <div className="search-container">
        {
            loading? <h1>Loading Data...</h1> :
            <div>
                <h1>Filter Search</h1>
                <input onChange={handleChange} value={searchParam}name="search-user" placeholder="Search User" />

            </div>
        }
        {   
            showDrop && <Suggestions handleClick={handleClick}data ={filteredUsers}/>
        }
    </div>
  )
}

export default SearchAutoComplete
