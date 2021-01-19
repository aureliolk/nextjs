import {useState} from 'react';

function home(){
	return (
		 <div>  
			<h1>Home</h1>
			<h3>Quantidade de Produtos</h3>
			<Contador />
		</div>
	)
}

function Contador(){
	const [contador, setContador] = useState(1);

	function addContador(){
		setContador(contador + 1);
	}
	function rmContador(){
		setContador (contador - 1);
	}
	return (
		<div>
			<div>{contador}</div>
			<button onClick={addContador}>+</button> || <button onClick={rmContador}>-</button>
		</div>
	)
}


export default home