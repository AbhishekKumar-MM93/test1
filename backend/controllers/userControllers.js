import User from "../models/User.js";
import bcrypt, {
    hash
} from 'bcrypt'


async function createUser(req, res) {
    const {
        name,
        email,
        age,
        password
    } = req.body;
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt)
    try {
        let result = await User.create({
            name,
            age,
            email,
            password: hash
        })
        console.log(req.body)
        res.status(201).send({
            sucess: true,
            result
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
}


async function getAlluser(req, res) {

    try {
        let result = await User.find()
        res.status(200).send({
            sucess: true,
            result
        })

    } catch (error) {
        res.status(400).send(error.message)
    }

}

async function getuser(req, res) {
    try {
        let result = await User.findById(req.params.id)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error.message)
    }


}



async function updateUser(req, res) {
    try {
        let result = await User.findByIdAndUpdate({
            _id: req.params.id
        }, req.body)
        res.status(201).send({
            sucess: true,
            result
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
}


async function deleteUser(req, res) {
    try {
        let result = User.deleteOne({
            _id: req.params.id
        })
        res.status(200).send({
            sucess: true
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
}


export {
    createUser,
    getAlluser,
    getuser,
    updateUser,
    deleteUser
}




// async function createUser(req, res) {
//     const {
//         name,
//         age,
//         email,
//         password
//     } = req.body
//     let salt = bcrypt.genSalt(10)
//     let hash = bcrypt.hash(password, salt)
//     try {
//         let result = await User.create({
//             name,
//             age,
//             email,
//             password: hash
//         })
//         res.status(201).send({
//             status: true,
//             result
//         })
//     } catch (error) {
//         res.status(400).send(error.message)
//     }
// }


// async function  getuser(req,res){
//     try {
//       let result=await product.findById(req.params.id)
//       res.status(202).send({success:true,result})
//     } catch (error) {
//       res.status(404).send(error.message)
//     }
//   }