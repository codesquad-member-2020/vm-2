import addProductSelect from "./productSelectTemplate.js";

class ProductSeletView {
  constructor(productListModel, walletModel) {
    this.productListModel = productListModel;
    this.walletModel = walletModel;
    this.walletModel.subscribe(this.render.bind(this));
    this.productListModel.subscribe(this.subProductPrice.bind(this));
    addProductSelect();
  }

  render(walletData) {
    const { target, value } = walletData;
    const className = target.className;

    if (className === "input-amount") {
      target.innerHTML = `${value}`;
    } else if (className === "message-list") {
      target.insertAdjacentHTML("beforeend", `<li>isMessage${value}</li>`);
    }
  }

  subProductPrice(priceInfoData) {
    const { name, price } = priceInfoData;

    const target = document.querySelector(".input-amount");
    const value = Number(target.innerText) - price;

    target.innerHTML = value;
  }
}

export default ProductSeletView;
