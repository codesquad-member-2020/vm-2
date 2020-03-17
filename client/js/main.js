import WalletView from "./wallet/walletView.js";
import WalletModel from "./wallet/walletModel.js";
import ProductListModel from "./productList/productListModel.js";
import ProductListView from "./productList/productListView.js";

const moneyWrap = document.querySelector(".money-wrap");
const productWrap = document.querySelector(".product");

const walletModel = new WalletModel();
const productListModel = new ProductListModel();
const walletView = new WalletView(walletModel);
const productListView = new ProductListView(productListModel, walletModel);

moneyWrap.addEventListener("click", event => {
  walletModel.deliverUnitMoney(event);
});

productWrap.addEventListener("click", event => productListModel.getSelectProductInfo(event));
