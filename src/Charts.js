import React, { Component }  from 'react';
import { Button, Modal, ModalTitle,Table } from 'react-bootstrap'

import { useState,useEffect } from "react";
import BarChart from "./charts/BarChart";
import LineChart from "./charts/LineChart";
import PieChart from "./charts/PieChart";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components';

export const Chart=()=> {
  const [Data, setData] = useState([]);
  const [DataAR, setDataAR] = useState([]);
  const [ViewPostfour, SetPostShowfour] = useState(false)
    const handlePostShowfour = () => { SetPostShowfour(true) }
    const hanldePostClosefour = () => { SetPostShowfour(false) }
  var nbps10=0
  var nbps18=0
  var nbp20=0
  var nbpi10=0
var  nbp1=0
var nbp2=0
var nbp3=0
const [QSTREP, setQSTREP] = useState([10]);
const GetEmployeeData = () => {
    //here we will get all employee data
    const url = 'http://localhost:5001/data'
    axios.get(url)
    
        .then(response => {
            setData(response.data)
            response.data.forEach(element => {
    if(element.Poste=="chef"){
      nbp1++
    }
    if(element.Poste=="chef-1"){
      nbp2++
    }
    if(element.Poste=="chef-2"){ 
      nbp3++
    }
        })
      })
        .catch(err => {
            console.log(err)
        })
        nbPO()
    }
    
  const [userData, setUserData] = useState({
    labels: Data.map((data) => data.fournisseur),
    datasets: [{
        label: "Quantité stock",
        data: Data.map((data) => data.Quantité),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  const data = {
    labels: ["p1","p2","p3"], // first change
    datasets: [{
      label: 'Quantité Stock par Fournisseur',
      fill: false,
      lineTension: 0.0,
      backgroundColor:   [
        "rgba(75,192,192,1)",
        "#D35400",
        "#F1C40F ",
        "#34495E",
        "#2a71d0",],
      borderColor: 'blue',
      pointHitRadius: 20,
      data:[nbp1,nbp2,nbp3] // second change
    }]
  }; 
  const dataAR = {
    labels: DataAR.map(o => o.date), // first change
    datasets: [{
      label: 'Dinar',
      fill: false,
      lineTension: 0.0,
      backgroundColor:   [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",],
      borderColor: 'rgb(41, 33, 116,0.5)',
      pointHitRadius: 20,
      data: DataAR.map(o => parseInt(o.Montant)) // second change
    }]
  };
  function nbPO  () {
  Data.forEach(element => {
    if(element.Poste=="chef"){
      nbp1=nbp1+1
    }
    if(element.Poste=="chef-1"){
      nbp2=nbp2+1
    }
    if(element.Poste=="chef-2"){ 
      nbp3=nbp3+1
    }
    if(element.score>10){
nbps10++
    }
    if(element.score>18){
      nbps18++
          }
          if(element.score==20){
            nbp20++
                }
                if(element.score>10){
                  nbpi10++
                      }
    
  });
  const data = {
    labels: ["p1","p2","p3"], // first change
    datasets: [{
      label: 'nombre participants selon leurs poste de travaille',
      fill: false,
      lineTension: 0.0,
      backgroundColor:   [
        "rgba(75,192,192,1)",
        "#D35400",
        "#F1C40F ",
        "#34495E",
        "#2a71d0",],
      borderColor: 'blue',
      pointHitRadius: 20,
      data:[nbp1,nbp2,nbp3] // second change
    }]
  }; 
  return(
    <div>           <PieChart chartData={data}></PieChart>
    <BarChart chartData={data}></BarChart>

    </div>
  )

}
var nbre1q1=0
var nbre2q1=0
var nbre3q1=0
var nbre4q1=0
var nbre5q1=0
var nbre1q2=0
var nbre2q2=0
var nbre3q2=0
var nbre4q2=0
var nbre5q2=0
var nbre1q3=0
var nbre2q3=0
var nbre3q3=0
var nbre4q3=0
var nbre5q3=0
var nbre1q4=0
var nbre2q4=0
var nbre3q4=0
var nbre4q4=0
var nbre5q4=0
var nbre1q5=0
var nbre2q5=0
var nbre3q5=0
var nbre4q5=0
var nbre5q5=0
var nbre1q6=0
var nbre2q6=0
var nbre3q6=0
var nbre4q6=0
var nbre5q6=0
var nbre1q7=0
var nbre2q7=0
var nbre3q7=0
var nbre4q7=0
var nbre5q7=0
var nbre1q8=0
var nbre2q8=0
var nbre3q8=0
var nbre4q8=0
var nbre5q8=0
var nbre1q9=0
var nbre2q9=0
var nbre3q9=0
var nbre4q9=0
var nbre5q9=0
var nbre1q10=0
var nbre2q10=0
var nbre3q10=0
var nbre4q10=0
var nbre5q10=0
var nbre1q11=0
var nbre2q11=0
var nbre3q11=0
var nbre4q11=0
var nbre5q11=0
var nbre1q12=0
var nbre2q12=0
var nbre3q12=0
var nbre4q12=0
var nbre5q12=0
var nbre1q13=0
var nbre2q13=0
var nbre3q13=0
var nbre4q13=0
var nbre5q13=0
var nbre1q14=0
var nbre2q14=0
var nbre3q14=0
var nbre4q14=0
var nbre5q14=0
var nbre1q15=0
var nbre2q15=0
var nbre3q15=0
var nbre4q15=0
var nbre5q15=0
var nbre1q16=0
var nbre2q16=0
var nbre3q16=0
var nbre4q16=0
var nbre5q16=0
var nbre1q17=0
var nbre2q17=0
var nbre3q17=0
var nbre4q17=0
var nbre5q17=0
var nbre1q18=0
var nbre2q18=0
var nbre3q18=0
var nbre4q18=0
var nbre5q18=0
var nbre1q19=0
var nbre2q19=0
var nbre3q19=0
var nbre4q19=0
var nbre5q19=0
var nbre1q20=0
var nbre2q20=0
var nbre3q20=0
var nbre4q20=0
var nbre5q20=0
function nbPOS  () {
  var i=2
 

  Data.forEach(element => {
    
    if(element.QST[2]==0){
       nbre1q1=nbre1q1+1;
                    

    }
    if(element.QST[2]==1){
      nbre2q1=nbre2q1+1;
                       

   }if(element.QST[2]==2){
    nbre3q1=nbre3q1+1;
                    

 }if(element.QST[2]==3){
  nbre4q1=nbre4q1+1;
              

}if(element.QST[2]==4){
       nbre5q1=nbre5q1+1;
                     

    }
    /**************************************************************** */
    if(element.QST[5]==0){
      nbre1q2=nbre1q2+1;
                   

   }
   if(element.QST[5]==1){
     nbre2q2=nbre2q2+1;
                      

  }if(element.QST[5]==2){
   nbre3q2=nbre3q2+1;
                   

}if(element.QST[5]==3){
 nbre4q2=nbre4q2+1;
             

}if(element.QST[5]==4){
      nbre5q2=nbre5q2+1;
                    

   }
   /**************************************************************** */
   if(element.QST[8]==0){
    nbre1q3=nbre1q3+1;
                 

 }
 if(element.QST[8]==1){
   nbre2q3=nbre2q3+1;
                    

}if(element.QST[8]==2){
 nbre3q3=nbre3q3+1;
                 

}if(element.QST[8]==3){
nbre4q3=nbre4q3+1;
           

}if(element.QST[8]==4){
    nbre5q3=nbre5q3+1;
                  

 }
 /**************************************************************** */
 if(element.QST[11]==0){
  nbre1q4=nbre1q4+1;
               

}
if(element.QST[11]==1){
 nbre2q4=nbre2q4+1;
                  

}if(element.QST[11]==2){
nbre3q4=nbre3q4+1;
               

}if(element.QST[11]==3){
nbre4q4=nbre4q4+1;
         

}if(element.QST[11]==4){
  nbre5q4=nbre5q4+1;
                

}
/**************************************************************** */
if(element.QST[14]==0){
  nbre1q5=nbre1q5+1;
               

}
if(element.QST[14]==1){
 nbre2q5=nbre2q5+1;
                  

}if(element.QST[14]==2){
nbre3q5=nbre3q5+1;
               

}if(element.QST[14]==3){
nbre4q5=nbre4q5+1;
         

}if(element.QST[14]==4){
  nbre5q5=nbre5q5+1;
                

}
/**************************************************************** */
if(element.QST[17]==0){
  nbre1q6=nbre1q6+1;
               

}
if(element.QST[17]==1){
 nbre2q6=nbre2q6+1;
                  

}if(element.QST[17]==2){
nbre3q6=nbre3q6+1;
               

}if(element.QST[17]==3){
nbre4q6=nbre4q6+1;
         

}if(element.QST[17]==4){
  nbre5q6=nbre5q6+1;
                

}
/**************************************************************** */
if(element.QST[20]==0){
  nbre1q7=nbre1q7+1;
               

}
if(element.QST[20]==1){
 nbre2q7=nbre2q7+1;
                  

}if(element.QST[20]==2){
nbre3q7=nbre3q7+1;
               

}if(element.QST[20]==3){
nbre4q7=nbre4q7+1;
         

}if(element.QST[20]==4){
  nbre5q7=nbre5q7+1;
                

}
/**************************************************************** */
if(element.QST[23]==0){
  nbre1q8=nbre1q8+1;
               

}
if(element.QST[23]==1){
 nbre2q8=nbre2q8+1;
                  

}if(element.QST[23]==2){
nbre3q8=nbre3q8+1;
               

}if(element.QST[23]==3){
nbre4q8=nbre4q8+1;
         

}if(element.QST[23]==4){
  nbre5q8=nbre5q8+1;
                

}
/**************************************************************** */
if(element.QST[26]==0){
  nbre1q9=nbre1q9+1;
               

}
if(element.QST[26]==1){
 nbre2q9=nbre2q9+1;
                  

}if(element.QST[26]==2){
nbre3q9=nbre3q9+1;
               

}if(element.QST[26]==3){
nbre4q9=nbre4q9+1;
         

}if(element.QST[26]==4){
  nbre5q9=nbre5q9+1;
                

}
/**************************************************************** */
if(element.QST[29]==0){
  nbre1q10=nbre1q10+1;
               

}
if(element.QST[29]==1){
 nbre2q10=nbre2q10+1;
                  

}if(element.QST[29]==2){
nbre3q10=nbre3q10+1;
               

}if(element.QST[29]==3){
nbre4q10=nbre4q10+1;
         

}if(element.QST[29]==4){
  nbre5q10=nbre5q10+1;
                

}
/**************************************************************** */
if(element.QST[32]==0){
  nbre1q11=nbre1q11+1;
               

}
if(element.QST[32]==1){
 nbre2q11=nbre2q11+1;
                  

}if(element.QST[32]==2){
nbre3q11=nbre3q11+1;
               

}if(element.QST[32]==3){
nbre4q11=nbre4q11+1;
         

}if(element.QST[32]==4){
  nbre5q11=nbre5q11+1;
                

}
/**************************************************************** */
if(element.QST[35]==0){
  nbre1q12=nbre1q12+1;
               

}
if(element.QST[35]==1){
 nbre2q12=nbre2q12+1;
                  

}if(element.QST[35]==2){
nbre3q12=nbre3q12+1;
               

}if(element.QST[35]==3){
nbre4q12=nbre4q12+1;
         

}if(element.QST[35]==4){
  nbre5q12=nbre5q12+1;
                

}
/**************************************************************** */
if(element.QST[38]==0){
  nbre1q13=nbre1q13+1;
               

}
if(element.QST[38]==1){
 nbre2q13=nbre2q13+1;
                  

}if(element.QST[38]==2){
nbre3q13=nbre3q13+1;
               

}if(element.QST[38]==3){
nbre4q13=nbre4q13+1;
         

}if(element.QST[38]==4){
  nbre5q13=nbre5q13+1;
                

}
/**************************************************************** */
if(element.QST[41]==0){
  nbre1q14=nbre1q14+1;
               

}
if(element.QST[41]==1){
 nbre2q14=nbre2q14+1;
                  

}if(element.QST[41]==2){
nbre3q14=nbre3q14+1;
               

}if(element.QST[41]==3){
nbre4q14=nbre4q14+1;
         

}if(element.QST[41]==4){
  nbre5q14=nbre5q14+1;
                

}
/**************************************************************** */
if(element.QST[44]==0){
  nbre1q15=nbre1q15+1;
               

}
if(element.QST[44]==1){
 nbre2q15=nbre2q15+1;
                  

}if(element.QST[44]==2){
nbre3q15=nbre3q15+1;
               

}if(element.QST[44]==3){
nbre4q15=nbre4q15+1;
         

}if(element.QST[44]==4){
  nbre5q15=nbre5q15+1;
                

}
/**************************************************************** */
if(element.QST[47]==0){
  nbre1q16=nbre1q16+1;
               

}
if(element.QST[47]==1){
 nbre2q16=nbre2q16+1;
                  

}if(element.QST[47]==2){
nbre3q16=nbre3q16+1;
               

}if(element.QST[47]==3){
nbre4q16=nbre4q16+1;
         

}if(element.QST[47]==4){
  nbre5q16=nbre5q16+1;
                

}
/**************************************************************** */
if(element.QST[50]==0){
  nbre1q17=nbre1q17+1;
               

}
if(element.QST[50]==1){
 nbre2q17=nbre2q17+1;
                  

}if(element.QST[50]==2){
nbre3q17=nbre3q17+1;
               

}if(element.QST[50]==3){
nbre4q17=nbre4q17+1;
         

}if(element.QST[50]==4){
  nbre5q17=nbre5q17+1;
                

}
/**************************************************************** */
if(element.QST[53]==0){
  nbre1q18=nbre1q18+1;
               

}
if(element.QST[53]==1){
 nbre2q18=nbre2q18+1;
                  

}if(element.QST[53]==2){
nbre3q18=nbre3q18+1;
               

}if(element.QST[53]==3){
nbre4q18=nbre4q18+1;
         

}if(element.QST[53]==4){
  nbre5q18=nbre5q18+1;
                

}
/**************************************************************** */
if(element.QST[56]==0){
  nbre1q19=nbre1q19+1;
               

}
if(element.QST[56]==1){
 nbre2q19=nbre2q19+1;
                  

}if(element.QST[56]==2){
nbre3q19=nbre3q19+1;
               

}if(element.QST[56]==3){
nbre4q19=nbre4q19+1;
         

}if(element.QST[56]==4){
  nbre5q19=nbre5q19+1;
                

}
/**************************************************************** */
if(element.QST[59]==0){
  nbre1q20=nbre1q20+1;
               

}
if(element.QST[59]==1){
 nbre2q20=nbre2q20+1;
                  

}if(element.QST[59]==2){
nbre3q20=nbre3q20+1;
               

}if(element.QST[59]==3){
nbre4q20=nbre4q20+1;
         

}if(element.QST[59]==4){
  nbre5q20=nbre5q20+1;
                

}
/**************************************************************** */

    
  });
  const data = {
    labels: ["<10",">=10",">=18","=20"], // first change
    datasets: [{
      label: 'nombre participants selon leurs poste de travaille',
      fill: false,
      lineTension: 0.0,
      backgroundColor:   [
        "rgba(75,192,192,1)",
        "#D35400",
        "#F1C40F ",
        "#34495E",
        "#2a71d0",],
      pointHitRadius: 20,
      data:[nbpi10,nbps10,nbps18,nbp20] // second change
    }]
  }; 
  return(
    <div><Table className='responsive-table  table-hover table-bordered '>
    <thead>
  <tr>
  <th>Question/Nombre de réponses </th>
  <th >Réponse 1</th>
  <th>Réponse 2</th>
  <th>Réponse 3</th>
  <th>Réponse 4</th>
  <th>Réponse 5</th>
  </tr>
  </thead>
  <tbody>
  
  
  
  <tr style={{backgroundColor:  "#007bff",color:"white",fontWeight:"bold"}} >  
  <td > Question 1</td>
  <td>{nbre1q1}</td>
  <td>{nbre2q1}</td>
  <td>{nbre3q1}</td>
  <td>{nbre4q1}</td>
  <td>{nbre5q1}</td>
  
  
  
  
  </tr>
  <tr style={{backgroundColor:   "#28a745",color:"white",fontWeight:"bold"}}>  
  <td> Question 2</td>
  <td style={{}}>{nbre1q2}</td>
  <td>{nbre2q2}</td>
  <td>{nbre3q2}</td>
  <td>{nbre4q2}</td>
  <td>{nbre5q2}</td>
  
  
  
  
  </tr>
  <tr style={{backgroundColor: "#4f81bd" ,color:"white",fontWeight:"bold"}}>  
  <td> Question 3</td>
  <td>{nbre1q3}</td>
  <td>{nbre2q3}</td>
  <td>{nbre3q3}</td>
  <td>{nbre4q3}</td>
  <td>{nbre5q3}</td>
  
  
  
  
  </tr>
  <tr style={{backgroundColor:  "#dc3545" ,color:"white",fontWeight:"bold"}}>  
  <td> Question 4</td>
  <td>{nbre1q4}</td>
  <td>{nbre2q4}</td>
  <td>{nbre3q4}</td>
  <td>{nbre4q4}</td>
  <td>{nbre5q4}</td>
  
  
  
  
  </tr>
  <tr style={{backgroundColor:   "#dc3545",color:"white",fontWeight:"bold"}}>  
  <td> Question 5</td>
  <td>{nbre1q5}</td>
  <td>{nbre2q5}</td>
  <td>{nbre3q5}</td>
  <td>{nbre4q5}</td>
  <td>{nbre5q5}</td>
  
  
  
  
  </tr>
  <tr style={{backgroundColor: "#007bff",color:"white",fontWeight:"bold"}}>  
  <td> Question 6</td>
  <td>{nbre1q6}</td>
  <td>{nbre2q6}</td>
  <td>{nbre3q6}</td>
  <td>{nbre4q6}</td>
  <td>{nbre5q6}</td>
  
  
  
  
  </tr>
  <tr style={{backgroundColor: "#dc3545" ,color:"white",fontWeight:"bold"}}>  
  <td> Question 7</td>
  <td>{nbre1q7}</td>
  <td>{nbre2q7}</td>
  <td>{nbre3q7}</td>
  <td>{nbre4q7}</td>
  <td>{nbre5q7}</td>
  
  
  
  
  </tr>
  <tr style={{backgroundColor: "#007bff",color:"white",fontWeight:"bold"}}>  
  <td> Question 8</td>
  <td>{nbre1q8}</td>
  <td>{nbre2q8}</td>
  <td>{nbre3q8}</td>
  <td>{nbre4q8}</td>
  <td>{nbre5q8}</td>
  
  
  
  
  </tr>
  <tr style={{backgroundColor: "#ffc107",color:"white",fontWeight:"bold"}}>  
  <td> Question 9</td>
  <td>{nbre1q9}</td>
  <td>{nbre2q9}</td>
  <td>{nbre3q9}</td>
  <td>{nbre4q9}</td>
  <td>{nbre5q9}</td>
  
  
  
  
  </tr>
  <tr style={{backgroundColor:  "#28a745",color:"white",fontWeight:"bold"}}>  
  <td> Question 10</td>
  <td>{nbre1q10}</td>
  <td>{nbre2q10}</td>
  <td>{nbre3q10}</td>
  <td>{nbre4q10}</td>
  <td>{nbre5q10}</td>
  
  
  
  
  </tr>
  <tr style={{backgroundColor:"#4f81bd",color:"white",fontWeight:"bold"}}>  
  <td> Question 11</td>
  <td>{nbre1q11}</td>
  <td>{nbre2q11}</td>
  <td>{nbre3q11}</td>
  <td>{nbre4q11}</td>
  <td>{nbre5q11}</td>
  
  
  
  
  </tr>
  <tr style={{backgroundColor:"#28a745" ,color:"white",fontWeight:"bold"}}>  
  <td> Question 12</td>
  <td>{nbre1q12}</td>
  <td>{nbre2q12}</td>
  <td>{nbre3q12}</td>
  <td>{nbre4q12}</td>
  <td>{nbre5q12}</td>
  
  
  
  
  </tr>
  <tr style={{backgroundColor: "#ffc107",color:"white",fontWeight:"bold" }}>  
  <td> Question 13</td>
  <td>{nbre1q13}</td>
  <td>{nbre2q13}</td>
  <td>{nbre3q13}</td>
  <td>{nbre4q13}</td>
  <td>{nbre5q13}</td>
  
  
  
  
  </tr>
  <tr style={{backgroundColor:"#ffc107" ,color:"white",fontWeight:"bold"}}>  
  <td> Question 14</td>
  <td>{nbre1q14}</td>
  <td>{nbre2q14}</td>
  <td>{nbre3q14}</td>
  <td>{nbre4q14}</td>
  <td>{nbre5q14}</td>
  
  
  
  
  </tr>
  <tr style={{backgroundColor:"#4f81bd" ,color:"white",fontWeight:"bold"}}>  
  <td> Question 15</td>
  <td>{nbre1q15}</td>
  <td>{nbre2q15}</td>
  <td>{nbre3q15}</td>
  <td>{nbre4q15}</td>
  <td>{nbre5q15}</td>
  
  
  
  
  </tr>
  <tr style={{backgroundColor: "#ffc107",color:"white",fontWeight:"bold"}}>  
  <td> Question 16</td>
  <td>{nbre1q16}</td>
  <td>{nbre2q16}</td>
  <td>{nbre3q16}</td>
  <td>{nbre4q16}</td>
  <td>{nbre5q16}</td>
  
  
  
  
  </tr>
  <tr style={{backgroundColor: "#007bff",color:"white",fontWeight:"bold"}}>  
  <td> Question 17</td>
  <td>{nbre1q17}</td>
  <td>{nbre2q17}</td>
  <td>{nbre3q17}</td>
  <td>{nbre4q17}</td>
  <td>{nbre5q17}</td>
  
  
  
  
  </tr>
  <tr style={{backgroundColor: "#4f81bd",color:"white",fontWeight:"bold"}}>  
  <td> Question 18</td>
  <td>{nbre1q18}</td>
  <td>{nbre2q18}</td>
  <td>{nbre3q18}</td>
  <td>{nbre4q18}</td>
  <td>{nbre5q18}</td>
  
  
  
  
  </tr>
  <tr style={{backgroundColor:  "#28a745",color:"white",fontWeight:"bold"}}>  
  <td> Question 19</td>
  <td>{nbre1q19}</td>
  <td>{nbre2q19}</td>
  <td>{nbre3q19}</td>
  <td>{nbre4q19}</td>
  <td>{nbre5q19}</td>
  
  
  
  
  </tr>
  <tr style={{backgroundColor:"#dc3545",color:"white",fontWeight:"bold"}}>  
  <td> Question 20</td>
  <td>{nbre1q20}</td>
  <td>{nbre2q20}</td>
  <td>{nbre3q20}</td>
  <td>{nbre4q20}</td>
  <td>{nbre5q20}</td>
  
  
  
  
  </tr>
  
  
  
  
  </tbody>
  
  
  
  
  </Table></div>
    /*<div style={{width:"300px",height:"300px"}}>           <PieChart chartData={data}></PieChart>
    <BarChart chartData={data}></BarChart>

    </div>*/
  )

}
function nbPOSdssd  () {
  Data.forEach(element => {
    
    if(element.score>=10){
nbps10++
    }
    if(element.score>=18){
      nbps18++
          }
          if(element.score==20){
            nbp20++
                }
                if(element.score<10){
                  nbpi10++
                      }
    
  });
  const data = {
    labels: ["<10",">=10",">=18","=20"], // first change
    datasets: [{
      label: 'nombre participants selon leurs poste de travaille',
      fill: false,
      lineTension: 0.0,
      backgroundColor:   [
        "#007bff",
        "#ffc107",
        "#dc3545",
        "#4f81bd",
        "#28a745",],
      pointHitRadius: 20,
      data:[nbpi10,nbps10,nbps18,nbp20] // second change
    }]
  }; 
  return(
    <div style={{width:"300px",height:"300px"}}>           <PieChart chartData={data}></PieChart>
    <BarChart chartData={data}></BarChart>

    </div>
  )

}
function ResGen  () {
  Data.forEach(element => {
    
    if(element.score>=10){
nbps10++
    }
    if(element.score>=18){
      nbps18++
          }
          if(element.score==20){
            nbp20++
                }
                if(element.score<10){
                  nbpi10++
                      }
    
  });
  const data = {
    labels: ["<10",">=10",">=18","=20"], // first change
    datasets: [{
      label: 'nombre participants selon leurs poste de travaille',
      fill: false,
      lineTension: 0.0,
      backgroundColor:   [
        "#007bff",
        "#ffc107",
        "#dc3545",
        "#4f81bd",
        "#28a745",],
      pointHitRadius: 20,
      data:[nbpi10,nbps10,nbps18,nbp20] // second change
    }]
  }; 
  return(
    <div style={{width:"300px",height:"300px"}}>           <PieChart chartData={data}></PieChart>
    <BarChart chartData={data}></BarChart>

    </div>
  )

}
function StatPilier () {
  var VGEN=0
  var CGEN=0
  var PGEN=0
  var AGEN=0
  var SGEN=0
  var Resultat=""
  var col=""
  Data.forEach(element => {
    
   VGEN=VGEN+element.Vision/4*100
   CGEN=CGEN+element.Cohérence/4*100
   PGEN=PGEN+element.Personnel/4*100
   AGEN=AGEN+element.Adaptabilité/4*100
   SGEN=SGEN+element.Sensibilisation/4*100 
  });
  VGEN=VGEN/Data.length
CGEN=CGEN/Data.length
PGEN=PGEN/Data.length
AGEN=AGEN/Data.length
SGEN=SGEN/Data.length
  console.log(VGEN/Data.length,"VGEN")
if(((VGEN+CGEN+PGEN+AGEN+SGEN)/5)<50){
Resultat="Culture absente / manquement significatif aux exigences réglementaire et partenaire"
col='red'
}
if((VGEN+CGEN+PGEN+AGEN+SGEN)/5>49 && (VGEN+CGEN+PGEN+AGEN+SGEN)/5<=79){
  Resultat="	Culture limitée aux fonctions QSE et FS /preuve isolée de conformité et d’efficacité "
  col="orange"
  }
  if((VGEN+CGEN+PGEN+AGEN+SGEN)/5>79 && (VGEN+CGEN+PGEN+AGEN+SGEN)/5<=89){
    Resultat="	Culture en place et les aspects Food Safety sont pris en compte lors des décisions stratégiques, SMSDA mis en œuvre avec respect des exigences légales et partenaires"
    col="yellow"
    }
    if((VGEN+CGEN+PGEN+AGEN+SGEN)/5>89 && (VGEN+CGEN+PGEN+AGEN+SGEN)/5<=94){
      Resultat="	Culture Food Safety en place avec résultat satisfaisant sur long terme."
      col="green"
      }
      if((VGEN+CGEN+PGEN+AGEN+SGEN)/5>94){
        Resultat="Culture Food Safety d’excellence reconnue et bonnes pratiques à partager. Proactif / fais figure de modèle dans l’industrie"
        col="purple"
        }
  const data = {
    labels: ["Vision (Générale) %","Cohérence (Générale) %","Personnel (Générale) %","Adaptabilité (Générale) %","Sensiblisation (Générale) %"], // first change
    datasets: [{
      label: '',
      fill: false,
      lineTension: 0.0,
      backgroundColor:   [
        "#007bff",
        "#ffc107",
        "#dc3545",
        "#4f81bd",
        "#28a745",],
      pointHitRadius: 20,
      data:[VGEN,CGEN,PGEN,AGEN,SGEN] // second change
    }]
  }; 
  return(
    <div style={{width:"80%",height:"350px"}}> 

   <table ><tr><td style={{width:"50%"}}><BarChart chartData={data} ></BarChart></td><td style={{width:"50%"}} ><div style={{color:"#177985",fontWeight:'bold',fontSize:'20px'}}>Score : {(VGEN+CGEN+PGEN+AGEN+SGEN)/5}</div><span style={{color:`${col}`,fontWeight:"bold",fontSize:'20px'}}>=>{Resultat}</span></td></tr> </table>
   
    </div>
  )

}
function StatCAt  (V,C,P,A,S) {
  
  const data = {
    labels: ["Vision %","Cohérence %","Personnel %","Adaptabilité %","Sensiblisation %"], // first change
    datasets: [{
      label: '',
      fill: false,
      lineTension: 0.0,
      backgroundColor:   [
        "#007bff",
        "#ffc107",
        "#dc3545",
        "#4f81bd",
        "#28a745",],
      pointHitRadius: 20,
      data:[V,C,P,A,S] // second change
    }]
  }; 
  return(
    <div style={{width:"300px",height:"200px"}}>           
    <BarChart chartData={data}></BarChart>

    </div>
  )

}


  useEffect(() => {
    GetEmployeeData();
nbPOS()
//nbPO()
   // GetFournisseurData()
}, [])
const current = new Date();

const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}`;
  return (
    
    <div >
     <div style={{height:"15px",backgroundColor:"#177985"}}></div>
     <div style={{backgroundImage: 
 "url('images/cheese6.png')",
 height:'11vh',

        marginTop:'0px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}> 
      <table style={{width:"90%",marginLeft:"50px",marginBottom:"20px"}}><tr><td>        <img alt="img1" src="images/iat.png" style={{width:"50%",height:"50px"}} ></img>
</td><td>        <Navbar/>
</td></tr></table></div>
<div style={{backgroundColor:"#177985",height:"120px"}}><center><h3  style={{color:"white",paddingTop:"25px"}}>Food Safety Culture : Auto-évaluation
</h3><h3 style={{color:"white"}}>Culture Sécurité des Aliments</h3></center></div>
<div><center>{StatPilier()}</center></div>
<h3 style={{backgroundColor:"white"}}>Nombre de participants {Data.length}</h3>
<Table className=' responsivetable table-striped table-hover table-bordered table-light'><tr>
  <td style={{'height': `100%` , 'overflow':'Scroll', 'display': 'block'}}><Table className=' responsivetable table-striped table-hover table-bordered'>
  <tr><th><center>Poste</center></th>
<th colSpan={2}><center>Score</center></th>
<th><center>Vision</center></th>


   </tr>
   <tbody >
                            {Data?.map((item) =>
                                <tr >
                                  <td style={{border:"1px"}}>{item.Poste}</td>
                                    <td>{item.score}</td>
                                    <td> {(item.score / 20) * 100}%</td>
                                    <td>{StatCAt(item.Vision/4*100,item.Cohérence/4*100,item.Personnel/4*100,item.Adaptabilité/4*100,item.Sensibilisation/4*100)}</td>
                                    
                                    
                                    
                                    </tr>
                                    )}
                                    </tbody>
  
  
  
  
  </Table></td><td>{nbPOS()}</td></tr></Table>
<hr></hr>
<div></div>



</div>

  );
}

