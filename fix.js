const fs = require('fs');
const path = 'e:/INTERNSHIP-JUNTOAUG2026/ShreeJi Library/ShreeJi Library/src/components/BookingForm.jsx';
let content = fs.readFileSync(path, 'utf8');

const target = 'plan: submissionCopy.plan || ""';
const replacement = 'plan: submissionCopy.plan || "",\n        message: submissionCopy.message || ""';
content = content.replace(target, replacement);

const targetUrl = 'http://127.0.0.1:8080/student-register.html';
const newUrl = 'http://192.168.48.192:8080/student-register.html';
content = content.replace(targetUrl, newUrl);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully patched BookingForm.jsx via Node.js');
