"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var block_js_1 = __importDefault(require("./block.js"));
var Blockchain = /** @class */ (function () {
    function Blockchain() {
        this.chain = [this.createGenesisBlock()];
    }
    Blockchain.prototype.createGenesisBlock = function () {
        return new block_js_1["default"](0, Date.now(), "Genesis Block", "0");
    };
    Blockchain.prototype.latestBlock = function () {
        return this.chain[this.chain.length - 1];
    };
    Blockchain.prototype.addBlock = function (newBlock) {
        newBlock.prevHash = this.latestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    };
    Blockchain.prototype.checkValid = function () {
        for (var i = 1; i < this.chain.length; i++) {
            var currentBlock = this.chain[i];
            var previousBlock = this.chain[i - 1];
            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }
            if (previousBlock.hash !== previousBlock.calculateHash()) {
                return false;
            }
        }
        return true;
    };
    return Blockchain;
}());
exports["default"] = Blockchain;
