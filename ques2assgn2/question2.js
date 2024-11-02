function checkPalindrome() {
    const input = document.getElementById('numberInput').value;
    let isNumeric = /^\d+$/.test(input);

    if (!isNumeric) {
        document.getElementById('result').textContent = "Please enter only numeric characters.";
        return;
    }

    let reversed = '';
    for (let i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }

    if (input === reversed) {
        document.getElementById('result').textContent = "The series is a palindrome.";
    } else {
        document.getElementById('result').textContent = "The series is not a palindrome.";
    }
}
