pragma solidity ^0.5.0;

contract TLR {
    
    address public deployer;
    
    constructor() public {
        
        deployer = msg.sender;
        
    }
    
    uint public noOfReports;
    
    struct Report{
        address payable Reporter;
        uint latitude;
        uint longitude;
        string message;
        bool helped;
    }
 
    //keep track of all the reports by a particular user
    //mapping(address => mapping(uint=>Report)) public ReportHub;



    mapping(uint => Report) public Reports;



 
    //event that will emit data on adding new report
    event newReport(address indexed reporter,uint latitude,uint longitude,string message);
    
    event markedHelpful(uint indexed reportId,uint latitude,uint longitude,string message);
    
    
     //add report to ReportHub
    function addReport(uint _latitude, uint _longitude,string memory message) public {
       
        Reports[noOfReports]=Report(msg.sender,_latitude,_longitude,message,false);
        noOfReports+=1;
        emit newReport(msg.sender,_latitude,_longitude,message);
        
        
    }
    
    
  
    
    
    //marks the report as helpful
    
    
    function markHelpful(uint _reportId) public {
        
        Reports[_reportId].helped=true;
        
        emit markedHelpful(_reportId,Reports[_reportId].latitude,Reports[_reportId].longitude,Reports[_reportId].message);


    }
    
    
    
    //incentivizing the users if the report has helped to solve the crime
    
    
    function giveIncentive(address _hero) public {
        
        //create ERC20 and use it as incentive
        
    
    }

    
}