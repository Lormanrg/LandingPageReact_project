import React from "react";
import Navbar from '../component/Navbar.jsx'
import Text from '../component/Text.jsx'
import Card from '../component/Card.jsx'
import Footer from '../component/Footer.jsx'
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<>      
	  <Navbar/>
	  
	  <div className="container">
	  
	  <Text/>
	  <br/><br/>
	  </div>
	  <div className="container d-flex p-1 mb-3">
	  <Card/>
	  <Card/>
	  <Card/>
	  <Card/>
	  </div>
	  <Footer/>	
	  </>

	);
};

export default Home;
