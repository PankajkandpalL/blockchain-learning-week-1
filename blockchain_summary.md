# Blockchain Concepts

*1. Concepts of Blockchain*
------

### Define Blockchain Technology

Like the prime minister of India, Narendra Modi said "minimum government, maximum governence", means there is no centralized authority who governs it. It's like for the people, of the people, to the peope. It is the heart of blockchains and cryptocurrency. So before actually understanding what blockchain is, lets get into the history of blockchain around why it was needed and how it came into the picture?

 - History of blockchain
   
   1. 1991 - A cryptographically secured chain of blocks is described.
   2. 1998 - `bit gold` was introduced.
   3. 2008 - Satoshi Nakamoto founded blockchain and published the `White-paper` establishing the model for blockchain.

- Blockchain technology is like record-keeping system that stores information in a way that's transparent, secure, and decentralized. 
- For example, its like a digital notebook where information (transaction) is recorded in pages (blocks), and each page ( block ) is in sequential manner ( like pg-1,pg-2 etc.. basically linked to the previous one ), forming a book ( technically called chain ).

Summaring it, we got that blockchain technology provides a way for multiple individuals to securely and transparently record and verify transactions without the need for a central authority, making it useful for digital currency.

### Explain how it differs from traditional databases.

- Blockchain is actually a database, but its totally different from the databases we have seen till far. To break it down more, lets compare traditional database with blockchain.

    1. Centralization vs Decentralization

       - Till far we have seen a database is something which is governed by an individual or the organisation, means only internal people can access the database and have the authority to add, delete, update and read the data from the database and no external have the authority to do any changes in the database.
       
       - But this is not the case with blockchain or decentralized database. In simple words, blockchain is decentralized which means the data or say transaction is distributed to multiple computers (nodes), there is no central authority controlling the system. Any changes to the data stored on blockchain need to be approved by the people or computers involved in the network. This is reached through a process called a "consensus mechanism," where everyone has to come to an agreement for the change to be accepted.

    2. Transparency and Trust

        - Traditional databases often lack transparency, as users or clients must trust the central authority to manage and maintain the data. There's limited visibility into how data is stored and manipulated.

        - Blockchain offers a high level of transparency, as all transactions are recorded on a public ledger that can be accessed and verified by anyone. This transparency builds trust among participants and eliminates the need for central authorities.

    3. Security and Immutability

        - As we know traditional databases are mostly dependent on RBAC and authentication mechanisms for the security. However they have high security still they are vulnerable to hacking. Also, if the logging & monitoring is not properly implemented one can delete a data entry and no one will know who is the imposter?. Its not only about security, its also about availability & consistency. One most common example of availability is the `Amazon S3 Service Disruption in the Northern Virginia`.

        - Blockchain keeps things secure by using fancy math stuff like hashing and digital signatures. Once something is put on the blockchain, it's like carved in stone - you can't change it or erase it without everyone agreeing. However some attempts to hack the blockchain have been made. For ex - 
            - 51% attack
            - DAO Hack on ethereum blockchain in 2016
        But the most interesting thing comes out and most time reported is that those applications and digital wallets which interact to blockchain can be vulnerable to hacking not the underlying blockchain itself.

### Describe its structure and how blocks are added to the blockchain.

1. Blockchain Structure:

```md
    A blockchain is like record-keeping system that stores information in blocks, which are linked together in a chain. Each block contains a list of transactions or data, along with a unique identifier called a cryptographic hash, which is like a digital fingerprint.
```

2. Adding Blocks to the Blockchain:

    1.  Transaction Initiation:

        -   When someone wants to send bitcoins, it means they're asking for a `transaction` to happen.

    2.  Network Validation:

        -   This request goes to a bunch of computers connected in a network, each called a `node.`
        -   These computers(minors) work together to check if the `transaction` is legit. They do this by solving a complex math problem to prove it's valid.

    3.  Validation Reward:

        -   Once the transaction is checked and approved, those minors that helped validate it gets a little reward, mostly in bitcoin.

    4.  Block Creation:

        -   All the approved transactions are combined into a new block.
        -   A special code, called a `hash` or `cryptographic hash` is created for this block. This includes heavy math.
        -   This hash includes info from the previous block, making sure everything is connected.

    5.  Adding to the Chain:

        -   The new block with its own unique hash gets added to the existing chain of blocks. This chain is called the blockchain.

*2. Working of Blockchain:*
------

Long story short, lets say you went to a restuarant for dining. Once you finished it, you ask the waitor for the bill. Waiter comes in with the bill and now you pay with your card. What happens next? He swipes it, and good night.
 
 - Behind the scenes when he swipes you card, the bank servers (central authority) comes in, your details are checked and checks for the sufficient amount. Once its a thumbs up from bank servers. The money is deducted and there is either `platform fee` or `service charge`.

### Describe the process of transaction creation, verification, and block addition to the chain 

 - It can vary depending on the specific blockchain, but here are some of those steps involved:
 

-   Transaction Creation:

    -   Suppose Pablo wants to transfer money to Bob from his bank account.
    -   Pablo initiates the transaction by entering Bob's bank account details.

-   Transaction Verification:

    -   The bank's computer network verifies Pablo's transaction by checking his account balance, ensuring he has enough funds for the transfer.
    -   The bank's security protocols authenticate Pablo's identity to prevent fraud or unauthorized transactions.

-   Block Addition to the Chain:

    -   Once verified, the transaction is added to the bank's record system as a new entry, recording the transfer from Pablo's account to Bob's account.
    
    -   The record system is updated and maintained by the bank's central database, ensuring accuracy and security.

    -   Similarly, once verified by the nodes, the transaction is added to the blockchain as a new block, recording the transfer from one user's digital wallet to another's.
    
    -   The blockchain network maintains this ledger across multiple computers (nodes), ensuring transparency, decentralization and           security of the recorded transactions.
    
    -   Each new block in the blockchain is linked to the previous one through cryptographic hashing, forming a chain of transactions over  time.

    -   This chain of transactions serves as a transparent and immutable record of all digital currency transactions, providing trust and accountability to users and validators within the blockchain network.

### Explain the role of miners in the blockchain

Miners are like the busy workers in the blockchain world. Their main job is to make sure all the transactions happening on the blockchain are validated and adding them to blockchain.

Here's how they do it:

1.  Transaction Verification:

    -   Miners check if transactions are real and valid. They make sure nobody's trying to cheat or spend money they don't have.

2.  Block Building:

    -   Once they've checked a bunch of transactions and made sure they're all good, miners bundle them together into a block.

3.  Solving Puzzles:

    -   Now comes the fun part ( or the hard part, depending on how they see it ;) ). Miners solve really tough math puzzles to add the new block to the blockchain.
    -   It's like a race -- whoever solves the puzzle first gets to add the block and earn some cryptocurrency as a reward.

4.  Keeping Things Secure:

    -   By adding blocks to the blockchain, miners make sure everything stays safe and nobody can mess with the records. Once a block's in there, it's there for good, thanks to all the hard work the miners put in.

### Discuss the concept of consensus and how it is achieved in a blockchain network

1.  What is Consensus?:

    -   Consensus is like a group decision. In the blockchain world, it's when all the computers (nodes) in the network agree on something.

2.  Why Consensus Matters:

    -   Consensus is super important in blockchain because it ensures that everyone's on the same page. It's what keeps the blockchain running smoothly and prevents any one person or computer from cheating.

3.  How Consensus is Achieved:

    -   In a blockchain network, achieving consensus means agreeing on which transactions are valid and should be added to the blockchain.
    
    -   There are different ways to reach consensus, but the most common method is called "proof-of-work" (PoW). Think of it like a race -- computers (miners) compete to solve a really hard math problem. The first one to solve it gets to add a new block of transactions to the blockchain.
    
    -   Another method is "proof-of-stake" (PoS), where validators are chosen based on how much cryptocurrency they have. The more they have, the more likely they are to be chosen to validate transactions and add blocks to the chain.

4.  Benefits of Consensus:

    -   Consensus ensures that the blockchain is secure and reliable. Since all the nodes agree on the validity of transactions, it's really hard for anyone to tamper with the blockchain or cheat the system.
    
    -   It also helps maintain decentralization, meaning no single entity or person has control over the blockchain. Instead, decisions are made collectively by the network.

```

                           +-------------------------+
                           |         Consensus       |
                           |         Process         |
                           +-------------------------+
                                          |
                      ____________________|____________________
                     |                     |                    |
                     v                     v                    v
        +----------------------+  +------------------------+  +-----------------------+
        |   Proof-of-Work      |  |   Proof-of-Stake       |  |   Other Consensus     |
        |   (PoW)              |  |   (PoS)                |  |   Mechanisms          |
        +----------------------+  +------------------------+  +-----------------------+
                     |                     |                    |
                     v                     v                    v
        +----------------------+  +------------------------+  +-----------------------+
        |   Miners compete to  |  |   Validators selected  |  |   Consensus achieved  |
        |   solve math problem |  |based on cryptocurrency |  |   through various     |
        |   and add block to   |  |   holdings             |  |   methods             |
        |   blockchain         |  |                        |  |                       |
        +----------------------+  +------------------------+  +-----------------------+

```

*3. Key Components*
--------------------

1.  Blockchain:

    -   Definition: A blockchain is like a digital ledger or record-keeping system that stores information (like transactions) in blocks, linked together in a chain.
    -   Role: It ensures transparency, security, and decentralization by providing a tamper-proof record of transactions that can be verified and accessed by anyone in the network.

2.  Nodes:

    -   Definition: Nodes are individual computers or devices connected to the blockchain network.
    -   Role: Nodes maintain the blockchain by validating and storing transactions, ensuring the network's integrity, and participating in the consensus process to reach agreements on the validity of transactions.

3.  Miners:

    -   Definition: Miners are nodes in the blockchain network that validate transactions and add them to the blockchain by solving complex mathematical puzzles.
    -   Role: They ensure the security and integrity of the blockchain by confirming the legitimacy of transactions and adding new blocks to the chain. Miners are typically rewarded with cryptocurrency for their efforts.

4.  Transactions:

    -   Definition: Transactions are records of exchanges or operations that occur on the blockchain, such as sending or receiving digital assets.
    -   Role: They represent the movement of assets or data within the blockchain network, providing a transparent and immutable record of activities that can be verified by all participants.

5.  Blocks:

    -   Definition: Blocks are containers that hold a batch of verified transactions and other data.
    -   Role: They form the building blocks of the blockchain, containing a record of transactions that are added to the chain in a chronological order. Blocks ensure the security and immutability of the blockchain by linking together through cryptographic hashes.

6.  Consensus Mechanisms:

    -   Definition: Consensus mechanisms are protocols or algorithms used by nodes to agree on the validity of transactions and add them to the blockchain.
    -   Role: They ensure that all nodes in the network reach an agreement on the state of the blockchain, preventing double-spending and maintaining the integrity and decentralization of the network. Examples include Proof-of-Work (PoW) and Proof-of-Stake (PoS).

### Discuss the significance of cryptographic hash functions in linking blocks

Cryptographic hash functions are like digital fingerprints for blocks in a blockchain. They create unique identifiers, or hashes, for each block based on its data. By including the hash of the previous block in the data of the current block, they form a chain-like structure, ensuring that each block is linked securely to the one before it. This chaining ensures data integrity and immutability within the blockchain. Cryptographic hash functions also provide high security, making it extremely difficult for attackers to alter the data or forge fake blocks. Overall, they play a crucial role in maintaining the integrity, security, and chronological order of transactions within the blockchain.

*4. Cryptocurrency*
--------------------

### Define cryptocurrency and explain how it relates to blockchain

Cryptocurrency is like digital money that exists only in the digital world. It's not physical, like coins or bills, but it's stored and exchanged electronically. Now, here's where blockchain comes in: think of blockchain as the technology that powers cryptocurrency. It's like the system that keeps track of who owns how much of that digital money and ensures that transactions with it are secure and trustworthy. So, every time you buy or sell cryptocurrency, that transaction gets recorded on the blockchain. This makes sure that everyone agrees on who owns what and prevents anyone from cheating or spending money they don't have. In a nutshell, cryptocurrency and blockchain go hand in hand, with blockchain making sure that cryptocurrency transactions are safe, transparent, and reliable.

### Discuss how cryptocurrencies leverage blockchain technology to ensure security, transparency, and decentralization.

Cryptocurrencies use blockchain technology to keep things secure, clear, and fair. Imagine blockchain as a giant digital ledger that records every transaction made with cryptocurrency, like Bitcoin. Each transaction is grouped into a block and linked together in a chain. Now, here's how it works: First, security comes from cryptography, which is like a digital lock that keeps transactions safe from hackers. Second, transparency means everyone can see the transactions on the blockchain, making it hard to cheat or lie about who owns what. Lastly, decentralization means no single person or authority controls the blockchain. Instead, it's run by many computers (nodes) all over the world. This makes it tough for anyone to manipulate or control the system. So, with blockchain, cryptocurrencies can be secure, transparent, and fair for everyone involved.

### Briefly describe the concept of wallets, public/private keys, and addresses in the context of cryptocurrency transactions

Wallets, in the world of cryptocurrency, are like digital pockets where you store your coins or tokens. They're not physical like the wallets we carry in our pockets, but they serve a similar purpose. Now, let's talk about keys: Every wallet comes with a pair of keys, a public key, and a private key. The public key is like your address - you can share it with anyone so they can send you money. But the private key is super secret and should never be shared. It's like the key to your digital safe - whoever has it can access your coins. So, when you want to send or receive cryptocurrency, you use your wallet's public key (address) to let others know where to send the money. And to access your funds, you use your private key, which is like your secret password. With wallets, keys, and addresses, cryptocurrency transactions can be secure and controlled by you.