---
title: What is a blockchain?
labels: [chain, structure, algorithm, consensus, tamperproof]
---

# TL;DR

A blockchain is a tamperproof collection of data structures (blocks) that is replicated across a network of computer nodes. These blocks are connected together (chained) using an algorithm that prevents tampering, secured by the consensus of all nodes on the network.

## How is it tamperproof?

The algorithm used to chain the blocks together uses what is called a hash function. This hash function uses inputs from the previous block to sign the next block. This means that if any data in the previous block is changes, the hash of the previous block changes. This in turn changes the hash of the next block, and so on. This means that if any data in any block is changed or _tampered_ with, the hash of every block after it changes. This is how the blockchain prevents tampering because any change to previously agreed upon data (via the network consensus) would invalidate the chain of blocks following the tampered data.

#### How hash algorithms work

A hash function is a one-way function that takes an input and produces a unique output. The output is called a hash. The hash is a fixed length series of characters that is unique to the input. If the input changes even slightly, the hash output changes significantly. If the input is the same, computing the hash output over and over is always the same. While a duplicated output for 2 or more unique inputs is theoretically possible (known as a hash collision), the statistical likelihood of this happening is so infinitesimally small that it is considered _de facto impossible_.

##### E.g., Bitcoin

The hash function used in Bitcoin is called SHA-256. It takes an input of any length and produces a 256-bit hash. The hash is always 256 bits long, regardless of the length of the input.

## What is stored in a block?

A block contains a header and a body. The header contains metadata about the block, such as the hash of the previous block, the hash of the current block, the timestamp of the block, and other data. The body contains the actual data that is being stored in the blockchain. This data can be anything, but is often a collection of transactions of some kind. For example, in Bitcoin, the body of a block contains a list of transactions that have occurred since the previous block. The type of data stored in a block depends on the type of blockchain, some chains are more focused on token transactions and others are more focused on data storage.
