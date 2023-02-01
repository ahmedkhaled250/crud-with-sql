import {Router} from "express";
import {createUser, deleteUser, searshFullName, searshUsers, selectUser, updateUser, validateAge, searshUsersByNA, searshUsersById, firstNameEnd, firstNameStart, returnArray} from './controller/user.js'
const userRouter = Router();
userRouter.post('/user',createUser) 
userRouter.patch('/user/:id',updateUser) 
userRouter.delete('/user/:id',deleteUser)
userRouter.get('/user',selectUser)
userRouter.get('/user/searsh',searshUsers)
userRouter.get('/user/validateage',validateAge) 
userRouter.get('/user/searshbynameage',searshUsersByNA) 
userRouter.get('/user/searshbyid',searshUsersById) 
userRouter.get('/user/firstnameend',firstNameEnd) 
userRouter.get('/user/firstnamestart',firstNameStart) 
export default userRouter;