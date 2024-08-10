import React from 'react'
import propType from "prop-types"

const User = [

  {
  name: "Samantha",
  profile : "images/sam.jpeg",
  city: "Hyderabad",
  descryption : "Actor",
  online : true,
  skills: ["actor","singer","politician","actor","singer","politician"],

},

{
  name: "Samantha",
  profile : "images/sam.jpeg",
  city: "Hyderabad",
  descryption : "Actor",
  online : true,
  skills: ["actor","singer","politician","actor","singer","politician"],

},


{
  name: "vijay",
  profile : "images/vijaypic.jpeg",
  city: "chennai",
  descryption : "Actor",
  online : false,
  skills: ["actor","singer","politician","actor","singer","politician"],

}
]
function UserId(props) {
  return(
      <div>
      <div className='student'>
        <span className={props.online ?  'pro online':"pro offline"}>{props.online ? "ONLINE ": "OFFLINE"}</span>
        <img src={props.profile} alt="user" className='img' />
        <h2>{props.name}</h2>
        <h2>{props.city}</h2>
        <h3>{props.descryption}</h3>
        <button className='btn1'>Message</button>
        <button className='btn2'> Following</button>

        
    

        <div className='skills'>
          <p>skills</p>
          <ul>
            {
              props.skills.map ((skill,index) => (
                <li key={index}>{skill}</li>
              ))  
            }
          </ul>
        </div>

        </div>

    </div>
  )
}
// export default UserId
export const UserInfo = () => {
  return (
  <>
  {User.map((user,index) => (
    
    < UserId  key={index}
            name = {user.name}
            profile = {user.profile}
            city = {user.city}
            descryption = {user.descryption}
            online = {user.online}
            skills = {user.skills}


    
    />

  ))}

  
 

  </>
  )
}

{/* <UserId  name = "Ashik" profile = "images/img3.jpg"
           city = "tirunelveli"  descryption =" Front-end Developer"
           skills = {["ui/ux", "Front-end development ", "HTML","CSS","JavaScript","React Js"]}
           online ={false}  */}

           User.PropType = {
            name:propType.string.isRequired,
            profile:propType.string.isRequired,
            city:propType.string.isRequired,
            descryption:propType.string.isRequired,
            online:propType.bool.isRequired,
           }