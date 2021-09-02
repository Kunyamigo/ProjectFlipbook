import React, { useState, useEffect } from "react"
import Video from "../../images/v2.mp4"
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP
  } from "./Hero.elemets";

const Hero = () => {

  // Efectos
  const [offsetY, setOffsetY] = useState(0) 
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    // Contenedor del video Hero
    <HeroContainer>
      <HeroBg>
        <VideoBg
          style={{ transform: `translateY(${offsetY * 0.6}px)` }}
          src={Video}
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </HeroBg>
      <HeroContent>
        <HeroItems
        style={{ transform: `translateY(-${offsetY * 0.8}px)` }}
        >
          <HeroH1>Wicked Game</HeroH1>

          <HeroP>I never dreamed that I'd meet somebody like you</HeroP>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero