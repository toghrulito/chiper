
let passParagraph = document.getElementById("password-display")
let val = document.getElementById("length")

function generate(){
    let length = val.value;

    if (length > 0) {
         let password = generatePassword(length);
         document.getElementById('password-display').textContent = "Super Strong Password: " +password;
     } else {
         document.getElementById('password-display').textContent = 'Please enter a valid length.';
     }

}


function generatePassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;}




