var jwt = require('jsonwebtoken');

exports.ensureAuth = function(req,res,next)
{
	if(!req.headers.authorization)
	{
		return res.status(403).send({message: "La petición no tiene la cabecera de autenticación"});
	}
	
	var token = req.headers.authorization.replace(/['"]+/g,'');

	try{
		var payload = jwt.decode(token, 'itsasecret');
		
	}catch(ex)
	{
		console.log(ex);
		return res.status(404).send({message: "Token no valido"});
	}

	req.user = payload;

	next();
}