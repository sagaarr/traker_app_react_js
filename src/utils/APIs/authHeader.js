export default function authHeader() {
    const user = JSON.parse(localStorage.getItem("token") || "{}");

    if (user && user.token) {
      console.log("HELLO")
      // For Spring Boot back-end
      // return { Authorization: "Bearer " + user.token };
  
      // for Node.js Express back-end
      return { 
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "authorization": `Bearer ${user.token}`
      };
    } else {
      return {};
    }
  }
  