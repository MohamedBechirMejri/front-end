const Footer = () => {
  return (
    <footer className="flex items-center justify-around py-8 border-t border-t-[gray]">
      <div className="flex gap-2">
        <a
          href="https://discord.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#5865f2] text-[gray]"
        >
          <i className="bi bi-discord hover:color[#ff0000]"></i>
        </a>
        <a
          href="https://twitch.tv"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#9146FF] text-[gray]"
        >
          <i className="bi bi-twitch hover:color[#ff0000]"></i>
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#FF0000] text-[gray]"
        >
          <i className="bi bi-youtube hover:color[#ff0000]"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#1da1f2] text-[gray]"
        >
          <i className="bi bi-twitter hover:color[#ff0000]"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#C13584] text-[gray]"
        >
          <i className="bi bi-instagram hover:color[#ff0000]"></i>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#1877f2] text-[gray]"
        >
          <i className="bi bi-facebook hover:color[#ff0000]"></i>
        </a>
      </div>
      <div className="flex gap-2">
        <a href="" target="_blank" className="hover:underline text-[gray]">
          © FightMe.tn 2021
        </a>
        <a href="" target="_blank" className="hover:underline text-[gray]">
          Terms
        </a>
        <a href="" target="_blank" className="hover:underline text-[gray]">
          About
        </a>
      </div>
    </footer>
  );
};

export default Footer;
