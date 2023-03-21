// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { models: { Product } } = require('../models'); //Call Brand model to use its functions
const { Op } = require("sequelize");

export default async function handler(req, res) {
    const { CategoryID } = req.query
    const product =  await Product.findAll({where: {CategoryID: {[Op.eq]: CategoryID}}});
    res.status(200).json({product});
}