// const path = require('path');
const Mattress = require('../models/mattress');

const mattressCtrl = {};

mattressCtrl.list = async (req, res) => {
        console.log("MATTRESS - LIST")
        var mattressess = await Mattress.find();
        res.json(mattressess);
        console.log("respuesta enviada")
};

mattressCtrl.create = async (req, res) => {
        console.log("MATTRESS - CREATE")
        var newMattress = new Mattress(req.body);
        await newMattress.save();
        res.json({
                status: "OK",
                body: newMattress});
        console.log("respuesta enviada")
};

mattressCtrl.read = async (req, res) => {+
        console.log("MATTRESS - READ -> " + req.params.id);
        var mattress = await Mattress.findById(req.params.id);
        res.json(mattress);
        console.log("respuesta enviada");
};

mattressCtrl.update = async (req, res) => {
        console.log("MATTRESS - UPDATE -> " + req.params.id);
        var { id } = req.params;
        var data = {
                name: req.body.name,
                type: req.body.type,
                dimensions: req.body.dimensions,
                firmness: req.body.firmness,
                adaptability: req.body.adaptability,
                reversible: req.body.reversible,
                desc: req.body.desc,
            };
        var newMattress = await Mattress.findByIdAndUpdate(id, {$set: data}, {new: true});
        res.json({ status: "OK", body: newMattress});
        console.log("respuesta enviada");
};

mattressCtrl.delete = async (req, res) => {
        console.log("MATTRESS - DELETE -> " + req.params.id);
        await Mattress.findByIdAndRemove(req.params.id);
        res.json({status: "Mattress Deleted"});
        console.log("respuesta enviada");
};

module.exports = mattressCtrl;