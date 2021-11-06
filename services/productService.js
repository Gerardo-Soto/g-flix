const faker = require('faker');

class ProductService {
  // Definition of all the logic and interactions at the transactional
  // level of the data.
  // CRUD operations of Product.

  constructor(){
    // Database connection...
    this.products = [];
    this.generateProduct();
  }

  generateProduct(){
    const quantity = 10;
    for (let index = 0; index < quantity; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),// <- base 10
        image: faker.image.imageUrl(),
      });
    }
  }

  create(){}

  find(){
    return this.products;
  }

  findOne(id){
    // find in array a product ID
    return this.products.find(item => item.id === id);
  }

  findOneDetails(id){
    return this.products.find(item => item.id === id);
  }

  update(){}

  delete(){}


}

module.exports = ProductService;

















