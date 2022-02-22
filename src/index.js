module.exports = function reverse(numb) {
    numb = String(numb);
    if (numb[0] == '-') numb = numb.slice(1);
    let newNumb = '';
    for (let i = 0; i < numb.length; i++) {
        newNumb = newNumb + numb[numb.length - 1 - i];
    }
    newNumb = +newNumb;
    return newNumb;
}