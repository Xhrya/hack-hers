const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Cache-In Money</h1>
        <div className="links">
          <a href="/">Home</a>

          <a href="/">Customer Service</a>

          <a href="/create" style={{ 
            color: 'white', 
            backgroundColor: '#f1356d',
            borderRadius: '8px' 
          }}>OrderHistory</a>
        

        </div>
      </nav>
    );
  }
   
  export default Navbar;