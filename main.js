var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

var name = prompt('Please enter the name for your reservation');

var claimReservation = function () {

 var exist=false;
var array=Object.keys(reservations); // array of the keys (which are the names..)

 //for (var n in array)
 for(var n=0; n<array.length && !exist; n++)
    if (array[n].toLowerCase() == name.toLowerCase())
      { 
         exist=true;

         if (reservations[array[n]].claimed== true) // the reservation claimed
            alert("Hi, "+name+" .Your reservation already claimed");
  
        else // the reservation unclaimed
            alert("Welcome "+name);
      }

if (!exist) // if the reservation doesnt exists
      {
       console.log("Hi, "+ name+ " there is no reservation under your name");
       reservations[name]= {claimed: true};
       alert("we set new reservation for you!");
      }

  /*
  if (reservations[name]) // if the reservation exists
  {
    if (reservations[name].claimed== true) // the reservation claimed
           alert("Hi, "+name+" .Your reservation already claimed");
         
    else // the reservation unclaimed
           alert("Welcome "+name);
  }
  else // if the reservation doesnt exists
      { console.log("Hi, "+ name+ " there is no reservation under your name");
       reservations[name]= {claimed: true};
       alert("we set new reservation for you!");
      }
      */
}

claimReservation();


//example check
/*
var user ={ "1": 33,
"2": 44};
var b= Object.keys(user);
for (var u in b)
 if (b[u] == "2")
    console.log( '2 nimza');
*/