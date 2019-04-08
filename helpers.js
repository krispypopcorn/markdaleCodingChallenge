"use strict";

var bitcore = require("bitcore-lib");

var bigi = require("bigi");
var buffer = require("buffer");
var bcypher = require("blockcypher");
var print = console.log;

// print("Address: \n");
// print(address);
var rand_buff = bitcore.crypto.Random.getRandomBuffer(32);
var rand_num = bitcore.crypto.BN.fromBuffer(rand_buff);
var PrivateKeyWIF = bitcore.PrivateKey("testnet").toWIF();
var privateKey = bitcore.PrivateKey.fromWIF(PrivateKeyWIF);
var address = privateKey.toAddress();
print(address);
