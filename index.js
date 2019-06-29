const sha256 = require('js-sha256');

class Block {
  constructor(index, timestamp, data, prevHash) {
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

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(0, Date.now(), 'Genesis Block', '0');
  }

  latestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.prevHash = this.latestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }

  checkValid() {
    for(let i = 1; i < this.chain.length; i++){
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if(currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if(previousBlock.hash !== previousBlock.calculateHash()){
        return false;
      }
    }

    return true;
  }
}

const createBlockchain = num => {
  const blockchain = new Blockchain();
  let previousBlock = blockchain[0];

  for (let i = 1; i < num; i += 1) {
    const newBlock = blockchain.addBlock(new Block(Date.now(), `this is block ${i}`));
    previousBlock = newBlock;
  }
  console.log(blockchain);
  console.log("\n\nIs blockchain valid? " + blockchain.checkValid());
};

// Generate test data:

const lengthToCreate = 20;
createBlockchain(lengthToCreate);  
