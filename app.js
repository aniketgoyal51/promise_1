// create a function and following the progressions inside the function.
let arr=[];
function getData(){
  const getMessage=document.getElementById('message');
// Progression 1: Create a promise call which fetches data
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
      console.log(res.data);
      const result=res.data;
    
// Progression 2: Display the fetched data in the form of list
    result.forEach((user)=>{
      const getPlayer=document.createElement('div');
      getPlayer.setAttribute('id','player');
      getPlayer.setAttribute('class','player');

      const name=document.createElement('div');
      name.innerText=user.name;
      getPlayer.append(name);
      const email=document.createElement('div');
      email.innerText=user.email;
      getPlayer.append(email);
      const phone=document.createElement('div');
      phone.innerText=user.phone;
      getPlayer.append(phone);
      const website=document.createElement('div');
      website.innerText=user.website;
      getPlayer.append(website);
      const company=document.createElement('div');
      company.innerText=user.company.name;
      getPlayer.append(company);
      const city=document.createElement('div');
      city.innerText=user.address.city;
      getPlayer.append(city);
      const zipcode=document.createElement('div');
      zipcode.innerText=user.address.zipcode;
      getPlayer.append(zipcode);
      
      arr.push(getPlayer);
    });
    arr.forEach((ele)=>{
      getMessage.append(ele);
    });
  })
// Progression 3: When the promise call is rejected then throw an error
  .catch((error)=>{
    console.log('Promise reject.');
    console.log(error.message);
  });
}