
const Suggestions = ({data, handleClick}) => {
    console.log(data, 'inside suggestions')
  return (
        <ul>
            {
                data && data.length?
                    data.map((item,index)=>
                        <li onClick = {handleClick}key={index}>{item}</li>
                    )
                    :null
            }

        </ul>
  )
}

export default Suggestions
