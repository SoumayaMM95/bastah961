// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { models: { Category } } = require('../models'); //Call Brand model to use its functions

export default async function handler(req, res) {
    const category =  await Category.findAll();
    res.status(200).json({category});
}