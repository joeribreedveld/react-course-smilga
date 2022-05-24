import React, { useState } from 'react'

const UseStateBasics = () => {
	// console.log(useState('hello world'))
	// const value = useState(1)[0]
	// const handler = useState(1)[1]
	// console.log(value, handler)
	const [text, setText] = useState('cheese')

	const handleClick = () => {
		if (text === 'cheese') {
			setText('kaas')
		} else {
			setText('cheese')
		}
	}

	return (
		<React.Fragment>
			<h1>{text}</h1>
			<button className='btn' onClick={handleClick}>
				change title
			</button>
		</React.Fragment>
	)
}

export default UseStateBasics
