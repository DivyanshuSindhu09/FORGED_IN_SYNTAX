import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Second from "./Second"
import { useEffect, useState } from "react";


const Hero = () => {
  const bigImage = '/4dfe5a19-bfa9-4a9a-907c-5644ede63f26.png'
  const smallImage = '/75928066-8dff-490d-a5ef-78318a9ffc23.jpeg'
  const [photoSrc, setPhotoSrc] = useState(window.innerWidth < 760 ? smallImage : bigImage);
  const handleImageSrc = ()=>{
    if(window.innerWidth < 760){
      setPhotoSrc(bigImage)
    }else{
      setPhotoSrc(smallImage)
    }
  }

  useEffect(()=>{
    window.addEventListener('resize', handleImageSrc)
    console.log(photoSrc)
    return ()=>{
      window.removeEventListener('resize', handleImageSrc)
    }
  },[])

  useGSAP(() => {
    gsap.set('.mask-wrapper', {
      maskPosition: "42% 41%",
      maskSize: "11000% 11000%",
    });

    // gsap.set('.mask-logo', { marginTop: '-100vh', opacity: 0 });

    gsap.set('.entrance-message', { marginTop: '0vh' });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        scrub: 2,
        end: '+=450%',
        pin: true,
      }
    })

    tl
      // .to('.fade-out', { opacity: 0, ease: 'power1.inOut' })
      // .to('.scale-out', { scale: 1, ease: 'power1.inOut' })
      .to('.mask-wrapper', { 
        duration : 5,
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
      
      <div 
      // style={{
      //   backgroundImage : `url(${photoSrc})`
      // }}
      className = {`w-full h-screen  mask-wrapper   `}
      
      >
      <img
      className="w-full h-full object-center object-contain"
      src={photoSrc} alt="" />
      </div>

      

      

      <Second />
    </section>
  )
}

export default Hero