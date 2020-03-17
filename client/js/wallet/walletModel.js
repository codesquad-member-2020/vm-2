import Observable from "../observable.js";

class WalletModel extends Observable {
  constructor() {
    super();
  }

  deliverUnitMoney(event) {
    const selectedBtn = event.target.type;
    if (selectedBtn !== "button") return;

    const selectedCnt = event.target.nextElementSibling.innerText;
    const target = event.target.nextElementSibling;

    if (selectedCnt <= 0) return;
    this.spendMoney(target, selectedCnt);
    this.deliverTotalAmount();
  }

  deliverTotalAmount() {
    const totalMoneyWrap = document.querySelector(".total-money");
    const totalMoneyValue = totalMoneyWrap.innerText;
    const selectedMoney = event.target.innerText;

    this.calculateTotalMoney(totalMoneyWrap, totalMoneyValue, selectedMoney);
  }

  spendMoney(target, value) {
    if (Number(value) <= 0) return;
    value -= 1;
    this.notify({ target: target, value: value });
  }

  calculateTotalMoney(target, totalMoney, currency) {
    totalMoney -= currency;
    if (totalMoney < 0) return;

    this.notify({ target: target, value: totalMoney, selectedMoney: currency });
  }
}

export default WalletModel;
