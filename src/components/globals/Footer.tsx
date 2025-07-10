import '../../Footer.css';

const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 flexFooter">
    <div>
      DEDSAFIO ® | DESIGN BY: MOCHIZUKI
    </div>
    <div className='redesFooter'>
      <a href="https://x.com/dedreviil" target="_blank" rel="noopener noreferrer">
        <img src="/LandingDedsafio/imgs/Participants/Twitter.svg" alt="" />
      </a>
      <a href="https://www.twitch.tv/dedsafio/" target="_blank" rel="noopener noreferrer">
        <img src="/LandingDedsafio/imgs/Participants/Twitch.svg" alt="" />
      </a>
      <a href="https://www.youtube.com/c/deDOS" target="_blank" rel="noopener noreferrer">
        <img src="/LandingDedsafio/imgs/Participants/Youtube.svg" alt="" />
      </a>
    </div>
  </footer>
);
export default Footer;