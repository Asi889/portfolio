import { NextSeo } from "next-seo";
import { seoMerge } from "../../src/services/next-seo-config";
import Head from "../components/Head";

const Gallery = () => {
    const galleryData = [
        { type: 'img', source: 'https://res.cloudinary.com/dvdzjj8jo/image/upload/v1639487497/frisbee/18514037_1329021827212321_2594249899931336704_n_yttxfj.jpg' },
        { type: 'video', source: 'https://res.cloudinary.com/dvdzjj8jo/video/upload/v1639487504/frisbee/20509421_105975686755800_3802126451688341504_n_d2x6iw.mp4' },
        { type: 'video', source: 'https://res.cloudinary.com/dvdzjj8jo/video/upload/v1639487508/frisbee/20730053_624199714455331_8353606808266342400_n_aieqyr.mp4' },
        { type: 'video', source: 'https://res.cloudinary.com/dvdzjj8jo/video/upload/v1639487499/frisbee/18578124_1882385202017258_7891478532059037696_n_bkmsjh.mp4' },
        { type: 'img', source: 'https://res.cloudinary.com/dvdzjj8jo/image/upload/c_crop,h_1370,w_2048/v1616576685/%D7%97%D7%95%D7%A3_%D7%94%D7%AA%D7%95%D7%A4%D7%99%D7%9D_062-removebg_qrkktl.png' },
        { type: 'video', source: 'https://res.cloudinary.com/dvdzjj8jo/video/upload/v1639389589/trick5_1_ma9zkk.mp4' },
        { type: 'img', source: 'https://res.cloudinary.com/dvdzjj8jo/image/upload/v1639487497/frisbee/20394191_332271740543057_7267363240705785856_n_f74i5x.jpg' },
        { type: 'img', source: 'https://res.cloudinary.com/dvdzjj8jo/image/upload/v1639487501/frisbee/22708788_1394048737390883_480741620791115776_n_lft6im.jpg' },
        { type: 'video', source: 'https://res.cloudinary.com/dvdzjj8jo/video/upload/v1639487512/frisbee/19000288_280389269037107_4951438495844401152_n_vznjl1.mp4' },
        { type: 'video', source: 'https://res.cloudinary.com/dvdzjj8jo/video/upload/v1639487506/frisbee/20292029_757977457728145_4200437556896071680_n_oisnnl.mp4' },
        { type: 'video', source: 'https://res.cloudinary.com/dvdzjj8jo/video/upload/v1639487510/frisbee/20669507_1780883105536208_518853167710994432_n_tlssqo.mp4' },
        { type: 'video', source: 'https://res.cloudinary.com/dvdzjj8jo/video/upload/v1639487508/frisbee/20818476_298185227322235_2926608251845869568_n_pg5h4a.mp4' },
    ];
    const seo = seoMerge({
        title: "Asaf Marom",
        description: `Asaf Marom's Profile website - Gallery page `,
    });
    return (
        <div id="main_container">
            <Head></Head>
            <NextSeo {...seo} />
            <div className="gallery-container">

                <div className="gallery-wrapper">
                    <div className="gallery-text">
                        <h1>In my free time i ❤ to play fisbee and make and make video's</h1>
                        <p className="gallery-sub-text">you can find more of my photos and video's on <a className="gallery-links" href="https://www.instagram.com/p/ByvaP3zgatA/?utm_medium=copy_link">Instagram</a> or <a className="gallery-links" href="https://vm.tiktok.com/ZSefoN5AC/">TikTok</a></p>
                    </div>
                    <div className="img-wrapper">

                        {galleryData.map((item) => {
                            if (item.type === "img") return <img className="video-img" src={item.source} />
                            if (item.type === "video") return (<video className="video-img" controls>
                                <source src={item.source} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>)
                        })}
                    </div>
                </div>
            </div>


        </div>
    )
};
export default Gallery;