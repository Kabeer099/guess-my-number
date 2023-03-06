"use strict";

// // const x = 24;

// // if (x === 24) console.log(24);


// // const  calcAge = birthYear => 2037 - birthYear;
// // console.log(calcAge(1900));

//   const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];



// const calcTempAmplitude = function (t1, t2) {
//     const temps = t1.concat(t2);
//     let max = temps[0];
//     let min = temps[0];

//     for(let i = 0; i < temps.length; i++)
//     {
//         const curTemp = temps[i];
//         if(typeof curTemp != 'number') continue;

//         if(curTemp > max) max = curTemp;
//         if(curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min;
// };

// const amplitude = calcTempAmplitude([2, 5, 1], [4, 7, 6]);
// console.log(amplitude);



// const measureKelvin = function() {

//   const measurement = {
//     type : 'temp',
//     unit : 'celsius',
//     value : Number(prompt('Degrees Celsius')),
//   }
//   console.table(measurement);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// }
// console.log(measureKelvin());

const data1 = [17, 21, 23];
const data2 =[12, 5, -5, 0, 41];

console.log(`... ${data1[0]}⁰C ... ${data1[1]}⁰C ... ${data1[2]}⁰C ... `);


const printForecast = function(arr)
{
  let str = ''; 
  for(let i = 0; i < arr.length; i++){ 
    str = str + `${arr[i]}⁰C in ${i + 1} days ... `; 

  }
  console.log('... ' + str);
}


printForecast(data1);