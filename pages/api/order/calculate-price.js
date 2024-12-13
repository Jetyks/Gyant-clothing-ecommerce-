export default function handler(req, res) {
  if (req.method === "POST") {
    const { cartPrice } = req.body;
    const defaultShippingCost = 12.99;

    // Si el precio del carrito es mayor a 80, el costo de envío es 0
    const shippingCost = cartPrice > 80 ? 0 : defaultShippingCost;

    // Calcular el precio total del pedido
    const totalOrderPrice = cartPrice + shippingCost;

    // Responder con el costo de envío y el precio total del pedido
    res.status(200).json({ shippingCost, totalOrderPrice });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}