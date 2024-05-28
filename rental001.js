cars = [
    {
        make: "Toyota",
        model: "Camry",
        year: 2022,
        rentalRatePerDay: 45, // in dollars
        availability: true
    },
    {
        make: "Ford",
        model: "Fusion",
        year: 2021,
        rentalRatePerDay: 40, // in dollars
        availability: false
    },
    {
        make: "Chevrolet",
        model: "Malibu",
        year: 2022,
        rentalRatePerDay: 50, // in dollars
        availability: true
    },
    {
        make: "Honda",
        model: "Accord",
        year: 2023,
        rentalRatePerDay: 47, // in dollars
        availability: true
    }
]

isAvailable = () => {
    event.preventDefault()
    let logMake = document.getElementById("make").value
    let logModel = document.getElementById("model").value
    let logYear = document.getElementById("year").value

    for (i = 0; i < cars.length; i++) {
        if (logMake == cars[i].make && logModel == cars[i].model && logYear == cars[i].year) {
            // Nested if loop to test if car true or false. 
            if (cars[i].availability == true) {
                // Checks if available, system will show price and availability
                document.getElementById("checking4Car").innerHTML = `<h4 style="color: green">Car is available to Rent Now! </h4>`
                document.getElementById("cost").innerHTML = `<h4 style="color: "green"> $${cars[i].rentalRatePerDay}.00 per day</p>`
            
                break
            } else if (logMake == cars[i].make && logModel == cars[i].model && logYear == cars[i].year && cars[i].availability == false) {
                // system will say car is not available but will still display the price for next time user is wondering about car
                document.getElementById("checking4Car").innerHTML = `<p style="color: red">Car is no longer available! </p>`
                document.getElementById("cost").innerHTML = `<p style="color: red">Try again next time, estimated price $${cars[i].rentalRatePerDay} </p>`
                break
            } else {
                // If user inputs data not available in array
                document.getElementById("checking4Car").innerHTML = `<p style="color: red">Car is not available here! Try another input. </p>`
                document.getElementById("cost").innerHTML = `<p style="color: red">Price unavailable! </p>`
            }   
        }
    } 
    // if () {
    //     document.getElementById("checking4Car").innerHTML = `<p style="color:red">Incorrect input</p>`
    // }
    
}