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
    // this.selectProductInfo.name =
    console.log("", event);
    this.notify(this.selectProductInfo);
  }
}

export default ProductListModel;
