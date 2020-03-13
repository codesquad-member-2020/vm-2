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
}

export default WalletModel;