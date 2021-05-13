import sha256 from "js-sha256";

class Block {
  index: number;
  timestamp: number;
  data: string;
  prevHash: string;
  hash: string;

  constructor(
    index: number,
    timestamp: number,
    data: string,
    prevHash?: string
  ) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.prevHash = prevHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return sha256(this.index + this.timestamp + this.data + this.prevHash);
  }
}

export default Block;
