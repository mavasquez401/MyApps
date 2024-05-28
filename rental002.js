
// if (localStorage.getItem("localUsers")) {
    //     console.log("Local users exist")
    //     let localUsersString = localStorage.getItem("localUsers") //saved in to LS as a string
    //     users = JSON.parse(localUsersString)
    // }
    
    // let localUsersObj = JSON.stringify(users)
    
    // isAvailable = () => {
//     event.preventDefault()
//     let logMake = document.getElementById("make").value
//     let logModel = document.getElementById("model").value
//     let logYear = document.getElementById("year").value

//     for (i = 0; i < cars.length; i++) {
//         if (logMake == cars[i].make && logModel == cars[i].model && logYear == cars[i].year) {
    //             // Nested if loop to test if car true or false. 
//             if (cars[i].availability == true) {
//                 // Checks if available, system will show price and availability
//                 document.getElementById("checking4Car").innerHTML = `<h4 style="color: green">Car is available to Rent Now! </h4>`
//                 document.getElementById("cost").innerHTML = `<h4 style="color: "green"> $${cars[i].rentalRatePerDay}.00 per day</p>`

//                 break
//             } else if (logMake == cars[i].make && logModel == cars[i].model && logYear == cars[i].year && cars[i].availability == false) {
//                 // system will say car is not available but will still display the price for next time user is wondering about car
//                 document.getElementById("checking4Car").innerHTML = `<p style="color: red">Car is no longer available! </p>`
//                 document.getElementById("cost").innerHTML = `<p style="color: red">Try again next time, estimated price $${cars[i].rentalRatePerDay} </p>`
//                 break
//             } else {
    //                 // If user inputs data not available in array
//                 document.getElementById("checking4Car").innerHTML = `<p style="color: red">Car is not available here! Try another input. </p>`
//                 document.getElementById("cost").innerHTML = `<p style="color: red">Price unavailable! </p>`
//             }   
//         }
//     } 
// }

// document.addEventListener('DOMContentLoaded', () => {
//     cars = [
//         {
//             make: "Toyota",
//             model: "Camry",
//             year: 2022,
//             rentalRatePerDay: 45, // in dollars
//             availability: true
//         }, 
//         {
//             make: "Tesla",
//             model: "Model X",
//             year: 2021,
//             rentalRatePerDay: 95, // in dollars
//             availability: true
//         },
//         {
//             make: "Ford",
//             model: "Fusion",
//             year: 2021,
//             rentalRatePerDay: 40, // in dollars
//             availability: false
//         },
//         {
//             make: "Chevrolet",
//             model: "Malibu",
//             year: 2022,
//             rentalRatePerDay: 50, // in dollars
//             availability: true
//         },
//         {
//             make: "Honda",
//             model: "Accord",
//             year: 2023,
//             rentalRatePerDay: 47, // in dollars
//             availability: true
//         }
//     ]

//     let carMakeSelected = document.getElementById('make-selection');
//     let carModelSeleted = document.getElementById('model-selection');
//     let carYearSeleted = document.getElementById('year-selection');
//     let availabilityDisplay = document.getElementById('availability-display');

//     populateDropdown = (selectElement, options) => {
//         selectElement.innerHTML = '<option value="">Select...</option>';
//         for (let i = 0; i < options.length; i++) {
//             let optionElement = document.createElement('option');
//             optionElement.value = options[i];
//             optionElement.textContent = options[i];
//             selectElement.appendChild(optionElement);
//         }
//     };

//     uniqueValues = (key) => {
//         let values = [];
//         let unique = {};
//         for (let i = 0; i < cars.length; i++) {
//             let value = cars[i][key];
//             if (!unique[value]) {
//                 unique[value] = true;
//                 values.push(value);
//             }
//         }
//         return values;
//     };

//     populateDropdown(carMakeSelected, uniqueValues('make'));
//     populateDropdown(carModelSeleted, uniqueValues('model'));
//     populateDropdown(carYearSeleted, uniqueValues('year'));

//     checkAvailability = () => {
//         let selectedMake = carMakeSelected.value;
//         let selectedModel = carModelSeleted.value;
//         let selectedYear = carYearSeleted.value;
//         let available = false;

//         for (let i = 0; i < cars.length; i++) {
//             if (cars[i].make === selectedMake && cars[i].model === selectedModel && cars[i].year === selectedYear && cars[i].availability) {
//                 available = true;
//                 break;
//             }
//         }
//         availabilityDisplay.textContent = available ? "This car is available for rent." : "This car is not available.";
//     };

//     carMakeSelected.onchange = checkAvailability;
//     carModelSeleted.onchange = checkAvailability;
//     carYearSeleted.onchange = checkAvailability;
// });

//

//always checking things in this parameter
document.addEventListener('DOMContentLoaded', () => {
    const cars = [
        { 
            make: "Toyota", 
            model: "Camry", 
            year: "2022", 
            rentalRatePerDay: 45, // in dollars
            availability: true 
        },
        { 
            make: "Tesla", 
            model: "Model X", 
            year: "2021", 
            rentalRatePerDay: 95, // in dollars
            availability: true 
        },
        { 
            make: "Ford", 
            model: "Fusion", 
            year: "2021", 
            rentalRatePerDay: 40, // in dollars
            availability: false 
        },
        { 
            make: "Chevrolet", 
            model: "Malibu", 
            year: "2022", 
            rentalRatePerDay: 50, // in dollars
            availability: true 
        },
        { 
            make: "Honda", 
            model: "Accord", 
            year: "2023", 
            rentalRatePerDay: 47, // in dollars
            availability: true 
        }
    ];

    const carMakeSelected = document.getElementById('make-selection');
    const carModelSeleted = document.getElementById('model-selection');
    const carYearSeleted = document.getElementById('year-selection');
    const availabilityDisplay = document.getElementById('availability-display');

    // Creates 
    const populateDropdown = (selectElement, options) => {
        selectElement.innerHTML = '<option value="">Select</option>';
        for (let i = 0; i < options.length; i++) {
            const optionElement = document.createElement('option');
            optionElement.value = options[i];
            optionElement.textContent = options[i];
            selectElement.appendChild(optionElement);
        }
    };

    const uniqueValues = (key) => {
        const values = [];
        const unique = {};
        for (let i = 0; i < cars.length; i++) {
            const value = cars[i][key];
            if (!unique[value]) {
                unique[value] = true;
                values.push(value);
            }
        }
        return values;
    };

    populateDropdown(carMakeSelected, uniqueValues('make'));
    populateDropdown(carModelSeleted, uniqueValues('model'));
    populateDropdown(carYearSeleted, uniqueValues('year'));

    const checkAvailability = () => {
        const selectedMake = carMakeSelected.value;
        const selectedModel = carModelSeleted.value;
        const selectedYear = carYearSeleted.value;
        let available = false;

        for (let i = 0; i < cars.length; i++) {
            if (cars[i].make === selectedMake && cars[i].model === selectedModel && cars[i].year === selectedYear && cars[i].availability) {
                available = true;
                availabilityDisplay.textContent = available ? `This car is available for rent for ${cars[i].rentalRatePerDay}.` : `This car is not available.`;
                break;
            }
        }
    };

    carMakeSelected.onchange = checkAvailability;
    carModelSeleted.onchange = checkAvailability;
    carYearSeleted.onchange = checkAvailability;
});
// isAvailable = () => {
//     event.preventDefault()
//     let logMake = document.getElementById("make").value
//     let logModel = document.getElementById("model").value
//     let logYear = document.getElementById("year").value

//     console.log(logMake);
//     for (i = 0; i < cars.length; i++) {
//         if (logMake == cars[i].make) {
            
//             carMakeSelected = cars[i].make
//             console.log(`Car selected is ${carMakeSelected}`)
//             document.getElementById("make").innerHTML = `<p>${carMakeSelected}</p>`
//             // if (carMakeSelected == true && logModel == car[i].model) {
//             //     console.log(`Model selected ${car[i].model}`);
//             // }
//         }
//     }
// }