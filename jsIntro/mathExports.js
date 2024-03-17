function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    if(b!=0){
        return a/b;
    }
    else{
        return "Demominator can't be 0"
    }
}

const pi = 3.14

function defaultFun(){
    return "This is a default function";
}

export { add, sub, mul, div, pi, defaultFun };

// module.exports = { add, sub, mul, div, pi, defaultFun }; // for node.js