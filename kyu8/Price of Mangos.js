const mango = (quantity, price) => (quantity < 3) ? quantity * price: (quantity - Math.floor(quantity/3)) * price;