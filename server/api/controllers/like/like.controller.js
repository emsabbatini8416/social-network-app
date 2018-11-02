const publicationModel = require('./../../../models/publication.model');
const likeModel = require('./../../../models/like.model');

exports.addLike = async (req, res) => {

    try {

        const { publicationId, userId } = req.body;
        const find = await likeModel.findOne({ publicationId, userId });
  
        if (find === null) {

            const response = await likeModel.insert({ publicationId, userId });
  
            await publicationModel.findOneAndUpdate(
                { _id: publicationId },
                {
                    $push: { like: response }
                },
                { new: true });

            return res.status(200).send(response);
        }
  
        return res.status(200).send({
            message: `ALREADY`
        });
  
    } catch (error) {
  
        return res.status(500).send({
            message: `Error al dar like ${error}`
        });
    }
};

exports.removeLike = async (req, res) => {

    try {

        const like = await likeModel.findOneAndRemove({
            publicationId: req.body.publicationId,
            userId: req.body.userId,
        });
  
        await publicationModel.findOneAndUpdate(
            { _id: req.body.publicationId },
            {
                $pull: { like: like._id }
            },
            { new: true });
  
        return res.status(200).send(like)
  
    } catch (error) {
  
        return res.status(500).send({
            message: `Error al dar like ${error}` });
            
    }
};