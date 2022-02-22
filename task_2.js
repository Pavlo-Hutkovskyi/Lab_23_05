//////////////////////2/////////////////////////

let str =  'lviv, kyiv, odessa, praga, drezden';
console.log('\nString: ' + str);
function upChange(item) {
    let up=item[0].toUpperCase();//робим першу літеру слова в верхньому регістрі
    item=item.slice(1,item.length);//видаляємо першу букву слова
    item=up+item;//додаємо велику букву
    return item;//повертаємо слово
}
let arr;
let array=str.split(' ');//ділимо на лексеми
arr=array.map((item)=>upChange(item));//міняємо слова
console.log('\nUp string: ' + arr.join(" ") + '\n');