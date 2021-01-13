const Koa = require('koa');
const Router = require('koa-router');
const sql = require('mssql');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const router = new Router();


let table = [];
let grid = [];
let griddata = {};
let chart = [];

const config = {
    user: 'sa',
    password: 'Admin6973',
    server: '221.161.62.124',
    database: 'Han_Eng_Back',
    port: 2433,

    
};
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    await next();
  });
app.use((ctx,next)=>{
    
    next();
})
app.use(bodyParser()).use(router.routes()).use(router.allowedMethods());


router.get('/api/table',(ctx,next)=>{
    console.log('table호출')
    
    getTable()
    .then(()=>console.log("확인합니다",table));
    ctx.body = table;
    
});
router.get('/api/grid',(ctx,next)=>{
    console.log('grid호출');

    getGrid();
    
    ctx.body = grid;
});
router.get('/api/griddata',(ctx)=>{
    const value2 = ctx.query.empno;
    console.log("empno:",value2);
    getGridById(value2).then(()=>console.log("그리드 데이터 확인:",griddata));
    ctx.body = griddata;

})

router.post('/api/grid',(ctx)=>{
    console.log('post실행여부');
    const b = ctx.request.body;

    console.log("b:",b);
    console.log("값 하나만 뽑아보기",b.name1);
    const data = {
        name1 : b.name1,
        age : b.age,
        gender : b.gender,
        department : b.department,
        phone : b.phone,
        salary : b.salary,
        address : b.address,
        hiredate : b.hiredate,
        rank : b.rank,
        birthday : b.birthday,
        job : b.job,
        company_phone : b.company_phone,
        tno : b.tno
    };
    console.log("data :",data);
    postGrid(data).then(()=>console.log("그리드 데이터 인서트완료"));
    ctx.body = '요청했음';


})

router.put('/api/grid',(ctx)=>{
    const b = ctx.request.body;
    const data ={
        name1 : b.name1,
        age : b.age,
        gender : b.gender,
        department : b.department,
        phone : b.phone,
        salary : b.salary,
        address : b.address,
        hiredate : b.hiredate,
        rank : b.rank,
        birthday : b.birthday,
        job : b.job,
        company_phone : b.company_phone,
        empno : b.empno,
        email : b.email,
        annual : b.annual
        
    };
    updateGrid(data).then(()=>console.log("그리드 데이터 업데이트"));
    ctx.body = '업데이트했음';
})

router.delete('/api/grid',(ctx)=>{
    const empno = ctx.query.empno;
    console.log("empno:",empno);
    deleteGrid(empno);
   
    ctx.body = '삭제했음'
})

router.get('/api/chart',(ctx)=>{
    console.log("Get Chart");
    getChart();
    ctx.body= chart;
})



app.listen(4000,()=>{
    console.log('serverOpen');
})

const getTable = async function(){
    try{
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from jaehak_table1');
        console.dir(result.recordset);
        table = result.recordset;
        console.log(table);
    }catch(err){
        console.log(err);
    }
}

const getGrid = async function(){
    try{
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from jaehak_table2');
        grid = result.recordset;
        
    }catch(err){
        console.log(err);
    }
}

const getChart = async function(){
    try{
        let pool = await sql.connect(config);
        let result = await pool.request().query('select * from jaehak_chart');
        chart = result.recordset;

    }catch(err){
        console.log(err);
    }
}

const getGridById = async function(empnos){
   
    try{
        console.log(empnos);
        const empno = empnos;

        let pool = await sql.connect(config);
        let result = await pool.request()
        .input('empno',sql.Int,empno)
        .query('select * from jaehak_table2 where empno=@empno');
        griddata = result.recordset;
        console.log("그리드 값:",grid);
    }catch(err){
        console.log(err);
    }
}

const updateGrid = async function(data){
    try{
        let pool = await sql.connect(config);
        let result = await pool.request()
        .input('name1',sql.NVarChar(50),data.name1)
        .input('age',sql.Int,data.age)
        .input('gender',sql.NChar(10),data.gender)
        .input('phone',sql.NChar(30),data.phone)
        .input('department',sql.NVarChar(50),data.department)
        .input('salary',sql.Int,data.salary)
        .input('address',sql.NVarChar(500),data.address)
        .input('hiredate',sql.Date,data.hiredate)
        .input('rank',sql.NChar(50),data.rank)
        .input('birthday',sql.Date,data.birthday)
        .input('job',sql.NVarChar(50),data.job)
        .input('annual',sql.Int,data.annual)
        .input('email',sql.NVarChar(100),data.email)
        .input('company_phone',sql.NChar(30),data.company_phone)
        .input('empno',sql.Int,data.empno)
        .query('update jaehak_table2 set name=@name1,age=@age,gender=@gender,phone=@phone,department=@department,salary=@salary,address=@address,hiredate=@hiredate,rank=@rank,birthday=@birthday,job=@job,annual=@annual,company_phone=@company_phone,email=@email where empno=@empno');
        console.dir(result);
    } catch(err){
        console.log(err);
    }}

const postGrid = async function(data){
    try{
        let pool = await sql.connect(config);
        let result = await pool.request()
        .input('name1',sql.NVarChar(50),data.name1)
        .input('age',sql.Int,data.age)
        .input('gender',sql.NChar(10),data.gender)
        .input('phone',sql.NChar(30),data.phone)
        .input('department',sql.NVarChar(50),data.department)
        .input('salary',sql.Int,data.salary)
        .input('address',sql.NVarChar(500),data.address)
        .input('hiredate',sql.Date,data.hiredate)
        .input('rank',sql.NChar(50),data.rank)
        .input('birthday',sql.Date,data.birthday)
        .input('job',sql.NVarChar(50),data.job)
        .input('annual',sql.Int,data.annual)
        .input('email',sql.NVarChar(100),data.email)
        .input('company_phone',sql.NChar(30),data.company_phone)
        .input('tno',sql.Int,data.tno)
        .query('insert into jaehak_table2(name,age,gender,phone,department,salary,address,hiredate,rank,birthday,job,annual,email,company_phone,tno) values(@name1,@age,@gender,@phone,@department,@salary,@address,@hiredate,@rank,@birthday,@job,@annual,@email,@company_phone,@tno)');
        console.dir(result);
    } catch(err){
        console.log(err);
    }

    
}
const deleteGrid = async function(empno){
    try{
        console.log(empno);

        let pool = await sql.connect(config);
        let result = await pool.request()
        .input('empno',sql.Int,empno)
        .query('delete from jaehak_table2 where empno=@empno');
        console.dir(result);
    }catch(err){
        console.log(err);
    }
}