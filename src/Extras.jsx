import './styles/Extras.scss';

const albums = [
  {
    title: "Antes de Ir",
    url: "https://open.spotify.com/album/3qVt4IoxwlvWy5DzXM4JEC",
    img: {
      src: "/albums/antes-de-ir.png",
      alt: "Portuguese tile over a white wall, with traditional decorations and a centered scription that says the name of the album, Antes de Ir, and the name of the artist, \"Estevão\"."
    }
  },
  {
    title: "Vitória & Esplendor",
    url: "https://open.spotify.com/album/7mwFb5jV4jO9vnjSVdT1MM",
    img: {
      src: "/albums/vitoria-e-esplendor.png",
      alt: "Photo of Estevão with the sea as background, in front of a orange sunset. Inside Estevão's head, we see the text \"3464 Vitória & Esplendor Estevão\". Behind and around Estevão, we see a green translucent text with the name of the album."
    }
  },
  {
    title: "FORMIGANALHATUNA",
    url: "https://open.spotify.com/album/42mcZcRt8EtH3GhJxslQgt",
    img: {
      src: "/albums/formiganalhatuna.jpg",
      alt: "Two women on a beach with a beautiful reflective effect on the water, a blue sky behind."
    }
  },
  {
    title: "fluXo",
    url: "https://open.spotify.com/album/4rTV5pHM7IuTRLSFzoklG0",
    img: {
      src: "/albums/fluxo.jpg",
      alt: "Handwritten symbol with the word \"fluXo\", which means flux or stream, written in a stylized fashion, with the X in the middle in a symmetrical shape of two waves."
    }
  },
]

export default function Extras() {

  return (
    <div className='Extras'>
      <h1 className='text-xl font-bold'>Extras</h1>
      <p>Other than developing and designing, I am an actor and a musician! Check out some of the things I’ve done. <span className='font-light italic'>If you’d like to learn more about my artistic journey until now, <a className="text-gold hover-underline font-bold" href="https://escrevao.blogspot.com/2025/07/about-my-artistic-journey-until-now.html" target='_blank'>click here</a>.</span></p>

      <p className='text-center font-bold mt-8'>Here are the four albums I’ve published:</p>

      <div className='flex flex-col gap-10 mt-8 items-center text-center'>
        {albums.map((album, idx) => (
          <a key={idx} href={album.url} className='album' target='_blank'>
            <img className="mb-5 w-80 max-w-full" src={album.img.src} alt={album.img.alt} />
            <h2 className='text-xl font-bold'>{album.title}</h2>
          </a>
        ))}
      </div>

      <p className='mt-16 text-center font-bold'>You can read all the lyrics and learn more about the songs in <a className="text-gold hover-underline" href="https://sites.google.com/view/estevaofazcantar/" target='_blank'>this site</a>. <br /><span className='text-sm'>(You may have to translate some of it!)</span> </p>

      <p className='text-center font-normal mt-8'>Click here to check out some texts I’ve written:</p>
      <p className='text-center font-bold'>
        <a href="https://escrevao.blogspot.com/" className='hover-underline hover:text-gold' target='_blank'>Escrevão</a>
      </p>
    </div>
  )
}