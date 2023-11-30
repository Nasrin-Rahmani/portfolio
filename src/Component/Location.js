// // import React, { useEffect, useState } from 'react';

 
// // const [location, setLocation] = useState(null);
// // useEffect(() => {
// //     if (navigator.geolocation) {
// //       navigator.geolocation.getCurrentPosition((position) => {
// //         setLocation({
// //           latitude: position.coords.latitude,
// //           longitude: position.coords.longitude
// //         });
// //       });
// //     } else {
// //       console.log('Geolocation is not supported by this browser.');
// //     }
// //   }, []);


export  function Location() {


return (
    <div className="location">
        <iframe style={{width : "1400px", height: "400px", }}  src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20herat+(Maps)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'>Maps Generator</a>
</div>




// //     <div>
// //       {location ? (
// //         <div>
// //           Latitude: {location.latitude}<br />
// //           Longitude: {location.longitude}
// //         </div>
// //       ) : (
// //         <div>Loading location...</div>
// //       )}
// //     </div>
  );
    
  };
