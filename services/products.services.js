const { faker } = require("@faker-js/faker")
const boom = require("@hapi/boom")


class ProductsServices {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 50;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      })
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data,
    }
    this.products.push(newProduct);
    return newProduct
  }

   find() {
    return new Promise((resolve,reject) => {
      setTimeout(() =>{
        resolve(this.products)
      },100)
    });

  }

  async findOne(id) {
    const product =  this.products.find(item => item.id === id)
    if(!product){
      throw boom.notFound("product not found")
    }

    if(product.isBlock){
      throw boom.notFound+("product is blocked")

    }
    return product;
  }

  async update(id, body) {
    const index = this.products.findIndex(item => item.id === id)
    if(index === -1){
      throw boom.notFound('upps product not found')
    }
    const product = this.products[index]
    this.products[index] = {
     ...product,
      ...body
    }
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id)
    if(index === -1) {
       throw boom.notFound('item not found')
    }
    this.products.splice(index,1);
    return { id }
  }
}

module.exports = ProductsServices;
