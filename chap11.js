var people = ["Mary", "Bobby", "Judy", "Eddie", "Herbie", "Tony", "Bobby"];
var otherPeople = ["Teddy", "Cathy", "G-berg", "Georgie"];
people = people.concat(otherPeople)
people = people.join(" # ")
document.getElementById("peopleIKnow").innerHTML = people.toString();
people.pop()
people = people.push("Teddy")