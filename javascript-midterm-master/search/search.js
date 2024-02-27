function search(nameList, searchTerm) {
    // Convert the searchTerm to lowercase for case-insensitive comparison
    searchTerm = searchTerm.toLowerCase();
    
    // Filter the nameList to find names containing the searchTerm
    return nameList.filter(function(name) {
        // Convert each name to lowercase for case-insensitive comparison
        return name.toLowerCase().includes(searchTerm);
    });
}

// Test cases
console.log(search(['Bryce', 'Ron', 'Sarah', 'Brett', 'Steven', 'Benjamin'], 'B')); // ['Bryce', 'Brett', 'Benjamin']
console.log(search(['Bryce', 'Ron', 'Sarah', 'Brett', 'Steven', 'Benjamin'], 'br')); // ['Bryce', 'Brett']
console.log(search(['Bryce', 'Ron', 'Sarah', 'Brett', 'Steven', 'Benjamin'], 'bry')); // ['Bryce']
