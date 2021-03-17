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
          <div class="column is-6 leftColumn">
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
          </div>
          <div class="column is-6">
            <div>
              <h2 class="showDates">6 May 2021</h2>
              <h2 class="subtitle"> </h2>
              <h2 class="subtitle"> Digital Arts Computating Degree Show</h2>
              <h2 class="location">Goldsmiths, University of London</h2>
            </div>
            <div class="introBodyStrong">
              Third ____ brings together a c✴nstellati✴n of works which have escaped their tethers to a [material conception]1 or [ideological representation]2 of space to approach  an[other]3 third space that overcomes the bina⚭ries of the first two, where ⇶linkages can be made in an infin∞ number of ways. As such, the title is never static but is alive, ever-changing and evolving to reflect the simultaneously inward juxtapositi⊗n and outward distributi⊙n of art and technology. ____ is not an invitation to be fill▥ed nor is it an open-ended ⸮peculation into the future. It is a transparent vision to blast spectrums of knowable⟷unimaginable, structure⟷agency, everyday life⟷unending history out of chronological ⇄ continuity into a 3√radical dimension beyond an empirical or manifest order of knowledge.
            </div>
            <div>
              <a href="/schedule" class="rounded-link col-7 bd-col-7">
                EVENTS SCHEDULE
              </a>
              <a href="/getting-there" class="rounded-link col-7 bd-col-7">
                VISIT ON-SITE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  h2 {
    color: #fcfcfc;
  }
  .subtitle {
    font-family: futura-pt, sans-serif;
    font-weight: 600;
    font-size: 2.5rem;
    color: #fcfcfc;
  }
  .word {
    white-space: nowrap;
  }
  .showDates {
    font-family: futura-pt, sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    color: #fcfcfc;
    padding-top: 3rem;
  }
  .location {
    font-family: futura-pt, sans-serif;
    font-weight: 500;
    font-size: 1.75rem;
    color: #fcfcfc;
  }
  .introBodyStrong {
    font-family: futura-pt, sans-serif;
    font-weight: 600;
    font-size: 1.3rem;
    color: #fcfcfc;
    padding: 2rem 0rem;
  }
  .leftColumn {
    min-height: 700px;
    max-height: 1500px;
    height: 80vh;
  }

  @media only screen and (max-width: 768px) {
    .leftColumn {
      /*background-position: bottom right;*/
      /*background-size: 100% auto;*/
      height: 100vh;
      min-height: 500px;
      height: 50vh;
    }
    .showDates {
      padding-top: 0rem;
    }
  }
</style>
