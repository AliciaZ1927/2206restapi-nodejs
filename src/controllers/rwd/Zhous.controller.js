import { Zhou } from '../../models/rwd/Zhou.js'

export const getZhous = async (req, res) => {
    try {
        const Zhous = await Zhou.findAll()
        res.json(Zhous)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const getZhou = async (req, res) =>{
try {
    const { Id } = req.params
    const Zhou = await Zhou.findOne({
        where: {
            Id
        }
    });
    if(!Zhou) 
        return res.status(404).json({message: "Zhou does not exist"});
    
    res.json(Zhou)

} catch (error) {
    return res.status(500).json({message: error.message});
}
};

export const createZhou = async (req, res) => {
    const {Name, imgUrl, Description, Price} = req.body
    try {
        const newZhou = await Zhou.create({
        Name,
        imgUrl,
        Description,
        Price
    })
    res.json(newZhou)
    } catch (error) {
        return res.status(500).json({message: error.message});
        
    }
};

export const updateZhou = async (req, res) =>{
    try {
        const {Id} = req.params;
        const {Name, imgUrl, Description, Price} = req.body
    
        const Zhou = await Zhou.findByPk(Id);
        Zhou.Name = Name;
        Zhou.imgUrl = imgUrl;
        Zhou.Description = Description;
        Zhou.Price = Price;
        await Zhou.save();
    
        res.json(Zhou);
    
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const deleteZhou = async (req, res) =>{
    try {
        const { Id } = req.params;
        await Zhou.destroy({
        where:{
            Id,
        }
    })
        res.sendStatus('204')
    } catch (error) {
        return res.status(500).json({message: error.message});
        
    }
};

