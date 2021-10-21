require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture strike rival magic hub harvest cricket obscure vicious'; 
let testAccounts = [
"0x4234ca288d6e8169cd29e869570ef4a2e55df210d47f0753cd3e027b1e93d80d",
"0x1cf224293b9bc69c0134f6f56a5c03f71f8fbf1dea0588fe78efd905caa00465",
"0xcec986bfd2760f8581559b4f10dc160bdf14ebe51ddbaabab6ad09b2f046f9b8",
"0xaf070ea82a4768450eea74e572fc71e440ca4823e573687abd781ab7c2373650",
"0xd6b74a73e44f87181f6243ce0848b32ad4bd2326b03582f99a4c883cd5ae795b",
"0x9c990422bc7aa17dad6ebfb44d51a1fc4489014ad0e634d6cf8ace12aa3d02a6",
"0x3b6b1946c0ba1dd1b4bd5a0fa780751cab2f761114f96ce445d70a5e6923f1b2",
"0x9052cfc526ec83ad3d6992c0fcfc7bdbc2bcb29cb3b7be077c28cc6d7688d1a8",
"0xe916297a99192f67cad5031454d20b203dd8c103b2ba0f2537238856e76a3f91",
"0x27f2e3d8510cbe943e653384b54c0e4b3d83f7e1f0114f31164abfc3f671cd53"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

