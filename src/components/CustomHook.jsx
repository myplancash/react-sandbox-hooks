import React from 'react'
import useFetch from '../hooks/useFetch';
import Spinner from './shared/spinner';


export const CustomHook = () => {

	const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/posts", {})
	console.log(data)

	if(loading) {
		return <Spinner />
	}

	return (
		<div className='p-4 w-full'>
			{data.map((post) => (
				<div key={post.title} className="overflow-x-auto hero">
					<table className="table table-compact w-full">
						<thead>
							<tr> 
								<th>ID</th> 
								<th>title</th> 
								<th>body</th> 
							</tr>
						</thead> 
						<tbody >
							<tr>
								<th>{post.id}</th> 
								<td>{post.title}</td> 
								<td>{post.body}</td> 
							</tr>
						</tbody>
					
					</table>
				</div>
				
			))}
		</div>
	)
}
