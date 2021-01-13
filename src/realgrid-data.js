import { ValueType } from "realgrid";

export const fields = [{
    fieldName: 'name',
    dataType: ValueType.TEXT,
},
{
    fieldName: 'gender',
    dataType: ValueType.TEXT,
},
{
    fieldName: 'age',
    dataType: ValueType.NUMBER
},
{
    fieldName: 'phone',
    dataType: ValueType.TEXT
},
{
    fieldName: 'department',
    dataType: ValueType.TEXT
},
{
    fieldName: 'salary',
    dataType: ValueType.NUMBER
},
{
    fieldName: 'address',
    dataType: ValueType.TEXT
},
{
    fieldName: 'hiredate',
    dataType: ValueType.TEXT
},
{
    fieldName: 'rank',
    dataType: ValueType.TEXT
},
{
    fieldName: 'birthday',
    dataType: ValueType.TEXT
},
{
    fieldName: 'job',
    dataType: ValueType.TEXT
},
{
    fieldName: 'annual',
    dataType: ValueType.NUMBER
},
{
    fieldName: 'email',
    dataType: ValueType.TEXT
},
{
    fieldName: 'company_phone',
    dataType: ValueType.TEXT
},
{
    fieldName: 'empno',
    dataType: ValueType.INT
}
];

export const columns = [{
    name: "name",
    fieldName: "name",
    type: "data",
    width: "80",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "Name",
        showTooltip: true,
        tooltip:'<span style="color: red;">이름</span>',
    },
    renderer: {
        type:"text",
        showTooltip: true
    }
}, {
    name: "age",
    fieldName: "age",
    type: "data",
    width: "120",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "Age",
        showTooltip: false,
    },
    numberFormat: '0'
}, {
    name: "gender",
    fieldName: "gender",
    type: "data",
    width: "120",
    styles: {
        "textAlignment": "center"
    },
    header: "Gender"
},{
    name: "department",
    fieldName: "department",
    type: "data",
    width: "150",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "Department",
        showTooltip: false,
    },
    
},{
    name: "phone",
    fieldName: "phone",
    type: "data",
    width: "220",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "Phone",
        showTooltip: false,
    },
    
},{
    name: "salary",
    fieldName: "salary",
    type: "data",
    width: "220",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "Salary",
        showTooltip: false,
    },
    numberFormat: '0'
    
},{
    name: "address",
    fieldName: "address",
    type: "data",
    width: "350",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "Address",
        showTooltip: false,
    },
    
},{
    name: "hiredate",
    fieldName: "hiredate",
    type: "data",
    width: "220",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "Hiredate",
        showTooltip: false,
    },
    
},{
    name: "rank",
    fieldName: "rank",
    type: "data",
    width: "150",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "Rank",
        showTooltip: false,
    },
    
},{
    name: "birthday",
    fieldName: "birthday",
    type: "data",
    width: "220",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "Birthday",
        showTooltip: false,
    },
    
},{
    name: "job",
    fieldName: "job",
    type: "data",
    width: "150",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "Job",
        showTooltip: false,
    },
    
},{
    name: "annual",
    fieldName: "annual",
    type: "data",
    width: "120",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "Annual",
        showTooltip: false,
    },
    numberFormat: '0'
    
},{
    name: "company_phone",
    fieldName: "company_phone",
    type: "data",
    width: "220",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "Company_phone",
        showTooltip: false,
    },
    
},{
    name: "email",
    fieldName: "email",
    type: "data",
    width: "300",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "Email",
        showTooltip: false,
    },
}]

export const rows = [{
    "Name": "Kessie",
    "FullName": "Vijendra N. Raj",
    "Email": "mus.Donec.dignissim@Praesent.edu",
    "Company": "Arcu Et Pede Incorporated",
    "Age": "17"
},
{
    "Name": "Evelyn",
    "FullName": "Hridaynath K. Ismail",
    "Email": "fringilla.euismod@elementum.edu",
    "Company": "Aliquam Tincidunt Ltd",
    "Age": "28"
},
{
    "Name": "Colleen",
    "FullName": "Kanwalkishore C. Khan",
    "Email": "tellus.non.magna@porttitorvulputate.org",
    "Company": "Ultrices Duis Volutpat Institute",
    "Age": "38"
},
{
    "Name": "Velma",
    "FullName": "Dharani P. Patel",
    "Email": "ipsum@orcilobortisaugue.net",
    "Company": "Posuere Associates",
    "Age": "25"
},
{
    "Name": "Fallon",
    "FullName": "Preeti M. Singh",
    "Email": "rutrum@orci.com",
    "Company": "Turpis Nec Inc.",
    "Age": "46"
},
{
    "Name": "Alexis",
    "FullName": "Karnik Y. Patel",
    "Email": "auctor.nunc.nulla@egestas.net",
    "Company": "Massa Quisque Porttitor Industries",
    "Age": "34"
},
{
    "Name": "Camille",
    "FullName": "Satyamurty A. Singh",
    "Email": "Nunc@blanditenimconsequat.co.uk",
    "Company": "Lorem Lorem Luctus PC",
    "Age": "22"
},
{
    "Name": "Aristotle",
    "FullName": "Ora C. Rowe",
    "Email": "sed.orci@libero.edu",
    "Company": "Integer Aliquam Corporation",
    "Age": 53
},
{
    "Name": "Anthony",
    "FullName": "Alea Bailey",
    "Email": "orci.luctus.et@Cum.ca",
    "Company": "Eros Nam Corp.",
    "Age": 58
},
{
    "Name": "Hakeem",
    "FullName": "Kadeem J. Patel",
    "Email": "aliquet.diam.Sed@penatibuset.com",
    "Company": "Ligula Aenean Gravida Consulting",
    "Age": 36
},
{
    "Name": "Raja",
    "FullName": "Chloe Valentine",
    "Email": "Cras.dictum@vulputatenisi.ca",
    "Company": "Erat Eget Tincidunt Institute",
    "Age": 40
},
{
    "Name": "Shad",
    "FullName": "Zoe P. Boyd",
    "Email": "Sed@semperpretium.edu",
    "Company": "Amet LLP",
    "Age": 22
},
{
    "Name": "Autumn",
    "FullName": "Brittany U. Copeland",
    "Email": "sit.amet@interdumSedauctor.co.uk",
    "Company": "Nisi Cum Sociis PC",
    "Age": 36
}]