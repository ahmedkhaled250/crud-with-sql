import sql from "../../../conniction/conniction.js";
export const addProduct = (req, res) => {
  const { title, price, desc, userID } = req.body;
  sql.execute(
    `insert into productts (title,price,description,userId) values ('${title}',${price},'${desc}',${userID})`,
    (err, result) => {
      if (err) {
        res.json({ message: "query error", err });
      } else {
        if (result.affectedRows) {
          res.json({ message: "Done", result });
        } else {
          res.json({ message: "fail to add your product" });
        }
      }
    }
  );
};
export const getAllProduct = (req, res) => {
  sql.execute(
    `select u.id as u_id , u.firstName , u.lastName , u.email , p.id as p_id , p.title , p.price , p.description , p.createAt ,
    p.apdateAt from users as u inner join productts as p on u.id = p.userId `,
    (err, result) => {
      if (err) {
        res.json({ message: "query error", err });
      } else {
        res.json({ message: "Done", result });
      }
    }
  );
};
export const apdateProduct = (req, res) => {
  const { id } = req.params;
  const { title, price, desc, userID } = req.body;
  sql.execute(
    `update productts set title = '${title}' , price = ${price} , userId = ${userID} , description = '${desc}' where id = ${id}`,
    (err, result) => {
      if (err) {
        res.json({ message: "query error", err });
      } else {
        if (result.affectedRows) {
          res.json({ message: "Done", result });
        } else {
          res.json({ message: "fail to add your product" });
        }
      }
    }
  );
};
export const getProductByID = (req, res) => {
  const { id } = req.params;
  sql.execute(
    `select u.id as u_id , u.firstName , u.lastName , u.email , p.id as p_id , p.title , p.price , p.description , p.createAt ,
    p.apdateAt from users as u inner join productts as p on u.id = p.userId where p.id = ${id}`,
    (err, result) => {
      if (err) {
        res.json({ message: "query error", err });
      } else {
        if (result.length) {
          res.json({ message: "Done", result });
        } else {
          res.json({ message: "in_valid product" });
        }
      }
    }
  );
};
export const deleteProduct = (req, res) => {
  const { id } = req.params;
  sql.execute(`delete from productts where id = ${id}`, (err, result) => {
    if (err) {
      res.json({ message: "query error", err });
    } else {
      if (result.affectedRows) {
        res.json({ message: "Done", result });
      } else {
        res.json({ message: "in_valide product" });
      }
    }
  });
};
export const priceGT_2500 = (req,res) => {
    const {price} = req.query
    sql.execute(`select * from productts where price > ${price} `,(err,result)=>{
        if(err){
            res.json({message:'query error', err})
        }
        else{
            res.json({message:'Done', result})
        }
    })
}