<script context="module">
  export async function preload({ params }) {
    const artistsRows = await this.fetch("artists.tsv").then((d) => d.text());

    return { artistsRows };
  }
</script>

<script>
  import { tsvParse } from "d3-dsv";
  import { slugify } from "../js/helpers";
  import Meta from "../components/Meta.svelte";
  import { REGISTER_URL } from "../js/constants";

  export let artistsRows;

  // console.log(artistsRows);

  $: artists = tsvParse(artistsRows).sort((a, b) =>
    a.name.localeCompare(b.name, "en", { sensitivity: "base" })
    );

  let posText = "Third ___ brings together a c✴︎nstillati✴︎n of works which have escaped their tethers to a [material conception]₁ or [ideological representation]₂ of space to approach an[other]₃ third space where ⇶linkages can be made in an infin∞ number of ways. As such, the gateway⍈ is never static but is alive, ever-changing and evolving to reflect the simultaneously inward juxtapositi⊗n and outward distributi⊙n of art and technology. ___ is not an invitation to be fill▥ed nor is it an open-ended vision into the future. Offering up a ⸮peculative archive, Third ___ operates as a para||e| world of unstable states and dual truths; disrupting bina⚭ries of the knowable ⟷ unimaginable, structure ⟷ agency, everyday life ⟷ unending history out of chronological ⇄ continuity. A ³√radical dimension beyond an empirical or manifest order of knowledge."

  function handleMouseOver(e) {
    posText = 'Third ___ brings together a constellation of works which have escaped their tethers to a material conception or ideological representation of space, to approach an(other) third space where linkages can be made in an infinite number of ways. As such, this gateway is never static but is alive, ever-changing and evolving to reflect the simultaneously inward juxtaposition and outward distribution of art and technology. ___ is not an invitation to be filled nor is it an open-ended vision into the future. Offering up a speculative archive, Third ___ operates as a parallel world of unstable states and dual truths; disrupting binaries of the knowable and the unimaginable, structure and agency, everyday life and unending history out of chronological continuity. A radical dimension beyond an empirical or manifest order of knowledge.';
  }
  function handleMouseOut(e) {
    posText = 'Third ___ brings together a c✴︎nstillati✴︎n of works which have escaped their tethers to a [material conception]₁ or [ideological representation]₂ of space to approach an[other]₃ third space where ⇶linkages can be made in an infin∞ number of ways. As such, the gateway⍈ is never static but is alive, ever-changing and evolving to reflect the simultaneously inward juxtapositi⊗n and outward distributi⊙n of art and technology. ___ is not an invitation to be fill▥ed nor is it an open-ended vision into the future. Offering up a ⸮peculative archive, Third ___ operates as a para||e| world of unstable states and dual truths; disrupting bina⚭ries of the knowable ⟷ unimaginable, structure ⟷ agency, everyday life ⟷ unending history out of chronological ⇄ continuity. A ³√radical dimension beyond an empirical or manifest order of knowledge.';
  }
  </script>

  <svelte:head>
  <Meta
  title="Third ___ - Digital Arts Computing Degree Show Goldsmiths"
  />
</svelte:head>
<div class="hero-container">
  <section class="hero">
    <div class="hero-body">
      <div class="container is-widescreen">
        <div class="columns">
          <div class="column is-6 leftColumn" style="position:relative">
            <!-- animated text -->
            <div class="box">
              <div class="word">
                Third&nbsp;
                <span>Space</span>
                <span>Sight</span>
                <span>Room</span>
                <span>Life</span>
                <span>Door</span>
                <span>Sky</span>
              </div>
            </div>
            <div class="animatedImage">
              <img
              src="/img/noise1.gif"
              opacity="0"
              width="410"
              height="410"
              alt="animated graphic"/>
            </div>
          </div>
          <div class="column is-6">
            <div>
              <h2 class="showDates">6 May 2021</h2>
              <h2 class="subtitle"> </h2>
              <h2 class="subtitle"> Digital Arts Computing Degree Show</h2>
              <h2 class="location">Goldsmiths, University of London</h2>
            </div>
            <div on:mouseover={handleMouseOver} on:mouseout={handleMouseOut} class="introBodyStrong" aria-hidden="true">
              {posText}
            </div>
          </div>
        </div>
        <div class="introAltText">
          (alt-text)<br>Third ___ brings together a constellation of works which have escaped their tethers to a material conception or ideological representation of space, to approach an(other) third space where linkages can be made in an infinite number of ways. As such, this gateway is never static but is alive, ever-changing and evolving to reflect the simultaneously inward juxtaposition and outward distribution of art and technology. ___ is not an invitation to be filled nor is it an open-ended vision into the future. Offering up a speculative archive, Third ___ operates as a parallel world of unstable states and dual truths; disrupting binaries of the knowable and the unimaginable, structure and agency, everyday life and unending history out of chronological continuity. A radical dimension beyond an empirical or manifest order of knowledge.
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  h2 {
    color: white;
  }
  .subtitle {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 1.8rem;
    color: #fcfcfc;
  }
  .word {
    white-space: nowrap;
  }
  .showDates {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    color: #fcfcfc;
    padding-top: 3rem;
  }
  .location {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 1.5rem;
    color: #fcfcfc;
    margin-bottom: 2rem;
  }
  .introBodyStrong {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 1.15rem;
    color: #fcfcfc;
    padding: 0rem 0rem;
  }
  .introAltText {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 1rem;
    color: #fcfcfc;
    padding: 2rem 0rem;
  }
  .leftColumn {
    min-height: 700px;
    max-height: 1500px;
    height: 80vh;
  }
  .animatedImage{
    text-align: center;
    position: absolute;
    margin-left: 235px;
    bottom: 33%;
  }

  .box{
    text-align: right;
  }

  @media only screen and (max-width: 768px) {
    .leftColumn {
      height: 40vh;
      min-height: 200px;
      padding-top: 0;
    }
    .showDates {
      padding-top: 0rem;
    }
    .animatedImage{
      text-align: center;
      position: absolute;
      bottom: 10%;
    }
    .box{
      text-align: center;
      margin-left: -20px;
    }
    .hero-body{
      padding-top: 20px;
    }
  }
</style>
