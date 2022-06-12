import { Order } from "../models/Order.js";

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createOrder = async (req, res) => {
  try {
    const { Quantity, Amount, UserOrderId } = req.body;
    const newOrder = await Order.create({
        Quantity,
        Amount,
        UserOrderId,
    });
    res.json(newOrder);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOrder = async (req, res) => {
  const { OrderId } = req.params;
  try {
    const order = await Order.findOne({
      where: { OrderId },
    });
    res.json(order);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const { OrderId } = req.params;

    const order = await Order.findOne({
      where: { OrderId },
    });
    order.set(req.body);
    await order.save();
    return res.json(order);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteOrder = async (req, res) => {
  const { OrderId } = req.params;
  try {
    const result = await Order.destroy({
      where: { OrderId },
    });
    console.log(result);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
