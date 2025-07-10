import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Second from "./Second"

const Hero = () => {
 

  useGSAP(() => {
    gsap.set('.mask-wrapper', {
      maskPosition: "42% 45%",
      maskSize: "8000% 10000%",
    });

    gsap.set('.mask-logo', { marginTop: '-100vh', opacity: 0 });

    gsap.set('.entrance-message', { marginTop: '0vh' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        scrub: 2.5,
        end: '+=200%',
        pin: true,
      }
    })

    tl
      .to('.fade-out', { opacity: 0, ease: 'power1.inOut' })
      .to('.scale-out', { scale: 1, ease: 'power1.inOut' })
      .to('.mask-wrapper', { 
        maskPosition : "50% 50%",
        maskSize : "40% 40%", ease: 'power1.inOut' }, '<')
      .to('.mask-wrapper', { opacity: 0 })
      // .to('.overlay-logo', { opacity: 1, duration :0.1, onComplete: () => {
      //   gsap.to('.overlay-logo', { opacity: 0, duration:0.1 });
      // } }, '<')
      .to('.entrance-message', { duration: 1, ease: 'power1.inOut', maskImage: 'radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)' }, '<')
  });

  return (
    <section className="hero-section">
      {/* <div className="w-full h-full mask-wrapper">
        <img src="https://images.unsplash.com/photo-1655739330253-f7803decc705?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXB1dGVyJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww" alt="background" className="scale-out object-cover h-full w-full" />
        
        
      </div> */}
      <div className="w-full h-screen  first-mask  mask-wrapper">

      </div>

      

      

      <Second />
    </section>
  )
}

export default Hero