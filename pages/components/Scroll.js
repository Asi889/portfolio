import { useEffect } from "react";

const Scroll = function () {
    useEffect(function onFirstMount() {
        window.onscroll = function () { onScroll() };
        function onScroll() {
            // console.log("scroll");

            if (document.body.scrollTop < 800 || document.documentElement.scrollTop < 800) {
                document.getElementById("idabout_pic").style.visibility="hidden"
            };
            // if (document.body.scrollTop < 800 || document.documentElement.scrollTop < 800) {
            //     document.getElementById("idabout_pic").src = ""
            // };

            if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
                document.getElementById("idabout_pic").style.visibility="visible"

            };
            // if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
            //     document.getElementById("idabout_pic").src = "https://res.cloudinary.com/dvdzjj8jo/image/upload/v1615877381/profilepic_zmo3o7.png"

            // };
            
            if (document.body.scrollTop > 4000 || document.documentElement.scrollTop > 4000) {

                document.getElementById("idtitlecontent").style.animationPlayState = "running"
                document.getElementById("idh1starwars").style.animationPlayState = "running"
                // document.getElementById("idstart").style.animationPlayState = "running"
            };
        }


    }, []);

    return null;
}

export default Scroll