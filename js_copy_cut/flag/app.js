fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json =>{
      let photo = '';
      for(let js of json){
        console.log(js)
        photo +=`
        <div class="col-lg-4 p-4">
    <img src=width="100%" height="400px" >
    <h1>
    ${js.capital[0]
    }
    </h1>
   </div> `
      }
      document.getElementById('safayat').innerHTML = photo
      } )
