async function getData(category, id = 0){
  let endpoint =`https://trip-planner-fsa.herokuapp.com/api/${category}`;
  if (id) {
    endpoint += `/${id}`;
  }
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;//async returns promise
}

async function getAllData(){
  let categories = ['hotels', 'activities', 'restaurants'];
  const endpoints = categories.map(category =>
    `https://trip-planner-fsa.herokuapp.com/api/${category}`);
  
  const responsePromises = endpoints.map(endpoint => fetch(endpoint));
  const responsesArr = await Promise.all(responsePromises)
  const dataArr = responsesArr.map(async prom => await prom.json())
  return dataArr;//returns promise with array of data objects
}

export default getData;
export {getAllData};