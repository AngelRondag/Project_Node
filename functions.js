const axios = require("axios")


 const getusers = async(req,res) => {
  try {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
    res.json(data)

  } catch (error) {
    console.log(error.message)
  }
}

module.exports = getusers
