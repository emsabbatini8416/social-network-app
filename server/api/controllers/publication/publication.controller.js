const publicationModel = require('./../../../models/publication.model');

exports.add = async (req, res) => {
    try {

        const response = await publicationModel.insert(req.body)
        return res.status(200).send(response);

      } catch (error) {
  
        return res.status(500).send({
          message: `Error al crear la publicación ${error}`
        });
  
      }
};