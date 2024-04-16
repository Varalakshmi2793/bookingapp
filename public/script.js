const form= document.getElementById('form-control');
const userlist=document.getElementById('user-list');

form.addEventListener('submit',async function(event){
    event.preventDefault();
   
    const username= document.getElementById('username').value;
    const email=document.getElementById('email').value;
    const phonenumber=document.getElementById('phonenumber').value
    try{
        const response=await fetch('api/user',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, email, phonenumber})
        });
    
        if(response.ok){
            console.log("form submitted successfully");
            form.reset();
            window.location.href="/api/user";
            await updateuserlist();        
        }
        else{
            console.log("registration failed");
        }
        
    }
    catch(err){
        console.log(err);
        alert("details not found")
    }
    });
    async function  updateuserlist(){
        try{
            const response=await fetch('/api/user');
            const user=await response.json();
            user.forEach(user => {
            const useritem=document.createElement('li');
            const text = document.createTextNode(`${user.username}, ${user.email}, ${user.phonenumber}`);
            useritem.appendChild(text);
            userlist.appendChild(useritem);
        });
        
        }
        catch(err)
        {
            console.log(err);
        }
    }