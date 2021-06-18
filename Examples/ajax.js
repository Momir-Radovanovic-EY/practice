var http = new XMLHttpRequest();
var url = `some url`;
var method = 'GET';

http.open(method, url);
http.onreadystatechange = function(){
    if(http.readyState === XMLHttpRequest.DONE && http.status === 200) {
        console.log(JSON.parse(http.responseText[0]))
    } else if(http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
        console.log('Error');
    }
};
http.send();

console.log(http);
//Ofc there is a better way to deal with AJAX requests :)