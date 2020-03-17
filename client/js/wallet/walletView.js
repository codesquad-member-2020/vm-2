import addWallet from "./walletTemplate.js";

class WalletView {
  constructor(walletModel) {
    this.walletModel = walletModel;
    this.walletModel.subscribe(this.render.bind(this));
    console.log(this.walletModel);
    addWallet(this.walletModel.wallet, this.walletModel.totalAmount);
  }

  render(data) {
    const { target, value } = data;
    target.innerHTML = `${value}`;
  }
}

export default WalletView;
