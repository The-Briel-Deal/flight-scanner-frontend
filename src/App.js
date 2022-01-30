import React from "react";
import logo from './logo.svg';
import Landing from './pages/Landing';
import Nav from './components/Nav';
function App() {
  const [user, setUser] = React.useState({
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  });

  return (
    <div>
      <Nav userState={[user, setUser]} />
      <Landing userState={[user, setUser]} />
    </div>
  );
}

export default App;