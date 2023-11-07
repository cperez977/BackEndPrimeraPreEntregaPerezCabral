//modelo de productos

const products = [];

exports.list = (limit) => {
  return products.slice(0, limit);
};

exports.show = (pid) => {
  return products.find((product) => product.id === pid);
};

exports.create = (product) => {
  const newProduct = {
    id: Math.floor(Math.random() * 1000),
    title: product.title,
    description: product.description,
    code: product.code,
    price: product.price,
    status: product.status || true,
    stock: product.stock,
    category: product.category,
    thumbnails: product.thumbnails || [],
  };
  products.push(newProduct);
  return newProduct;
};

exports.update = (pid, product) => {
  const index = products.findIndex((p) => p.id === pid);
  if (index !== -1) {
    products[index] = {
      id: pid,
      title: product.title,
      description: product.description,
      code: product.code,
      price: product.price,
      status: product.status || true,
      stock: product.stock,
      category: product.category,
      thumbnails: product.thumbnails || [],
    };
    return products[index];
  }
  return null;
};

exports.destroy = (pid) => {
  const index = products.findIndex((p) => p.id === pid);
  if (index !== -1) {
    products.splice(index, 1);
  }
};

// modelo de carrito

const carts = [];

exports.create = (cart) => {
  const newCart = {
    id: Math.floor(Math.random() * 1000),
    products: cart.products || [],
  };
  carts.push(newCart);
  return newCart;
};

exports.update = (cid, cart) => {
  const index = carts.findIndex((c) => c.id === cid);
  if (index !== -1) {
    carts[index] = {
      id: cid,
      products: cart.products || [],
    };
    return carts[index];
  }
  return null;
};
