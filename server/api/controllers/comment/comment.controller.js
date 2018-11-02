const publicationModel = require('./../../../models/publication.model');
const commentModel = require('./../../../models/comment.model');

exports.add = async (req, res) => {
    try {

        const response = await commentModel.insert(req.body)
        const { publicationId } = req.body

        await publicationModel.findOneAndUpdate(
            { _id: publicationId },
            {
                $push: { comment: response }
            },
            { new: true });
  
        return res.status(200).send(response);
  
    } catch (error) {

        return res.status(500).send({ 
            error: `An error has ocurred, ${error}` });
            
    }
};