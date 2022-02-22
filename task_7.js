const mod = require('custom_module');

function printStorage(st) {
    for (const item of st.listGood) {
        console.log('\n' + item.name+ '   ' + item.prize);
    }
}

// Додавання магазинів
let s1 = mod.addShop("Shop_1", "Test address 1");
let s2 = mod.addShop("Shop_2", "Test address 2");
let s3 = mod.addShop("Shop_3", "Test address 3");

// Список лікарень
mod.getShop();

// Видалення лікарень
console.log("Видалення магазину: Shop_2");
mod.removeShop("Shop_2", "Test address 2");

// Список лікарень
mod.getShop();

// Зміна лікарень
console.log("Зміна лікарні: Shop_3");
mod.editShop("Shop_3", "Test address 3", "New shop name", "New address");

// Список лікарень
mod.getShop();

// Пошук лікарень
let shop1 = mod.findShop("Shop_1", "Test address 1");
console.log(`Пошук лікарні Shop_1: ${shop1 !== -1 ? "знайдено" : "не знайдено"}`);
let shop2 = mod.findShop("Shop_7", "Test address 7");
console.log(`Пошук лікарні Shop_7: ${shop2 !== -1 ? "знайдено" : "не знайдено"}`);

////////////////////////////////////////////////////////////////////////////////////

// Додавання складу
let st1 = mod.addStorage("Storage_1", "Address 1");
let st2 = mod.addStorage("Storage_2", "Address 2");
let st3 = mod.addStorage("Storage_3", "Address 3");

// Список складу
mod.getStorage();

// Видалення складу
console.log("Видалення складу: Storage_2");
mod.removeStorage("Storage_2", "Address 2");

// Список складів
mod.getStorage();

// Зміна складу
console.log("Зміна складу: Storage_3");
mod.editStorage("Storage_3", "Address 3", "New storage", "New address");

// Список складу
mod.getStorage();

// Пошук складів
let storage1 = mod.findStorage("Storage_1", "Address 1");
console.log(`Пошук складу Shop_1: ${storage1 !== -1 ? "знайдено" : "не знайдено"}`);
let storage2 = mod.findStorage("Storage_7", "Address 7");
console.log(`Пошук складу Shop_7: ${storage2 !== -1 ? "знайдено" : "не знайдено"}`);

////////////////////////////////////////////////////////////////////////////////////

// Додавання товару
mod.addGood("Банани", 30);
mod.addGood("Сливи", 50);
mod.addGood("Яблука", 78);

// Список товару
mod.getGood();

// Видалення товару
console.log("Видалення товару: Сливи");
mod.removeGood("Сливи", 50);

// Список товару
mod.getGood();

// Зміна товару
console.log("Зміна товару: Банан");
mod.editGood("Банани", 30, "Персики", 45);

// Список товару
mod.getGood();

// Пошук товару
let good1 = mod.findGood("Персики", 45);
console.log(`Пошук складу Персику: ${good1 !== -1 ? "знайдено" : "не знайдено"}`);
let good2 = mod.findGood("Лимон", 90);
console.log(`Пошук складу Лимону: ${good2 !== -1 ? "знайдено" : "не знайдено"}`);

//Доставка товару на склад
st1.listGood=[{name:"Мандарини", prize:56},
    {name:"Калина", prize:56}
]
mod.addToStorage("Апельсин" ,12 ,st1);
console.log('\nДоствка товару на перший склад (Апельсин): ');
printStorage(st1);

//Видалення товару зі складу
console.log('\nВидалення товару з першого складу(Калина): ');
mod.removeFromStorage("Калина", 56, st1);
printStorage(st1);

//Доставка з складу до складу
console.log('\nДоставка товару з першого складу до другого:');
console.log('\nПерший склад до доставки: ');
printStorage(st1);
console.log('\nПерший склад після доставки: ');
mod.moveStorageToStorage("Апельсин",12,st1,st2);
printStorage(st1);
console.log('\nДругий склад після доставки: ');
printStorage(st2);

//Доставка з складу до магазину
console.log('\nДоставка товару з складу до магазину: \nАсортимент магазину:');
mod.moveGoodFromStorageToShop("Апельсин", 12, st2,s1);
printStorage(s1);