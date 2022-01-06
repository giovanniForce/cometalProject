const Equi = require('../models/Equi');

exports.createEqui = (req, res, next) => {
    delete req.body._id;
  const equi = new Equi({
    ...req.body
  });
  equi.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
  };
  
  exports.modifyEqui = (req, res, next) => {
    Equi.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.deleteEqui= (req, res, next) => {
    Equi.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  };

  exports.getOneEqui = (req, res, next) => {
    Equi.findOne({ _id: req.params.id })
      .then(thing => res.status(200).json(thing))
      .catch(error => res.status(404).json({ error }));
  };

  exports.getAllEqui = (req, res, next) => {
    Equi.find()
    .then(equi => res.status(200).json(equi))
    .catch(error => res.status(400).json({ error }));
  };

   