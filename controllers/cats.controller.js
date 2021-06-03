const mongoose = require('mongoose');
const Cat = require('../models/cat.model');

module.exports.list = (req, res, next) => {
    const filters = req.query;

    Cat.find(filters)
        .then((cats) => {
            res.render('cats', { cats });
        })
        .catch(next);
};

module.exports.create = (req, res, next) => {
    res.render('form');
};

module.exports.doCreate = (req, res, next) => {
    const cat = new Cat({
        name: req.body.name,
        age: req.body.age,
        owner: req.body.owner
    });

    cat.save()
        .then((cat) => {
            res.redirect(`/cats`);
        })
        .catch((error) => {
            if (error instanceof mongoose.Error.ValidationError) {
                res.render('form', { error: error.errors, cat });
            } else {
                next(error);
            }
        });
};

module.exports.edit = (req, res, next) => {
    Cat.findById(req.params.id)
        .then((cat) => {
            if (cat) {
                res.render('edit', { cat });
            } else {
                res.redirect('/cats');
            }
        })
        .catch(next);
};

module.exports.doEdit = (req, res, next) => {
    Cat.findByIdAndUpdate(req.params.id, req.body)
        .then((cat) => {
            res.redirect('/cats');
        })
        .catch(next);
};

module.exports.delete = (req, res, next) => {
    Cat.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/cats');
        })
        .catch(next);
};