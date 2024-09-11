import CarouselCard from './Carouselcard.jsx';
import './carousel.css';

const cardsData = [
  { videoSrc: 'assets/videos/video1.mp4', title: '3D Terrain', link: 'https://terrainthtreejs.vercel.app/' },
  { videoSrc: 'assets/videos/video2.mp4', title: 'Portfolio 3D ', link: 'https://portfoliojorgegdev.vercel.app/' },
  { videoSrc: 'assets/videos/video3.mp4', title: 'Earth 3D', link: 'https://earth3d-neon.vercel.app/' },
  { videoSrc: 'assets/videos/video4.mp4', title: 'Particles Cursor', link: 'https://particlescursoranimation.vercel.app/' },
  { videoSrc: 'assets/videos/video5.mp4', title: 'Wobbly-Sphere', link: 'https://monkeyinspace.vercel.app/' },
  { videoSrc: 'assets/videos/video6.mp4', title: 'Children`s Book', link: 'https://book-antonia-3d.vercel.app/' },
  { videoSrc: 'assets/videos/video7.mp4', title: 'Horror 3D', link: 'https://horrorexperiencethreejs.vercel.app/' },
  { videoSrc: 'assets/videos/video8.mp4', title: 'Magic Portal 3D', link: 'https://magicportalthreejs.vercel.app/' },
];

const CarouselContainer = () => {
  return (
    <section className="general__laboratory">
      <div className="laboratory__lab">
        <div className="lab__box">
          {cardsData.map((card, index) => (
            <CarouselCard 
              key={index} 
              index={index + 1} 
              videoSrc={card.videoSrc} 
              title={card.title} 
              link={card.link} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselContainer;
