
const followerModel = require('./../../../models/follower.model');

exports.add = async (req, res) => {
    try {
        const { followerId, userId } = req.body;
        const find = await followerModel.findOne({ userId, followerId });
  
        if (find === null) {
            const response = await followerModel.insert(req.body);
            return res.status(200).send(response);
        }
  
        return res.status(200).send({
            message: `ALREADY`
        });
  
    } catch (error) {

        return res.status(500).send({
          message: `Error al seguir ${error}` });

    }
};

exports.remove = async (req, res) => {
    try {
        
        const response = await followerModel.findOneAndRemove(req.body);
        return res.status(200).send(response);

    } catch (error) {
        
        return res.status(500).send({
            message: `Error al seguir ${error}`
        });

    }
};