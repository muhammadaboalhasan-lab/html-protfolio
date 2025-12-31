let USERS_DATA =[];
const DATA_KEY = "Users";
const SESSION_KEY = "session_user_key"
const LAST_ID_KEY = "last_User_Id";
const PLAN_DATA_KEY = "plan_data";
const HASH_KEY = 13;

let signInSubmit   = document.getElementById('loginForm'            );
let signInEmail    = document.getElementById('login-email-id'       );
let signInPassword = document.getElementById('login-password-id'    );
let signInsubmit   = document.getElementById('login-submit-id'      );



let signUpSubmit = document.getElementById('SignUpForm');
let userName     = document.getElementById("signUp-userName-id"       );
let email        = document.getElementById("signUp-email-id"          );
let password     = document.getElementById("signUp-password-id"       );
let password2    = document.getElementById("signUp-repeat-password-id");
let select       = document.getElementById("datalist-courses"         );
let submit       = document.getElementById("signUp-submit-id"         );
let message;


let mainContent = document.getElementById("main-content-id");
let navbarContent = document.getElementById("navbar-auth-id");
let headerContent = document.getElementById("header-id");

let secondContent = document.getElementById("Second-content-id");




const listOfValues = ["id", "userName", "email", "password", "goal", "createdAt"];
const listOfPlanValues = ["day", "task", "timeMinutes", "sessions", "adjustedTimePerSession", "completed", "completedAt"];
const listOfTopics = ["JS","React","HTML","CSS"];

const learningGoalsTemp = JSON.parse(localStorage.getItem(PLAN_DATA_KEY)) || [
  {
    id: "js-fundamentals",
    title: "JavaScript Fundamentals",
    level: "Beginner",
    plan: [
      { day: 1, task: "Variables, Data Types, and Operators", timeMinutes: 40, availableMinutesPerDay: 0, sessions: 1, adjustedTimePerSession: 40, completed: false, completedAt: null },
      { day: 2, task: "Conditions and Loops", timeMinutes: 45, availableMinutesPerDay: 0, sessions: 1, adjustedTimePerSession: 45, completed: false, completedAt: null },
      { day: 3, task: "Functions and Scope", timeMinutes: 50, availableMinutesPerDay: 0, sessions: 1, adjustedTimePerSession: 50, completed: false, completedAt: null },
      { day: 4, task: "Arrays and Objects", timeMinutes: 50, availableMinutesPerDay: 0, sessions: 1, adjustedTimePerSession: 50, completed: false, completedAt: null },
      { day: 5, task: "Mini Practice Project", timeMinutes: 60, availableMinutesPerDay: 0, sessions: 1, adjustedTimePerSession: 60, completed: false, completedAt: null }
    ],
    collections : false
  },
  {
    id: "react-development",
    title: "React Development",
    level: "Intermediate",
    plan: [
      { day: 1, task: "React basics & JSX", timeMinutes: 45, availableMinutesPerDay: 0, sessions: 1, adjustedTimePerSession: 45, completed: false, completedAt: null },
      { day: 2, task: "Components & Props", timeMinutes: 50, availableMinutesPerDay: 0, sessions: 1, adjustedTimePerSession: 50, completed: false, completedAt: null },
      { day: 3, task: "State & Events", timeMinutes: 50, availableMinutesPerDay: 0, sessions: 1, adjustedTimePerSession: 50, completed: false, completedAt: null },
      { day: 4, task: "Hooks (useState, useEffect)", timeMinutes: 60, availableMinutesPerDay: 0, sessions: 1, adjustedTimePerSession: 60, completed: false, completedAt: null },
      { day: 5, task: "Build a small React app", timeMinutes: 75, availableMinutesPerDay: 0, sessions: 1, adjustedTimePerSession: 75, completed: false, completedAt: null }
    ],
    collections : false
  },
  {
    id: "html-semantics",
    title: "HTML & Semantics",
    level: "Beginner",
    plan: [
      { day: 1, task: "HTML structure & basic tags", timeMinutes: 30, availableMinutesPerDay: 0, sessions: 1, adjustedTimePerSession: 30, completed: false, completedAt: null },
      { day: 2, task: "Semantic elements (header, main, footer)", timeMinutes: 35, availableMinutesPerDay: 60, sessions: 1, adjustedTimePerSession: 35, completed: false, completedAt: null },
      { day: 3, task: "Forms & accessibility basics", timeMinutes: 40, availableMinutesPerDay: 0, sessions: 1, adjustedTimePerSession: 40, completed: false, completedAt: null },
      { day: 4, task: "SEO-friendly HTML", timeMinutes: 35, availableMinutesPerDay: 0, sessions: 1, adjustedTimePerSession: 35, completed: false, completedAt: null },
      { day: 5, task: "Build a semantic page", timeMinutes: 60, availableMinutesPerDay: 0, sessions: 1, adjustedTimePerSession: 60, completed: false, completedAt: null }
    ],
    collections : false
  },
  {
    id: "css-mastery",
    title: "CSS Mastery",
    level: "Intermediate",
    plan: [
      { day: 1, task: "Selectors & specificity", timeMinutes: 40, availableMinutesPerDay: 0, sessions: 1, adjustedTimePerSession: 40, completed: false, completedAt: null },
      { day: 2, task: "Flexbox", timeMinutes: 50, availableMinutesPerDay: 0, sessions: 1, adjustedTimePerSession: 50, completed: false, completedAt: null },
      { day: 3, task: "Grid layout", timeMinutes: 60, availableMinutesPerDay: 0, sessions: 1, adjustedTimePerSession: 60, completed: false, completedAt: null },
      { day: 4, task: "Responsive design", timeMinutes: 50, availableMinutesPerDay: 0, sessions: 1, adjustedTimePerSession: 50, completed: false, completedAt: null },
      { day: 5, task: "Style a full page", timeMinutes: 75, availableMinutesPerDay: 0, sessions: 1, adjustedTimePerSession: 75, completed: false, completedAt: null }
    ],
    collections : false
  }
];

function GetSessionData()
{
    return JSON.parse(sessionStorage.getItem(SESSION_KEY)) || {};
}

function SetSessionData(user)
{
    return sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
}


function GetData(datakey)
{
    return JSON.parse(localStorage.getItem(datakey)) || [];
}

function SaveData(users, dataKey)
{
    localStorage.setItem(dataKey, JSON.stringify(users));
}

class User
{
    static id = localStorage.getItem(LAST_ID_KEY) || 0;
    constructor(userName, email, password, goal)
    {
        this.id = "u_" + ++User.id;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.goal = goal;
        this.createdAt = new Date().toISOString();

        localStorage.setItem(LAST_ID_KEY, User.id);
    }

    get getUserDataOBJ()
    {
        let userObJ = {};
        listOfValues.forEach(val => {
            userObJ[val] = this[val];
        });

        return userObJ;
    };
}

function Hash(password, key)
{
    let chars = password.split('').map(char => {
        let code = char.charCodeAt(0) * key % 100;
        let base = 'A'.charCodeAt(0);
        let charResult = base + code;

        char = (charResult >= 'a'.charCodeAt(0) && charResult <= 'z'.charCodeAt(0)? String.fromCharCode(charResult) :
                charResult >= 'A'.charCodeAt(0) && charResult <= 'Z'.charCodeAt(0)? String.fromCharCode(charResult) : charResult );

        return char;
    });

    return chars.join('');
}

function UserDataOBJ(...dataList)
{
    const user = new User();

    for(let index in dataList)
    {
        user[listOfValues[Number(index) + 1]] = dataList[index];
    };

    return user;
}

function ElementCreator(element, eValue)
{
    let temp = document.createElement(element);
    temp.setAttribute('id', `id-${eValue}`);
    temp.setAttribute('class', `style-${eValue}`);

    return temp;
}



let activeSession = GetSessionData();

    function PrintData(data)
    {
        let inputGetTotalTime = document.getElementById('inputGetTotalTime-input-id');
        let divElementsList = [];
                data.forEach((learning, i) =>
                {
                    let divCardBodyList = [];

                    if(document.getElementById(`id-card-learning-goal-day-${i}`))
                    {
                        document.getElementById(`id-card-learning-goal-day-${i}`).innerHTML = "";
                    }

                    let divMainElement = document.getElementById(`id-card-learning-goal-day-${i}`) || ElementCreator('div', `card-learning-goal-day-${i}`);
                    let divCardHead = ElementCreator('div', `cardHead-learning-goal-day-${i}`);
                    let divCardBody = ElementCreator('div', `cardBody-learning-goal-day-${i}`);
                    let divCardFooter = ElementCreator('div', `cardFooter-learning-goal-day-${i}`);

                    let h3CardHead =  ElementCreator('p', `h3cardHead-learning-goal-day-${i}`);
                    let h4CardHead =  ElementCreator('p', `h4cardHead-learning-goal-day-${i}`);
                    let paragrahCardHead =  ElementCreator('p', `pcardHead-learning-goal-day-${i}`);

                    h3CardHead.textContent = learning.id;
                    h4CardHead.textContent = learning.level;
                    paragrahCardHead.textContent = learning.title;
                    divCardHead.append(h3CardHead, h4CardHead, paragrahCardHead);


                    learning.plan.forEach((lplan, j) =>
                    {
                        let dTaskCardBody = ElementCreator('p', `dTaskCardBody-cardHead-learning-goal-day-${j}`);
                        let ptask = ElementCreator('p', `ptask-cardHead-learning-goal-day-${j}`);
                        let ptaskTopic = ElementCreator('p', `ptaskTopic-cardHead-learning-goal-day-${j}`);
                        let ptaskTime = ElementCreator('p', `ptaskTime-cardHead-learning-goal-day-${j}`);
                        let pavailableMinutesPerDay = ElementCreator('p', `pavailableMinutesPerDay-cardHead-learning-goal-day-${j}`);
                        let ptaskSessions = ElementCreator('p', `ptaskSessions-cardHead-learning-goal-day-${j}`);
                        let ptaskAdjustedTimePerSession = ElementCreator('p', `ptaskAdjustedTimePerSession-cardHead-learning-goal-day-${j}`);
                        let ptaskcompleted = ElementCreator('p', `ptaskcompleted-cardHead-learning-goal-day-${j}`);
                        let ptaskCompletedAt = ElementCreator('p', `ptaskCompletedAt-cardHead-learning-goal-day-${j}`);
                        let ptaskButtonCompleting = ElementCreator('p', `collectionButton-cardHead-learning-goal-day-${j}`);
                        ptaskButtonCompleting.type = "button";
                        ptaskButtonCompleting.setAttribute('onclick', `collectionButton_cardHead_${j}(${j})`);
                        ptaskButtonCompleting.textContent = `Done`;

                        if(inputGetTotalTime.value > 0)
                        {
                            lplan.availableMinutesPerDay = inputGetTotalTime.value * 60;
                            let totalSession = Math.ceil(lplan.timeMinutes / (inputGetTotalTime.value * 60));
                            lplan.sessions = totalSession;
                            let remain = lplan.timeMinutes % lplan.availableMinutesPerDay;
                            let totalWithoutRemain = lplan.timeMinutes - remain;
                            let preSessions = [];

                            if(remain > 0)
                            {
                                for(let i = 1; i < lplan.sessions; i++)
                                {
                                    preSessions[(i-1)] = totalWithoutRemain / (lplan.sessions - 1);
                                }

                                preSessions[preSessions.length] = remain;
                                lplan.adj
                                ustedTimePerSession = preSessions;

                            }
                        }

                        ptask.textContent                       = `Day ${lplan.day}`;
                        ptaskTopic.textContent                  = `Task ${lplan.task}`;
                        ptaskTime.textContent                   = `Time ${lplan.timeMinutes} Mintues`;
                        pavailableMinutesPerDay.textContent     = `Available Time ${lplan.availableMinutesPerDay} Mintues`;
                        ptaskSessions.textContent               = `Session ${lplan.sessions}`;
                        ptaskAdjustedTimePerSession.textContent = `Pre Session ${lplan.adjustedTimePerSession} Mintues`;
                        ptaskcompleted.textContent              = `Completed ${lplan.completed}`;
                        ptaskCompletedAt.textContent            = `Completed At ${lplan.completedAt}`;

                        dTaskCardBody.append(ptask,ptaskTopic,ptaskTime, pavailableMinutesPerDay, ptaskSessions, ptaskAdjustedTimePerSession, ptaskcompleted, ptaskCompletedAt,ptaskButtonCompleting);
                        divCardBodyList.push(dTaskCardBody);
                    });


                    let collectionButton = ElementCreator('button', `collectionButton-cardHead-learning-goal-day-button-${i}`);
                    collectionButton.type = "button";
                    collectionButton.setAttribute('onclick', `collectionButton_day_${i}(${i})`);
                    collectionButton.textContent = (learning.collection)? `Done` : `Collect Task`;

                    divCardFooter.append(collectionButton);

                    divCardBody.append(...divCardBodyList);
                    divMainElement.append(divCardHead,divCardBody,divCardFooter);

                    divElementsList.push(divMainElement);
                });


                for(let i = 0; i < listOfTopics.length; i++)
                {
                    if(activeSession.goal === listOfTopics[i])
                    {
                        secondContent.append(divElementsList[i]);
                    }
                }
                //secondContent.append(...divElementsList);
    }

if(Object.keys(activeSession).length > 0)
{
    //console.log(activeSession);

    mainContent.style.display = "none";
    navbarContent.style.display = "none"
    
    /** @type {HTMLButtonElement} */
    let disconnectButton = document.createElement('button');
    disconnectButton.setAttribute('class', 'disconnect-button-style');
    disconnectButton.setAttribute('id', 'disconnect-button-id');
    disconnectButton.textContent = "disconnect";

    /** @type {HTMLDivElement} */
    let smallTextDiv = document.createElement('div');
    smallTextDiv.setAttribute('class', 'smallTextDiv-style');
    smallTextDiv.setAttribute('id', 'smallTextDiv-id');

     /** @type {HTMLParagraphElement} */
    let smallTextaragraph = document.createElement('p');
    smallTextaragraph.setAttribute('class', 'smallTextaragraph-style');
    smallTextaragraph.setAttribute('id', 'smallTextaragraph-id');
    smallTextaragraph.textContent = `Welcome back! Your ${activeSession.goal} is to become job-ready, let's continue your learning journey.`;

    /** @type {HTMLDivElement} */
    let createPlanDiv = document.createElement('div');
    createPlanDiv.setAttribute('class', 'createPlanDiv-style');
    createPlanDiv.setAttribute('id', 'createPlanDiv-id');

    /** @type {HTMLButtonElement} */
    let creatButton = document.createElement('button');
    creatButton.setAttribute('class', 'creatButton-button-style');
    creatButton.setAttribute('id', 'creatButton-button-id');
    creatButton.textContent = "Create Plan";

    /** @type {HTMLInputElement} */
    let inputGetTotalTime = document.createElement('input');
    inputGetTotalTime.type = "number";
    inputGetTotalTime.setAttribute('class', 'inputGetTotalTime-input-style');
    inputGetTotalTime.setAttribute('id', 'inputGetTotalTime-input-id');
    inputGetTotalTime.placeholder = "(in hours)";
    
    /** @type {HTMLLabelElement} */
    let lableGetTotalTime = document.createElement('label');
    lableGetTotalTime.setAttribute('class', 'lableGetTotalTime-input-style');
    lableGetTotalTime.setAttribute('id', 'lableGetTotalTime-input-id');
    lableGetTotalTime.setAttribute('for', 'inputGetTotalTime-input-id');
    lableGetTotalTime.textContent = "Daily study time";




    headerContent.innerHTML += `<h3 id="welcoming-id-message" class="welcoming-style-message">Welcome ${activeSession.userName}</h3>`
    headerContent.appendChild(disconnectButton);


    smallTextDiv.appendChild(smallTextaragraph);
    secondContent.appendChild(smallTextDiv);
    
    createPlanDiv.appendChild(lableGetTotalTime);
    createPlanDiv.appendChild(inputGetTotalTime);
    createPlanDiv.appendChild(creatButton);
    secondContent.appendChild(createPlanDiv);



    disconnectButton.addEventListener('click', ()=>
    {
        sessionStorage.clear();
        location.reload();
    });



    let data = GetData(PLAN_DATA_KEY) || [];

    if(data.length > 0)
    {
        PrintData(data);
    }

    creatButton.addEventListener('click', () =>
    {
            if(inputGetTotalTime.value != "")
            {
                PrintData(learningGoalsTemp);
            }
    });
    

}
else
{
    mainContent.style.display = "block";
    navbarContent.style.display = "block"

    const element = document.getElementById('welcoming-id-message');

    if(element)
        element.remove();
}

function UpdatePlan(val)
{
    let ptaskcompleted = document.getElementById(`id-ptaskcompleted-cardHead-learning-goal-day-${val}`)
    let ptaskCompletedAt = document.getElementById(`id-ptaskCompletedAt-cardHead-learning-goal-day-${val}`)
    let topicList = [];
    let topic = {};
    for(let i = 0; i < listOfTopics.length; i++)
    {
        if(listOfTopics[i] == activeSession.goal)
        {
            if(learningGoalsTemp[i].plan[val].completed)
                return;

            learningGoalsTemp[i].plan[val].completed = true;
            learningGoalsTemp[i].plan[val].completedAt = new Date().toISOString();
            ptaskcompleted.textContent = `Completed ${ learningGoalsTemp[i].plan[val].completed}`;
            ptaskCompletedAt.textContent = `Completed At ${ learningGoalsTemp[i].plan[val].completedAt}`;
            SaveData(learningGoalsTemp,PLAN_DATA_KEY);
        }
    }
    
    //topic.plan[val].completed = true;
    //topic.plan[val].completedAt = new Date().toISOString();
//
    //topicList.push(topic);
    //console.log(topic);
    //SaveData(topicList,PLAN_DATA_KEY);
}

function UpdateCollection(val)
{
    let button = document.getElementById(`id-collectionButton-cardHead-learning-goal-day-button-${val}`);
    let correctCounter = 0;
    let topicIndex;
    for(let topic = 0; topic < listOfTopics.length; topic++)
    {
        if(listOfTopics[topic] == activeSession.goal)
        {
            topicIndex = topic;
            flag = learningGoalsTemp[topic].plan.forEach(lplan => 
            {
                if(lplan.completed)
                    correctCounter++;
            }
            );
        }
    }

    if(correctCounter == learningGoalsTemp[topicIndex].plan.length)
    {
        learningGoalsTemp[topicIndex].collection = true;
        SaveData(learningGoalsTemp,PLAN_DATA_KEY);
        button.textContent = "Done";
    }
}

function collectionButton_cardHead_0(val)
{
    UpdatePlan(val);
}

function collectionButton_cardHead_1(val)
{
    UpdatePlan(val);
}

function collectionButton_cardHead_2(val)
{
    UpdatePlan(val);
}

function collectionButton_cardHead_3(val)
{
    UpdatePlan(val);
}

function collectionButton_cardHead_4(val)
{
    UpdatePlan(val);
}

function collectionButton_day_0(val)
{
    UpdateCollection(val);
}

function collectionButton_day_1()
{
    UpdateCollection(val);
}

function collectionButton_day_2()
{
    UpdateCollection(val);
}

function collectionButton_day_3()
{
    UpdateCollection(val);
}

function collectionButton_day_4()
{
    UpdateCollection(val);
}


signInEmail.addEventListener('input', () =>{
    setTimeout(() => {
        if(signInEmail.value != "")
        {
            if(!(String(signInEmail.value).includes('@')))
            {
                message = signInEmail.nextElementSibling;
                message.innerHTML = `missing <span style="color : red;">@</span>`;
            }
            else
            {
                message = signInEmail.nextElementSibling;
                message.textContent = "the email is correct";
            }
        }
        else
        {
            message = signInEmail.nextElementSibling;
            message.textContent = "";
        }
    }, 500);
});

signInPassword.addEventListener('input', () => {

    setTimeout( () => {
        if(signInPassword.value != "")
        {
            if(String(signInPassword.value).length < 6 || String(signInPassword.value).length > 24)
            {
                message = signInPassword.nextElementSibling;
                message.textContent = "The length shoud be between 6 and 16";
            }
            else
            {
                message = signInPassword.nextElementSibling;
                message.textContent = "";
            }
        }
        else
        {
            message = signInPassword.nextElementSibling;
            message.textContent = "";
        }
    }, 500);
});


signInSubmit.addEventListener('submit', (e) =>
{
    e.preventDefault();
    USERS_DATA = GetData(DATA_KEY);

    if(signInEmail.value != "" || signInPassword.value != "")
    {
        let user = USERS_DATA.find( u => u.email === signInEmail.value) || 0;
        //let isCorrectPass = ((user.password) || 0) === Hash(user.password, HASH_KEY);
        if(!user)
        {
            e.preventDefault();
            message = signInsubmit.nextElementSibling;
            message.textContent = "the email or the password not correct / Exits";
            return;
        }
        else
        {
            let hashedPassword = Hash(signInPassword.value, HASH_KEY);
            let isCorrectPass = ((user.password) || 0) === hashedPassword;

            if(isCorrectPass)
            {
                let newSessionInfo = {};
                listOfValues.forEach(val =>
                {
                    if(val != "password")
                    {
                        newSessionInfo[val] = user[val];
                    }
                });

                newSessionInfo.active = true;//"activeated";

                console.log(newSessionInfo);

                SetSessionData(newSessionInfo);
                let divNavForm = document.getElementById('navbar-auth-id');
                divNavForm.innerHTML = "";
                
                let loginUser = document.createElement('h3');
                loginUser.setAttribute('class', 'welcoming-style-message');
                loginUser.setAttribute('id',"welcoming-id-message");
                loginUser.textContent = `Welcome ${user.userName}`;
                divNavForm.append(loginUser);

                location.reload();
            }

        }
    }
});

userName.addEventListener('input', () =>
{
    setTimeout(() => {
        if(userName.value != "")
        {
            if(String(userName.value).length < 6 || String(userName.value).length > 24)
            {
                message = userName.nextElementSibling;
                message.textContent = "The User Name Should be between 6 and 24";
            }
            else
            {
                message = userName.nextElementSibling;
                message.textContent = "The User Name correct!";
            }
        }
        else
        {
            message = userName.nextElementSibling;
            message.textContent = "";
        }
    }, 500);
});

email.addEventListener('input', () =>
{
    setTimeout(() => {
        if(email.value != "")
        {
            if(!(String(email.value).includes('@')))
            {
                message = email.nextElementSibling;
                message.innerHTML = `missing <span style="color : red;">@</span>`;
            }
            else
            {
                message = email.nextElementSibling;
                message.textContent = "the email is correct";
            }
        }
        else
        {
            message = email.nextElementSibling;
            message.textContent = "";
        }
    }, 500);
});

password2.addEventListener('input', () => {
    setTimeout( () => {
        if(password.value != "" && password2.value != "")
        {
            message = password2.nextElementSibling;
            if(password.value != password2.value)
            {
                message = password2.nextElementSibling;
                message.textContent = "the password not match";
            }
            else
            {
                message = password2.nextElementSibling;
                message.textContent = "the password correct";
            }
        }
        else
        {
            message = password2.nextElementSibling;
            message.textContent = "";
        }
    }, 500);
});

signUpSubmit.addEventListener('submit', (e) =>
{

    if(userName.value != "" &&
       email.value    != "" &&
       password.value != "" &&
       select.value   != ""
    )
    {
        
        USERS_DATA = GetData(DATA_KEY);

        if(USERS_DATA.find(data => data.userName === userName.value || data.email === email.value))
        {
            e.preventDefault();
            message = submit.previousElementSibling;
            message.textContent = "The username or email are exits";
            return;
        }
        else
        {
            message = submit.previousElementSibling;
            message.textContent = "";
        }


        let user = UserDataOBJ(userName.value, email.value, Hash(password.value, HASH_KEY), select.value);
        USERS_DATA.push(user);
        SaveData(USERS_DATA, DATA_KEY);
        signUpSubmit.reset();

        signInSubmit.querySelectorAll("p").forEach(p => {
            p.textContent = "";
        });
    }
    else
    {
        message = submit.previousElementSibling;
        message.textContent = "Missing Filed";
    }
});


//let user = UserDataOBJ("ali", "gmail", "password", "goal");

//USERS_DATA.push(user);

//SaveData(USERS_DATA);


//console.log(GetData(DATA_KEY));
