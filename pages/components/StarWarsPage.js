import { useEffect } from "react";


const StarWarsPage = () => {

  

  const Scroll1 = function () {
    useEffect(function onFirstMount() {
      window.onscroll = function () { onScroll() };
      function onScroll() {


        if (document.body.scrollTop > 4800 || document.documentElement.scrollTop > 4800) {

          document.getElementsByClassName("section4").appendChild(textt)
        }
      }


    }, []); // empty dependencies array means "run this once on first mount"

    return null;
  }
  return (
    <div id="sec4" className="section4" >
      {/* <Scroll1 /> */}

      {/* <h1 className="h1starwars">Section 4 </h1> */}
      {/* <div style={{ overflow: "hidden", position: "absolute", left: "0", top: "0", width: "50px", height: "25px" }}>
          <div style={{ marginTop: "margin-top:-290px" }}>
            <object style={{ width: "420px", height: "315px" }} >
              <param name="movie" value="https://www.youtube.com/v/EjMNNpIksaI?version=3&amp;hl=en_US&autoplay=1&amp;autohide=2"></param>
              <param name="allowFullScreen" value="true"></param>
              <param name="allowscriptaccess" value="always"></param>
              <embed src="https://www.youtube.com/v/EjMNNpIksaI?version=3&amp;hl=en_US&autoplay=1&amp;autohide=2" type="application/x-shockwave-flash" style={{ width: "420px", height: "315px", allowscriptaccess: "always", allowfullscreen: "true" }} ></embed>
            </object>
          </div>
        </div> */}
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <p id="idstart" className="start">A short time ago in a browser very, very close&hellip;</p>

      <h1 id="idh1starwars" className="h1starwars">Asaf Marom<sub>Thank you very much</sub></h1>

      <div className="titles">
        <div id="idtitlecontent" className="titlecontent">

          <p className="center">EPISODE IV<br />
            A NEW HOPE RISES FROM JAFFA </p>

          <p>It is a period of vendor war.</p>

          <p>This is a demonstration of Star Wars-style scrolling 3D titles in CSS. It possibly has no practical purpose whatsoever but it looks great and you can impress your friends.</p>

          <p>Before movie-buffs start ranting, I realize Star Wars wasn't the first to use crawling 3D titles, but few of you will remember the Flash Gordon series or the 1936 adaption of HG Wells' "Things to Come".</p>


          <p>The scrolling titles work well in Chrome, Safari and Firefox. Opera doesn't implement 3D transforms yet, but the text will scroll. IE users receive a blank page. A shame, but IE10 should support it.</p>

          <p>So how does it work? Well, it's fairly simple. We have an outer absolute DIV (#titles) which is rotated along the X-axis using perspective to give the impression of depth. The same DIV also has an :after psuedo-element which applies a linear gradient so the text appears to fade out.</p>

          <p>Inside, we have another absolutely-positioned DIV which contains the text (#titlecontent). The top is set to 100% to ensure it starts off-screen then uses CSS3 animation to move it upward over time. No JavaScript is required.</p>

          <p>You will probably need to adjust the movement amount and timing depending on the quantity of text you want to show. The 3D depth can also be tweaked in the #titles declaration.</p>
          <p>Thanks to Mom And Dad, and thanks to the nemo! he is the shit! and his side-kick Sabaka! t to show. The 3D depth can also be tweaked in the #titles declaration.</p>


          <p className="center">View the source, Luke!</p>

          <p>Sorry. Couldn't resist it. </p>

          {/* <p>You're welcome to use this demonstration code in your own sites. Please link back to the original article at:</p> */}

          {/* <p className="center"><a href="http://www.sitepoint.com/css3-starwars-scrolling-text/">sitepoint.com/<br />css3-starwars-scrolling-text/</a></p> */}

          {/* <p>and give me a shout on Twitter <a href="https://twitter.com/craigbuckler">@craigbuckler</a> &ndash; I'd love to see how you use and abuse it!</p> */}

          {/* <p>Finally, Han shot first and the original, unadulterated movies remain the best. Stop fiddling with them, George!</p> */}
        </div>
      </div>
      <iframe style={{ visibility: "hidden", width: "560px", height: "315px", frameborder: "0" }} src="https://www.youtube.com/embed/1KAOq7XX2OY" allowFullScreen></iframe>


    </div>
  )
}
export default StarWarsPage