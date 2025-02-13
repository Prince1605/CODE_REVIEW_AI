const aiService =require('../services/ai.service')


module.exports.getReview =async (req,res)=>{ // Controller 

    const code =req.body.code;

    if(!code){
        return res.statusCode(400).send("Prompt is Required For Answer :")
    }

    const response=await aiService(code);

    res.send(response);

}
