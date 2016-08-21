const express = require('express');
const clothesRouter = require('./routers/clothesRouter');

const app = new express();
const router = express.Router();

router.get('/items',(req,res)=>{
  const str = "hello World!";
  res.json(str);
});

router.get('/clothes',clothesRouter.findAll);


module.exports = router;
