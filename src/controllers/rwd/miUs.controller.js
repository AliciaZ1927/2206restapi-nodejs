import { miU } from '../../models/rwd/miU.js'

export const getmiUs = async (req, res) => {
    try {
        const miUs = await miU.findAll()
        res.json(miUs)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const getmiU = async (req, res) =>{
try {
    const { Id } = req.params
    const miU = await miU.findOne({
        where: {
            Id
        }
    });
    if(!miU) 
        return res.status(404).json({message: "miU does not exist"});
    
    res.json(miU)

} catch (error) {
    return res.status(500).json({message: error.message});
}
};

export const createmiU = async (req, res) => {
    const {Account, Name, Password, Email, Address} = req.body
    try {
        const newmiU = await miU.create({
        Account,
        Name,
        Password,
        Email,
        Address
    })
    res.json(newmiU)
    } catch (error) {
        return res.status(500).json({message: error.message});
        
    }
};

export const updatemiU = async (req, res) =>{
    try {
        const {Id} = req.params;
        const {Account, Name, Password, Email, Address} = req.body
    
        const miU = await miU.findByPk(Id);
        miU.Account = Account;
        miU.Name = Name;
        miU.Password = Password;
        miU.Email = Email;
        miU.Address = Address;
        await miU.save();
    
        res.json(miU);
    
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const deletemiU = async (req, res) =>{
    try {
        const { Id } = req.params;
        await miU.destroy({
        where:{
            Id,
        }
    })
        res.sendStatus('204')
    } catch (error) {
        return res.status(500).json({message: error.message});
        
    }
};

// export const getmiUOs = async(req, res) => {
//     const {Id} = req.params
//     const mios = await miO.findAll({
//         where: {UOId: Id}
//     });
//     res.json(mios)
// };
