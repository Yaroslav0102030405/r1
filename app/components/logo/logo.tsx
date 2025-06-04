import ImageLogo from "../../images/logo.png"

interface SrcAndAlt {
    src: string;
    alt: string;
}

const srcAndAlt: SrcAndAlt = {
    src: ImageLogo,
    alt: "logo",
};

const Logo = () => {
    return (
    <>
    <a href="/"><img width="50" src={srcAndAlt.src} alt={srcAndAlt.alt} /></a>
    </>  );
}
 
export default Logo;