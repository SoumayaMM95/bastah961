// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { models: { Product } } = require('../models'); //Call Brand model to use its functions

export default async function handler(req, res) {
    const product =  await Product.findAll();
    res.status(200).json({product});
}