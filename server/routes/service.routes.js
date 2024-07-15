module.exports = app => {
    const services = require('../controllers/service.controller.js');
  
    var router = require('express').Router();
  
    router.post('/', services.create);
    router.get('/', services.findAll);
  
    app.use('/api/services', router);
  };
  