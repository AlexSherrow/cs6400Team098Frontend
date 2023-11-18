import { useState } from "react";
import UserPost from "../../../UserController";
import { SpinnerLoading } from "../../Utils/SpinnerLoading";
import { VehicleColumnBar } from "./VehicleColumnBar";
import { useLocation } from 'react-router-dom'
import { VehicleList } from "./VehicleList";

export function VehicleControlPanel() {
  const location = useLocation().pathname;
  const [refresh, setRefresh] = useState(false);
  if(refresh == false)
  {
    return (
      <>
      <VehicleColumnBar/>
      <br></br>
      <VehicleList path = {location}/>
      <br></br>
      <UserPost setRefresh = {setRefresh}/>
      </>
    );
  }
  else
  {
    return (
      <>
        <SpinnerLoading/>
        <VehicleList setRefresh = {setRefresh}/>
      </>
    );
  }
  
}
