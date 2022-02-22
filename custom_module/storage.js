class Storage {
    constructor(name, address) {
        this.name=name;
        this.address=address;
        this.shopList=[];
        this.listGood=[];

        if(typeof name === 'undefined') this.name='Unknown storage';
        if(typeof address === 'undefined') this.address='Unknown address';
    }
}

let storageList = [];

function addStorage(name, address) {
    let storage = new Storage(name, address);
    storageList.push(storage);
    return storage;
}

function removeStorage(name, address) {
    for (const i in storageList)
        if(storageList[i].name === name && storageList[i].address === address){storageList.splice(+i,1);return 1;}
    return -1;
}

function findStorage(name, address) {
    for (const storage of storageList)
        if(storage.name === name && storage.address === address)return storage;
    return -1;
}

function editStorage(name,address,newName,newAddress) {
    if(findStorage(name, address)!==-1) {
        let storage = findStorage(name, address);
        storage.name = newName;
        storage.address = newAddress;
        return storage;
    }
    else return -1;
}

function getStorage() {
    console.log('\n\tStorage');
    for (const storage of storageList) {
        console.group();
        console.log('\nStorage name:' + storage.name + ', Storage address:' + storage.address);
        console.groupEnd();
    }
    console.log('\n');
    return storageList;
}

// Експортуємо функції
exports.findStorage = findStorage;
exports.addStorage = addStorage;
exports.removeStorage = removeStorage;
exports.editStorage = editStorage;
exports.getStorage = getStorage;