import addProductSelect from "./productSelectTemplate.js";

class ProductSeletView {
  constructor(walletModel) {
    this.walletModel = walletModel;
    this.walletModel.subscribe(this.render.bind(this));
    addProductSelect();
  }

  render(data) {
    const { target, value } = data;
    target.innerHTML = `${value}`;
    console.log(data);
  }
}

export default ProductSeletView;
