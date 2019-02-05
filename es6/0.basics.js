const fn = param => param + "result";

let shorthandObjectNotation = { fn };

let binary = 0b00101;
let octal = 0o747;
let hex = 0xffa;

const defaultParamsFn = (arg1, arg2 = 'default value') => {

}



let target = {
    staticData: "static value"
}
let proxy = new Proxy(target, {
    get (receiver, name) {
        return name in receiver ? receiver[name] : `Hello there, ${name}`
    }
})
console.log(proxy.staticData) 
console.log(proxy.dynamicProp)