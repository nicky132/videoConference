let num = 0;
function count() {
    num++;
    postMessage({num, name: 'dawei'});
    setTimeout('count()', 500);
}
count();
