type NameTagProps = {
	name: string
}

const NameTags = (props: NameTagProps) => {
	return (
		<main>
			<header>
				<h1>Hello</h1>
				<p>My Name Is</p>
			</header>
			<section className='display-name'>
				<p>{props.name}</p>
			</section>
		</main>
	)
}

const NameTag = () => <NameTags name='Reza' />

export default NameTag
