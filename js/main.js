
document.querySelector("#first-temp--value").addEventListener('input', convertSecondTemperature);
document.querySelector("#second-temp--value").addEventListener('input', convertFirstTemperature);
document.querySelector("#first-temp--type").addEventListener('change', convertSecondTemperature);
document.querySelector("#second-temp--type").addEventListener('change', convertFirstTemperature);


// This function checks to see which temperature type was selected for booth options (Fahrenheit, Celsius, or Kelvin)
function getTemperatureTypes() {
    const firstTempSelections = document.getElementById("first-temp--type");
    let firstTempType = firstTempSelections.options[firstTempSelections.selectedIndex].text;

    const secondTempSelections = document.getElementById("second-temp--type");
    let secondTempType = secondTempSelections.options[secondTempSelections.selectedIndex].text;

    return [firstTempType, secondTempType];
}


function convertFirstTemperature() {
    let secondTemp = Number(document.querySelector('#second-temp--value').value);

    let temperatureTypes = getTemperatureTypes();
    let firstTempType = temperatureTypes[0];
    let secondTempType = temperatureTypes[1];

    if (secondTempType == 'Celsius') {
        if (firstTempType == 'Fahrenheit') {
            let firstTemp = (secondTemp * (9/5)) + 32;
            document.getElementById("first-temp--value").value = firstTemp;
            document.getElementById("temp-conversion--formula").textContent = firstTemp + "\u00B0F = " + secondTemp + "\u00B0C * (9/5) + 32";
        }
        else if (firstTempType == 'Celsius') {
            let firstTemp = secondTemp;
            document.getElementById("first-temp--value").value = firstTemp;
            document.getElementById("temp-conversion--formula").textContent = firstTemp + "\u00B0C = " + secondTemp + "\u00B0C"
        }
        else if (firstTempType == 'Kelvin') {
            let firstTemp = secondTemp + 273.15;
            document.getElementById("first-temp--value").value = firstTemp;
            document.getElementById("temp-conversion--formula").textContent = firstTemp + "\u00B0K = " + secondTemp + "\u00B0C + 273.15";
        };
    }

    else if (secondTempType == 'Fahrenheit') {
        if (firstTempType == 'Fahrenheit') {
            let firstTemp = secondTemp;
            document.getElementById("first-temp--value").value = firstTemp;
            document.getElementById("temp-conversion--formula").textContent = firstTemp + "\u00B0F = " + secondTemp + "\u00B0F"
        }
        else if (firstTempType == 'Celsius') {
            let firstTemp = (secondTemp - 32) * (5/9);
            document.getElementById("first-temp--value").value = firstTemp;
            document.getElementById("temp-conversion--formula").textContent = firstTemp + "\u00B0C = (" + secondTemp + "\u00B0F - 32) * (5/9)"
        }
        else if (firstTempType == 'Kelvin') {
            let firstTemp = (secondTemp - 32) * (5/9) + 273.15;
            document.getElementById("first-temp--value").value = firstTemp;
            document.getElementById("temp-conversion--formula").textContent = firstTemp + "\u00B0K = (" + secondTemp + "\u00B0F - 32) * (5/9) + 273.15";
        };
    }

    else if (secondTempType == 'Kelvin') {
        if (firstTempType == 'Fahrenheit') {
            let firstTemp = (secondTemp - 273.15) * (9/5) + 32;
            document.getElementById("first-temp--value").value = firstTemp;
            document.getElementById("temp-conversion--formula").textContent = firstTemp + "\u00B0F = (" + secondTemp + "\u00B0F - 273.15) * (9/5) + 32";
        }
        else if (firstTempType == 'Celsius') {
            let firstTemp = secondTemp - 273.15;
            document.getElementById("first-temp--value").value = firstTemp;
            document.getElementById("temp-conversion--formula").textContent = firstTemp + "\u00B0C = " + secondTemp + "\u00B0K - 273.15";
        }
        else if (firstTempType == 'Kelvin') {
            let firstTemp = secondTemp;
            document.getElementById("first-temp--value").value = firstTemp;
            document.getElementById("temp-conversion--formula").textContent = firstTemp + "\u00B0K = " + secondTemp + "\u00B0K"
        };
    };
}

function convertSecondTemperature() {
    let firstTemp = Number(document.querySelector('#first-temp--value').value);
    let temperatureTypes = getTemperatureTypes();
    let firstTempType = temperatureTypes[0];
    let secondTempType = temperatureTypes[1];

    if (firstTempType == 'Celsius') {
        if (secondTempType == 'Fahrenheit') {
            let secondTemp = (firstTemp * (9/5)) + 32;
            document.getElementById("second-temp--value").value = secondTemp;
            document.getElementById("temp-conversion--formula").textContent = "(" + firstTemp + "\u00B0C * (9/5)) + 32 = " + secondTemp + "\u00B0F";
        }
        else if (secondTempType == 'Celsius') {
            let secondTemp = firstTemp;
            document.getElementById("second-temp--value").value = secondTemp;
            document.getElementById("temp-conversion--formula").textContent = firstTemp + "\u00B0C = " + secondTemp + "\u00B0C";
        }
        else if (secondTempType == 'Kelvin') {
            let secondTemp = firstTemp + 273.15;
            document.getElementById("second-temp--value").value = secondTemp;
            document.getElementById("temp-conversion--formula").textContent = firstTemp + "\u00B0C + 273.15 = " + secondTemp + "\u00B0K";
        };
    }

    else if (firstTempType == 'Fahrenheit') {
        if (secondTempType == 'Fahrenheit') {
            let secondTemp = firstTemp;
            document.getElementById("second-temp--value").value = secondTemp;
            document.getElementById("temp-conversion--formula").textContent = firstTemp + "\u00B0F = " + secondTemp + "\u00B0F";
        }
        else if (secondTempType == 'Celsius') {
            let secondTemp = (firstTemp - 32) * (5/9);
            document.getElementById("second-temp--value").value = secondTemp;
            document.getElementById("temp-conversion--formula").textContent = "(" + firstTemp + "\u00B0F - 32) * (5/9) = " + secondTemp + "\u00B0C";
        }
        else if (secondTempType == 'Kelvin') {
            let secondTemp = (firstTemp - 32) * (5/9) + 273.15;
            document.getElementById("second-temp--value").value = secondTemp;
            document.getElementById("temp-conversion--formula").textContent = "(" + firstTemp + "\u00B0F - 32) * (5/9) + 273.15 = " + secondTemp + "\u00B0K";
        };
    }

    else if (firstTempType == 'Kelvin') {
        if (secondTempType == 'Fahrenheit') {
            let secondTemp = (firstTemp - 273.15)* (9/5) + 32;
            document.getElementById("second-temp--value").value = secondTemp;
            document.getElementById("temp-conversion--formula").textContent = "(" + firstTemp + "\u00B0K - 273.15)* (9/5) + 32 = " + secondTemp + "\u00B0F";
        }
        else if (secondTempType == 'Celsius') {
            let secondTemp = firstTemp - 273.15;
            document.getElementById("second-temp--value").value = secondTemp;
            document.getElementById("temp-conversion--formula").textContent = firstTemp + "\u00B0K - 273.15 = " + secondTemp + "\u00B0C";
        }
        else if (secondTempType == 'Kelvin') {
            let secondTemp = firstTemp;
            document.getElementById("second-temp--value").value = secondTemp;
            document.getElementById("temp-conversion--formula").textContent = firstTemp + "\u00B0K = " + secondTemp + "\u00B0K";
        };
    };



}