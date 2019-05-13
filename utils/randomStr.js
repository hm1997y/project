const strArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l','s','q', 'w', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'z', 'x', 'v', 'n', 'm', 'Q', 'W', 'E', 'R', 'T' ,'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
const random = function(n){
    let str = '';
    for(var i = 0; i < n; i++){
        let index = Math.floor( Math.random() * 52 )
        str += str[index];
    }
    return str;
}
export {random}