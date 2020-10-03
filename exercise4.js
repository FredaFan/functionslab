fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const result = json.reduce( (ct, todo) => 
     todo.completed ? ct+1 : ct
     ,0
     )
     console.log(result)
  })
  .catch(function(err) { 
    console.log(err);
  });
