import { Haircare } from '../models/Haircare.js'

export const getHaircares = async (req, res) => {
    try {
        const Haircares = await Haircare.findAll()
        res.json(Haircares)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const getHaircare = async (req, res) =>{
try {
    const { Id } = req.params
    const Haircare = await Haircare.findOne({
        where: {
            Id
        }
    });
    if(!Haircare) 
        return res.status(404).json({message: "Haircare does not exist"});
    
    res.json(Haircare)

} catch (error) {
    return res.status(500).json({message: error.message});
}
};

export const createHaircare = async (req, res) => {
    const {Name, imgUrl, Description, Price} = req.body
    try {
        const newHaircare = await Haircare.create({
        Name,
        imgUrl,
        Description,
        Price
    })
    res.json(newHaircare)
    } catch (error) {
        return res.status(500).json({message: error.message});
        
    }
};

export const updateHaircare = async (req, res) =>{
    try {
        const {Id} = req.params;
        const {Name, imgUrl, Description, Price} = req.body
    
        const Haircare = await Haircare.findByPk(Id);
        Haircare.Name = Name;
        Haircare.imgUrl = imgUrl;
        Haircare.Description = Description;
        Haircare.Price = Price;
        await Haircare.save();
    
        res.json(Haircare);
    
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const deleteHaircare = async (req, res) =>{
    try {
        const { Id } = req.params;
        await Haircare.destroy({
        where:{
            Id,
        }
    })
        res.sendStatus('204')
    } catch (error) {
        return res.status(500).json({message: error.message});
        
    }
};
