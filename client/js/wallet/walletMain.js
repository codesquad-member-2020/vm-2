import WalletView from "./walletView.js";
import WalletModel from "./walletModel.js";

const moneyWrap = document.querySelector(".money-wrap");
const totalMoney = document.querySelector(".total-money");

const walletModel = new WalletModel();
const walletView = new WalletView(walletModel);

moneyWrap.addEventListener('click', (event)=> {
  const selectedBtn = event.target.type;
  const selectedCnt = event.target.nextElementSibling.innerText;
  const target = event.target.nextElementSibling;

  if (selectedBtn !== 'button') return;
  walletModel.useButtons(target, selectedCnt)
})