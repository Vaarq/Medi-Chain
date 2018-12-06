pragma solidity ^0.4.25;

contract test {

	mapping(address => string) doc;
	mapping(address => string) alleg;
	mapping(address => string) everything;
		
    function set(string docname, string allegeries, string every) public {
		doc[msg.sender] = docname;
		alleg[msg.sender] = allegeries;
		everything[msg.sender] = every;
    }

    function get() public view returns (string) {
        return doc[msg.sender];
    }
	
	function getadd() public view returns (address) {
		return this;
	}
	
	
}
