
App = {
    contract_abi: [
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_latitude",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_longitude",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "message",
                    "type": "string"
                }
            ],
            "name": "addReport",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_initialSupply",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_tokenOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "tokens",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_from",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "Burn",
            "type": "event"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_hero",
                    "type": "address"
                }
            ],
            "name": "giveIncentive",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "tokens",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "reportId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "latitude",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "longitude",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "message",
                    "type": "string"
                }
            ],
            "name": "markedHelpful",
            "type": "event"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_reportId",
                    "type": "uint256"
                }
            ],
            "name": "markHelpful",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "reporter",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "latitude",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "longitude",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "message",
                    "type": "string"
                }
            ],
            "name": "newReport",
            "type": "event"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "deployer",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "noOfReports",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "Reports",
            "outputs": [
                {
                    "internalType": "address payable",
                    "name": "Reporter",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "latitude",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "longitude",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "message",
                    "type": "string"
                },
                {
                    "internalType": "bool",
                    "name": "helped",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "rewardValue",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ],
    contract_addr: "0xb8cc19322972c45174b4fbe68b051fa672aeb2f2",
    contract: null,
    web3Provider: null,
    defaultAddress: null,
 

    report: function(e) {
        e.preventDefault(); // stop normal action for button
        $('#report').attr('disabled', 'disabled');

        if (App.contract == null) {
            App.initContract();
            console.log("contract initialised.")
        }

        if (App.defaultAddress == null || App.defaultAddress === "") {
            web3.eth.getAccounts((err, res) => {

                // wait for the response from ethereum network
                console.log(res);
                if (!err && res.length > 0) {     // proceed on success
                    console.log("default address initialised");
                    App.defaultAddress = res[0];
                    // strictly call the contract method here
                    // this is a best way to go
                    // we are sure the address is successfully initialised
                    

                    App.contract.methods.addReport(11,11, "hello").send({
                                from: App.defaultAddress,
                                gas: 1500000
                            },
                        (err, res) => {
                            if (err) {
                                console.log(err.toString());
                            } else {
                                //  initialise dagger listener on successful txRequest
                                console.log(res);
                            }
                        });
                } else {
                    // log the error
                    console.log(err);
                }
            })
        }
    },

    web3init: function() {
        console.log("initialising...")
        if (typeof web3 !== undefined) {
            App.web3Provider = web3.currentProvider;
            web3 = new Web3(web3.currentProvider);
            console.log("done");
        } else {
            console.log("manual initialisation...");
            // If no injected web3 instance is detected, fallback to the TestRPC.
            App.web3Provider = new web3.providers.HttpProvider('https://api.infura.io/v1/jsonrpc/ropsten');
            web3 = new Web3(App.web3Provider);
        }

        // ask for permission/login to metamask
        if (typeof window.ethereum !== 'undefined'
            || (typeof window.web3 !== 'undefined')) {

            // Web3 browser user detected. You can now use the provider.
            const provider = window['ethereum'] || window.web3.currentProvider
        }

        return App.bindMethods();   // return the bindMethod
                                    // binds the function with click events
    },

    bindMethods: function() {
        $(document).on("click", "#report", App.report);
    },

    initContract: function() {
        App.contract = new web3.eth.Contract(App.contract_abi, App.contract_addr, {});
    }
}

$(function() {
    $(window).on("load", () => {    // strictly use this method for detection
        App.web3init();

        // initialise disabled fields
        navigator.geolocation.getCurrentPosition((pos) => {
            $("#longinput").val(pos.coords.longitude);
            $("#latinput").val(lat = pos.coords.latitude);
        });

        $("#timeinput").val((new Date()).getTime());
    });
});