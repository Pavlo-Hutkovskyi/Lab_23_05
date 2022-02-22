class Shop {
    constructor(name, address) {
        this.name = name;
        this.address = address;
        this.listGood = [];

        if(typeof name === 'undefined') this.name = 'Unknown shop';
        if(typeof address === 'undefined') this.address = 'Unknown address';
    }
}

let shopList = [];

function addShop(name, address) {
    let shop = new Shop(name, address);
    shopList.push(shop);
    return shop;
}

function removeShop(name, address) {
    for (const i in shopList)
        if(shopList[i].name === name && shopList[i].address === address){shopList.splice(+i,1);return 1;}
    return -1;
}

function findShop(name, address) {
    for (const shop of shopList)
        if(shop.name === name && shop.address === address)return shop;
    return -1;
}

function editShop(name,address,newName,newAddress) {
    if(findShop(name, address)!==-1) {
        let shop = findShop(name, address);
        shop.name = newName;
        shop.address = newAddress;
        return shop;
    }
    else return -1;
}

function getShop() {
    console.log('\n\tShop');
    for (const shop of shopList) {
        console.group();
        console.log('\nShop name:' + shop.name + ', Shop address:' + shop.address);
        console.groupEnd();
    }
    console.log('\n');
    return shopList;
}

// Експортуємо функції
exports.findShop = findShop;
exports.addShop = addShop;
exports.removeShop = removeShop;
exports.editShop = editShop;
exports.getShop = getShop;

