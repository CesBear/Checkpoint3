import React from 'react';
import { Card, CardTitle } from 'react-materialize';

const cards = (props) => (
	<div className= 'container s4 m8 l10'>
		<Card header={<CardTitle reveal image={"/"} waves='light'/>}
		    title="Ale"
		    reveal={<p>Joven talentoza y con experiencia!. Actualmente desarrollando en ...</p>}>
		</Card>
		<br/>
		<Card header={<CardTitle reveal image={"/"} waves='light'/>}
		    title="Cesar"
		    reveal={<p>Con 7 años de respaldo en programación. Actualmente trabajando en...</p>}>
		</Card>
		<br/>
		<Card header={<CardTitle reveal image={"/"} waves='light'/>}
		    title="Juan Carlos"
		    reveal={<p>Con antecedentes en áreas de la salud y administración de sistemas de salud. Actualmente trabajando en Secretaría de Salud Jalisco.</p>}>
		</Card>
	</div>
);
export default cards;
