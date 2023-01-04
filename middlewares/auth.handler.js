const {config}=require('./../config/config')
const boom=require('@hapi/boom');

function checkAdminRole(req,res,next) {
  const user=req.user

  console.log(user)
  if (user.role==3){
    next();
  }else{
    next(boom.unauthorized());
  }
}

module.exports= {checkAdminRole};
