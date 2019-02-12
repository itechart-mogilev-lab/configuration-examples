



const fn = param => param + "result";







let shorthandObjectNotation = { fn };



let binary = 0b00100001;
let octal = 0o747;
let hex = 0xff0000;

const defaultParamsFn = (arg1, arg2 = 'default value') => {
    arg1 = arg1 || 'default value for arg1'



}



let target = {
    staticData: "static value"
}
let proxy = new Proxy(target, {
    get (receiver, name) {
        if (name == 'load') {
            return () => 'data'
        }


        return name in receiver ? receiver[name] : `Hello there, ${name}`
    }
})
console.log(proxy.staticData) 
console.log(proxy.dynamicProp)

console.log(proxy.load());