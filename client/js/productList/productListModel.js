import Observable from "../observable.js";

class ProductListModel extends Observable {
  constructor() {
    super();

    this.selectProductInfo = {
      name: null,
      price: null
    };
  }

  getSelectProductInfo(event) {
    if (event.target.nextElementSibling) {
      this.selectProductInfo.price = event.target.nextElementSibling.innerText;
    } else if (event.target.parentElement.nextElementSibling) {
      this.selectProductInfo.price = event.target.parentElement.nextElementSibling.innerText;
    } else {
      this.selectProductInfo.price = event.target.innerText;
    }
    console.log(this.selectProductInfo);
    this.notify(this.selectProductInfo);
  }
}

export default ProductListModel;
