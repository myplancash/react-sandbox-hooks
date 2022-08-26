import React, {useState} from 'react'


const InputChangeColor = () => {
	const [ value, setValue ] = useState("");

	const handleChange = (e) => {
		let term = e.target.value;
		if(!term) {
			return value;
		}
		console.log(term)
		setValue(term.toLowerCase()
		





		

	}

	return (
		<>
			<div className="form-control">
				<div className="input-group">
					<input 
						id="changeInputColor" 
						type="text" 
						placeholder="Search…" 
						className="input input-bordered"  
						value={value}
						onChange={handleChange}
					/>
						
					<button className="btn btn-square">
						GO
					</button>
				</div>
			</div>
		</>
	)
}



export default InputChangeColor