function getOTP() {
    let mobile = document.getElementById("mobile").value;

    // Simple validation for mobile number
    if (mobile.length === 10) {
        // Navigate to the OTP page
        window.location.href = "otp.html";
    } else {
        alert("Please enter a valid 10-digit mobile number");
    }
}


