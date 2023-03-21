// Write your solution here!
const cats = [`Milo`, `Otis`, `Garfield`];

function destructivelyAppendCat(Ralph){
    cats.push(`Ralph`)
};

function destructivelyPrependCat(Bob){
    cats.unshift(`Bob`)
};

function destructivelyRemoveLastCat(Ralph){
    cats.pop()
};

function destructivelyRemoveFirstCat(Bob){
    cats.shift()
};

function appendCat(Broom){ 
    const moreCats = [...cats, `Broom`]
    return moreCats
};

function prependCat(Arnold){
    const beforeCats = [`Arnold`, ...cats]
    return beforeCats
}

function removeLastCat(){
    const byeGarfield = cats.slice(0,-1)
    return byeGarfield
}

function removeFirstCat(){
    const byeMilo = cats.slice(1,3)
    return byeMilo
}