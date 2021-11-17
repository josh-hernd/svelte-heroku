<script>
	let preContext = 'Welcome to';
	let context = 'Svelte dockerized';
	let posttext = '<div style="width:90%;margin:auto;text-align:center;">Fun to build, a real pain to set up!</div>';
</script>

<div>
	<span>{preContext}</span>
	<h1 >{context}</h1>
	<p>{@html posttext}</p>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap');
	:root {
		--colours: #f3f6f9;
		--span-colour: rgba(255, 255, 255, 0.7);
		--background-light-color: rgba(3, 47, 78, 1);
		--text-pad: 15px 0;
	}
	h1 {
		font-family: Bebas Neue;
		font-style: normal;
		font-weight: normal;
		font-size: 48px;
        letter-spacing: 1.9px;
		line-height: 58px;
	}
	p {
		font-family: 'Montserrat', sans-serif;
		font-style: normal;
		font-weight: 500;
		font-size: 14.5px;
        letter-spacing: 1.2px;
		line-height: 20px;
	}
	span {
		font-family: 'Montserrat', sans-serif;
		font-style: normal;
		font-weight: bold;
		font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 1.9px;
		line-height: 16px;
	}
	h1,
	p {
		color: var(--colours);
		padding: var(--text-pad);
	}
	span {
		color: var(--span-colour);
		padding: var(--text-pad);
	}
	div {
		width: 100%;
		height: 100vh;
		background: var(--background-light-color);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
