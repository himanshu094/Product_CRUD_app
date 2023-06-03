var express = require('express');
var router = express.Router();
var pool=require('./pool')
var upload=require('./multer')

/* GET home page. */
router.get('/productinterface', function(req, res, next) {
  res.render('productinterface', {message:''});
});

router.post('/productsubmit',upload.single('picture'), function(req, res, next) {
  
  try{
    console.log("DATA:",req.body);
    console.log("file Data:",req.file);
    pool.query("insert into product (productname, producttypeid, productcategoryid, description, price, offer, quantity, quantitytype, productpicture) values(?,?,?,?,?,?,?,?,?)",
    [req.body.productname, req.body.producttypeid, req.body.productcategoryid, req.body.description, req.body.price, req.body.offer, req.body.quantity, req.body.quantitytype, req.file.filename],function(error,result){
      if(error)
      {
        console.log("D Error",error);
        res.render("productinterface",{message:'workbanch Database Error'})
      }
      else
      {
        res.render("productinterface",{message:'Product Submitted Successfully',val:2})  
      }
    })
  }
  catch(e)
  {
    console.log("Error:",e);
    res.render("productinterface",{message:'Server Error'}) 
  }

});

module.exports = router;
