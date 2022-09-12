const Tables = require("../models/table.model")

exports.save = async(req,res)=>{
    const table = new Tables(req.body)
    table.save().then(createdTable=>{
        res.status(200).json({
            message: 'post added successfully',
            postId: createdTable._id
        })
    })
}
// module.exports = save

exports.allValue = async(req,res)=>{
    Tables.find().then(createdTable=>{
        res.status(200).json({
            message: 'post added successfully',
            post: createdTable
        })
    })
}