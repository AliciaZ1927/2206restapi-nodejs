import { miC } from '../../models/rwd/miC.js'
import { micItem } from '../../models/rwd/micItem.js';

export const getmiCs = async (req, res) => {
    try {
        const miCs = await miC.findAll()
        res.json(miCs)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const getmiC = async (req, res) =>{
    try {
        const {Id} = req.params
        const miC = await miC.findOne({
            where: {
                Id
            }
        });
        if(!miC)
            return res.status(404).json({message: "miC does not exist"});

            res.json(miC)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const createmiC = async (req, res) => {
    const {Quantity, Amount, miCCartId, ZhouId} = req.body
    try {
        const newmiC = 
        await miC.create({
            Quantity,
            Amount
        })
        await micItem.create({
            Quantity,
            miCCartId,
            ZhouId
        })
        res.json(newmiC)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const updatemiC = async (req, res) =>{
    try {
        const {Id} = req.params;
        const {Quantity, Amount} = req.body

        const miC = await miC.findByPk(Id);
        miC.Quantity = Quantity;
        miC.Amount = Amount;
        await miC.save();

        res.json(miC);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const deletemiC = async (req, res) => {
    try {
        const { Id } = req.params;
        await miC.destroy({
            where:{
                Id
            }
        })
        res.sendStatus('204')
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

// export const getmiCUs = async(req, res) => {
//     const {CartId} = req.params
//     const mics = await miC.findAll({
//         where: { CUId: CartId }
//     });
//     res.json(mics)
// }