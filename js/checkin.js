var empName = document.getElementById('empName');
var empJob = document.getElementById('empJob');
var empRest = document.getElementById('empRest');
var empLoc = document.getElementById('empLoc');
var empNameValue = document.getElementById('empNameValue').value;
var empJobValue = document.getElementById('empJobValue');
var empRestValue = document.getElementById('empRestValue');
var empLocValue = document.getElementById('empLocValue');

// List of Companies
var companyListRaw = "HopCat | Applebee's | Fillin' Station | Bob's Burger Joint";
var companyList = companyListRaw.split(' | ');
companyList.sort();
var numberOfCompanies = companyList.length;

// List of Locations for Each Store
// HOPCAT
var hopcat    = "HC-001 | HC-002";
// APPLEBEES
var applebees = "Applebee's Detroit, MI | Applebee's Ann Arbor, MI";
// The Fillin' Station
var fillinstation = "Redford";
// Bob's Burger Joint
var bobsburgerjoint = "Store #12 | Store #120";

// Select and order location list
function orderLocList(a) {
	
	var locListSplit = a.split(' | ');
	var locListOutput = locListSplit.sort();
	//var numberOfLocations = locListOutput.length;
	return locListOutput;
}

// Populates the company options list
for (var i = 0; i < numberOfCompanies; i++) {
	var companyOptionNode = document.createElement('option');
	companyOptionNode.innerHTML = companyList[i];
	var lowerCase = companyList[i].toLowerCase();
	var splitOnSpace = lowerCase.split("'");
	var lowerCaseJoined = splitOnSpace.join('');
	var lowerCaseJoinedSplitOnSpace = lowerCaseJoined.split(' ');
	var noSpaces = lowerCaseJoinedSplitOnSpace.join();
	var noSpacesSplitOnComma = noSpaces.replace(/,/g, ''); 
	companyOptionNode.value = noSpacesSplitOnComma;
	empRestValue.appendChild(companyOptionNode);
}

function launchSlideShow(w,x,y,z) {
	if (x === 'other') {
		window.open("s1.html" + '?=' + y + '_' + z+ '_' + x + '_' + w);
	} else {
		window.open("m1.html" + '?=' + y + '_' + z+ '_' + x + '_' + w);
	}
	
}

function empLocValueCheck() {
	if (empLocValue.value === 'none') {
		submissionButton.innerHTML = 'PLEASE SELECT A LOCATION';
	}

	else {

		var finalEmpNameValue = document.getElementById('empNameValue').value;
		var finalEmpJobValue = document.getElementById('empJobValue').value;
		var finalEmpRestValue = document.getElementById('empRestValue').value;
		var finalEmpLocValue = document.getElementById('empLocValue').value;

		launchSlideShow(finalEmpNameValue, finalEmpJobValue, finalEmpRestValue, finalEmpLocValue);
	}
}

function empRestValueCheck() {

	empLocValue.innerHTML = '<option selected="selected" disabled="" value="none">Select One</option';

	if (empRestValue.value === 'none') {
		submissionButton.innerHTML = 'PLEASE SELECT A COMPANY';
	}

	else {
		empLoc.setAttribute('class', '');
		submissionButton.innerHTML = 'SELECT A STORE LOCATION';
		submissionButton.setAttribute('onclick', 'empLocValueCheck()');

		// When a new company is added, you must add an if else
		// statment with this code and the value of the empRestValue selected
    
    var locationOptionNode;
    var listOfLocations;
    
		if (empRestValue.value === 'hopcat') {
			listOfLocations = orderLocList(hopcat);
			
			for (var i = 0; i < listOfLocations.length; i++) {
				locationOptionNode = document.createElement('option');
				locationOptionNode.innerHTML = listOfLocations[i];
				empLocValue.appendChild(locationOptionNode);
			}		
		}

		else if (empRestValue.value === 'fillinstation') {
			listOfLocations = orderLocList(fillinstation);
			
			for (var i = 0; i < listOfLocations.length; i++) {
				locationOptionNode = document.createElement('option');
				locationOptionNode.innerHTML = listOfLocations[i];
				empLocValue.appendChild(locationOptionNode);
			}		
		}

		else if (empRestValue.value === 'bobsburgerjoint') {
			listOfLocations = orderLocList(bobsburgerjoint);
			
			for (var i = 0; i < listOfLocations.length; i++) {
				locationOptionNode = document.createElement('option');
				locationOptionNode.innerHTML = listOfLocations[i];
				empLocValue.appendChild(locationOptionNode);
			}		
		}

		else if (empRestValue.value === 'applebees') {
			listOfLocations = orderLocList(applebees);
			
			for (var i = 0; i < listOfLocations.length; i++) {
				locationOptionNode = document.createElement('option');
				locationOptionNode.innerHTML = listOfLocations[i];
				empLocValue.appendChild(locationOptionNode);
			}		
		}
	}
}

// Checks that a job has been selected
function empJobValueCheck() {

	empJobValue = document.getElementById('empJobValue').value;
	
	if (empJobValue === 'none') {
		submissionButton.innerHTML = 'PLEASE SELECT A TITLE';
	}

	else {
		empRest.setAttribute('class', '');
		submissionButton.innerHTML = 'SELECT A COMPANY ABOVE';
		submissionButton.setAttribute('onclick', 'empRestValueCheck()');
	}
}

function empNameValueCheck() {

	empNameValue = document.getElementById('empNameValue').value;

	// Does a check to see if a name has been entered
	if (empNameValue === "") {
		document.getElementById('submissionButton').innerHTML = "NO NAME ENTERED, TRY AGAIN";
	}

	else {
		empJob.setAttribute('class', '');
		submissionButton.setAttribute('onclick', 'empJobValueCheck()');
		submissionButton.innerHTML = 'SELECT YOUR TITLE ABOVE';
	}
}