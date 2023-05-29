// Function to append a value to the result input field
function appendValue(value) {
    document.getElementById('result').value += value;
}
  
// Function to clear the result input field
function clearResult() {
    document.getElementById('result').value = '';
}
  
// Function to calculate the result
function calculate() {
    let result = document.getElementById('result').value;
  
    // Replace percentage symbol with the appropriate calculation
    result = result.replace(/%/g, '/100');
  
    // Use the eval function to calculate the result
    try {
      const calculatedResult = eval(result);
      document.getElementById('result').value = calculatedResult.toLocaleString();
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
}
 
// Function to undo the last input
function undo() {
    const currentResult = document.getElementById('result').value;
    document.getElementById('result').value = currentResult.slice(0, -1);
}

// Function to append a value to the result input field
function appendValue(value) {
    document.getElementById('result').value += value;
}
  
// Function to append brackets to the result input field
function appendBracket() {
    const resultInput = document.getElementById('result');
    const currentResult = resultInput.value;
    const openingBracketCount = (currentResult.match(/\(/g) || []).length;
    const closingBracketCount = (currentResult.match(/\)/g) || []).length;
  
    // Check the bracket counts and append the appropriate bracket
    if (openingBracketCount === closingBracketCount) {
      resultInput.value += '(';
    } else if (openingBracketCount > closingBracketCount) {
      resultInput.value += ')';
    }
}