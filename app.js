fetch('https://picsum.photos/v2/list?page=2&limit=4')
      .then(response => response.json())
      .then(json =>{
      let photo = '';
      for(let js of json){
        console.log(js)
        photo +=`
        <div class="col-lg-6 p-2">
    <img src=${js.download_url} width="100%" height="200px" >
   </div> `
      }
      document.getElementById('safayat').innerHTML = photo
      } )
