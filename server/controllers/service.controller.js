const Service = require('../models/ServiceModel.js');

exports.create = (req, res) => {
  if (!req.body.title) {
    return res.status(400).send({
      message: "Title can not be empty!"
    });
  }

  const service = new Service({
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    description: req.body.description
  });

  service.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Service."
      });
    });
};

exports.findAll = (req, res) => {
  Service.find()
    .then(services => {
      res.send(services);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving services."
      });
    });
};
