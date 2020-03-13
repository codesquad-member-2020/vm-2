import WalletView from "./walletView.js";
import WalletModel from "./walletModel.js";

const moneyWrap = document.querySelector(".money-wrap");

const walletModel = new WalletModel();
const walletView = new WalletView(walletModel);

moneyWrap.addEventListener('click', (event)=> {
  deliverUnitMoney(event);
})

const deliverUnitMoney = event => {
  const selectedBtn = event.target.type;
  if (selectedBtn !== 'button') return;

  const selectedCnt = event.target.nextElementSibling.innerText;
  const target = event.target.nextElementSibling;
  
  if (selectedCnt <= 0) return;
  walletModel.useButtons(target, selectedCnt);
  deliverTotalAmount(event);
}

const deliverTotalAmount = event => {
  const totalMoneyWrap = document.querySelector(".total-money");
  const totalMoneyValue = totalMoneyWrap.innerText;
  const selectedMoney = event.target.innerText;

  walletModel.calculateTotalMoney(totalMoneyWrap, totalMoneyValue, selectedMoney);
}