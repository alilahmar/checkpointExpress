//  import express
const express = require("express");

// init express
const app = express();

// port 
const port = process.env.PORT || 7000;

app.use((req, res, next) => {
    const date = new Date();
    let X = date.toDateString().slice(0, 3);
    let hour = date.toTimeString().slice(0, 2);
    let state = false;
    switch (X) {
      case "Mon":
      case "Tue":
      case "Wed":
      case "Thu":
      case "Fri":
        state = true;
    }
    if (state === true && hour >= 9 && hour <= 17) {
      next();
    } else res.end("Le site est hors service");
  });

// run server 
app.listen(port, err=>{
    err?console.log(err):console.log(`the server is running on port: ${port}`)
})

// serve static
app.use(express.static("public"))








