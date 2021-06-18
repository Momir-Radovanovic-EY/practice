function fn(message){
    console.log(message + this);
}

var obj = {
    obfn: fn
}

var person = {
    name: 'Momir'
}

obj.obfn.bind(person)();

obj.obfn.call(person, 'Momir');
obj.obfn.apply(person, ['Hello'])
