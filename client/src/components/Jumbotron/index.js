import React from 'react';
import { Jumbotron, Button, Container } from 'react-bootstrap';


function Jumbo() {
return (
	<>
	<Jumbotron>
	<h1>Local UP!</h1>
	<p>
		This is a simple Jumbotron example.
	</p>

	<p>
		<Button variant="primary">
		Primary Button
		</Button>
	</p>
	</Jumbotron>
	<br/>
	<Jumbotron fluid>
	<Container>
		<h1>Fluid jumbotron !</h1>
		<p>
		This is a modified fluid jumbotron which
		stretches the whole horizontal space.	
		</p>
		<Button variant="primary">
		Primary Button
		</Button>
	</Container>
	</Jumbotron>
	</>
);
}
export default Jumbo