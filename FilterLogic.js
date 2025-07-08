let socialFeed = document.querySelectorAll('.post');
console.log(socialFeed);
const productiveKeywords = ['LeetCode','Study','JavaScript'];
socialFeed.forEach(element=>{
    let text = element.innerText;
    let isProductive= productiveKeywords.some(keyword=>text.includes(keyword));
    if(!isProductive){
            element.classList.add('blurred');
    }
});