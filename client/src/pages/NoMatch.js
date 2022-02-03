
import React      from "react";
import { Link }   from "react-router-dom";


  const NoMatch = () => {
    return (
      <>
          <div style={{top:"0", height:"100px", width:"100vw", backgroundColor:"rgb(65, 65, 65)", }}>
            <div style={{height:"80px", width:"80px", margin:"0 auto", paddingTop:"2px"}}>
                <Link to="/"  style={{cursor:"pointer"}}>
                <img
                  alt=""
                  src="./logo192.png"
                  width="95px"
              />
              </Link>
            </div>

          </div>
          <div style={{color:"white", display: "flex", justifyContent:"center", alignItems: "center", height: "60vh" }}>
            <h1 style={{color:"white"}} >
              404 Page Not Found
            
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </div>

      </>
    );
  };

export default NoMatch;
