import { useEffect, useState } from "react";
import { SpinnerLoading } from "../../Utils/SpinnerLoading";
import { Vehicle } from "./Vehicle";

var constants = require('../../../constants')

export function VehicleList(props) {
  const [vehicleList, setVehicleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let mainPath = "/vehicle/getAll"
    fetch(constants.postURL + mainPath,
    {
      method:"GET",
      headers:{"Content-Type":"application/json"},
    }
    )
  .then(res=>res.json())
  .then((result)=>{
    setIsLoading(true);
    result = JSON.stringify(result);
    result = JSON.parse(result);
    console.log(result);
    for(const key in result)
    {
      vehicleList.push(
      <Vehicle key = {result[key].vin}
      modelName = {result[key].modelName}
      modelYear = {result[key].modelYear}
      description = {result[key].description}
      mileage = {result[key].mileage}
      manufacturer = {result[key].manufacturer}
      chassisType = {result[key].chassisType}
      fuelType = {result[key].fuelType}/>);
    }
    setVehicleList(vehicleList);
    setIsLoading(false);
  }
)
}, [vehicleList]);

  if (isLoading) {
    return (
      <SpinnerLoading/>
    )
  }
    return (
    <>
    {vehicleList}
    </>
    );

}