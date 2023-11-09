import { classNames } from "@/utils/strings";
import { motion, useSpring } from "framer-motion";
import { MouseEventHandler, useEffect, useState } from "react";

export const ContactModal = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  const triggerHandler = (evt?: Event) => {
    evt?.preventDefault();
    toggle();
  };

  useEffect(() => {
    const contactModalLinks = document.querySelectorAll(".contact-trigger");

    contactModalLinks.forEach((linkNode) => {
      linkNode.addEventListener("click", triggerHandler);
    });

    return () => {
      contactModalLinks.forEach((linkNode) => {
        linkNode.removeEventListener("click", triggerHandler);
      });
    };
  }, []);

  const x = useSpring(200, { stiffness: 1000, damping: 100 });
  const y = useSpring(200, { stiffness: 1000, damping: 100 });

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    x.set(event.pageX);
    y.set(event.pageY);
  };

  return (
    <div
      onClick={toggle}
      onMouseMove={handleMouseMove}
      className={classNames(
        "fixed h-screen w-screen top-0 left-0 bg-white/30 dark:bg-black/30 backdrop-blur-md z-10 transition-all duration-500 overflow-hidden origin-bottom cursor-pointer",
        open ? "scale-1" : "scale-0"
      )}
      onKeyDown={() => {}}
    >
      <motion.span
        className="fixed font-[100] text-xl text-slate-600 dark:text-slate-400 hidden md:block"
        style={{
          x,
          y,
        }}
      >
        close
      </motion.span>
      <div
        onClick={(evt) => evt.stopPropagation()}
        onKeyDown={() => {}}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-fit w-[480px] max-w-[95vw] bg-white dark:bg-slate-900 border border-slate-400 rounded-lg py-8 px-4 cursor-default"
      >
        <button
          onClick={toggle}
          className="absolute top-0 right-0 h-12 w-12 text-slate-500 text-xl font-light block"
        >
          ×
        </button>
        <p className="text-center">
          Hi there 👋🏻
          <br />
          <br />
          ✉️ Send me an email
          <br />
          <b>charlieruiz.dev &lt;at&gt; gmail &lt;dot&gt; com</b>
        </p>
      </div>
    </div>
  );
};
