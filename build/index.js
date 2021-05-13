"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var block_js_1 = __importDefault(require("./block.js"));
var blockchain_js_1 = __importDefault(require("./blockchain.js"));
function createBlockchain(num) {
    var blockchain = new blockchain_js_1["default"]();
    var previousBlock = blockchain[0];
    for (var i = 1; i < num; i += 1) {
        var newBlock = blockchain.addBlock(new block_js_1["default"](i, Date.now(), "this is block " + i));
        previousBlock = newBlock;
    }
    console.log(blockchain);
    console.log("\n\nIs blockchain valid? " + blockchain.checkValid());
}
// Generate test data:
var lengthToCreate = 20;
createBlockchain(lengthToCreate);
