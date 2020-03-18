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

  getSelectProductInfo({ target }) {
    const buttonTarget = target.closest("button");
    const productInfos = buttonTarget.innerText.split("\n");

    this.selectProductInfo.name = buttonTarget.value;
    this.selectProductInfo.price = productInfos[2];

    this.notify(this.selectProductInfo);
  }
}

export default ProductListModel;
