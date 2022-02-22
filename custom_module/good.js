class Good {
    constructor(name, prize) {
        this.name=name;
        this.prize=prize;

        if(typeof name === 'undefined') this.name='Unknown good';
    }
}

let goodList = [];

function addGood(name, prize) {
    let good = new Good(name, prize);
    goodList.push(good);
    return good;
}

function removeGood(name, prize) {
    for (const i in goodList)
        if(goodList[i].name === name && goodList[i].prize === prize){goodList.splice(+i,1);return 1;}
    return -1;
}

function findGood(name, prize) {
    for (const good of goodList)
        if(good.name === name && good.prize === prize)return good;
    return -1;
}

function editGood(name,prize,newName,newPrize) {
    if(findGood(name, prize)!==-1) {
        let good = findGood(name, prize);
        good.name = newName;
        good.prize = newPrize;
        return good;
    }
    else return -1;
}

function getGood() {
    console.log('\n\tGood');
    for (const good of goodList) {
        console.group();
        console.log('\nGood name:' + good.name + ', Good prize:' + good.prize);
        console.groupEnd();
    }
    console.log('\n');
    return goodList;
}

function addToStorage(name,prize,storage) {
    let good = new Good(name,prize);
    storage.listGood.push(good);
    return good;
}

function addToShop(name,prize,shop) {
    let good = new Good(name,prize);
    shop.listGood.push(good);
    return good;
}

function removeFromStorage(name,prize,storage) {
    for (const i in storage.listGood)
        if(storage.listGood[i].name === name && storage.listGood[i].prize === prize){storage.listGood.splice(+i,1);return 1;}
    return -1;
}

function moveStorageToStorage(name, prize, storage1,storage2) {
    for (const good of storage1.listGood)
        if(good.name === name && good.prize === prize){storage2.listGood.push(good);removeFromStorage(name,prize,storage1);return 1;}
    return -1;
}

function moveGoodFromStorageToShop(name, prize, storage ,shop){
    for (const good of storage.listGood)
        if(good.name === name && good.prize === prize){addToShop(name,prize,shop);removeFromStorage(name,prize,storage);return 1;}
    return -1;
}

// Експортуємо функції
exports.findGood                  = findGood;
exports.addGood                   = addGood;
exports.removeGood                = removeGood;
exports.editGood                  = editGood;
exports.getGood                   = getGood;
exports.addToStorage              = addToStorage;
exports.addToShop                 = addToShop;
exports.removeFromStorage         = removeFromStorage;
exports.moveStorageToStorage      = moveStorageToStorage;
exports.moveGoodFromStorageToShop = moveGoodFromStorageToShop;