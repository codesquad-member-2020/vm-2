import WalletView from "./wallet/walletView.js";
import WalletModel from "./wallet/walletModel.js";
import ProductListModel from "./productList/productListModel.js";
import ProductListView from "./productList/productListView.js";
import ProductSelectView from "./productSelect/productSelectView.js";

const moneyWrap = document.querySelector(".money-wrap");
const productWrap = document.querySelector(".product");

const walletModel = new WalletModel();
const productListModel = new ProductListModel();
const walletView = new WalletView(walletModel);
const productListView = new ProductListView(productListModel, walletModel);
const productSelectView = new ProductSelectView(walletModel);

moneyWrap.addEventListener("click", event => {
  walletModel.deliverUnitMoney(event);
  walletModel.deliverInputAmount(event);
  walletModel.deliverNotification(event);
});

productWrap.addEventListener("click", event => productListModel.getSelectProductInfo(event));

