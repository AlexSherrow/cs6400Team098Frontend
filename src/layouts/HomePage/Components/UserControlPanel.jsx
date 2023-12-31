import { useState } from "react";
import UserPost from "../../../UserController";
import { SpinnerLoading } from "../../Utils/SpinnerLoading";
import { App, UserList } from "./UserList";
import { UsersColumnBar } from "./UsersColumnBar";
import { useLocation } from 'react-router-dom'

export function UserControlPanel() {
  const location = useLocation().pathname;
  const [refresh, setRefresh] = useState(false);
  if(refresh == false)
  {
    return (
      <>
      <div>
      <UsersColumnBar/>
      <br></br>
      <UserList path = {location}/>
      <br></br>
      <UserPost setRefresh = {setRefresh}/>
      </div>
      </>
    );
  }
  else
  {
    return (
      <>
        <SpinnerLoading/>
        <UserPost setRefresh = {setRefresh}/>
      </>
    );
  }
  
}
