import React, { useEffect, useRef, useState } from 'react';
import { GridView, LocalDataProvider } from 'realgrid';
import { columns, fields } from '../realgrid-data';
import '../App.css';
import axios from 'axios';




const Grid = (props) => {

    let provider = useRef(null);
    let gridView = useRef(null);
    const [tables,setTables] = useState([props.tables]);
    const [updateData,setUpdateData] = useState([]);
    let updata = useRef(null);
    const [check,setCheck]= useState(false); //저장 눌렀다면 리랜더링 되게끔 체크하기 위한 목적
    useEffect(()=>{

        console.log(check);
       !provider.current && (provider.current = new LocalDataProvider());   //이미 렌더링되어 있는 경우 리렌더링시 작동안하게 하기(오류방지)
        // !gridView.current && (gridView.current = new GridView("realgrid"));

        (gridView.current === null) && (gridView.current = new GridView("realgrid"));
  
        provider.current.setFields(fields);
        gridView.current.setDataSource(provider.current);
        gridView.current.setColumns(columns);
        


        axios.get('/api/grid')
        .then((res)=>{
            provider.current.setRows(res.data)
        })
        .catch((err)=>{


            console.log("실패... 원인:",err);
        }).then(()=>{
            console.log('tables: ',tables);
        });
      
        gridView.current.editOptions.insertable = true;
        gridView.current.editOptions.appendable = true;
        gridView.current.setEditOptions({deletable:true});
      
       updateFunction();
       setCheck(false);
       
        
        return()=>{
           
        }
    },[tables,check]);      //check 바뀌면 재렌더링(저장값 바로 불러오게하기)

    const appendButton = () => {
        gridView.current.beginAppendRow();
        gridView.current.showEditor();
        gridView.current.setFocus();
    }
    const submitButton = () => {
        let rows = null;
        rows = provider.current.getAllStateRows();
        console.log('rows:',rows)
        const created = rows.created;
        console.log(rows);
        console.log(rows.created);
        console.log(provider.current.getRows(rows.created[0],rows.created[0]));
        created.map((c)=>{
            console.log(c);

            console.log(provider.current.getRows(c,c));
            const temp = provider.current.getRows(c,c)[0];
            console.log("temp:",temp[0]);
            axios.post('/api/grid',{
                name1: temp[0],
                age : temp[2],
                gender : temp[1],
                department : temp[4],
                phone : temp[3],
                salary : temp[5],
                address : temp[6],
                hiredate : temp[7],
                rank : temp[8],
                birthday: temp[9],
                job: temp[10],
                annual: temp[11],
                company_phone: temp[13],
                email : temp[12],
                tno : (c+1),
            },{
                withCredentials: true,
                proxy: {
                    port:4000,
                    host:'localhost',
                }
            })
            .then((res)=>{
                console.log('삽입성공!');
                console.log(res);
            }).catch(err=>{
                console.log(err);
            })
        })
        update();
        setCheck(true);     //저장 누르면 리렌더링할 수 있게끔 check를 true로 바꿔주기.
        setUpdateData([]);  //저장 누르고나면 updateData를 비워줘야 새로고침 안하고 추가로 업데이트할때 오류안남.
        

    }

    const deleteButton = () => {
        const curr = gridView.current.getCurrent();
        console.log("현재 행:",curr);
        const empno = provider.current.getRows(curr.dataRow,curr.dataRow)[0];
        console.log("empno:",empno[14]);
        provider.current.removeRow(curr.dataRow);
        axios.delete('/api/grid',{
            params: {
                empno: empno[14]
            }
        }).then((res)=>{
         
            console.log("res값 : ",res);
                   
        });
    }

    
    const updateFunction = () => {
        provider.current.onRowUpdating = function(provider,row){
            const item = gridView.current.getEditingItem();
            if(item){
                console.log(item);
                setUpdateData(updateData.push(item));
                
            }else{
                return false;
            }
            console.log("update된 값들:",updateData);
            updata.current = updateData;
            
        }

        
        
        // provider.current.onRowUpdated = function(provider,row){
        //     const r = provider.getJsonRow(row);
        //     console.log(r);
        //     console.log(updateData);
        //     setUpdateData(updateData.push(r));
        //     console.log("update된 값들:",updateData);
        // }
    }

    const update = () => {
        console.log('updata확인:',updata.current);
        if(updata.current !== null){
        for(let i=0; i<updata.current.length; i++){
            console.log("test2:",updata.current[i]);
            console.log("길이:",updata.current.length);
            const empno = updata.current[i].values.empno;
            const values = updata.current[i].values;
            console.log("index: "+empno+" values: "+values);
            axios.put('/api/grid',{
                name1: values.name,
                age : values.age,
                gender : values.gender,
                department : values.department,
                phone : values.phone,
                salary : values.salary,
                address : values.address,
                hiredate : values.hiredate,
                rank : values.rank,
                birthday: values.birthday,
                job: values.job,
                annual: values.annual,
                company_phone: values.company_phone,
                email : values.email,
                empno : values.empno
            },{
                withCredentials: true,
                proxy: {
                    port:4000,
                    host:'localhost',
                }
            })
            .then((res)=>{
                console.log('수정성공!');
                console.log(res);
            }).catch(err=>{
                console.log(err);
            })
    
        }}
        else{
            console.log("업데이트 없음");
        }
        
    }
    // const testButton = () => {
      


    //     axios.get('/api/griddata',{      //특정데이터 불러오기
    //         params: {
    //             empno: empno
    //         }
    //     }).then((res)=>{
    //         const a = res.data[0];
    //         console.log("res값 : ",a);
    //         for(let i=0;i<16;i++){
                
    //         }
            
    //     });
        
    // }
    return (
        <div >
            <h2>RealGrid2 Practice</h2>
          
            <div id="realgrid"></div>
            

            <button onClick={appendButton}>행추가</button>
            <button onClick={submitButton}>저장</button>
            <button onClick={deleteButton}>삭제</button>            
        </div>
    );
};

export default Grid;