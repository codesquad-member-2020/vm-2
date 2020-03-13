import Observable from "../observable.js";

class WalletModel extends Observable {
  constructor() {
    super();
  }

  useButtons(target, value) {
    if (Number(value) <= 0) return;
    value -= 1;
    this.notify({target: target, value: value});
  }

  calculateTotalMoney(target, totalMoney, currency) {
    totalMoney -= currency;
    if (totalMoney < 0) return;

    this.notify({target: target, value: totalMoney});
  }
}

export default WalletModel;