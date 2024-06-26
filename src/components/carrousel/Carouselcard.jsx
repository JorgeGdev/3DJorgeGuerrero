import './cards.css';

const CarouselCard = ({ index, videoSrc, title, link }) => {
  const degrees = 45 * index; // Ajustar según el número total de cartas

  return (
    <div 
      className="lab__container" 
      style={{ '--i': index }}
      onMouseOver={() => {
        document.querySelector('.lab__box').style.transform = `rotateY(-${degrees}deg)`;
      }}
      onClick={(e) => {
        e.currentTarget.classList.add('rotating');
        e.currentTarget.addEventListener('animationend', () => {
          e.currentTarget.classList.remove('rotating');
        }, { once: true });
      }}
    >
      <video src={videoSrc} alt={title} autoPlay loop muted />
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h1 className="lab__title">{title}</h1>
      </a>
    </div>
  );
};

export default CarouselCard;

