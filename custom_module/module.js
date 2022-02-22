// Підключаємо необхідні файли
const shop = require("./shop");
const storage = require("./storage");
const good  = require("./good");

// Доступні операції з магазинами
exports.findShop      = shop.findShop;
exports.addShop       = shop.addShop;
exports.removeShop    = shop.removeShop;
exports.editShop      = shop.editShop;
exports.getShop       = shop.getShop;

// Доступні операції з складами
exports.findStorage        = storage.findStorage;
exports.addStorage         = storage.addStorage;
exports.removeStorage      = storage.removeStorage;
exports.editStorage        = storage.editStorage;
exports.getStorage         = storage.getStorage;

// Доступні операції з товарами
exports.findGood                  = good.findGood;
exports.addGood                   = good.addGood;
exports.removeGood                = good.removeGood;
exports.editGood                  = good.editGood;
exports.getGood                   = good.getGood;
exports.addToStorage              = good.addToStorage;
exports.addToShop                 = good.addToShop;
exports.removeFromStorage         = good.removeFromStorage;
exports.moveStorageToStorage      = good.moveStorageToStorage;
exports.moveGoodFromStorageToShop = good.moveGoodFromStorageToShop;