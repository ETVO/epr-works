import { useState } from "react";
import "../styles/BackToTop.scss";

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const [show, setShow] = useState(false);
  const [jump, setJump] = useState(false);

  window.onscroll = () => {
    if (window.scrollY > 200) setShow(true);
    else setShow(false);

    if (window.pageYOffset + window.innerHeight >= document.body.scrollHeight) setJump(true);
    else setJump(false);
  }


  return (
    <div className={"back-to-top cursor-pointer"
      + (show ? '' : ' hide') + (jump ? ' jump' : '')}
      title="Scroll to the top of the page"
      onClick={scrollToTop}>
      <div className="arrow bg-white text-gold border-2 border-gold rounded-full">↑</div>
    </div>
  );
};