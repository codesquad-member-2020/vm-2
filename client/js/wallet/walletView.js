import addWallet from "./walletTemplate.js";

class WalletView {
  constructor(walletModel, wallet, totalAmount) {
    this.walletModel = walletModel;
    this.walletModel.subscribe(this.render.bind(this));
    addWallet(wallet, totalAmount);
  }

  render(data) {
    const { target, value } = data;
    target.innerHTML = `${value}`;
  }
}

export default WalletView;
