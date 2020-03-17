import Observable from "../observable.js";

class WalletModel extends Observable {
  constructor() {
    super();
    this.currencyCount = null
    this.totalAmount = 0
    this.inputMoney = 0
    this.currency = null

    this.notifyInfo = {
      target: null,
      value: null
    }
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
    this.totalAmount = Number(totalMoneyWrap.innerText);
    const selectedMoney = event.target.innerText;

    this.calculateTotalMoney(totalMoneyWrap, selectedMoney);
  }

  deliverInputAmount() {
    const selectMoney = event.target.innerText;
    
    this.notifyInfo.target = document.querySelector(".input-amount");
    this.inputMoney += Number(selectMoney);

    this.notifyInfo.value = this.inputMoney;
    this.notify(this.notifyInfo);
  }
  
  deliverNotification() {
    this.notifyInfo.target = document.querySelector(".message-window ol li");
    this.currency = event.target.innerText;

    this.notifyInfo.value = this.currency;
    this.notify(this.notifyInfo);
  }

  spendMoney(target, value) {
    this.notifyInfo.target = target;
    this.currencyCount = Number(value);
    if (this.currencyCount <= 0) return;
    this.currencyCount -= 1;

    this.notifyInfo.value = this.currencyCount;
    this.notify(this.notifyInfo);
  }

  calculateTotalMoney(target, currency) {
    this.notifyInfo.target = target;
    this.totalAmount -= currency;
    if (this.totalAmount < 0) return;

    this.notifyInfo.value = this.totalAmount;
    this.notify(this.notifyInfo);
  }

}

export default WalletModel;
