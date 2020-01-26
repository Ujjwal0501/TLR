var TLR = artifacts.require("./TLR.sol");

module.exports = function (deployer) {
    deployer.deploy(TLR,10000);
};
