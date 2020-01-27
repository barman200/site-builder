const express = require('express');
const jwt = require('jsonwebtoken')

let router = express.Router();
const JWT_KEY = "lkjsdl$$lklkjrt4545";

router.get('/', (req, res) => {
	req.body = {};
	req.body.userName ='site';
	req.body.password ='123456';
	console.log(req.body)
	const { userName, password } = req.body;
	const user = findUser(userName, password);
	
	if(!user) {
		return res.status(401).send({error: 'Login failed! Check authentication credentials'});
	}

	const token = generateToken();
	res.send({ user, token });
});


function findUser(userName, password){ 
	if(userName === 'site' && password === '123456') {
		return new Object({userName:'site', password: '123456'});
	}
	return null;
}

function generateToken() {
	// const user = this
	const token = jwt.sign({_id: '100000'}, JWT_KEY)
	// user.tokens = user.tokens.concat({token})
  // await user.save()
	return token
}

module.exports = router;