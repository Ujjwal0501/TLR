const HDWalletProvider = require("@truffle/hdwallet-provider");


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider("turn pave erase verb negative embrace learn spike yellow hip extend hedgehog cruise hard drive", "https://ropsten.infura.io/v3/c2b259a60b33486b90b42487de90cf0d")
      },
      network_id: 3,
      gas: 3000000,
      gasPrice: 10000000000
    }
  }
};
