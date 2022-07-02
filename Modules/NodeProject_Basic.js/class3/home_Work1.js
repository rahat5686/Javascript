/**
 * convert temperature values into different units
 */

// F -> C
// T(°C) = (T(°F) - 32) × 5/9

let fTemp1 = 84;
let cTemp1 = (fTemp1 - 32) * 5/9;
console.log(`${fTemp1}°F is equals to ${cTemp1}°C`);

// F -> K
// T(K) = (T(°F) + 459.67)× 5/9

let fTemp2 = 84;
let kTemp1 = (fTemp2 + 459.67) * 5/9;
console.log(`${fTemp2}°F is equals to ${kTemp1}K`);

// C -> F
// T(°F) = T(°C) × 9/5 + 32

let cTemp2 = 28;
let fTemp3 = (cTemp2 * 9/5) + 32;
console.log(`${cTemp2}°C is equals to ${fTemp3}°F`);

// C -> K
//T(K) = T(°C) + 273.15

let cTemp3 = 28;
let kTemp2 = (cTemp3 + 273.15);
console.log(`${cTemp3}°C is equals to ${kTemp2}K`);

// K -> F
//T(°F) = T(K) × 9/5 - 459.67;

let kTemp3 = 301.15
let fTemp4 = (kTemp3 * 9/5 - 459.67);
console.log(`${kTemp3}K is equals to ${fTemp4}°F`);


// K -> C 
// T(°C) = T(K) - 273.15

let kTemp4 = 301.15;
let cTemp4 = (kTemp4 - 273.15);
console.log(`${kTemp4}K is equals to ${cTemp4}°C`);





