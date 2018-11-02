/* 
Below we have an array of objects. Each object represents a person.

Goal: Learn to use the Array.sort method

Task: Create a new array of people sorted alphabetically by their last name.

Hint: You will need to define a custom sorting function

For reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/

let people = [
	{firstName: 'Robb', lastName: 'Stark'},
	{firstName: 'Danerys', lastName: 'Targaryen'},
	{firstName: 'Cersei', lastName: 'Lannister'},
	{firstName: 'Jon', lastName: 'Snow'},
	{firstName: 'Lysa', lastName: 'Aryn'},
	{firstName: 'Arya', lastName: 'Stark'}
];

const peopleSorted = people.sort(function(a, b){
    if(a.lastName < b.lastName) { 
    	return -1;
    }
    if(a.lastName > b.lastName) { 
    	return 1; 
    }
    return 0;
});


function displayNames(list) {
	return list.map(person => person.firstName + ' ' + person.lastName)
		.join('<br/>');
}

document.querySelector('div').innerHTML = `${displayNames(peopleSorted)}`


