class ProductListView {
  constructor(productListModel, walletModel) {
    this.productListModel = productListModel;
    this.walletModel = walletModel;
    this.productListModel.subscribe(this.render.bind(this));
    this.walletModel.subscribe(this.getAvailableProducts.bind(this));
  }

  getAvailableProducts(data) {
    const { selectedMoney } = data;
    console.log("value", selectedMoney);

    const currencyList = document.querySelectorAll(".product-content > span");
    Array.from(currencyList).forEach(currency => {
      if (Number(currency.textContent) <= selectedMoney) {
        currency.parentElement.parentElement.parentElement.className = "active";
      }
    });
  }

  render(data) {
    const { name, price } = data;
    console.log(data);
  }
}

export default ProductListView;
