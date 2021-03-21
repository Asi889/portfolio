import * as React from "react";
import NextHead from "next/head";
import { GoogleFonts } from "next-google-fonts";

const Head = ({ children, title }) => (
    <React.Fragment>
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet" />
        <NextHead>
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />

            <title>{title}</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
            <script src="https://leemark.github.io/better-simple-slideshow/demo/js/hammer.min.js"></script>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Galindo&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"></link>

            {children}
        </NextHead>
    </React.Fragment>
);

export default Head;