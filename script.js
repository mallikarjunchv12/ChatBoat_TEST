let employees =[{"id":1,"fullname":"Ankita Mandal","DESIGNATION":"senior analyst","DOMAIN":"telecom","NEW_SKILL":"framework","ROLE":"developer","SKILL":"mobile applications","SOFT_SKILL":"decision making","WORK_EXPERIENCE":"2 year","PERSONAL_DETAILS":""},{"id":2,"fullname":"Chanchal netam","DESIGNATION":"software engineer","DOMAIN":"engineering","NEW_SKILL":"microsoft_sql_server","ROLE":"Ui developer","SKILL":"visual studio","SOFT_SKILL":"communication_skills","WORK_EXPERIENCE":"3 year","PERSONAL_DETAILS":""}]


// All Employees
let allEmpBtn = document.querySelector('#all-emp-btn');
allEmpBtn.addEventListener('click',function() {
    displayEmployees(employees);
});

//Designation
function GetSelectedDesig(){
	var des = document.getElementById('selectDesignation');
	var resultdes = des.options[des.selectedIndex].text;
	let EmpDesignation = employees.filter((employee) => {
		return employee.DESIGNATION === resultdes.toLowerCase();
		}); 
		displayEmployees(EmpDesignation);
}




//skill
function GetSelectedSkill(){
	var s = document.getElementById('selectSkill');
	var results = s.options[s.selectedIndex].text;
	let SkillEmployees = employees.filter((employee) => {
		return employee.SKILL === results.toLowerCase();
		}); 
		displayEmployees(SkillEmployees);
}


// Work Experience

				function GetSelectedWork(){
				var e = document.getElementById("selectWorkexp");
				var resultwe = e.options[e.selectedIndex].text;
				let ExpEmployees = employees.filter((employee) => {
                 return employee.WORK_EXPERIENCE === resultwe;
				 
    }); 
			 displayEmployees(ExpEmployees);
			}
//Domain
function GetSelectedDomain(){
    var d = document.getElementById("selectDom");
    var resultd = d.options[d.selectedIndex].text;
    let DomainEmployees = employees.filter((employee) => {	
	return employee.DOMAIN === resultd.toLowerCase();  
}); 
 displayEmployees(DomainEmployees); 
} 

// Employee Search
let searchBox = document.querySelector('#searchText');
let resultsDiv = document.querySelector('#results');
searchBox.addEventListener('keyup',function() {
   let textEntered = searchBox.value;
    if(textEntered.length > 0){
   let targetEmployees = employees.filter((employee) => {	
			let Emp_name = employee.fullname.toUpperCase().startsWith(textEntered.toUpperCase());
            return Emp_name;
			}); 	
        displayEmployees(targetEmployees);
        let noOfRecords = targetEmployees.length;
        resultsDiv.innerHTML = `<p>The Results Found <span>${noOfRecords}</span></p>`;
    }
    else {
        document.querySelector('#table_body').innerHTML = '';
        resultsDiv.innerHTML = '';
    }

});

// display Employees
let displayEmployees = (employees) => {
    let tableBody = document.querySelector('#table_body');
    let tableRow = '';
    for(let employee of employees){
        tableRow += `<tr>
                        <td>${employee.id}</td>
                        <td>${employee.fullname}</td>
                        <td>${employee.DESIGNATION}</td>
                        <td>${employee.DOMAIN}</td>
                         <td>${employee.NEW_SKILL}</td>
						   <td>${employee.ROLE}</td>
						     <td>${employee.SKILL}</td>
							   <td>${employee.SOFT_SKILL}</td>
							     <td>${employee.WORK_EXPERIENCE}</td>
								 <td><a href="candidatepage.html" class="btn btn-primary" id="">View</a></td>
                    </tr>`;
    }
    tableBody.innerHTML = tableRow;
};