// Write your code in this file!

function scuberGreetingForFeet(distance) {

  if (distance <= 400) {
    return "This one is on me!";
  } else if (distance > 1999 && distance < 2501) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {

  if (city === "NYC") {
    return "Ok, sounds good.";
  } else if (city != "NYC") {
    return "No go.";
  }
}
