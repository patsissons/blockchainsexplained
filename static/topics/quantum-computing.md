---
title: Will quantum computing break blockchains?
labels: [chains, security, quantum]
---

# TL;DR

Some blockchains, yes. Others, no. It depends on the type of quantum computer and the type of blockchain and whether the blockchain in question has become quantum resistant. There are already operational blockchains that are quantum resistant, and there will be many non-quantum resistant blockchains that will be be adapted for quantum resistance. The bigger question is whether quantum computing will be used to break blockchains, and the answer is probably not because if a quantum computer can break a blockchain encryption scheme, it can also break the encryption schemes that protect the internet, banks, and governments. If that happens, we have bigger problems than broken blockchains.

## ELI5

Blockchains are like a secret club that requires a secret password to enter that is unique to each member. To enter the club as a member you say your secret password and the club checks their members list to see if your password matches. A quantum computer could figure out all secret passwords for all members of the club in a very short time, which would allow anyone controlling the quantum computer to enter the club, or worse pass along that password to anyone else to enter the club. But this same quantum computer could also figure out all the secret passwords to all clubs, many of which are way more exclusive and valuable to sell access to. So why would anyone use a quantum computer to access your club when they could use it for all the other more exclusive clubs?

## As a beginner

Blockchains use a version of public key cryptography to secure their networks. This is the same type of cryptography that is used to secure logins on the internet, banks, and governments and online shopping payments. If a quantum computer can break the cryptography used by blockchains, it can also break the cryptography used by the internet, banks, and governments (in fact it would be much easier to focus on banks and governments). If that happens, there is very little incentive to focus on blockchains because of the nature of how blockchains record everything that happens and distribute that log across the network. This means that if a quantum computer is used to break the cryptography of a blockchain, it could be quite obvious to everyone on the network that this has happened. Even if the fraudulent changes were mild in nature, it would not take long before the network would start to notice and take action to prevent further damage. This is not the case with banks and governments, where it is much easier to hide fraudulent activity and even if it is discoverd by the bank or government in question, it is unlikely that they would broadcast the details of the attack. In otherwords, if a quantum computer is capable of breaking blockchain cryptograph, our primary concern would likely be the fall of sovereign nations and the global financial system, not the loss of the relatively small (compared to all global assets) value of cryptocurrencies.

<!--
## As an intermediate

_explanation_for_experienced_understanding_of_blockchains_
-->
<!--
## As an expert

_explanation_for_professional_understanding_of_blockchains_
-->

# Quantum Computing

Quantum computing is a type of computing that uses quantum mechanics to perform statistical computations. Quantum mechanics is a branch of physics that describes the nature of matter and energy at the atomic and subatomic level (e.g., electrons and quarks). Quantum computing is still in its infancy, and there are many different types of quantum computers that are being developed. As of writing this topic, quantum computers are not at the level of sophistication required to break blockchain or other types of modern public key cryptography, but it is expected that they will reach that level of sophistication at some point in the future, as soon as a decade.

## How to protect against quantum computing

Quantum resistant cryptography schemes that are being developed, and some are already in use. These schemes are designed to be resistant to quantum computing attacks, and are expected to be used by blockchains and other systems that require public key cryptography. The primary difference between quantum resistant cryptography and traditional public key cryptography is that quantum resistant cryptography is based on mathematical problems that are difficult to solve for both classical and quantum computers, while traditional public key cryptography is based on mathematical problems that are difficult to solve for classical computers but could be easy to solve for quantum computers.

### Quantum key distribution

Quantum key distribution (QKD) is a method of distributing a secret key between 2 parties that is resistant to eavesdropping. QKD is not a method of encryption, but rather a method of distributing a secret key that can be used for encryption. QKD is considered to be secure against any type of attack, including quantum computing attacks, and is expected to be used in conjunction with quantum resistant encryption schemes.

### Zero knowledge proofs

Zero knowledge proofs (ZKP) are a method of proving that a statement is true without revealing any information about the statement. ZKP is considered to be reasonably secure against quantum computing attacks, and is expected to be used in conjunction with quantum resistant encryption schemes. While ZKP does not prevent quantum attacks, it structures the problem space such that it is not going to be feasible for any reasonable trajectory of quantum computing capability.
