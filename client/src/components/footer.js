import React from 'react';
import { Footer } from 'react-materialize';



const Futer = (props) => (
	<Footer copyrights="&copy 2015 Copyright Text"
	  moreLinks={
	    <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
	  }
	  links={
	    <ul>
	      <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
	    </ul>
	  }
	  className='example'
	>
	    <h5 className="white-text">Footer Content</h5>
	    <p className="grey-text text-lighten-4"></p>
	</Footer>
);


export default Futer;
