class WalletView {
  constructor(walletModel, target) {
    this.target = target;
    this.walletModel = walletModel;
    this.walletModel.subscribe(this.render.bind(this));
  }

  render(data) {
    this.target.innerHTML = `${data}`;
  }
}

export default WalletView;