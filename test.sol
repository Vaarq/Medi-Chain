pragma solidity ^0.4.25;
pragma experimental ABIEncoderV2;

contract patient{

	struct doctor_t{
		address location;
		string name;
		string docemail;
		string everything;
		string year;
		string month;
		string day;
		string hour;
		string min;
	}
	struct patient_t {
		address virtual;
		string email;
		string pass;
		string name;
	}
	
	struct message{
		string docemail;
		string content;
		uint time;
	
	}
	mapping(string => message) meg;
	mapping(string => doctor_t) docrec;
	mapping(string => patient_t) pat;
	
	function setmsg(string e, string doc, string con) public {
		meg[e].docemail = doc;
		meg[e].content = con;
		meg[e].time = now;
	}
	
	function getmsg(string e) public view returns (string, string, uint){
		return (meg[e].docemail, meg[e].content, meg[e].time);
	}
	
	function verify(string a) public view returns (bool){
		return keccak256(a) == keccak256(pat[a].email);
	}
    function set(string e, string doce, string every) public {
		docrec[e].docemail = doce;
		docrec[e].everything = every;
	}
	function setdate(string e, string month, string day) public{
		docrec[e].month = month;
		docrec[e].day = day;
	}
	function settime(string e, string hour, string min) public{
		docrec[e].hour = hour;
		docrec[e].min = min;
	}
	function signup(string e, string p, string n) public{
		pat[e].email = e;
		pat[e].pass = p;
		pat[e].name = n;
	}
	function setadd(string e){
		pat[e].virtual = msg.sender;
	}
	function check(string e) public view returns (bool){
		return keccak256(e) == keccak256(pat[e].email);
	}
	function signin(string e, string p) public view returns (bool) {
		return keccak256(e) == keccak256(pat[e].email) && keccak256(p) == keccak256(pat[e].pass);
	}
	
    function get(string e) public view returns (string) {
        return pat[e].name;
    }
	function getpatientrec(string e) public view returns (string, string, string, string, string){
		return (pat[e].name, docrec[e].everything, docrec[e].month, docrec[e].day, docrec[e].hour);
	}
	
}

contract doctor{
  
	struct docinfo{
		address virtual;
		string email;
		string pass;
		string name;
	}
	struct message{
		string patmail;
		string content;
		uint time;
	
	}
	
	mapping(int8 => string) monster;
	int8 count = 0;
	mapping(string => docinfo) treater;
	mapping(string => string[]) doctopat;
	
	mapping(string => message) meg;
	
	function setmsg(string e, string doc, string con) public {
		meg[e].patmail = doc;
		meg[e].content = con;
		meg[e].time = now;
	}
	
	function getmsg(string e) public view returns (string, string, uint){
		return (meg[e].patmail, meg[e].content, meg[e].time);
	}
	
	function setinfo(string e, string p, string n) public{
		treater[e].email = e;
		treater[e].pass = p;
		treater[e].name = n;
	}
	function verify(string a) public returns (bool){
		return keccak256(a) == keccak256(treater[a].email);
	}

	function setadd(string e){
		treater[e].virtual = msg.sender;
		monster[count] = treater[e].email;
		count++;
	}
	function check(string e) public view returns (bool){
		return keccak256(e) == keccak256(treater[e].email);
	}
	function signin(string e, string p) public view returns (bool) {
		return keccak256(e) == keccak256(treater[e].email) && keccak256(p) == keccak256(treater[e].pass);
	}
	
	function getDoctor() public view returns (string, string){
		return (monster[0], monster[1]);
	}
	
	function setpat(string doc, string pat) public{
		doctopat[doc].push(pat);
		
	}
	function getdoctors()public view returns (string, string, string, string, string){
	
		return (monster[0], monster[1], monster[2], monster[3], monster[4]);
	
	}
	function getpat(string doc) public view returns (string[]){
		return (doctopat[doc]);
	}
	

	
}


