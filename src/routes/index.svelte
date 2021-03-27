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
              src="/img/abex.gif"
              opacity="0"
              width="480"
              height="270"
              alt="animated graphic"/>
            </div>
          </div>
          <div class="column is-6">
            <div>
              <h2 class="showDates">6 May 2021</h2>
              <h2 class="subtitle"> </h2>
              <h2 class="subtitle"> Digital Arts Computating Degree Show</h2>
              <h2 class="location">Goldsmiths, University of London</h2>
            </div>
            <div class="introBodyStrong" aria-hidden="true">
              Third <div class="wordPS">
                <span>___</span>
                <span>Life</span>
                <span>Sky</span>
                <span>Sight</span>
                <span>Space</span>
                <span>Room</span>
              </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; brings together a <b1 class="psb"><span>c✴︎nstillati✴︎n</span></b1> of works which have escaped their tethers to a [material conception]₁ or [ideological representation]₂ of space to approach an[other]₃ third space where <b2 class="psb"><span>⇶linkages</span></b2> can be made in an <b3 class="psb"><span>infin∞</span></b3> number of ways. As such, the <b4 class="psb"><span>gateway⍈</span></b4> is never static but is alive, ever-changing and evolving to reflect the simultaneously inward <b5 class="psb"><span>juxtapositi⊗n</span></b5> and outward <b6 class="psb"><span>distributi⊙n</span></b6> of art and technology. <div class="wordPS">
                <span>___</span>
                <span>Sky</span>
                <span>Sight</span>
                <span>Space</span>
                <span>Room</span>
                <span>Life</span>
              </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; is not an invitation to be <b7 class="psb"><span>fill▥ed</span></b7> nor is it an open-ended vision into the future. Offering up a <b8 class="psb"><span>⸮peculative</span></b8> archive, Third <div class="wordPS">
                <span>___</span>
                <span>Sight</span>
                <span>Space</span>
                <span>Room</span>
                <span>Life</span>
                <span>Sky</span>
              </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; operates as a <b9 class="psb"><span>para||e|</span></b9> world of unstable states and dual truths; disrupting <b10 class="psb"><span>bina⚭ries</span></b10> of the knowable<b11 class="psb"><span>⟷</span></b11>unimaginable, structure<b12 class="psb"><span>⟷</span></b12>agency, everyday life<b13 class="psb"><span>⟷</span></b13>unending history out of <b14 class="psb"><span>chronological ⇄ continuity</span></b14>. A <b15 class="psb"><span>³√radical</span></b15> dimension beyond an empirical or manifest order of knowledge.
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
    font-family: futura-pt, sans-serif;
    font-weight: 600;
    font-size: 1.8rem;
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
    font-size: 1.5rem;
    color: #fcfcfc;
  }
  .introBodyStrong {
    font-family: futura-pt, sans-serif;
    font-weight: 600;
    font-size: 1.15rem;
    color: #fcfcfc;
    padding: 2rem 0rem;
  }
  .introAltText {
    font-family: futura-pt, sans-serif;
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
    bottom: 30%;
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

  /*Positioning Statement Interaction*/
  /*make the button not a button*/
  .psb {
    background: none!important;
    border: none;
    padding: 0!important;
  }
  /* constillation */
  b1:hover span {display:none}
  b1:hover:before {content:"constillation"}
  /* linkages */
  b2:hover span {display:none}
  b2:hover:before {content:"linkages"}
  /* infinite */
  b3:hover span {display:none}
  b3:hover:before {content:"infinite"}
  /* gateway */
  b4:hover span {display:none}
  b4:hover:before {content:"gateway"}
  /* juxtaposition */
  b5:hover span {display:none}
  b5:hover:before {content:"juxtaposition"}
  /* distribution */
  b6:hover span {display:none}
  b6:hover:before {content:"distribution"}
  /* filled */
  b7:hover span {display:none}
  b7:hover:before {content:"filled"}
  /* speculative */
  b8:hover span {display:none}
  b8:hover:before {content:"speculative"}
  /* parallel */
  b9:hover span {display:none}
  b9:hover:before {content:"parallel"}
  /* binaries */
  b10:hover span {display:none}
  b10:hover:before {content:"binaries"}
  /* and the */
  b11:hover span {display:none}
  b11:hover:before {content:" and the "}
  /* and */
  b12:hover span {display:none}
  b12:hover:before {content:" and "}
  /* and */
  b13:hover span {display:none}
  b13:hover:before {content:" and "}
  /* chronological continuity */
  b14:hover span {display:none}
  b14:hover:before {content:"chronological continuity"}
  /* radical */
  b15:hover span {display:none}
  b15:hover:before {content:"radical"}
</style>
