import addProductSelect from "./productSelectTemplate.js";

class ProductSeletView {
  constructor(walletModel) {
    this.walletModel = walletModel;
    this.walletModel.subscribe(this.render.bind(this));
    addProductSelect();
  }

  render(data) {
    const { target, value } = data;
    const className = target.className;

    if (className === "input-amount") {
      target.innerHTML = `${value}`;
    } else if (className === "message-list") {
      target.insertAdjacentHTML("beforeend", `<li>isMessage${value}</li>`);
    }
  }
}

export default ProductSeletView;
