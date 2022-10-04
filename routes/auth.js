import express from 'express'

// import {register, login } from '../controllers/auth';

const router = express.Router()



/* when the endpoint /api/register is accessed by a client and content is posted/sent
   it will be routed to the below router. The below router will then refer to the register
   function imported from contollers/auth
   further explanation will continue in the controller/auth file 
*/
// router.post("/register", register)
// router.post("/login", login)

router.get('/mike', function (req, res) {
   const responseData = {
      name : "Mike Truitt",
      role : "Director, Cloud Infrastructure Services",
      reportsto: "Josh Scriven"
    }
    const jsonContent = JSON.stringify(responseData);
   res.end(jsonContent);
})



module.exports = router;