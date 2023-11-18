var constants = require('./constants')

function VehicleUpload(props) {
    const formHandler = (e) => {
        e.preventDefault();
        vehicleUpload(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value, e.target[4].value, e.target[5].value, e.target[6].value, e.target[7].value);
        props.setRefresh(true);
        };

    const vehicleUpload = (modelName, modelYear, description, vin, mileage, manufacturer, chassisType, fuelType) => {
              const vehicle={modelName, modelYear, description, vin, mileage, manufacturer, chassisType, fuelType};
              fetch(constants.postURL + "/vehicle/save",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(vehicle)
            }).then(()=>{
              console.log("New vehicle added");
              props.setRefresh(false);
            })
      };

      return(
        <div className="App">
            <form onSubmit={formHandler}>
                <input type="text" name="modelName" defaultValue='Model Name'/>
                <input type="text" name="modelYear" defaultValue='Model year'/>
                <input type="text" name="description" defaultValue='Description'/>
                <input type="text" name="vin" defaultValue='VIN'/>
                <input type="text" name="mileage" defaultValue='mileage'/>
                <input type="text" name="manufacturer" defaultValue='manufacturer'/>
                <input type="text" name="chassisType" defaultValue='Chassis Type'/>
                <input type="text" name="fuelType" defaultValue='Fuel Type'/>
                <button type="submit">Upload</button>
            </form>
            <hr/>
        </div>
      );

}
export default VehicleUpload;