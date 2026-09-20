const fs = require('fs');
const path = 'e:/INTERNSHIP-JUNTOAUG2026/ShreeJi Library/ShreeJi Library/src/components/BookingForm.jsx';
let content = fs.readFileSync(path, 'utf8');

// Replace the modal logic in handleSubmit
const targetStr =     setLoading(false);

    // If already logged in, show payment popup directly.
    if (currentUser) {
      setShowPaymentModal(true);
    } else {
      setShowAuthModal(true);
    };

const newStr =     setLoading(false);

    // Redirect user to the CRM's Student Registration page with data pre-filled
    setTimeout(() => {
      const queryParams = new URLSearchParams({
        name: submissionCopy.name || "",
        phone: submissionCopy.phone || "",
        email: submissionCopy.email || "",
        plan: submissionCopy.plan || "",
        message: submissionCopy.message || ""
      }).toString();
      window.location.href = "http://192.168.48.192:8080/student-register.html?" + queryParams;
    }, 500);;

content = content.replace(targetStr, newStr);
fs.writeFileSync(path, content, 'utf8');
console.log('Successfully patched BookingForm.jsx');
