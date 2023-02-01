import sql from '../../../conniction/conniction.js'
// ################################################ - add user ###########################################
export const createUser = (req,res,next)=>{
    const {firstName,lastName,email,password,age} = req.body
    sql.execute(`insert into users (firstName,lastName,email,password,age)
    values( '${firstName}','${lastName}','${email}', '${password}', ${age})`,(err,result,feild)=>{
                if(err){
                res.json({message: 'err', err})
                }else{
                res.json({message:"Done",result })
            }
    })
}
// ######################################### Delete user #####################################################
export const deleteUser = (req,res,next)=>{
    const {id} = req.params
    sql.execute(`DELETE FROM users WHERE id = ${id}` , (err,result,feild)=>{
        if(err)
        {
            res.json({message:'query error', err})
        }else{
            if(result.affectedRows){
                res.json({message:'success',result})
            }else
            {
                res.json({message:'in-valide user',result})
            }
        }
    })
}
// ############################################ - Update user ##################################################
export const updateUser = (req,res,next)=>{
    const {id} = req.params
    const {firstName,lastName,email,password,age} = req.body
    sql.execute(`UPDATE users SET firstName = '${firstName}',lastName = '${lastName}',email = '${email}', password = '${password}' ,age = ${age} WHERE id = ${id}` , (err,result,feild)=>{
        if(err)
        {
            res.json({message:'query error', err})
        }else{
            if(result.affectedRows){
                res.json({message:'success',result})
            }else
            {
                res.json({message:'in-valide user',result})
            }
        }
    })
}
// ################################ - Get all users #####################################
export const selectUser = (req,res,next)=>{
    sql.execute(`SELECT * from users`,(err,result,feild)=>{
        if(err){
            res.json({message:'query error', err})
        }else{
            res.json({message:'success',result})
        }
    })
}
// ################################# - Get all users with firstname start with (a) Or lastname start with (a) ################################
export const searshUsers = (req,res)=>{
    const {searsh_key} = req.query
    sql.execute(`select * from users where firstName like '${searsh_key}%' or lastName like '${searsh_key}%' `,(err,result)=>{
        if(err){
            res.json({message:'query error', err})
        }
        else{
            res.json({message:'Done', result})
        }
    })
}
// #######################################  Get all users with age between 20 and 40 ######################################
export const validateAge = (req,res,next)=>{
    const {startAge,endAge} = req.body
    sql.execute(`select * from users where age < ${endAge} and age > ${startAge}`,(err,result)=>{
        if(err){
            res.json({message:'query error', err})
        }
        else{
        res.json({message:'Done', result})
    }
})
}
// ############################ Get all users with fistname start with A and age less than 30 ################################
export const searshUsersByNA = (req,res)=>{
    const {searsh_key} = req.query
    sql.execute(`select * from users where firstName like '${searsh_key}%' and age < 30 `,(err,result)=>{
        if(err){
            res.json({message:'query error', err})
        }
        else{
            res.json({message:'Done', result})
        }
    })
}
// ##################################### - Get user by id ##############################################
export const searshUsersById = (req,res)=>{
    const {searsh_key} = req.query
    sql.execute(`select * from users where id like '${searsh_key}%'`,(err,result)=>{
        if(err){
            res.json({message:'query error', err})
        }
        else{
            res.json({message:'Done', result})
        }
    })
}
// ########################################## - Get all users with firstname end with(a) ####################################################
export const firstNameEnd = (req,res)=>{
    const {searsh_key} = req.query
    sql.execute(`select * from users where firstName like '%${searsh_key}'`,(err,result)=>{
    if(err){
            res.json({message:'query error', err})
        }
        else{
            res.json({message:'Done', result})
        }
    })
}
// ####################################### - Get all users with firstname start with(a) ####################################################
export const firstNameStart = (req,res)=>{
    const {searsh_key} = req.query
    sql.execute(`select * from users where firstName like '${searsh_key}%'`,(err,result)=>{
        if(err){
            res.json({message:'query error', err})
        }
        else{
            res.json({message:'Done', result})
        }
    })
}