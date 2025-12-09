function DecorationName()
{
    let firstName = document.getElementById("input-first-name").value;
    let lastName  = document.getElementById("input-last-name").value;
    
    let divElement = document.createElement("div");
    let pFirstNameElement = document.createElement("p");
    let pLastNameElement = document.createElement("p");

    divElement.setAttribute('class', 'div-Style');
    pFirstNameElement.setAttribute('class', "first-name");
    pLastNameElement.setAttribute('class', 'last-name');

    pFirstNameElement.textContent = firstName;
    pLastNameElement.textContent = lastName;

    divElement.appendChild(pFirstNameElement);
    divElement.appendChild(pLastNameElement);
    
    document.body.appendChild(divElement);
}