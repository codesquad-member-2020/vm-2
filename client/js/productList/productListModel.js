import Observable from "../observable.js";

class ProductListModel extends Observable {
  constructor(productInfoList) {
    super();
    this.productInfoList = productInfoList;

    this.selectProductInfo = {
      name: null,
      price: null
    };
  }

  getSelectProductInfo(event) {
    console.log("", event.target);
    if (event.target.nextElementSibling) {
      this.selectProductInfo.name = event.target.parentElement.value;
      this.selectProductInfo.price = event.target.nextElementSibling.innerText;
    } else if (event.target.parentElement.nextElementSibling) {
      console.log("", event.target.parentElement.parentElement);
      this.selectProductInfo.name = event.target.parentElement.parentElement.value;
      this.selectProductInfo.price = event.target.parentElement.nextElementSibling.innerText;
    } else {
      this.selectProductInfo.price = event.target.innerText;
    }

    this.notify(this.selectProductInfo);
  }
}

export default ProductListModel;
