/*const {User} = require('../../../vidly/models/user');
const jwt=require('jsonwebtoken');
const config=require('config');
describe('user.generateAuthToken',()=>{
it('should return a vaid JWT',()=>{
const user = new User({_id:1,isAdmin:true});
const token=user.generateAuthToken();
const decoded=jwt.verify(token,config.get('jwtPrivateKey'));
expect(decoded).toMatchObject({_id:1,isAdmin:true});
});
});*/