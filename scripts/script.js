function get_answer(number)
{
    let answers =
        ["The Greenwich Tea Party occurred on December 22, 1774.",
        "The tea was 'consumed with fire.'",
        "Fithian's journal only says 'persons in disguise', but does not say how.",
        "There are conflicting accounts as to where the tea was stored.<br>Fithian's journal states Dan Bowen's whereas a 1930 letter claims David Sutton's.",
        "The Greenwich Tea Burning Monument was unveiled on September 30, 1908.",
        ]
    return answers[number];
}

function check_answer(number)
{

    let choice = document.getElementsByName(`${number}`);
    let check = document.getElementById(`${number}-`);
    let correct = false;
    let answer = document.getElementById(`${number}a`);


    for(let i = 0; i < choice.length; i++)
    {
        let innerHTML = "";
        if(choice[i].checked && !choice[i].value)
        {
            correct = true;
            check.innerHTML = "Correct!"
            check.style.color = "green";
            break;
        }
    }
    if(!correct)
    {
        check.innerHTML = "Incorrect!"
        check.style.color = "red";
    }
    check.style.marginLeft = "30%";
    
    answer.innerHTML = get_answer(number);
    answer.style.color = "blue";
    answer.style.marginLeft = "30%";
}

