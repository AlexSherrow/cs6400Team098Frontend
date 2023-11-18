
var constants = require('../../constants')

export const HomePage = () => {
  return (
    <>
    <a href= {constants.hostURL + '/User'}>User</a>
    <br></br>
    <a href= {constants.hostURL + '/Vehicle'}>Vehicle</a>

    </>
  );
};