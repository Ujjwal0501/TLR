var TLRToken = artifacts.require("./TLRToken.sol");

module.exports = function (deployer) {
    deployer.deploy(TLRToken);
};
