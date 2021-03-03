<script context="module">
	// Imports from artsists.tsv file
	export async function preload({ params }) {
		const artistsRows = await this.fetch("artists.tsv").then(d => d.text());
		const tags = await this.fetch("/artists/tags.json").then(d => d.json());

		return { artistsRows, tags };
	}
</script>

<script>
	import { flip } from "svelte/animate";
	import { fly } from "svelte/transition";
	import { tsvParse } from "d3-dsv";
	import { slugify } from "../../js/helpers.js";

	export let artistsRows;
	export let tags;

	// creates a variable artists from the tsv
	$: artists = tsvParse(artistsRows).sort((a, b) =>
		a.name.localeCompare(b.name, "en", { sensitivity: "base" })
		);

	let sortOptions = [
	{
		title: "Artist",
		fn: (a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" })
	},
	{
		title: "Artwork",
		fn: (a, b) =>
		a.title.localeCompare(b.title, "en", { sensitivity: "base" })
	}
	];
	let sortBy = sortOptions[0];
	let theme = null;
	let media = null;

	$: artistsFiltered = artists
	.filter(d => {
		return (
			(!media || (d.media && d.media.includes(media))) &&
			(!theme || (d.themes && d.themes.includes(theme)))
			);
	})
	.sort(sortBy.fn);
</script>

<style>
	/*the div all the artsts content sits in*/
	.bio-boxes {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 15px;
	}
	/*individual artist cards*/
	.bio-box {
		display: inline-block;
		margin: 16px;
		text-align: left;
		background-color: white;
		width: 190px;
		/* height: 250px; */
	}

	.artists-container {
		min-height: 80vh;
	}

	.bio-photo {
		width: 100%;
		height: 190px;
		display: block;
		background-position: center;
		background-size: cover;
		background-color: #a6a8ab;
	}
	/*text for artists*/
	.bio-box p {
		padding: 0em 0.5em;
		margin-bottom: 1em;
		color: #363636 !important;
		line-height: 1.3em;
	}
	.bio-box h6 {
		padding: 0.5em 0.5em 0em 0.5em;
		margin-bottom: 0px;
	}

	@media screen and (max-width: 768px) {
	}
</style>

<svelte:head>
<title>Final Show - 2021</title>
</svelte:head>

<section class="section bg-col-7">
	<div class="container page-max-width artists-container">
		<div class="content">
			<!-- Select by theme -->
			<select bind:value={theme}>
				<option value={null}>—</option>
				{#each tags.themes as theme}
				<option>{theme}</option>
				{/each}
			</select>
			<!-- Select by media -->
			<select bind:value={media}>
				<option value={null}>—</option>
				{#each tags.media as media}
				<option>{media}</option>
				{/each}
			</select>

			<div class="bio-boxes">
				<!-- for loop to go through artists and display -->
				{#each artistsFiltered as artist, i (artist.username)}
				<div
				class="bio-box"
				transition:fly={{ duration: 300, y: 200 }}
				animate:flip={{ delay: i * 10, duration: 400 }}>
				<a href="artists/{slugify(artist.name)}">
					<div
					class="bio-photo"
					style="background-image:url(img/bios/{artist.username}.jpeg)" />
					<h6>
						{artist.name}
						{artist.otherName ? `  (${artist.otherName})` : ''}
					</h6>
					<p>{artist.title}</p>
					<!-- No at titles it looks bad -->
				</a>
			</div>
			{:else}
			<div>
				Sorry your filter return no results
				<br />
				<div class="button" on:click={() => (theme = media = null)}>
					Click here to remove filters
				</div>
			</div>
			{/each}
		</div>

	</div>
</div>
</section>