const multer = require("multer");
const router = require("express").Router();
const dest = multer({dest:'uploads/'});
const path = require("path");
router.get('/',(req,res)=>{
   res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

router.post('/get-file-size',dest.single('file'),(req,res)=>{
   res.json({
       size:req.file.size
   }) 
});

module.exports = router;