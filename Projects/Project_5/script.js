let students = [    {id : 1, firstName : "Muhammad", lastName: "Abo Al-Hasan", Address: "Kafr Qasim"},
                    {id : 2, firstName : "Ali", lastName: "Essa", Address: "Kafr Qasim"},
                    {id : 3, firstName : "Khaled", lastName: "Amer", Address: "Kafr Qasim"},
                    {id : 4, firstName : "Fatima", lastName: "Abo Al-Hasan", Address: "Kafr Qasim"}
];



function PrintAllStudentData(studentsArr)
{
    let table = document.getElementById("Table-ID");


    table.innerHTML = `<tr>
                        <th>First</th>
                        <th>Last</th>
                        <th>Address</th>
                        <th>Delete</th>
                    </tr>`;

    studentsArr.forEach((student) =>{
        table.innerHTML += `<tr>
        <td>${(student.firstName != undefined)? student.firstName : "Not Found"}</td>
        <td>${(student.lastName  != undefined)? student.lastName  : "Not Found"}</td>
        <td>${(student.Address   != undefined)? student.Address   : "Not Found"}</td>
        <td><button class="delete-input-style" ${(student.firstName != undefined)? '': 'disabled'} onclick="DeleteStudent('${student.firstName}')">DELETE</button></td>
        </tr>`;
    })
}


PrintAllStudentData(students);


function AddNewStudent()
{
    let firstNameText = String(document.getElementById("text-input-FirstName").value);
    let lastNameText = String(document.getElementById("text-input-lastName").value);
    let AddressText = String(document.getElementById("text-input-Address").value);
    let idInc;

    if(firstNameText != "" && lastNameText != "" && AddressText != "")
    {
        if(students[0].id != undefined)
        {
            idInc = students[students.length - 1].id + 1;
            students.push({id : idInc, firstName: firstNameText.toLowerCase(), lastName: lastNameText.toLowerCase(), Address : AddressText.toLowerCase()});
            PrintAllStudentData(students); 
        }
        else
        {
            idInc = 1;
            students = [{id : idInc, firstName: firstNameText.toLowerCase(), lastName: lastNameText.toLowerCase(), Address : AddressText.toLowerCase()}];
            PrintAllStudentData(students);
        }

    }

}

function Studentsearcher()
{
    let studentToFound = document.getElementById('text-input-name').value;
    let foundedStudent;

    if(studentToFound != "")
    {
        foundedStudent = students.filter(student => student.firstName.toLowerCase() === studentToFound.toLowerCase());
        if(foundedStudent.length > 0)
        {
            PrintAllStudentData(foundedStudent);
        }
        else
        {
            foundedStudent = students.filter(student => student.lastName.toLowerCase() === studentToFound.toLowerCase());
            
            if(foundedStudent.length > 0)
            {
                PrintAllStudentData(foundedStudent);
            }
            else
            {
                foundedStudent = [{}];
                PrintAllStudentData(foundedStudent);
            }
        }
    }
}

function AllStudents()
{
    PrintAllStudentData(students);
}

function DeleteStudent(studentName)
{
    students = students.filter(student => student.firstName != studentName);
    
    if(students.length > 0)
        PrintAllStudentData(students);
    else
    {
        students = [{}];
        PrintAllStudentData(students);
    }
}