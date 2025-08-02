import React, { Component, Pure } from 'react'
import RegularComponent from './RegularComponent'
import Purecomponent from './Purecomponent'
import MemoComp from './MemoComp'


class ParentComp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: 'Vishwas'
		}
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				name: 'Vishwas'
			})
		}, 2000)
	}

	render() {
		console.log('*********Parent Comp render************')
		return (
			<div>
                ParentComponent
				{/* <RegularComponent name={this.state.name} />
				<Purecomponent name={this.state.name} /> */}
				<MemoComp name={this.state.name} />
			</div>
		)
	}
}

export default ParentComp