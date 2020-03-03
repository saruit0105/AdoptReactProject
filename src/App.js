const Pet = () => {
  return React.createElement("div",{},[
    React.createElement("h1", {}, "Luna"),
     React.createElement("h1", {}, "Dog"),
     React.createElement("h1", {}, "Havanese")
  ])
}

const App = () => {
  return React.createElement(
    "div", 
    {id: 'something important'},
    React.createElement("h1", {}, 'Adopt me!')

  )
}
ReactDOM.render(react.createElement(App), document.getElementById("root"))