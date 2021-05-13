import Block from "./block.js";
import Blockchain from "./blockchain.js";

function createBlockchain(num: number) {
  const blockchain = new Blockchain();
  let previousBlock = blockchain[0];

  for (let i = 1; i < num; i += 1) {
    const newBlock = blockchain.addBlock(
      new Block(i, Date.now(), `this is block ${i}`)
    );
    previousBlock = newBlock;
  }
  console.log(blockchain);
  console.log("\n\nIs blockchain valid? " + blockchain.checkValid());
}

// Generate test data:

const lengthToCreate = 20;
createBlockchain(lengthToCreate);
