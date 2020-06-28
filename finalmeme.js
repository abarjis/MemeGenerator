
         const form1 = document.querySelector('#memeForm');
         const submit = document.querySelector('#submitBtn');
         const topTextInput = document.getElementById('userTopText');
         const bottomTextInput = document.getElementById('userBottomText');
         const memeTopText = document.getElementById('memeTopText');
         const memeBottomText = document.getElementById('memeBottomText');
         const userImg = document.querySelector('img');
         

form1.addEventListener('submit',function makeMeme(e){
  e.preventDefault();            
         
        memeTopText.innerText = topTextInput.value;
        memeBottomText.innerText = bottomTextInput.value;     
        const file = document.querySelector('input[type=file]').files[0];
        userImg.src = window.URL.createObjectURL(file);
        
});


// Done!!






