
//Code with harry lecture 69
//Local Storage 
//chahe browser ko restart kar lo ya phir page ko reload kar lo apka data kahi nahi jane vala 
//chahe link ko copy kar ke naye tab mai khol lo 

//it's a web storage object which are not sent to server with each request 
//open browser => F12 => Application(cahi likha hai jaha Elements and Console Lighthouse likha hai) 

localStorage.setItem("name","Harry");
let key = prompt("Enter the key you want to to set");
let value = prompt("Enter the value you want to set");
localStorage.setItem(key,value);
console.log(`The value at ${key}  is ${localStorage.getItem(key)}`);
//har time app reload karoge page ko so you will enter new key value pairas .
// old and new sari key value pairs rahegi  (persits ) chahe kitne new key value pairs enter kar lo 
//sari rahegi 
// you can check => open browser => F12 => Application(cahi likha hai jaha Elements and Console Lighthouse likha hai) 

//same key phir se enter karoge then , us key ki value jo thi update hojayegi 
if(key == "red"|| key =="blue"){
    localStorage.removeItem(key);
    // remove that particular key valeu pairs
}

if(key===0){
    //Puri local Storage ki clear kar dega 
    localStorage.clear();
}
// now local storage length = 0 
localStorage.length();
// localStorage.key(0); 0 ki jagah dusre index bhi daal sakte ho =. 0 based indexing 


//key and value both string bhale app number enter karo it will convert it to a string 
// stringify converts object into JSON string 
// arse converts string to object)