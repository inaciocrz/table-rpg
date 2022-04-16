import dbConnect from "../../database/dbConnect";
import User from "../../database/models/User";

export default async function handler(req, res){
    await dbConnect();

    if (req.method == "POST"){
        try {
            if (await User.findOne({name: req.body.name}))
                return res.status(400).json({success: false, error: "User already exists"});
            
            const user = await User.create(req.body);

            return res.status(201).json({success: true, user: user});
        } catch (err){
            return res.status(400).json({success: false, Error: 'Registration failed'});
        }
    }else{
        return res.status(400).send("invalid method")
    }
};