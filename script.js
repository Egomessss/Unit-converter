// buscar text content da text Input

// !text contents
let convertEl = document.getElementById("convert-btn");
// let inputtextEl = document.getElementById("inputtext");

let meterFeetEl = document.getElementById("meterfeet");
let litersGalonsEl = document.getElementById("litersgallon");
let kilogramsPoundsEl = document.getElementById("kilogramspounds");

// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

//! as variaveis vao ser template strings para permitir flexiblidade

//! funcao do botao convert
//! quando carregado transforma o numero na input nas conversões

//! cada conversão tem um base string e depois template strings para as variaveis

//! 1 funcao que cria o valor de x através do input
//! uma parte da funcao que passa text com template strings
// !arrendodar os valores de forma às décimas de forma  aque nao fiquem muito grande
// ! fazer um if statament para quando o valor for abaixo de 2 nao ser "meters" mas sim "meter"

// ! 20*3,2808 | 20* 0,3048

convertEl.addEventListener("click", function () {
  myValue();
  length();
  volume();
  mass();
});

let value = "";

function myValue() {
  value = document.getElementById("inputtext").value;
}

function length() {
  let meterToFeet = value * 3.2808;
  let feetToMeter = value * 0.3048;

  const roundMeterToFeet = Math.round(meterToFeet * 1000) / 1000;
  const roundFeetToMeter = Math.round(feetToMeter * 1000) / 1000;

  if (document.getElementById("inputtext").value == 1) {
    baseString = `${value} meter = ${roundMeterToFeet} feet | ${value} feet = ${roundFeetToMeter} feet`;
    meterFeetEl.textContent = baseString;
  } else {
    baseString = `${value} meters = ${roundMeterToFeet} feet | ${value} feet = ${roundFeetToMeter} feet`;
    meterFeetEl.textContent = baseString;
  }
}

function volume() {
  let litersToGallons = value * 0.264;
  let gallonsToLiters = value * 3.785;

  const roundLitersToGallons = Math.round(litersToGallons * 10000) / 10000;
  const roundGallonsToLiters = Math.round(gallonsToLiters * 10000) / 10000;

  if (document.getElementById("inputtext").value == 1) {
    baseString = `${value} liter = ${roundLitersToGallons} gallons | ${value} gallon = ${roundGallonsToLiters} liters`;

    litersGalonsEl.textContent = baseString;
  } else {
    baseString = `${value} liters = ${roundLitersToGallons} gallons | ${value} gallons = ${roundGallonsToLiters} liters`;

    litersGalonsEl.textContent = baseString;
  }
}

function mass() {
  let kilogramsToPounds = value * 2.204;
  let poundsToKilograms = value * 0.4536;

  const roundkilogramsToPounds = Math.round(kilogramsToPounds * 10000) / 10000;
  const roundpoundsToKilograms = Math.round(poundsToKilograms * 10000) / 10000;

  if (document.getElementById("inputtext").value == 1) {
    baseString = `${value} Kilo = ${roundkilogramsToPounds} pounds | ${value} pounds = ${roundpoundsToKilograms} kilos`;

    kilogramsPoundsEl.textContent = baseString;
  } else {
    baseString = `${value} Kilos = ${roundkilogramsToPounds} pounds | ${value} pounds = ${roundpoundsToKilograms} kilos`;

    kilogramsPoundsEl.textContent = baseString;
  }
}

// !My previous code

// convertEl.addEventListener("click", function () {
//     //   let inputValue = document.getElementById("inputtext").value;
//       length();
//       volume()
//     });

//     function length() {
//       let value = document.getElementById("inputtext").value;
//     //   let value = document.getElementById("inputtext").value;

//       let meterToFeet = value * 3.2808;
//       let feetToMeter = value * 0.3048;

//       const roundMeterToFeet = Math.round(meterToFeet * 1000) / 1000;
//       const roundFeetToMeter = Math.round(feetToMeter * 1000) / 1000;

//       if (document.getElementById("inputtext").value == 1) {
//         baseString = `${value} meter = ${roundMeterToFeet} feet | ${value} feet = ${roundFeetToMeter} feet`;
//         console.log(baseString);
//         meterFeetEl.textContent = baseString;
//       } else {
//         baseString = `${value} meters = ${roundMeterToFeet} feet | ${value} feet = ${roundFeetToMeter} feet`;
//         console.log(baseString);
//         meterFeetEl.textContent = baseString;
//       }
//     }

//     function volume(){
//         let value = document.getElementById("inputtext").value;
//         //   let value = document.getElementById("inputtext").value;

//           let litersToGallons = value * 0.264;
//           console.log(litersToGallons)
//           let gallonsToLiters = value * 3.785;

//           const roundLitersToGallons  = Math.round(litersToGallons  * 10000) / 10000;
//           const roundGallonsToLiters = Math.round(gallonsToLiters * 10000) / 10000;

//           if (document.getElementById("inputtext").value == 1) {
//             baseString = `${value} liter = ${roundLitersToGallons} gallons | ${value} gallons = ${roundGallonsToLiters} gallons`;
//             console.log(baseString);
//             litersGalonsEl.textContent = baseString;
//           } else {
//             baseString = `${value} liters = ${roundLitersToGallons} gallons | ${value} gallons = ${roundGallonsToLiters} gallons`;
//             console.log(baseString);
//             litersGalonsEl.textContent = baseString;
//           }
//     }

//     function mass() {}
