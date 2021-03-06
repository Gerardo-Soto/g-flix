const faker = require('faker');
const boom = require('@hapi/boom');

function randomApiCall() {
  return Math.random() * 100;
}


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
        isBlocked: faker.datatype.boolean(),
      });
    }
  }

  async create(data){
    // await PROMISE
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const probabilityOfResponse = randomApiCall();
        if (probabilityOfResponse < 75) {
          const newProduct = {
          id: faker.datatype.uuid(),
          image: faker.image.imageUrl(),
          ...data
          };
          this.products.push(newProduct);
          resolve(newProduct);
        } else {
          reject('Product not created.');
        }
      }, 1500);
    })
  }

  async find(){
    return new Promise(resolve => {
      // simulate an API call
      setTimeout(() => {
        resolve(this.products);
      }, 1000);
    });
    //return this.products;
  }


  async findOneV2(id){
    /*const failed = this.getTotal();
    if (failed) {
      //pass
    }*/
    const product = this.products.find(product => product.id === id);
    if (!product) {
      // Send a status code 404:
      throw boom.notFound('Product not found (Boom Error handler)');
    } else if(product.isBlocked){
      throw boom.conflict('Product is blocked');// status code 409
    }
    return product;
  }

  async findOne(id){
    // find in array a product with ID
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // error function not found:
        //const myError = this.myError();
        const productToBeFound = this.products.find(item => item.id === id);
        if (productToBeFound) {
          resolve(productToBeFound);
        } else {
          reject(new Error('Product by ID '+id+' not found'));
        }
      }, 1500);
    });
  }

  async findOneDetails(id){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const productToBeFound = this.products.find(item => item.id === id);
        if (productToBeFound) {
          resolve(productToBeFound);
        } else {
          reject( new Error('Product by ID '));
        }
      });
    });
  }

  async update(id, changes){
    return new Promise((resolve) => {
      const indexProduct = this.products.findIndex(item => item.id === id);
      if (indexProduct === -1){
        //reject(new Error('Product not found when updating data.'));
        throw boom.notFound('Product not found');// .notFound === Status Code 404
      } else {
        // product to update:
        const product = this.products[indexProduct];
        // index of product to update:
        this.products[indexProduct] = {
          // persist product data:
          ...product,
          // new data obtained:
          ...changes,
        };
        resolve(this.products[indexProduct]);
      }
    });
  }

  async delete(id){
    return new Promise((resolve, reject) => {
      const indexProduct = this.products.findIndex(item => item.id === id);
      //console.log(indexProduct);
      if (indexProduct === -1) {
        reject(new Error('Product not found when deleting data.'));
      } else {
        const productDeleted = this.products.splice(indexProduct, 1);
        //console.log('Product deleted');
        resolve(productDeleted);
      }
    });
  }
}

module.exports = ProductService;

















