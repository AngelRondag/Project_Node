const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001
const apiRouter = require("./routes")
const {logErrors,errorHandle,boomErrorHandle} = require("./midlleware/error.handle");

app.use(express.json());
// const whiteList = ["http://127.0.0.1:5500/front/index.html","http://127.0.0.1:5500/products"];
// const options = {
//   origin: (origin,cb) => {
//     if(whiteList.includes(origin)){
//       cb(null,true)
//     }else {
//       cb(new Error("No permitido"))
//     }
//   }
// }
// app.use(cors(options)
app.use(cors())

app.get('/api', (req, res) => {
  res.send("hello, world")
})

apiRouter(app);

app.use(logErrors);
app.use(boomErrorHandle);
app.use(errorHandle);

app.listen(PORT, () => {
  console.log("lisen on port ", PORT)
})
