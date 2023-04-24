import './Users.css'
import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Users = () => {
    const [gender, setGender] = useState("all")
    const dispatch = useDispatch();


const info=useSelector((storeData)=>{
    return storeData
})

    useEffect(() => {
     const user = async()=>{
        const responce= await fetch("https://randomuser.me/api/?results=50")
        const data = await responce.json()
        console.log("hello",data);
        dispatch({
            type: "users",
            payload: data.results
        })
     }
     user()
    }, [])
    
console.log(info.usersdata);
  return (


    <>
{console.log(info)}
    <div className='users'>
      <h1>Users Details</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quis vel molestiae minima, incidunt modi totam assumenda repellendus accusamus dolorum vero aspernatur ullam! Eius officiis maiores consectetur praesentium quae velit tempore ad quo. Reiciendis tempora deserunt voluptatum rem non numquam, nihil optio, temporibus, consectetur iusto deleniti alias odit assumenda qui.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quis vel molestiae minima, incidunt modi totam assumenda repellendus accusamus dolorum vero aspernatur ullam! Eius officiis maiores consectetur praesentium quae velit tempore ad quo. Reiciendis tempora deserunt voluptatum rem non numquam, nihil optio, temporibus, consectetur iusto deleniti alias odit assumenda qui.
      </p>

      <div className="gender">
        <input value="all" checked={gender === "all"} type="radio" onChange={(e) => {
          setGender(e.target.value)
        }} /><label>ALL</label>

        <input value="male" type="radio" checked={gender === "male"} onChange={(e) => {
          setGender(e.target.value)
        }} /><label>Male</label>

        <input value="female" type="radio" checked={gender === "female"} onChange={(e) => {
          setGender(e.target.value)
        }} /><label>Female</label>
      </div>

      <div className="topusersCardContainer">
        <div className="IMAGE">
          <p>IMAGE</p>
        </div>
        <div className="NAME">
          <p>NAME</p>
        </div>
        <div className="EMAIL">
          <p>EMAIL</p>
        </div>
        <div className="GENDER">
          <p>GENDER</p>
        </div>
      </div>

      {info.usersdata &&
        (gender !== "all"
          ? info.usersdata
            .filter((ele) => ele.gender === gender)
            .map((ele) => {
              return (
                <div className="usersCard">
                  <div className="IMAGE">
                    <img src={ele && ele.picture.large} alt="" />
                  </div>
                  <div className="NAME">
                    <p>{ele && ele.name.first}</p>
                  </div>
                  <div className="EMAIL">
                    <p>{ele && ele.email}</p>
                  </div>
                  <div className="GENDER">
                    <p>{ele && ele.gender}</p>
                  </div>
                </div>
              );
            })
          : info.usersdata.map((ele) => {
            return (
              <div className="usersCard">
                <div className="IMAGE">
                  <img src={ele && ele.picture.large} alt="" />
                </div>
                <div className="NAME">
                  <p>{ele && ele.name.first}</p>
                </div>
                <div className="EMAIL">
                  <p>{ele && ele.email}</p>
                </div>
                <div className="GENDER">
                  <p>{ele && ele.gender}</p>
                </div>
              </div>
            );
          }))}


    </div>
  </>
  )
}

export default Users
