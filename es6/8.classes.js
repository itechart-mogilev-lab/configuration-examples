import React from 'react'


class MyComponent extends React.Component {
    constructor() {
        super();


        this.inputValue = '';
    }




    handleClick = () => {
        if (this.inputValue) {
            
        }        
    }


    render() {
        return <button onClick={this.handleClick}>Save</button>
    }

}



// class Test {
//     constructor() {
//         this.value = '';
//     }


//     initValue(newVal) {
//         this.value = newVal;
//     }
// }


// let a = new Test();
// console.log(a.value);

// a.initValue('some value');

// let fn = a.initValue;


// fn('some value');
// console.log(a.value);
