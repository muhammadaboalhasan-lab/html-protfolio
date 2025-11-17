
const NORMAL_COLOR = 0; const ERROR_COLOR = 1; const CORRECT_COLOR = 2;
const EMPTY_INPUT = 0; const TEXT_LENGTH = 1; const ONLY_NUMBERS = 2; const ONLY_INTEGER = 3; const MAX_DIGITS = 4;const MAX_LETTER_DIGITS = 5; const ONLY_WORD = 6;
const ERROR_MESSAGES = ["Empty", "Length At less 9 digits", "Only Numbers", "Only Integer", "MAX Number Digits", "Max Letter Digits", "Only One Word"];

const PRIME = 1; const NOT_PRIME = 0;

let calcResultBox = document.getElementById("Result-Box_5");


let cardTemp = `<div class="div-main-style div_1">
                <div class="div-style">
                    <div class="header-style">
                        <h3>National ID</h3>
                        <p>Enter Your National ID</p>
                    </div>
                    <div class="div-input-style"><input id="input_div_1" class="input-style" type="text" placeholder="National ID"></div>
                    <div><input class="button-style" type="button" value="Check" onclick="NationalID()"></div>
                    <div id="Actions_ID" class="OrderList-style actions">
                        <ul id="UL-Actions">
                            <li>length 9 digits</li>
                            <li>only numbers</li>
                        </ul>
                    </div>
                    <div id="Result-Box" class="p-style"><p>Correct</p></div>
                </div>
            </div>`;

function GetElementByID(id)
{
    return document.getElementById(id);
}

/*for(let card = 0; card < 1; card++)
{
    GetElementByID("Main-Contaiber_ID").innerHTML += cardTemp;
}*/

function ReturnErrorColor(error_flag)
{
    return (error_flag == 0 ) ? "black" : ((error_flag == 1)? "Red" : "green");
}

function PrintErrorMessages(messages, error_flag, UL_Actions)
{
    let unOrderList = GetElementByID(UL_Actions);
    unOrderList.innerHTML = "";
    let maxIndex = messages.length;
    for(let i = 0; i < maxIndex; i++)
    {
        if(error_flag[i] == 1)
            unOrderList.innerHTML += `<li style="color:${ReturnErrorColor(error_flag[i])};">${messages[i]}</li>`;
    }
}

function CheckSpecialCharacters(text)
{
  const specialCharsRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/;
  return specialCharsRegex.test(text);
}

function IsThereAnyLetters(text)
{
    text = String(text);
    for(let i = 0; i < text.length; i++)
    {
        if((text[i] >= 'a' && text[i] <= 'z') || (text[i] >= 'A' && text[i] <= 'Z'))
            return true;

        if(CheckSpecialCharacters(text))
            return true;
    }
        return false;
}

function CheckingErrors(text, errorFlags, errorList, messagesList)
{
    let flag = false;
    let maxIndex = errorList.length;

    for(let i = 0; i < maxIndex; i++)
    {
        if(errorList[i] == EMPTY_INPUT)
        {
            if(text == "")
            {
                errorFlags[EMPTY_INPUT] = ERROR_COLOR;
                messagesList[EMPTY_INPUT] = ERROR_MESSAGES[EMPTY_INPUT];
                flag = true;
            }
        }
        else if(errorList[i] == TEXT_LENGTH)
        {
            if(text.length != 9)
            {
                errorFlags[TEXT_LENGTH] = ERROR_COLOR;
                messagesList[TEXT_LENGTH] = ERROR_MESSAGES[TEXT_LENGTH];
                flag = true;
            }
        }
        else if(errorList[i] == ONLY_NUMBERS)
        {
            if(IsThereAnyLetters(text))
            {
                errorFlags[ONLY_NUMBERS] = ERROR_COLOR;
                messagesList[ONLY_NUMBERS] = ERROR_MESSAGES[ONLY_NUMBERS];
                flag = true;
            }
        }
        else if(errorList[i] == ONLY_INTEGER)
        {
            if((parseFloat(text) - parseInt(text)) != 0)
            {
                errorFlags[ONLY_INTEGER] = ERROR_COLOR;
                messagesList[ONLY_INTEGER] = ERROR_MESSAGES[ONLY_INTEGER];
                flag = true;
            }
        }
        else if(errorList[i] == MAX_DIGITS)
        {
            if(text.length > 9)
            {
                errorFlags[MAX_DIGITS] = ERROR_COLOR;
                messagesList[MAX_DIGITS] = ERROR_MESSAGES[MAX_DIGITS];
                flag = true;
            }
        }
        else if(errorList[i] == MAX_LETTER_DIGITS)
        {
            if(text.length > 16)
            {
                errorFlags[MAX_LETTER_DIGITS] = ERROR_COLOR;
                messagesList[MAX_LETTER_DIGITS] = ERROR_MESSAGES[MAX_LETTER_DIGITS];
                flag = true;
            }
        }
        else if(errorList[i] == ONLY_WORD)
        {
            if(text.indexOf(" ") != -1)
            {
                errorFlags[ONLY_WORD] = ERROR_COLOR;
                messagesList[ONLY_WORD] = ERROR_MESSAGES[ONLY_WORD];
                flag = true;
            }

        }
    }

    return flag;
}

function PrimeStringName(status)
{
    return (status == PRIME)? "Prime" : "Not Prime";
}

function IsPrimeNumber(number)
{
    if( number <= 0)
    {
        console.log("the number have to be posisitive");
        return NOT_PRIME;
    }

    if(number == 1)
    {
        console.log("The number 1 is neither a prime number nor a composite number because it only has one factor.");
        return NOT_PRIME;
    }

    if(number == 2)
    {
        console.log("Prime");
        return PRIME;
    }

    let half = Math.round(number/2);

    for(let i = 2; i <= half; i++)
        if(number % i == 0)
            return NOT_PRIME;

    return PRIME;
}

function SpaceBetweenCapitalLetter(text)
{
    let result = "";
    
    for(let char = 0; char < text.length; char++)
    {
        result += (text[char] >= 'A' && text[char] <= 'Z')? " " + text[char] : text[char];
    }

    return result;
}

function RepeatedCharacter()
{
    let counter = 0;
    for(let i = 0; i < text.length; i++)
    {
        if(text[i] == charSet)
        counter++;
    }
}

function RepeatedSetCharacter(text, charSet)
{
    let counter = 0;
    for(let i = 0; i <= text.length; i++)
    {
        let flag = true;
        if(text[i] == charSet[0])
        {
            for(let j = 0; j < charSet.length; j++)
            {
                if(text[i+j] != charSet[j])
                {
                    flag = false;
                    break;
                }
            }

            if(flag)
                counter++;
        }
    }
    return counter;
}

function RepeatedChar(text, charSet)
{
    let counter = 0;
    text = String(text);
    let index;
    maxLoop = Math.round(text.length / charSet.length)
    if(charSet.length > 1)
    {
        for(let i = 0; i <= maxLoop; i++)
        {
            index = text.indexOf(charSet);
            if(index != -1)
            {
                counter++;
                text = text.substring(0, index) + text.substring((index + charSet.length), text.length);
                console.log(text);
            }
        }
    }
    else
    {
        for(let i = 0; i < text.length; i++)
        {
            if(text[i] == charSet)
            counter++;
        }
    }


    return counter;
}

function SortingText(text)
{
    let textResult = "";

    for(let index = ('a').charCodeAt(0); index <= ('z').charCodeAt(0); index++)
    {
        for(let i = 0; i < text.length; i++)
        {
            if(index == (text[i].toLowerCase()).charCodeAt(0))
            {
                textResult += text[i];
            }
        }
    }

    return textResult;
}

function CounterSpeacialCharacter(text)
{
    let specialCharacters = "+-*/";
    counter = 0;
    for(let i =0; i < specialCharacters.length; i++ )
    {
        for(let j = 0; j < text.length; j++)
        {
            if(text[j] == specialCharacters[i])
                counter++;
        }
    }

    return counter;
}

function CompareCharToOpt(char)
{
    return (char == '+' || char == '-' || char == '*' || char == '/');
}

function ReturnCharOpt(textContent)
{
    for(let i = 0; i < textContent.length; i++)
    {
        if(textContent[i] == '+')
            return i;
        else if(textContent[i] == '-')
            return i;
        else if(textContent[i] == '*')
            return i;
        else if(textContent[i] == '/')
            return i;
    }

    return -1;
}

function NationalID()
{
    let errorMessages = [""];
    let errorFlags = [0];
    let errorList = [EMPTY_INPUT, TEXT_LENGTH, ONLY_NUMBERS];
    let text = String(GetElementByID("input_div_1").value);
    let result_box = GetElementByID("Result-Box_1");
    let actionStyle = GetElementByID("Actions_ID_1");

    if(CheckingErrors(text, errorFlags, errorList, errorMessages))
    {
        actionStyle.style = `visibility:visible;`;
        PrintErrorMessages(errorMessages, errorFlags, "UL-Actions_1");
    }
    else
    {
        actionStyle.style = `visibility:hidden;`;
        result_box.style = "color: rgb(0, 255, 0);box-shadow: -1px 1px 1px 1px rgb(64, 255, 0);text-shadow: 1px 1px 1px black;";
    }
}

function PrimeNumbers()
{
    let errorMessages = [""];
    let errorFlags = [0];
    let errorList = [EMPTY_INPUT, ONLY_NUMBERS, ONLY_INTEGER, MAX_DIGITS];
    let text = String(GetElementByID("input_div_2").value);
    let result_box = GetElementByID("Result-Box_2");
    let reusltMessage = result_box.querySelector('p');
    let actionStyle = GetElementByID("Actions_ID_2");

    if(CheckingErrors(text, errorFlags, errorList, errorMessages))
    {
        actionStyle.style = `visibility:visible;`;
        PrintErrorMessages(errorMessages, errorFlags, "UL-Actions_2");
    }
    else
    {
        actionStyle.style = `visibility:hidden;`;
        reusltMessage.innerText = PrimeStringName(IsPrimeNumber(parseInt(text)));
        result_box.style = "color: rgb(0, 255, 0);box-shadow: -1px 1px 1px 1px rgb(64, 255, 0);text-shadow: 1px 1px 1px black;";
    }
}

function SpacingBetweenLetters()
{
    let errorMessages = [""];
    let errorFlags = [0];
    let errorList = [EMPTY_INPUT, MAX_LETTER_DIGITS];
    let text = String(GetElementByID("input_div_3").value);
    let result_box = GetElementByID("Result-Box_3");
    let reusltMessage = result_box.querySelector('p');
    let actionStyle = GetElementByID("Actions_ID_3");

    if(CheckingErrors(text, errorFlags, errorList, errorMessages))
    {
        actionStyle.style = `visibility:visible;`;
        PrintErrorMessages(errorMessages, errorFlags, "UL-Actions_3");
    }
    else
    {
        actionStyle.style = `visibility:hidden;`;
        reusltMessage.innerText = SpaceBetweenCapitalLetter(text);
        result_box.style = "color: rgb(0, 255, 0);box-shadow: -1px 1px 1px 1px rgb(64, 255, 0);text-shadow: 1px 1px 1px black;";
    }
}

function RepeatedDigitSet()
{
    let errorMessages = [""];
    let errorFlags = [0];
    let errorList = [EMPTY_INPUT];
    let text = String(GetElementByID("input_div_4").value);
    let set = String(GetElementByID("input_div_4_2").value);
    let result_box = GetElementByID("Result-Box_4");
    let reusltMessage = result_box.querySelector('p');
    let actionStyle = GetElementByID("Actions_ID_4");


    if(CheckingErrors(text, errorFlags, errorList, errorMessages))
    {
        actionStyle.style = `visibility:visible;`;
        PrintErrorMessages(errorMessages, errorFlags, "UL-Actions_4");
    }
    else
    {
        actionStyle.style = `visibility:hidden;`;
        reusltMessage.innerText = RepeatedSetCharacter(text, set);
        result_box.style = "color: rgb(0, 255, 0);box-shadow: -1px 1px 1px 1px rgb(64, 255, 0);text-shadow: 1px 1px 1px black;";
    }
}

function SortMethod()
{
    let errorMessages = [""];
    let errorFlags = [0];
    let errorList = [EMPTY_INPUT, ONLY_WORD];
    let text = String(GetElementByID("input_div_6").value);
    let result_box = GetElementByID("Result-Box_6");
    let reusltMessage = result_box.querySelector('p');
    let actionStyle = GetElementByID("Actions_ID_6");

    if(CheckingErrors(text, errorFlags, errorList, errorMessages))
    {
        actionStyle.style = `visibility:visible;`;
        PrintErrorMessages(errorMessages, errorFlags, "UL-Actions_6");
    }
    else
    {
        actionStyle.style = `visibility:hidden;`;
        reusltMessage.innerText = SortingText(text);
        result_box.style = "color: rgb(0, 255, 0);box-shadow: -1px 1px 1px 1px rgb(64, 255, 0);text-shadow: 1px 1px 1px black;";
    }
}

function Calc_button_1()
{
    let value_1 = GetElementByID("button_1_ID").value;
    let reusltMessage = calcResultBox.querySelector('p');
    reusltMessage.innerText += value_1;
}

function Calc_button_2()
{
    let value_1 = GetElementByID("button_2_ID").value;
    let reusltMessage = calcResultBox.querySelector('p');
    reusltMessage.innerText += value_1;
}
function Calc_button_3()
{
    let value_1 = GetElementByID("button_3_ID").value;
    let reusltMessage = calcResultBox.querySelector('p');
    reusltMessage.innerText += value_1;
}
function Calc_button_4()
{
    let value_1 = GetElementByID("button_4_ID").value;
    let textContent = String(calcResultBox.querySelector('p').textContent);
    let reusltMessage = calcResultBox.querySelector('p');
    let optIndex = ReturnCharOpt(textContent);
    
    if(optIndex != -1)
        textContent += value_1;

    if(CounterSpeacialCharacter(textContent) >=2 && !CompareCharToOpt(textContent[textContent.length - 2]))
    {
        reusltMessage.innerText = textContent.substring(0, textContent.length - 1);
        return;
    }

    if(optIndex != -1)
    {
        reusltMessage.innerText = textContent.substring(0, optIndex) + value_1;
    }
    else
    {
        reusltMessage.innerText += value_1;
    }

}
function Calc_button_5()
{
    let value_1 = GetElementByID("button_5_ID").value;
    let reusltMessage = calcResultBox.querySelector('p');
    reusltMessage.innerText += value_1;
}
function Calc_button_6()
{
    let value_1 = GetElementByID("button_6_ID").value;
    let reusltMessage = calcResultBox.querySelector('p');
    reusltMessage.innerText += value_1;
}
function Calc_button_7()
{
    let value_1 = GetElementByID("button_7_ID").value;
    let reusltMessage = calcResultBox.querySelector('p');
    reusltMessage.innerText += value_1;
}
function Calc_button_8()
{
    let value_1 = GetElementByID("button_8_ID").value;
    let textContent = String(calcResultBox.querySelector('p').textContent);
    let reusltMessage = calcResultBox.querySelector('p');
    let optIndex = ReturnCharOpt(textContent);
    
    if(optIndex != -1)
        textContent += value_1;

    if(CounterSpeacialCharacter(textContent) >=2 && !CompareCharToOpt(textContent[textContent.length - 2]))
    {
        reusltMessage.innerText = textContent.substring(0, textContent.length - 1);
        return;
    }

    if(optIndex != -1)
    {
        reusltMessage.innerText = textContent.substring(0, optIndex) + value_1;
    }
    else
    {
        reusltMessage.innerText += value_1;
    }
}
function Calc_button_9()
{
    let value_1 = GetElementByID("button_9_ID").value;
    let reusltMessage = calcResultBox.querySelector('p');
    reusltMessage.innerText += value_1;
}
function Calc_button_10()
{
    let value_1 = GetElementByID("button_10_ID").value;
    let reusltMessage = calcResultBox.querySelector('p');
    reusltMessage.innerText += value_1;
}
function Calc_button_11()
{
    let value_1 = GetElementByID("button_11_ID").value;
    let reusltMessage = calcResultBox.querySelector('p');
    reusltMessage.innerText += value_1;
}
function Calc_button_12()
{
    let value_1 = GetElementByID("button_12_ID").value;
    let textContent = String(calcResultBox.querySelector('p').textContent);
    let reusltMessage = calcResultBox.querySelector('p');
    let optIndex = ReturnCharOpt(textContent);
    
    if(optIndex != -1)
        textContent += value_1;

    if(CounterSpeacialCharacter(textContent) >=2 && !CompareCharToOpt(textContent[textContent.length - 2]))
    {
        reusltMessage.innerText = textContent.substring(0, textContent.length - 1);
        return;
    }

    if(optIndex != -1)
    {
        reusltMessage.innerText = textContent.substring(0, optIndex) + value_1;
    }
    else
    {
        reusltMessage.innerText += value_1;
    }
}
function Calc_button_14()
{
    let value_1 = GetElementByID("button_14_ID").value;
    let reusltMessage = calcResultBox.querySelector('p');
    reusltMessage.innerText += value_1;
}

function Calc_button_16()
{
    let value_1 = GetElementByID("button_16_ID").value;
    let textContent = String(calcResultBox.querySelector('p').textContent);
    let reusltMessage = calcResultBox.querySelector('p');
    let optIndex = ReturnCharOpt(textContent);
    
    if(optIndex != -1)
        textContent += value_1;

    if(CounterSpeacialCharacter(textContent) >=2 && !CompareCharToOpt(textContent[textContent.length - 2]))
    {
        reusltMessage.innerText = textContent.substring(0, textContent.length - 1);
        return;
    }

    if(optIndex != -1)
    {
        reusltMessage.innerText = textContent.substring(0, optIndex) + value_1;
    }
    else
    {
        reusltMessage.innerText += value_1;
    }
}

function Calc_button_13()
{
    let value_1 = GetElementByID("button_13_ID").value;
    let reusltMessage = calcResultBox.querySelector('p');
    reusltMessage.innerText = "";
}

function Calc_button_15()
{
    //let value_1 = GetElementByID("button_15_ID").value;
    let textContent = String(calcResultBox.querySelector('p').textContent);
    let reusltMessage = calcResultBox.querySelector('p');

    if(textContent.indexOf('+') != -1)
    {
        reusltMessage.innerText = (Number(textContent.substring(0, textContent.indexOf('+'))) + Number(textContent.substring(textContent.indexOf('+') + 1, textContent.length)));
    }
    else if(textContent.indexOf('*') != -1)
    {
        reusltMessage.innerText = (Number(textContent.substring(0, textContent.indexOf('*'))) * Number(textContent.substring(textContent.indexOf('*') + 1, textContent.length)));
    }
    else if(textContent.indexOf('-') != -1)
    {
        reusltMessage.innerText = (Number(textContent.substring(0, textContent.indexOf('-'))) - Number(textContent.substring(textContent.indexOf('-') + 1, textContent.length)));
    }
    else if(textContent.indexOf('/') != -1)
    {
        let calcFxedResult = (Number(textContent.substring(0, textContent.indexOf('/'))) / Number(textContent.substring(textContent.indexOf('/') + 1, textContent.length)));


        if(calcFxedResult - parseInt(calcFxedResult) == 0)
        {
            reusltMessage.innerText = calcFxedResult;
        }
        else
        {
            if(String(calcFxedResult).length > 13)
            {
                reusltMessage.innerText = calcFxedResult.toFixed(13);
            }
            else
            {
                reusltMessage.innerText = calcFxedResult.toFixed(String(calcFxedResult).length);
            }
        }
    }
}