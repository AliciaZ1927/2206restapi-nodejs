import { Airtreatment } from '../models/Airtreatment.js'

export const getAirtreatments = async (req, res) => {
    try {
        const Airtreatments = await Airtreatment.findAll()
        res.json(Airtreatments)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const getAirtreatment = async (req, res) =>{
try {
    const { Id } = req.params
    const Airtreatment = await Airtreatment.findOne({
        where: {
            Id
        }
    });
    if(!Airtreatment) 
        return res.status(404).json({message: "Airtreatment does not exist"});
    
    res.json(Airtreatment)

} catch (error) {
    return res.status(500).json({message: error.message});
}
};

export const createAirtreatment = async (req, res) => {
    const {Name, imgUrl, Description, Price} = req.body
    try {
        const newAirtreatment = await Airtreatment.create({
        Name,
        imgUrl,
        Description,
        Price
    })
    res.json(newAirtreatment)
    } catch (error) {
        return res.status(500).json({message: error.message});
        
    }
};

export const updateAirtreatment = async (req, res) =>{
    try {
        const {Id} = req.params;
        const {Name, imgUrl, Description, Price} = req.body
    
        const Airtreatment = await Airtreatment.findByPk(Id);
        Airtreatment.Name = Name;
        Airtreatment.imgUrl = imgUrl;
        Airtreatment.Description = Description;
        Airtreatment.Price = Price;
        await Airtreatment.save();
    
        res.json(Airtreatment);
    
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const deleteAirtreatment = async (req, res) =>{
    try {
        const { Id } = req.params;
        await Airtreatment.destroy({
        where:{
            Id,
        }
    })
        res.sendStatus('204')
    } catch (error) {
        return res.status(500).json({message: error.message});
        
    }
};
