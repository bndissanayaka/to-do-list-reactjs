# Getting Started with Create React App

1. Login screen - username: admin, password: admin. Show error message when different username/password combination entered => Completed
2. Design a header with these menus.
      1. ToDo
      2. Logout  => Completed
3. By default after logging in, direct the user to ToDo screen. Screen requirements are as below.
      1. Use this API: https://jsonplaceholder.typicode.com/todos and fetch the todo list.
      2. List the todos in a table with pagination. => Half Completed 
      3. When click on a todo item, show the details in a popup using this
         API: https://jsonplaceholder.typicode.com/todos/<id>. Id should be passed in dynamically
         for the API based on the clicked item. => Not Completed
4. When click on “Logout”, direct the user to the Login screen.=> Completed

# Please note that in the answers I attempted implementing the pagination using react-paginate library but fot an error of reading null while iteration over the array to mao table items. Hence that part was commented.
