// //code 1
// const t1 =  performance.now()
// for(let i = 0 ;i<100;i++){
//     let  para = document.createElement('p');
//     para.textContent = "This is Para" +(i+1);
//     document.body.appendChild(para);
// }
// const t2 =  performance.now()
// console.log("total time by code1 : "+(t2-t1));
// //code 2
// const t3 =  performance.now()
// let mydiv = document.createElement('div');
// for(let i = 0 ;i<100;i++){
//     let  para = document.createElement('p');
//     para.textContent = "This is Para" +(i+1);
//     mydiv.appendChild(para);
// }
// document.body.appendChild(mydiv);
// const t4 =  performance.now()
// console.log("total time by code1 : "+(t4-t3));

let fragment = document.createDocumentFragment();
for(let i = 1;i<=100;i++ ){
    let para = document.createElement('p');
    para.textContent = "This is para " + i;
    fragment.appendChild(para);
}
// 1 reflow 1 repaint 
document.body.appendChild(fragment);