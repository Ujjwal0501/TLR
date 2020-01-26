var map = null;
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
            "constant": false,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_reportId",
                    "type": "uint256"
                }
            ],
            "name": "voteReport",
            "outputs": [],
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
            "inputs": [],
            "name": "noOfUsers",
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
                    "internalType": "uint256",
                    "name": "votes",
                    "type": "uint256"
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
    contract_addr: "0x253aed1721ca3e1b8bc710e4785d071ecfad9911",
    contract: null,
    web3Provider: null,
    defaultAddress: null,
    dagger: null,
    reports: function() {
        console.log("reports");
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
                    App.contract.methods.Reports(11).call({from: App.defaultAddress},
                        (err, res) => {
                            if (err) {
                                console.log(err.toString());
                            } else {
                                // initialise dagger listener on successful txRequest
                                console.log(res);

                                for (var tx in res) {
                                    pinReports(tx["latitude"], tx["longitude"], tx["message"], tx["helped"]);
                                }
                            }
                        });
                } else {
                    // log the error
                    console.log(err);
                }
            })
        }
    },

    listenReports: function() {
        console.log("listenPorts");
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
                    App.dagger.on('latest:addr/'+App.contract_addr+'/tx', (transaction) => {

                        // Process transaction object
                        // pin on maps windows
                        console.log(transaction);
                        web3.eth.getBlock(transaction["blockNumber"], true, (err, res) => {
                            if (err) {
                                console.log(res);
                                pinReports(transaction["latitude"], transaction["longitude"], transaction["message"], transaction["helped"]);
                            } else {
                                console.log(err);
                            }
                        });
                    });
                } else {
                    // log the error
                    console.log(err);
                }
            })
        }
        return App.reports();
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

        // dagger initialisation
        App.dagger = new Dagger("wss://ropsten.dagger.matic.network");

        // initialise map
        var mapOptions = {
            zoom: 16,
            center: new google.maps.LatLng(13.017292, 74.7943167),
            scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
            styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]

        }
        map = new google.maps.Map(document.getElementById("map"), mapOptions);

        return App.listenReports();   // return the listenReports
                                    // binds the function with click events
    },

    initContract: function() {
        App.contract = new web3.eth.Contract(App.contract_abi, App.contract_addr, {});
    }
}

$(function() {
    $(window).on("load", () => {    // strictly use this method for detection
        App.web3init();
    });
});


function pinReports(lat, long, msg, type) {

    if (type) ic = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
    else ic = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
    var marker = new google.maps.Marker({
        icon: ic,
        position: new google.maps.LatLng(lat, long),
        title:"msg"
    });

    marker.setMap(map);
}