import { Vacuumcleaner } from '../models/Vacuumcleaner.js'

export const getVacuumcleaners = async (req, res) => {
    try {
        const Vacuumcleaners = await Vacuumcleaner.findAll()
        res.json(Vacuumcleaners)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const getVacuumcleaner = async (req, res) =>{
try {
    const { Id } = req.params
    const Vacuumcleaner = await Vacuumcleaner.findOne({
        where: {
            Id
        }
    });
    if(!Vacuumcleaner) 
        return res.status(404).json({message: "Vacuumcleaner does not exist"});
    
    res.json(Vacuumcleaner)

} catch (error) {
    return res.status(500).json({message: error.message});
}
};

export const createVacuumcleaner = async (req, res) => {
    const {Name, imgUrl, Description, Price} = req.body
    try {
        const newVacuumcleaner = await Vacuumcleaner.create({
        Name,
        imgUrl,
        Description,
        Price
    })
    res.json(newVacuumcleaner)
    } catch (error) {
        return res.status(500).json({message: error.message});
        
    }
};

export const updateVacuumcleaner = async (req, res) =>{
    try {
        const {Id} = req.params;
        const {Name, imgUrl, Description, Price} = req.body
    
        const Vacuumcleaner = await Vacuumcleaner.findByPk(Id);
        Vacuumcleaner.Name = Name;
        Vacuumcleaner.imgUrl = imgUrl;
        Vacuumcleaner.Description = Description;
        Vacuumcleaner.Price = Price;
        await Vacuumcleaner.save();
    
        res.json(Vacuumcleaner);
    
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const deleteVacuumcleaner = async (req, res) =>{
    try {
        const { Id } = req.params;
        await Vacuumcleaner.destroy({
        where:{
            Id,
        }
    })
        res.sendStatus('204')
    } catch (error) {
        return res.status(500).json({message: error.message});
        
    }
};
