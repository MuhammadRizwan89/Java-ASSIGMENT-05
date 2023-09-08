// / ================CHAPTER NO:26 to 30 (Q NO 1)===================

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// Aap JavaScript mein ek program likh sakte hain jo user se ek positive integer input lega aur us number ke sath round off value, floor value, aur ceil value ko browser mein display karega. Yahan ek program diya gaya hai:


// User se positive integer input lena
// let userInput = prompt("Koi positive integer likhein:");

// // String ko number mein convert karna
// let number = parseInt(userInput);

// // Check if the input is a positive integer
// if (isNaN(number) || number <= 0) {
//   alert("Invalid input. Please enter a positive integer.");
// } else {
//   // Round off value nikalna
//   let roundOffValue = Math.round(number);
  
//   // Floor value nikalna
//   let floorValue = Math.floor(number);
  
//   // Ceil value nikalna
//   let ceilValue = Math.ceil(number);
  
//   // Display the values
//   document.write("Number: " + number + "<br>");
//   document.write("Round off value: " + roundOffValue + "<br>");
//   document.write("Floor value: " + floorValue + "<br>");
//   document.write("Ceil value: " + ceilValue + "<br>");
// }



// Is program mein:

// prompt ka istemal user se positive integer input lena ke liye kiya gaya hai.
// parseInt ka istemal input string ko number mein convert karne ke liye kiya gaya hai.
// if statement se check kiya jata hai ki user ka input positive integer hai ya nahi. Agar input positive integer nahi hai, to user ko invalid input hone ki suchana di jati hai.
// Agar input valid positive integer hai, to Math.round, Math.floor, aur Math.ceil functions ka istemal kiya jata hai round off value, floor value, aur ceil value nikalne ke liye.
// Fir, document.write ka istemal karke number aur unke values ko browser mein display kiya jata hai.




// / ================CHAPTER NO:26 to 30 (Q NO 2)===================

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// Aap JavaScript mein ek program likh sakte hain jo user se ek negative floating point number input lega aur us number ke sath round off value, floor value, aur ceil value ko browser mein display karega. Yahan ek program diya gaya hai:



// // User se negative floating point number input lena
// let userInput = prompt("Koi negative floating point number likhein:");

// // String ko floating point number mein convert karna
// let number = parseFloat(userInput);

// // Check if the input is a negative floating point number
// if (isNaN(number) || number >= 0) {
//   alert("Invalid input. Please enter a negative floating point number.");
// } else {
//   // Round off value nikalna
//   let roundOffValue = Math.round(number);
  
//   // Floor value nikalna
//   let floorValue = Math.floor(number);
  
//   // Ceil value nikalna
//   let ceilValue = Math.ceil(number);
  
//   // Display the values
//   document.write("Number: " + number + "<br>");
//   document.write("Round off value: " + roundOffValue + "<br>");
//   document.write("Floor value: " + floorValue + "<br>");
//   document.write("Ceil value: " + ceilValue + "<br>");
// }


// Is program mein:

// prompt ka istemal user se negative floating point number input lena ke liye kiya gaya hai.
// parseFloat ka istemal input string ko floating point number mein convert karne ke liye kiya gaya hai.
// if statement se check kiya jata hai ki user ka input negative floating point number hai ya nahi. Agar input negative floating point number nahi hai, to user ko invalid input hone ki suchana di jati hai.
// Agar input valid negative floating point number hai, to Math.round, Math.floor, aur Math.ceil functions ka istemal kiya jata hai round off value, floor value, aur ceil value nikalne ke liye.
// Fir, document.write ka istemal karke number aur unke values ko browser mein display kiya jata hai.




// / ================CHAPTER NO:26 to 30 (Q NO 3)===================

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5


// Aap JavaScript mein ek program likh sakte hain jo kisi number ki absolute value (positive value) ko display kare. Absolute value ek number ki magnitude ko batata hai, jo hamesha positive hoti hai. Yahan ek program diya gaya hai:



// // User se number input lena
// var userInput = prompt("Koi number likhein:");

// // String ko number mein convert karna
// var number = parseFloat(userInput);

// // Check if the input is a valid number
// if (isNaN(number)) {
//   alert("Invalid input. Please enter a valid number.");
// } else {
//   // Calculate the absolute value
//   var absoluteValue = Math.abs(number);
  
//   // Display the absolute value
//   alert("Absolute value of " + number + " is " + absoluteValue);
// }




// Is program mein:

// prompt ka istemal user se number input lena ke liye kiya gaya hai.
// parseFloat ka istemal input string ko floating point number mein convert karne ke liye kiya gaya hai.
// if statement se check kiya jata hai ki user ka input valid number hai ya nahi. Agar input valid number nahi hai, to user ko invalid input hone ki suchana di jati hai.
// Agar input valid number hai, to Math.abs function ka istemal kiya jata hai absolute value nikalne ke liye.
// Fir, alert ka istemal karke number aur uske absolute value ko display kiya jata hai.




// / ================CHAPTER NO:26 to 30 (Q NO 4)===================

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// Aap JavaScript mein ek program likh sakte hain jo Math.random() method ka istemal karke ek dice ki value simulate kare aur us value ko browser mein display kare. Yahan ek program diya gaya hai:



// // Random number generate karke dice ki value simulate karna
// let diceValue = Math.floor(Math.random() * 6) + 1;

// // Dice ki value ko browser mein display karna
// alert("Dice value: " + diceValue);



// Is program mein:

// Math.random() method ka istemal ek random floating point number generate karne ke liye kiya gaya hai. Is method se 0 (inclusive) se lekar 1 (exclusive) ke beech ek random number generate hota hai.
// Math.floor ka istemal kiya gaya hai taki decimal places ko remove karke ek random integer value mil sake.
// Math.random() * 6 se 0 se lekar 5 tak ke random numbers generate honge, phir usme 1 jodne se 1 se 6 tak ke random integers milenge, jo ek dice ki value simulate karenge.
// alert ka istemal karke dice ki value ko browser mein display kiya jata hai.



// / ================CHAPTER NO:26 to 30 (Q NO 5)===================

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// Aap JavaScript mein Math.random() method ka istemal karke ek coin toss simulate kar sakte hain aur uska result ("Heads" ya "Tails") browser mein display kar sakte hain. Yahan ek program diya gaya hai:


// // Random number generate karke coin toss simulate karna
// var randomValue = Math.random();
// var coinResult = randomValue < 0.5 ? "Heads" : "Tails";

// // Coin toss result ko browser mein display karna
// alert("Coin Toss Result: " + coinResult);


// Is program mein:

// Math.random() method ka istemal ek random floating point number generate karne ke liye kiya gaya hai. Is method se 0 (inclusive) se lekar 1 (exclusive) ke beech ek random number generate hota hai.
// Ek conditional expression (randomValue < 0.5 ? "Heads" : "Tails") ka istemal kiya gaya hai taki random number ke basis par "Heads" ya "Tails" ka result nikala ja sake. Agar random number 0.5 se chhota hai to "Heads" aur agar 0.5 se bada hai to "Tails" select hota hai.
// alert ka istemal karke coin toss result ko browser mein display kiya jata hai.




// / ================CHAPTER NO:26 to 30 (Q NO 6)===================

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

// Aap JavaScript mein Math.random() method ka istemal karke ek random number generate kar sakte hain jo 1 se 100 ke beech mein ho, aur us number ko browser mein display kar sakte hain. Yahan ek program diya gaya hai:


// // Random number generate karke 1 se 100 ke beech mein number nikalna
// var randomNumber = Math.floor(Math.random() * 100) + 1;

// // Random number ko browser mein display karna
// alert("Random Number between 1 and 100: " + randomNumber);


// Is program mein:

// Math.random() method ka istemal ek random floating point number generate karne ke liye kiya gaya hai. Is method se 0 (inclusive) se lekar 1 (exclusive) ke beech ek random number generate hota hai.
// Math.floor ka istemal kiya gaya hai taki decimal places ko remove karke ek random integer value mil sake.
// Math.random() * 100 se 0 se lekar 99 tak ke random numbers generate honge, phir usme 1 jodne se 1 se 100 tak ke random integers milenge.




// / ================CHAPTER NO:26 to 30 (Q NO 7)===================

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms


// Aap JavaScript mein user se weight input lena aur us input ko parse karke browser mein display karne ke liye ek program likh sakte hain. Is program mein hum user input ko string ke roop mein lete hain aur fir usmein weight ko represent karne wale numbers ko parse karte hain. Yahan ek program diya gaya hai jo yeh kar sakta hai:


// // User se weight input lena
// var userInput = prompt("Apna weight likhein:");

// // Regular expression pattern for matching weight formats
// var weightPattern = /^(\d+(\.\d+)?)(kgs?|kilograms?)?$/i;

// // Check if the input matches the weight pattern
// var match = userInput.match(weightPattern);

// if (match) {
//   // Extract the weight value from the matched groups
//   var weight = parseFloat(match[1]);
  
//   // Display the weight
//   alert("Your weight is: " + weight + " kgs");
// } else {
//   alert("Invalid input. Please enter a valid weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms).");
// }



// Is program mein:

// prompt ka istemal user se weight input lena ke liye kiya gaya hai.
// weightPattern variable mein ek regular expression pattern define kiya gaya hai jo weight ke various formats ko match karta hai, jaise ki "50", "50kgs", "50.2kgs", "50.2kilograms", "50kilograms", etc.
// match method ka istemal input string ko weightPattern ke sath match karne ke liye kiya gaya hai.
// Agar input pattern se match hota hai, to match object se weight value ko extract kiya jata hai, aur fir usko parseFloat method ka istemal karke number mein convert kiya jata hai.




// / ================CHAPTER NO:26 to 30 (Q NO 8)===================

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.


// Aap JavaScript mein ek program likh sakte hain jo ek random secret number generate karega, aur fir user se input lega. Agar user ka input secret number ke sath match karta hai, to program user ko congratulations ka message dikha dega. Yahan ek program diya gaya hai:


// // Random secret number generate karna (1 to 10)
// var secretNumber = Math.floor(Math.random() * 10) + 1;

// // User se number input lena
// var userInput = prompt("Koi number enter karein (1 se 10 ke beech mein):");

// // String ko number mein convert karna
// var userNumber = parseInt(userInput);

// // Check if the input is a valid number between 1 and 10
// if (!isNaN(userNumber) && userNumber >= 1 && userNumber <= 10) {
//   // Check if the user's number matches the secret number
//   if (userNumber === secretNumber) {
//     alert("Congratulations! Aapka number sahi hai. Secret number tha: " + secretNumber);
//   } else {
//     alert("Sorry, aapka number galat hai. Secret number tha: " + secretNumber);
//   }
// } else {
//   alert("Invalid input. Please enter a number between 1 and 10.");
// }



// Is program mein:

// Math.random() method ka istemal ek random number generate karne ke liye kiya gaya hai (1 se 10 ke beech mein).
// prompt ka istemal user se number input lena ke liye kiya gaya hai.
// parseInt ka istemal input string ko number mein convert karne ke liye kiya gaya hai.
// if statements se check kiya jata hai ki user ka input valid hai aur 1 se 10 ke beech mein hai.
// Agar user ka input valid hai, to check kiya jata hai ki user ka number secret number ke sath match karta hai ya nahi. Agar match hota hai, to user ko congratulations ka message dikhaya jata hai, warna "Sorry" ka message dikhaya jata hai.
// Agar user ka input invalid hai, to program user ko valid number enter karne ke liye keh dega.
















// / ================CHAPTER NO:31 to 34 (Q NO 1)===================

// Aap JavaScript ka istemal karke apne browser mein current date and time display karne ke liye ek program likh sakte hain. Yahan ek program diya gaya hai jo yeh kaam karega:


// // Current date and time object create karna
// let currentDateAndTime = new Date();

// // Current date and time ko format karke display karna
// let formattedDateAndTime = currentDateAndTime.toLocaleString();

// // Display the formatted date and time in the browser
// document.write("Current Date and Time: " + formattedDateAndTime);



// Is program mein:

// Date object ka istemal current date and time ko represent karne ke liye kiya gaya hai.
// toLocaleString() method ka istemal current date and time ko human-readable format mein convert karne ke liye kiya gaya hai.
// document.write() method ka istemal formatted date and time ko browser mein display karne ke liye kiya gaya hai.



// / ================CHAPTER NO:31 to 34 (Q NO 2)===================

// 2. Write a program that alerts the current month in words.
// For example December.

// Aap JavaScript mein current month ko words mein alert karne ke liye ek program likh sakte hain. Yahan ek program diya gaya hai jo yeh kaam karega:


// // Current date object create karna
// var currentDate = new Date();

// // Array of month names
// var monthNames = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// // Current month ko get karke alert mein display karna
// var currentMonth = monthNames[currentDate.getMonth()];
// alert("Current Month: " + currentMonth);


// Is program mein:

// Date object ka istemal current date ko represent karne ke liye kiya gaya hai.
// monthNames variable mein month names ko store kiya gaya hai ek array mein.
// getMonth() method ka istemal current month ka index nikalne ke liye kiya gaya hai, aur us index se month name ko monthNames array se retrieve kiya jata hai.
// alert method ka istemal current month ko words mein alert message mein display karne ke liye kiya gaya hai.



// / ================CHAPTER NO:31 to 34 (Q NO 3)===================

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.


// Aap JavaScript mein current day ka pehla 3 akshar (letters) alert karne ke liye ek program likh sakte hain. Yahan ek program diya gaya hai jo yeh kaam karega:  


// // Current date object create karna
// var currentDate = new Date();

// // Array of day names
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// // Current day ko get karke alert mein display karna
// var currentDay = dayNames[currentDate.getDay()];
// alert("Current Day: " + currentDay);



// Is program mein:

// Date object ka istemal current date ko represent karne ke liye kiya gaya hai.
// dayNames variable mein days ke names ko store kiya gaya hai ek array mein.
// getDay() method ka istemal current day ka index nikalne ke liye kiya gaya hai, aur us index se day name ko dayNames array se retrieve kiya jata hai.
// alert method ka istemal current day ke pehle 3 akshar ko alert message mein display karne ke liye kiya gaya hai.



// / ================CHAPTER NO:31 to 34 (Q NO 4)===================

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.


// Aap JavaScript mein current day ko check karke agar aaj Saturday ya Sunday hai to "It’s Fun day" ka message display karne ke liye ek program likh sakte hain. Yahan ek program diya gaya hai jo yeh kaam karega:


// // Current date object create karna
// var currentDate = new Date();

// // Array of day names
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// // Current day ko get karke check karna
// var currentDay = dayNames[currentDate.getDay()];

// // Check if today is Saturday or Sunday
// if (currentDay === "Sat" || currentDay === "Sun") {
//   alert("It's Fun day");
// } else {
//   alert("It's not Fun day");
// }



// Is program mein:

// Date object ka istemal current date ko represent karne ke liye kiya gaya hai.
// dayNames variable mein days ke names ko store kiya gaya hai ek array mein.
// getDay() method ka istemal current day ka index nikalne ke liye kiya gaya hai, aur us index se day name ko dayNames array se retrieve kiya jata hai.
// if statement se check kiya jata hai ki current day "Sat" (Saturday) ya "Sun" (Sunday) hai ya nahi. Agar aaj Saturday ya Sunday hai, to "It's Fun day" ka message alert message mein display kiya jata hai, warna "It's not Fun day" ka message display kiya jata hai.




// / ================CHAPTER NO:31 to 34 (Q NO 5)===================

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.


// Aap JavaScript mein current date ko check karke agar date 16th se chhota hai to "First fifteen days of the month" ka message display karne ke liye ek program likh sakte hain, aur agar date 16th se bada hai to "Last days of the month" ka message display kar sakte hain. Yahan ek program diya gaya hai jo yeh kaam karega:


// // Current date object create karna
// var currentDate = new Date();

// // Get the day of the month (date)
// var currentDayOfMonth = currentDate.getDate();

// // Check if the date is less than 16th of the month
// if (currentDayOfMonth < 16) {
//   alert("First fifteen days of the month");
// } else {
//   alert("Last days of the month");
// }


// Is program mein:

// Date object ka istemal current date ko represent karne ke liye kiya gaya hai.
// getDate() method ka istemal current month ka day of the month (date) nikalne ke liye kiya gaya hai.
// if statement se check kiya jata hai ki current date 16th se chhota hai ya nahi. Agar date 16th se chhota hai, to "First fifteen days of the month" ka message alert message mein display kiya jata hai, warna "Last days of the month" ka message display kiya jata hai.




// / ================CHAPTER NO:31 to 34 (Q NO 6)===================

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.


// Aap JavaScript mein current time se January 1, 1970, ke beech kitne minutes beet gaye hain, yeh calculate karke usko ek naye variable mein store kar sakte hain. Yahan ek program diya gaya hai jo yeh kaam karega:


// // Current date object create karna
// var currentDate = new Date();

// // January 1, 1970, ke date object create karna
// var january1_1970 = new Date("January 1, 1970 00:00:00");

// // Current time aur January 1, 1970 ke beech ke milliseconds ka difference nikalna
// var millisecondsSince1970 = currentDate - january1_1970;

// // Difference ko minutes mein convert karke store karna
// var minutesSinceMidnight = millisecondsSince1970 / (1000 * 60);

// // Minutes since midnight ko display karna
// alert("Minutes since midnight, Jan. 1, 1970: " + minutesSinceMidnight);




// Is program mein:

// Date object ka istemal current date aur January 1, 1970, ke date create karne ke liye kiya gaya hai.
// Current date aur January 1, 1970, ke beech ke milliseconds ka difference nikala jata hai.
// Difference ko milliseconds se minutes mein convert karke minutesSinceMidnight variable mein store kiya jata hai.
// alert method ka istemal minutes since midnight ko display karne ke liye kiya jata hai.
// Is program ko chalane ke baad, aapke browser mein current time se January 1, 1970, ke beech kitne minutes beet gaye hain, yeh display hoga.




// / ================CHAPTER NO:31 to 34 (Q NO 7)===================

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.


// Aap JavaScript mein current time ko check karke yeh determine kar sakte hain ki woh AM hai ya PM. Yahan ek program diya gaya hai jo yeh kaam karega:



// // Current date object create karna
// var currentDate = new Date();

// // Get the current hour (0 to 23)
// var currentHour = currentDate.getHours();

// // Check if it's before noon (AM) or afternoon/evening (PM)
// if (currentHour < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }



// Is program mein:

// Date object ka istemal current date aur time ko represent karne ke liye kiya gaya hai.
// getHours() method ka istemal current hour ko 0 se 23 ke beech nikalne ke liye kiya gaya hai.
// if statement se check kiya jata hai ki current hour 12 se chhota hai ya nahi. Agar current hour 12 se chhota hai, to "It's AM" ka message alert message mein display kiya jata hai, warna "It's PM" ka message display kiya jata hai.



// / ================CHAPTER NO:31 to 34 (Q NO 8)===================

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.


// Aap JavaScript mein 2020 ke last month ki last day ka Date object create kar sakte hain aur usko laterDate variable mein assign kar sakte hain. Yahan ek program diya gaya hai jo yeh kaam karega:



// // Create a Date object for January 1, 2021
// var lastDayOfLastMonth2020 = new Date("December 31, 2020");

// // Assign the Date object to the variable named laterDate
// var laterDate = lastDayOfLastMonth2020;

// // Display the laterDate in the browser
// alert("Last day of the last month of 2020: " + laterDate);




// Is program mein:

// Date object ka istemal December 31, 2020, ki last day ko represent karne ke liye kiya gaya hai.
// laterDate variable mein lastDayOfLastMonth2020 Date object ko assign kiya gaya hai.
// alert method ka istemal laterDate ko browser mein display karne ke liye kiya gaya hai.




// / ================CHAPTER NO:31 to 34 (Q NO 9)===================

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015



// Aap JavaScript mein 1st Ramadan 2015 ki starting date se lekar current date ke beech ke dinon ko calculate karke usko alert message mein display kar sakte hain. Yahan ek program diya gaya hai jo yeh kaam karega:



// // Create a Date object for 1st Ramadan 2015
// var ramadan2015 = new Date("June 18, 2015");

// // Current date object create karna
// var currentDate = new Date();

// // Calculate the time difference in milliseconds
// var timeDifference = currentDate - ramadan2015;

// // Convert milliseconds to days
// var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// // Display the number of days passed since 1st Ramadan 2015
// alert("Number of days passed since 1st Ramadan 2015: " + daysPassed);




// Is program mein:

// Date object ka istemal 1st Ramadan 2015 ki starting date ko represent karne ke liye kiya gaya hai.
// Current date object create kiya gaya hai.
// Date objects ke beech ke time difference ko milliseconds mein calculate kiya gaya hai.
// Calculate kiye gaye milliseconds ko dinon mein convert karke daysPassed variable mein store kiya gaya hai.
// alert method ka istemal daysPassed ko browser mein display karne ke liye kiya gaya hai.




// / ================CHAPTER NO:31 to 34 (Q NO 10)===================

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// Aap JavaScript mein reference date aur 2015 ki starting date ke beech mein kitne seconds beet gaye hain, yeh calculate karke usko browser mein display kar sakte hain. Yahan ek program diya gaya hai jo yeh kaam karega:   



// // Create a Date object for the reference date
// var referenceDate = new Date("January 1, 1970");

// // Create a Date object for January 1, 2015
// var january1_2015 = new Date("January 1, 2015");

// // Calculate the time difference in milliseconds
// var timeDifference = january1_2015 - referenceDate;

// // Convert milliseconds to seconds
// var secondsElapsed = Math.floor(timeDifference / 1000);

// // Display the seconds elapsed between the reference date and January 1, 2015
// alert("Seconds elapsed between the reference date and January 1, 2015: " + secondsElapsed);




// Is program mein:

// Date object ka istemal reference date (January 1, 1970) aur January 1, 2015, ki starting date ko represent karne ke liye kiya gaya hai.
// Date objects ke beech ke time difference ko milliseconds mein calculate kiya gaya hai.
// Calculate kiye gaye milliseconds ko seconds mein convert karke secondsElapsed variable mein store kiya gaya hai.
// alert method ka istemal secondsElapsed ko browser mein display karne ke liye kiya gaya hai.



// / ================CHAPTER NO:31 to 34 (Q NO 11)===================

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.



// Aap JavaScript mein current date aur time ko represent karne ke liye ek Date object create kar sakte hain. Uske baad, Date object se hours ko extract kar sakte hain, usko ek ghante aage set kar sakte hain, aur fir updated Date object ko browser mein display kar sakte hain. Yahan ek program diya gaya hai jo yeh kaam karega:



// // Create a Date object for the current date and time
// var currentDateAndTime = new Date();

// // Extract the current hours
// var currentHours = currentDateAndTime.getHours();

// // Set the date object one hour ahead
// currentDateAndTime.setHours(currentHours + 1);

// // Display the updated date object in your browser
// alert("Updated Date and Time (1 hour ahead): " + currentDateAndTime);




// Is program mein:

// Date object ka istemal current date aur time ko represent karne ke liye kiya gaya hai.
// getHours() method ka istemal current hours ko extract karne ke liye kiya gaya hai.
// setHours() method ka istemal Date object ko ek ghante aage set karne ke liye kiya gaya hai.
// alert method ka istemal updated Date object ko browser mein display karne ke liye kiya gaya hai.


// / ================CHAPTER NO:31 to 34 (Q NO 12)===================

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?


// Aap JavaScript mein ek Date object create kar sakte hain aur usko 100 saal (years) peeche set karke ek alert box mein date ko display kar sakte hain. Yahan ek program diya gaya hai jo yeh kaam karega:



// // Create a Date object for the current date and time
// var currentDateAndTime = new Date();

// // Subtract 100 years from the current year
// currentDateAndTime.setFullYear(currentDateAndTime.getFullYear() - 100);

// // Display the updated date in an alert box
// alert("Date 100 years ago: " + currentDateAndTime);



// Is program mein:

// Date object ka istemal current date aur time ko represent karne ke liye kiya gaya hai.
// getFullYear() method ka istemal current year ko extract karne ke liye kiya gaya hai, aur uss year se 100 years peeche set karne ke liye kiya gaya hai.
// alert method ka istemal updated date ko ek alert box mein display karne ke liye kiya gaya hai.



// / ================CHAPTER NO:31 to 34 (Q NO 13)===================

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.



// Aap JavaScript mein user se age puchh kar uski paidaish (birth year) calculate kar sakte hain aur use browser mein display kar sakte hain. Yahan ek program diya gaya hai jo yeh kaam karega:



// // User se age input lena
// var userAge = prompt("Apni age enter karein:");

// // Current date object create karna
// var currentDate = new Date();

// // Current year ko calculate karna
// var currentYear = currentDate.getFullYear();

// // Calculate the birth year by subtracting user's age from the current year
// var birthYear = currentYear - userAge;

// // Display the birth year in the browser
// alert("Aapki paidaish (birth year) hai: " + birthYear);




// Is program mein:

// prompt ka istemal user se age input lena ke liye kiya gaya hai.
// Date object ka istemal current date ko represent karne ke liye kiya gaya hai.
// getFullYear() method ka istemal current year ko extract karne ke liye kiya gaya hai.
// User ki age se current year ko subtract karke paidaish (birth year) ko calculate kiya gaya hai.
// alert method ka istemal calculated birth year ko browser mein display karne ke liye kiya gaya hai.



// / ================CHAPTER NO:31 to 34 (Q NO 14)===================

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge




// // Customer information
// var customerName = prompt("Customer Name:");
// var currentMonth = prompt("Current Month:");
// var numberOfUnits = parseFloat(prompt("Number of Units:"));
// var chargesPerUnit = parseFloat(prompt("Charges per Unit (in PKR):"));
// var dueDate = new Date(prompt("Due Date (YYYY-MM-DD):"));
// var currentDate = new Date();

// // Calculate Net Amount Payable (within Due Date)
// var netAmountPayable = numberOfUnits * chargesPerUnit;

// // Check if payment is within the due date
// if (currentDate <= dueDate) {
//   var latePaymentSurcharge = 0;
//   var grossAmountPayable = netAmountPayable;
// } else {
//   var daysLate = Math.floor((currentDate - dueDate) / (1000 * 60 * 60 * 24));
//   var latePaymentSurcharge = 10 * daysLate; // Assuming a late payment surcharge of 10 PKR per day
//   var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
// }

// // Display the bill details in the browser
// document.write("<h1>K-Electric Bill</h1>");
// document.write("<p><strong>Customer Name:</strong> " + customerName + "</p>");
// document.write("<p><strong>Current Month:</strong> " + currentMonth + "</p>");
// document.write("<p><strong>Number of Units:</strong> " + numberOfUnits.toFixed(2) + "</p>");
// document.write("<p><strong>Charges per Unit:</strong> " + chargesPerUnit.toFixed(2) + " PKR</p>");
// document.write("<p><strong>Net Amount Payable (within Due Date):</strong> " + netAmountPayable.toFixed(2) + " PKR</p>");
// document.write("<p><strong>Late Payment Surcharge:</strong> " + latePaymentSurcharge.toFixed(2) + " PKR</p>");
// document.write("<p><strong>Gross Amount Payable (after Due Date):</strong> " + grossAmountPayable.toFixed(2) + " PKR</p>");



// Is program mein:

// prompt ka istemal customer information input lena ke liye kiya gaya hai.
// Date object ka istemal due date aur current date ko represent karne ke liye kiya gaya hai.
// Net Amount Payable (within Due Date) ko calculate kiya gaya hai, yani ki Number of units * Charges per unit.
// Check kiya gaya hai ki payment due date ke andar hai ya nahi, aur accordingly Late Payment Surcharge aur Gross Amount Payable (after Due Date) calculate kiye gaye hain.
// document.write ka istemal bill details ko HTML format mein browser mein display karne ke liye kiya gaya hai.