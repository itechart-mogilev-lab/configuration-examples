let multilineString = `
select *
from Table`;


let multi = 'select\n' + 
'from Table' + '\n'








let data = { id: 1, name: "Ruslan" };

let stringFormatting = `
ID=${data.id}, User name=${data.name}`;








// Special formatter 
function SpecialFormatterFunction(stringSegments, ...args) {
    console.log('String segments', stringSegments)
    console.log('Data arguments', args)
}

let table = 'Users'
SpecialFormatterFunction`select * from ${table} where ${() => data.id == 1}`;

