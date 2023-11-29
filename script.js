const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
   // Check if the key is a string and not empty
  if (typeof key !== 'string' || key.length === 0) {
    // Return false for invalid input
    return false;
  }

  // Check if the global object sampleObject contains the given key
  return Object.prototype.hasOwnProperty.call(sampleObject, key);
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
