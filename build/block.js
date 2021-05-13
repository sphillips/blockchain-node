"use strict";
exports.__esModule = true;
var js_sha256_1 = require("js-sha256");
var Block = /** @class */ (function () {
    function Block(index, timestamp, data, prevHash) {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.prevHash = prevHash;
        this.hash = this.calculateHash();
    }
    Block.prototype.calculateHash = function () {
        return js_sha256_1.sha256(this.index + this.timestamp + this.data + this.prevHash);
    };
    return Block;
}());
exports["default"] = Block;
