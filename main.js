var reservations = {
    'Bob': { claimed: false },
    'Ted': { claimed: true }
}

//var name = prompt('Please enter the name for your reservation');

var claimReservation = function () {

    var exist = false;
    var array = Object.keys(reservations); // array of the keys (which are the names..)
    var name = document.getElementById('idName').value;

    if (name === '') {
        document.getElementById('status').innerHTML = "please enter your name";
        return;
    }


    //for (var n = 0; n < array.length && !exist; n++)
    for (var n in array)
        if (array[n].toLowerCase() == name.toLowerCase()) {
            //exist = true;
            if (reservations[array[n]].claimed) // the reservation claimed
                // alert("Hi, "+name+" .Your reservation already claimed");
                document.getElementById('status').innerHTML = "Hi, " + name + " .Your reservation already claimed";

            else // the reservation unclaimed
                //alert("Welcome "+name);
                document.getElementById('status').innerHTML = "welcome " + name;

            return;
        }

    // if (!exist)
    // if the reservation doesnt exists
    {
        console.log("Hi, " + name + " there is no reservation under your name");
        reservations[name] = { claimed: true };
        // alert(name +" ,we set new reservation for you!");
        document.getElementById('status').innerHTML = "Hi, " + name + " there is no reservation under your name \n"
            + ",we set new reservation for you!";
    }
};

//claimReservation();
document.getElementById('btnSearch').onclick = claimReservation;









//example check
/*
var user ={ "1": 33,
"2": 44};
var b= Object.keys(user);
for (var u in b)
 if (b[u] == "2")
    console.log( '2 nimza');
*/