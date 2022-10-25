/**
 * (1pt) - Crie uma interface GameBannerProps com os três atributos passados vindos da das props
 * (2pt) - Use a interface como o tipo das props do componente e substitua os 
 *          atributos estáticos das imagem (src), titulo e contador de anuncios pelas respectivas props
 */

 interface GameBannerProps {  
  title: string;
  bannerUrl: string;
  _count: {
    ads: number
  }
}

export function GameBannerProps({gameBannerProps}:any) {
  return (<><a href="" className="relative rounded-lg overflow-hidden">
    <img src={gameBannerProps.bannerUrl} alt="" />

    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
      <strong className="font-bold text-white block">{gameBannerProps.title}</strong>
      <span className="text-zinc-300 text-sm block">{gameBannerProps.ads_count}</span>
    </div>
  </a></>);
}

export default GameBanner;