import WalletView from "./walletView.js";
import WalletModel from "./walletModel.js";

const useButton = document.querySelectorAll(".money-unit");
const root = document.querySelector(".money-wrap span");
const totalMoney = document.querySelector(".total-money");

const walletModel = new WalletModel();
const walletView = new WalletView(walletModel, root, totalMoney);