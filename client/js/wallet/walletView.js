class WalletView {
  constructor(walletModel) {
    this.walletModel = walletModel;
    this.walletModel.subscribe(this.render.bind(this));
  }
  
  render(data) {
    const {target, value} = data;
    target.innerHTML = `${value}`;
  }
}

export default WalletView;