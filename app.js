// hasDuplicate
// Write a function called hasDuplicate which accepts an array 
// and returns true or false if that array contains a duplicate

// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = (arr) => {
    const arrSet = new Set(arr);
    if (arrSet.size === arr.length) {
        return false
    }
    return true;
}

// vowelCount
// Write a function called vowelCount which accepts a string and returns 
// a map where the keys are numbers and the values are the count of the vowels in the string.

// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }

const vowelCount = (string) => {
    const stringArray = string.split('');
    const vowelObj = stringArray.reduce((accumulator, currentValue) => {
        console.log(currentValue);
        if ('aeiou'.includes(currentValue)) {
            if (accumulator[currentValue] == null) {
                accumulator[currentValue] = 1;
            } else {
                accumulator[currentValue] += 1;
            }
        }
        return accumulator;
    }, {})
    const vowelMap = new Map(Object.entries(vowelObj));
    return vowelMap;
}