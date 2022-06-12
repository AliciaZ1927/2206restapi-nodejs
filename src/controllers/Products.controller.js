import { Product } from '../models/Product.js'

export const getProducts = async (req, res) => {
    try {
        const Products = await Product.findAll()
        res.json(Products)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const getProduct = async (req, res) =>{
try {
    const { Id } = req.params
    const Product = await Product.findOne({
        where: {
            Id
        }
    });
    if(!Product) 
        return res.status(404).json({message: "Product does not exist"});
    
    res.json(Product)

} catch (error) {
    return res.status(500).json({message: error.message});
}
};

export const createProduct = async (req, res) => {
    const {Name, imgUrl, Description, Price} = req.body
    try {
        const newProduct = await Product.create({
        Name,
        imgUrl,
        Description,
        Price
    })
    res.json(newProduct)
    } catch (error) {
        return res.status(500).json({message: error.message});
        
    }
};

export const updateProduct = async (req, res) =>{
    try {
        const {Id} = req.params;
        const {Name, imgUrl, Description, Price} = req.body
    
        const Product = await Product.findByPk(ProductId);
        Product.Name = Name;
        Product.imgUrl = imgUrl;
        Product.Description = Description;
        Product.Price = Price;
        await Product.save();
    
        res.json(Product);
    
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const deleteProduct = async (req, res) =>{
    try {
        const { Id } = req.params;
        await Product.destroy({
        where:{
            Id,
        }
    })
        res.sendStatus('204')
    } catch (error) {
        return res.status(500).json({message: error.message});
        
    }
};

export const getProductOrders = async(req, res) => {
    const {Id} = req.params
    const Orders = await Order.findAll({
        where: {ProductOrderId: Id}
    });
    res.json(Orders)
};