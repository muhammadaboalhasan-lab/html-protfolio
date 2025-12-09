const SUBJECTS = [
  "English",
  "Math",
  "Physics",
  "Biology",
  "Chemistry",
  "History",
  "Geography",
  "Programming",
  "Art",
  "Sports"
];

const STUDENTS = [
  {
    firstName: "Michael",
    lastName: "Johnson",
    adress: "12 Oak Street, New York",
    grades: { English: 88, Math: 91, Physics: 79, Biology: 85, Chemistry: 82, History: 76, Geography: 80, Programming: 93, Art: 68, Sports: 77 }
  },
  {
    firstName: "Emily",
    lastName: "Clark",
    adress: "44 Pine Avenue, Los Angeles",
    grades: { English: 92, Math: 87, Physics: 90, Biology: 89, Chemistry: 91, History: 84, Geography: 86, Programming: 88, Art: 74, Sports: 81 }
  },
  {
    firstName: "Daniel",
    lastName: "Miller",
    adress: "7 River Road, Chicago",
    grades: { English: 75, Math: 80, Physics: 70, Biology: 72, Chemistry: 68, History: 78, Geography: 77, Programming: 82, Art: 63, Sports: 85 }
  },
  {
    firstName: "Sophia",
    lastName: "Anderson",
    adress: "19 Maple Street, Houston",
    grades: { English: 96, Math: 93, Physics: 88, Biology: 90, Chemistry: 94, History: 85, Geography: 88, Programming: 97, Art: 79, Sports: 73 }
  },
  {
    firstName: "Jacob",
    lastName: "Davis",
    adress: "3 Cedar Lane, Phoenix",
    grades: { English: 67, Math: 72, Physics: 69, Biology: 74, Chemistry: 70, History: 71, Geography: 75, Programming: 70, Art: 60, Sports: 68 }
  },
  {
    firstName: "Olivia",
    lastName: "Brown",
    adress: "88 Hill Street, Philadelphia",
    grades: { English: 81, Math: 76, Physics: 84, Biology: 79, Chemistry: 78, History: 73, Geography: 80, Programming: 88, Art: 70, Sports: 82 }
  },
  {
    firstName: "Ethan",
    lastName: "Wilson",
    adress: "52 Lake Road, San Antonio",
    grades: { English: 90, Math: 88, Physics: 92, Biology: 89, Chemistry: 87, History: 86, Geography: 84, Programming: 91, Art: 82, Sports: 75 }
  },
  {
    firstName: "Ava",
    lastName: "Martinez",
    adress: "27 Birch Street, San Diego",
    grades: { English: 73, Math: 70, Physics: 65, Biology: 69, Chemistry: 66, History: 72, Geography: 71, Programming: 74, Art: 59, Sports: 70 }
  },
  {
    firstName: "William",
    lastName: "Taylor",
    adress: "41 Sunset Boulevard, Dallas",
    grades: { English: 85, Math: 82, Physics: 87, Biology: 83, Chemistry: 86, History: 79, Geography: 81, Programming: 90, Art: 77, Sports: 80 }
  },
  {
    firstName: "Charlotte",
    lastName: "Moore",
    adress: "6 Forest Drive, San Jose",
    grades: { English: 78, Math: 74, Physics: 80, Biology: 76, Chemistry: 75, History: 70, Geography: 73, Programming: 82, Art: 66, Sports: 79 }
  }
];


const MAIN_CONRAINER = document.createElement('div');
MAIN_CONRAINER.setAttribute('class', 'MAIN_CONRAINER');


function PrintAllStudents(students)
{
    students.forEach(student => {

        const cardDivs = document.createElement('div');
        const firstNameDiv = document.createElement('div');
        const lastNameDiv = document.createElement('div');
        const addressDiv = document.createElement('div');
        const gradesDiv = document.createElement('div');
        const averageDiv = document.createElement('div');

        const firstNameElement = document.createElement('h3');
        const lastNameElement = document.createElement('h4');
        const adressElement = document.createElement('h5');
        //const gradeElement = document.createElement('span');
        const averageElement = document.createElement('span');

        cardDivs.setAttribute('class','cardDivs');
        firstNameDiv.setAttribute('class','firstNameDiv');
        lastNameDiv.setAttribute('class','lastNameDiv');
        addressDiv.setAttribute('class','addressDiv');
        gradesDiv.setAttribute('class','gradesDiv');
        averageDiv.setAttribute('class','averageDiv');

        firstNameElement.textContent = student.firstName;
        lastNameElement.textContent = student.lastName;
        adressElement.textContent = student.adress;
        
        let average = 0;

        SUBJECTS.forEach(subject => {
            const gradeElement = document.createElement('span');
            gradeElement.textContent = `${subject} : ${student.grades[subject]}`;

            average += student.grades[subject];

            gradesDiv.appendChild(gradeElement);

        });

        averageElement.textContent = `average : ${(average / SUBJECTS.length).toFixed(2)}`;

        firstNameDiv.appendChild(firstNameElement);
        lastNameDiv.appendChild(lastNameElement);
        addressDiv.appendChild(adressElement);
        averageDiv.appendChild(averageElement);

        cardDivs.appendChild(firstNameDiv);
        cardDivs.appendChild(lastNameDiv);
        cardDivs.appendChild(addressDiv);
        cardDivs.appendChild(gradesDiv);
        cardDivs.appendChild(averageDiv);

        MAIN_CONRAINER.appendChild(cardDivs);


    });

    document.body.appendChild(MAIN_CONRAINER);
}

PrintAllStudents(STUDENTS);