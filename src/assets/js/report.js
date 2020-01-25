var txID = null;
var contract_abi = [
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
]
var contract_addr = "0xb8CC19322972c45174B4fbE68b051Fa672Aeb2F2"
var Dagger = window.Dagger;
var web3Contract;
var default_acc = "0x212f524911e829889bf160d3b045C0b3505FCC08";

// connect to Dagger ETH main network (network id: 1) over web socket
var dagger = new Dagger("wss://alpha.matic.mainnet.dagger.matic.network"); // dagger server

// Use mqtt protocol for node (socket)
// var dagger = new Dagger('mqtts://mainnet.dagger.matic.network'); // dagger server

App = {
    web3Provider: null,
    contracts: {},

    report: function(event) {
        event.preventDefault();console.log("jj")
        $('#report').attr('disabled', 'disabled');
        web3.eth.sendTransaction({
                from: default_acc,
                to: contract_addr,
                value: web3.toWei(0.0001, 'ether')
            },  // callback function for dagger
            function(error, result) {
                if (!error) {
                    txID = result;
                    postTx(txID);
                    monitor();
                } else {
                    console.log(error);
                    alert("" + error);
                }
            })
    },

    initWeb3: async function() {

        // set matic-test network as default provider
        console.log("Working on  https://alpha.ethereum.matic.network.");
        App.web3Provider = new web3.providers.HttpProvider(" https://alpha.ethereum.matic.network");

        // sanity check for web3-provider
        if (typeof web3 !== undefined) {
            console.log("Done!")
        } else {
            console.log("Error: Could not initialise web3 provider.");
            console.log("Retrying...");
            App.web3Provider = new web3.providers.HttpProvider(" https://alpha.ethereum.matic.network");
        }

        if (typeof web3 === undefined) {
            console.log("still not initialised");
        }
        web3 = new Web3(App.web3Provider);
        web3Contract = new web3.eth.contract(contract_abi, contract_addr, null);
        // web3.eth.getAccounts((err, res) => {
        //     default_acc = res[0];
        //     console.log(res.toString());
        // });

        return await App.bindEvents();
    },

    bindEvents: function() {
        $(document).on('click', '#report', App.report);
    }
}

// sleep time expects milliseconds
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

// monitor the transaction with dagger client-browser
async function monitor() {

    // dagger contract
    var contract = dagger.contract(web3Contract)
    var filter = contract.events.Execution({
        room: 'latest'
    })

    // watch
    filter.watch(function(data, removed) {
        console.log('New transaction detected...')
        processEvent(web3Contract, data)
    })

// // get new block as soon as it gets created
//     dagger.on("latest:block", function(result) {
//         console.log("New block created: ", result);
//     });
//
// // get only block number (as it gets created)
//     dagger.on("latest:block.number", function(result) {
//         console.log("Current block number: ", result);
//     });

}

// post the transaction for logging in server
function postTx() {
    var data = JSON.stringify({
        "account": default_acc,
        "txid": txID
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.open('POST', 'posttx');
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);
}

$(function() {
    $(window).on("load", function() {
        App.initWeb3();
    });

    // $("#report").on("click", function(event) {
    //     event.preventDefault();console.log("jj")
    //     $('#report').attr('disabled', 'disabled');
    //     web3.eth.sendTransaction({
    //             from: default_acc,
    //             to: contract_addr,
    //             value: web3.toWei(0.0001, 'ether')
    //         },  // callback function for dagger
    //         function(error, result) {
    //             if (!error) {
    //                 txID = result;
    //                 console.log("monitor"+result.toString());
    //                 // postTx(txID);
    //                 monitor();
    //             } else {
    //                 console.log(error);
    //                 alert("" + error);
    //             }
    //         })
    // })
});