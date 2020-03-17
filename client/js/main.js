import WalletView from "./wallet/walletView.js";
import WalletModel from "./wallet/walletModel.js";
import ProductListModel from "./productList/productListModel.js";
import ProductListView from "./productList/productListView.js";
import ProductSelectView from "./productSelect/productSelectView.js";

const JSON_FILE_URL = "../../server/vmData.json";

const productListModel = new ProductListModel();
const walletModel = new WalletModel();

(async () => {
  const res = await fetch(JSON_FILE_URL);
  const { productInfoList, wallet, totalAmount } = await res.json();

  const productListView = new ProductListView(productListModel, walletModel, productInfoList);
  const productSelectView = new ProductSelectView(walletModel);
  const walletView = new WalletView(walletModel, wallet, totalAmount);
  clickEventListener();
})();

const clickEventListener = () => {
  const moneyWrap = document.querySelector(".money-wrap");
  const productWrap = document.querySelector(".product");

  moneyWrap.addEventListener("click", event => {
    walletModel.deliverUnitMoney(event);
    walletModel.deliverInputAmount(event);
    walletModel.deliverNotification(event);
  });

  productWrap.addEventListener("click", event => productListModel.getSelectProductInfo(event));
};
