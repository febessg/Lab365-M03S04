const { Product } = require('../models/Product');

class ProductController {
    async create(req, res) {
        try {
            const {
                name,
                description,
                price,
                logoUrl,
                category
            } = req.body;

            const existProduct = await Product.findOne({
                where: {name: name}
            });

            if (existProduct) {
                return res.status(403).send({
                    message: 'Já existe um produto cadastrado com esse nome'
                })
            };

            const productCreated = await Product.create({
                name,
                description,
                price,
                logoUrl,
                category
            });

            return res.status(201).send(productCreated);

        } catch (error) {
            return res.status(400).send({
                message: 'Erro na criação do produto',
                cause: error.message
            })
        }
    }

    async findAll(req, res) {
        try {
            const products = await Product.findAll();

            return res.status(200).send(products);

        } catch (error) {
            return res.status(400).send({
                message: 'Erro ao listar todos os produtos',
                cause: error.message
            })
        }
    }

    async findOne(req, res) {
        try {
            const {productId} = req.params;
 
            const product = await Product.findByPk(productId);

            if (!product) {
                return res.status(400).send({message: 'Produto não encontrado'})
            }

            return res.status(200).send(product);

        } catch (error) {
            return res.status(400).send({
                message: 'Produto não encontrado',
                cause: error.message
            })
        }
    }

    async findAllAdm(req, res) {
        try {
            const products = await Product.findAll({paranoid: false});

            return res.status(200).send(products);

        } catch (error) {
            return res.status(400).send({
                message: 'Erro ao listar todos os produtos',
                cause: error.message
            })
        }
    }

    async remove(req, res) {
        try {
            const {productId} = req.params;
 
            const product = await Product.findByPk(productId);

            if (!product) {
                return res.status(400).send({message: 'Produto não encontrado'})
            }

            await product.destroy()

            return res.status(200).send({message: 'Produto removido com sucesso'});

        } catch (error) {
            return res.status(400).send({
                message: 'Erro ao remover produto',
                cause: error.message
            })
        }
    }

    async restore(req, res) {
        try {
            const {productId} = req.params;
 
            const product = await Product.findOne({
                where: {productId:productId},
                paranoid: false
            });

            if (!product) {
                return res.status(400).send({message: 'Produto não encontrado'})
            }

            await product.restore()

            return res.status(200).send({message: 'Produto restaurado com sucesso'});

        } catch (error) {
            return res.status(400).send({
                message: 'Erro ao restaurar produto',
                cause: error.message
            })
        }
    }
};

module.exports = new ProductController();