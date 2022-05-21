const cats = ['Milo','Otis','Garfield'];
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}
function appendCat(name) {
    const catAddNameEnd = [...cats,name]
    return catAddNameEnd;
    //const allCats = [...cats,console.log(name)]
}
function prependCat(name) {
    const catAddNameBegin = [name,...cats];
    return catAddNameBegin;
}
function removeLastCat(name) {
    const noLastCat = cats.slice(0,2);
    return noLastCat;
}
function removeFirstCat(name) {
    const noFirstCat = cats.slice(1);
    return noFirstCat;
}



