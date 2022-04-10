require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh spot toy note soccer mixture harvest merry forward spike'; 
let testAccounts = [
"0x9985eabd135d872e71adf48c37d672593a12bf6a9f320982ad1218fee8398bd2",
"0xa083d14fa187f9abad15dd3db88781d553b250084483cb2463a750e27d47817a",
"0x54b1add6c3f77561968a6b2ca1cbdfd50987e772b797bb9c645e90ce1829b0ac",
"0xc59bdaaab1507491099de562a5507fee52e81a6be169e6a5e48504b8fadc686f",
"0xe51f97b6adfd8a4ebac1759737d1529a760a7132463726117e4ce9ae5ab651c1",
"0xee9ebbe9d06f17423109fc3cce0bf88518cc807bc51a50b408635a5172a84918",
"0x98d911a54885579a0ae4fbd103bfe79d1e1c4ae47b727ac5be81d546bb9cfb60",
"0x384086edb2dfee33d5f976985ea7fc2a83cd8daaa78bc589ebad74a2cd2238e1",
"0xcd077ac585cbba0aef49ba9d22ef3e9b8bb5b70ba395cd939f46c53fda009132",
"0x9e39665f84b305e883c4ceac6490641923c3c227ac1bdcb2b541385ce07bf2f7"
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

