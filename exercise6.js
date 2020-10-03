fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const rlt = json.reduce((ct, todo) => {
      if (todo.completed) {
        ct[todo.userId] === undefined
          ? (ct[todo.userId] = 1)
          : (ct[todo.userId] += 1);
      }
      return ct;
    }, {});
    console.log(rlt);
  })
  .catch(function(err) {
    console.log(err);
  });
