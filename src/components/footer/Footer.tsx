import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer() {
  let data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center bg-cyberpunk-bg text-cyberpunk-text">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">Game Store | Copyright: {data}</p>
          <p className="font-bold">Conheça mais em:</p>
          <div className="flex gap-2">
            <a href="https://linkedin.com/in/fernando-cassio" target="_blank" className="hover:text-cyberpunk-accent2 transition-colors duration-300">
              <LinkedinLogo size={32} />
            </a>
            <a href="https://github.com/fernandocassiodev" target="_blank" className="hover:text-cyberpunk-accent2 transition-colors duration-300">
              <GithubLogo size={32} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
