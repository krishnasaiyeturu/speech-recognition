 window.SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
 
 const recognition = new SpeechRecognition();

 recognition.interimResults=true;
 const p=document.createElement('p');
 const words=document.querySelector('.words');
 words.appendChild(p);



 recognition.addEventListener('result',e=>{
    //  console.log(e.results);
    const transcript =[...e.results]
    .map(result => result[0])
    .map(result => result.transcript).join(' ');
    p.innerHTML=transcript;

   //to continue more words

   if(e.results[0].isFinal)
     {
         p=document.createElement('p');
         words.appendChild(p);
         p.textContent=transcript;
     }

 });

 recognition.addEventListener('end',recognition.start);
 recognition.start(); 