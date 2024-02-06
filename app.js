const parent = React.createRoot("div", {id:"parent"}, [React.createRoot("h1", {id:"child"},"I am h1 tag"), React.createRoot("h2",{})])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
