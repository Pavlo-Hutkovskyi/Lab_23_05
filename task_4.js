//////////////////////4/////////////////////////

let array_of_words = [ 'Lviv', 'Kyiv', 'Odessa','Lviv', 'Praga', 'Drezden','Praga'];

console.log('\nString: ' + array_of_words);

function deleteDuplicates(arr) {
    arr.forEach(item => {
        if (array_of_words.indexOf(item) !== array_of_words.lastIndexOf(item)) {
            array_of_words.splice(array_of_words.lastIndexOf(item), 1);
        }
    });
    return arr;
}

console.log('\nNew string: ' + deleteDuplicates(array_of_words));