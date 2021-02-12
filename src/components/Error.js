import React from 'react';

const Error = ({message}) => {
    return ( 
      //TODO: parameterize the alert style
      <p className="text-center alert alert-info">{message}</p>
     );
}
 
export default Error;