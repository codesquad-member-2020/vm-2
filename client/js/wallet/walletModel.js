import Observable from "../observable.js";

class WalletModel extends Observable {
  constructor() {
    super();
    this.state = 0; // 초기 값 데이터 추가 예정
  }

  useButton() {
    this.state -= 1;
    this.notify(this.state);
  }
}

export default WalletModel;