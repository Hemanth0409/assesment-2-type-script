interface Api{
    id: number,
    pname:string,
    pdescription: string,
    price:number
}

function getApi(): Promise <Api[]>{
    return fetch('/api.json')
    .then(res=>res.json())
    .then(json=>{return json as Api[]}) 
}
getApi()
    .then(Apis=>{
      console.log(Apis.map(u=>"id:"+u.id+'/n'+"pname:"+u.pname+'/n'+"pdescription:"+u.pdescription+'/n'+"price:"+u.price))
    })
    getApi();