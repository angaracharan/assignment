function calculateRegistrationFeeAndTuition() {
    var studentType = prompt("Enter student type (bachelor or master):");
    var residency = prompt("Enter residency (in-state or out-state):");
    var credits = parseInt(prompt("Enter the number of credits taking:"));

    var registrationFee, tuitionRate;

    if (studentType.toLowerCase() === "bachelor") {
        if (residency.toLowerCase() === "in-state") {
            registrationFee = 200;
            tuitionRate = 350;
        } else if (residency.toLowerCase() === "out-state") {
            registrationFee = 600;
            tuitionRate = 700;
        }
    } else if (studentType.toLowerCase() === "master") {
        if (residency.toLowerCase() === "in-state") {
            registrationFee = 300;
            tuitionRate = 450;
        } else if (residency.toLowerCase() === "out-state") {
            registrationFee = 900;
            tuitionRate = 900;
        }
    }

    var tuition = tuitionRate * credits;
    var totalFee = registrationFee + tuition;
 
     var resultText = "Student type : " + studentType + "<br>";
     resultText += "Residency : " + residency + "<br>";
     resultText += "Credits taking : " + credits + "<br>";
     resultText += "Registration Fee ($): " + registrationFee + "<br>";
     resultText += "Tuition Rate ($/credit): " + tuitionRate + "<br>";
     resultText += "Tuition ($): " + tuition + "<br>";
     resultText += "Total ($) : " + totalFee + "<br>";
   

    document.getElementById("result").innerHTML = resultText;
}
