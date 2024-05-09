import React from "react";

const HomeScreen = () => {
  return (
    <div>
      <div style={{height:"100vh", alignItems:"center"}}>
        <div style={{position:"absolute"}}>
          <img
            src="https://www.rishabhsoft.com/wp-content/uploads/2021/06/Enterprise-Data-Management.jpg"
            className="img-fluid"
            style={{ width: "100%" ,filter: "blur(20px)", zindex: "-1" }}
            alt="bg-img"
          ></img>
        </div>
        <div style={{display:"flex",height:"100vh", alignItems:"center", position:"relative", justifyContent:"center", color:"white", fontSize:"30px"}}>Welcome to Data Management</div>
      </div>
    </div>
  );
};

export default HomeScreen;
