// // create your App component here

// import React,{ useState, useEffect} from "react";

// const [details, setDetails] = useState("");



// function App () {




//     useEffect (() => {
//         fetch("https://dog.ceo/api/breeds/image/random")
//         .then((response) => response.json)
//         .then((data) => {
//             setDetails(data.image)
//         });
//     });

//     return(
//         <div>
//             <p>Loading...</p>
//             <img src={response} alt="A Random Dog">
            
//             </img>


//         </div>
//     );
// }



import React, { useState, useEffect } from "react";

function App() {
  const [dogPic, setDogPic] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogPic(data.message);
      });
  }, []);
  // use an empty dependencies array, so we only run the fetch request ONCE

  if (!dogPic) return <p>Loading...</p>;

  return <img src={dogPic} alt="A Random Dog" />;
}

export default App;

