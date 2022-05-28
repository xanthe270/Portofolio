var todayDate = document.getElementById("todaysdate");
var todoButton = document.getElementById("whattodo");



todoButton.addEventListener("click", displayActivity);



var d = new Date();

displayDate();

function displayDate() {
    todayDate.innerHTML = d;
    todayDate.innerHTML = d.toDateString();
}

function displayActivity() {

    var dayOfWeek = d.getDay();

    var youShould;

    switch (dayOfWeek) {
        case 0:
            youShould = "Your life isn't yours if you always care what other think.";
            break;
        case 1:
            youShould = "Focus on growth rather than perfection!";
            break;
        case 2:
            youShould = "Be such a beutiful soul that people crave your vibes";
            break;
        case 3:
            youShould = "To fall in love with yourself is the first secret to happiness";
            break;
        case 4:
            youShould = "Never put the key to your happiness in somebody else's pocket";
            break;
        case 5:
            youShould = "Sometimes the people you wanted as part of your story are only meant to be a chapter.";
            break;
        case 6:
            youShould = "Don't judge a situation you've never been in.";
            break;
        default:
            youShould = "Error! I don't know this value. Try again please!";
            break;
    }

    document.getElementById("thingToDo").innerHTML = youShould;
}
var whatIsTheMonth = document.getElementById("themonthdate");
var monthButton = document.getElementById("whatisthemonth");

monthButton.addEventListener("click", displayMonth);

function displayMonth() {
    var dayOfMonth = d.getMonth();

    var quoteOfMonth;

    switch (dayOfMonth) {
        case 0:
            quoteOfMonth = "We will open the book. Its pages are blank. We are going to put words on them ourselves.";
            break;
        case 1:
            quoteOfMonth = "It's a slow process. But quitting won't speed it up.";
            break;
        case 2:
            quoteOfMonth = "No one can make you feel inferior without your consent.";
            break;
        case 3:
            quoteOfMonth = "Some of the worst mistakes in my life were haircuts.";
            break;
        case 4:
            quoteOfMonth = "Style is knowing who you are, what you want to say and not giveing a damn.";
            break;
        case 5:
            quoteOfMonth = "There is nothing stronger than a broken person who has rebuilt herself.";
            break;
        case 6:
            quoteOfMonth = "If you can't be better than your competition, just dress better.";
            break;
        case 7:
            quoteOfMonth = "Fashion is not nesccessarily about labels. It's not about brands. It's about something else that comes from within.";
            break;
        case 8:
            quoteOfMonth = "The only person you are destined to become is the person you decide to be.";
            break;
        case 9:
            quoteOfMonth = "There's so much more to explore in this world, and you have everything to discover something new this month.";
            break;
        case 10:
            quoteOfMonth = "Nothing will work, unless you do.";
            break;
        case 11:
            quoteOfMonth = "Start where you are. Use what you have. Do what you can.";
            break;
        default:
            quoteOfMonth = "Error! I don't know this month.";
            break;
    }

    document.getElementById("secondThing").innerHTML = quoteOfMonth;
}