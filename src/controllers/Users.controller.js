import { User } from '../models/User.js'

export const getUsers = async (req, res) => {
    try {
        const Users = await User.findAll()
        res.json(Users)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const getUser = async (req, res) =>{
try {
    const { UserId } = req.params
    const User = await User.findOne({
        where: {
            UserId
        }
    });
    if(!User) 
        return res.status(404).json({message: "User does not exist"});
    
    res.json(User)

} catch (error) {
    return res.status(500).json({message: error.message});
}
};

export const createUser = async (req, res) => {
    const {UserName, UserPassword, UserEmail, UserAddress} = req.body
    try {
        const newUser = await User.create({
        UserName,
        UserPassword,
        UserEmail,
        UserAddress
    })
    res.json(newUser)
    } catch (error) {
        return res.status(500).json({message: error.message});
        
    }
};

export const updateUser = async (req, res) =>{
    try {
        const {UserId} = req.params;
        const {UserName, UserPassword, UserEmail, UserAddress} = req.body
    
        const User = await User.findByPk(UserId);
        User.UserName = UserName;
        User.UserPassword = UserPassword;
        User.UserEmail = UserEmail;
        User.UserAddress = UserAddress;
        await User.save();
    
        res.json(User);
    
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const deleteUser = async (req, res) =>{
    try {
        const { UserId } = req.params;
        await User.destroy({
        where:{
            UserId,
        }
    })
        res.sendStatus('204')
    } catch (error) {
        return res.status(500).json({message: error.message});
        
    }
};

export const getUserOrders = async(req, res) => {
    const {UserId} = req.params
    const Orders = await Order.findAll({
        where: {UserOrderId: UserId}
    });
    res.json(Orders)
};