fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const rlt = json.reduce((ct, todo) => {
      todo.completed ? ct
        : ct.push({ userId: todo.userId, title: todo.title })
      return ct;
    }, []);
    console.log(rlt);
  })
  .catch(function(err) {
    console.log(err);
  });
