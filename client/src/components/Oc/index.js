import React from 'react';
import {Table} from 'react-materialize';

const Oc = (props) =>
(
	<div>
		<h3 className="valign-wrapper">
			Order Details
		</h3>
		<div className="row">
			<div className="col s6 center">
				<h5>Contact Info</h5>
				<div> Nombre </div>
				<div> adasd</div>
				<div> sadas</div>
				<div> 23423423</div>
			</div>
			<div className="col s6 center">
				<h5>Shipping Address</h5>
				<div>
				<b>Calle:</b> adasdjh 23
				</div>
				<div>
				<b>Número:</b> 232323
				</div>
				<div>
				<b>Ciudad:</b> Guadalajara
				</div>
				<div>
				<b>CP:</b> 23454
				</div>
			</div>
		</div>
		<Table>
		  <thead>
		    <tr>
		      <th data-field="image"></th>
		      <th data-field="name">Item Name</th>
		      <th data-field="quantity">Quantity</th>
		      <th data-field="price">Price</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr>
		      <td>Alvin</td>
		      <td>Eclair</td>
		      <td>2</td>
		      <td>$0.87</td>
		    </tr>
		    <tr>
		      <td>Alan</td>
		      <td>Jellybean</td>
		      <td>1</td>
		      <td>$3.76</td>
		    </tr>
		    <tr>
		      <td>Jonathan</td>
		      <td>Lollipop</td>
		      <td>4</td>
		      <td>$7.00</td>
		    </tr>
		    <tr>
		    	<td></td>
		    	<td></td>
		    	<td><b>Total:</b></td>
		    	<td><b>$3423</b></td>
		    </tr>
		  </tbody>
		</Table>
	</div>
	);

export default Oc;