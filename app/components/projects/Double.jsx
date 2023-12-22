'use client';
import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react'; 

export default function Index({works, reversed}) {

  const firstImage = useRef(null);
  const secondImage = useRef(null);
  let xPercent = reversed ? 100 : 0;

  const manageMouseMove = (e) => {
      const { clientX } = e;
      xPercent = (clientX / window.innerWidth) * 100;

      const firstImagePercent = 66.66 - (xPercent * 0.33);
      const secondImagePercent = 33.33 + (xPercent * 0.33);
      firstImage.current.style.width = `${firstImagePercent}%`
      secondImage.current.style.width = `${secondImagePercent}%`
  }

    return(
      <div onMouseMove={(e) => {manageMouseMove(e)}} className={styles.double}>
  
        <div ref={firstImage} className={styles.imageContainer}>
          <div className={styles.stretchyWrapper}>
            <Link target="_blank" href={works[0].link}>
            <Image 
              src={`/images/${works[0].src}`}
              fill={true}
              alt={"image"}
            />
            </Link>
          </div>
          <div className={styles.body}>
              <h3>{works[0].name}</h3>
              <p>{works[0].client}</p>
              <p>{works[0].description}</p>
          </div>
        </div>
  
        <div ref={secondImage} className={styles.imageContainer}>
          <div className={styles.stretchyWrapper}>
          <Link target="_blank" href={works[1].link}>
            <Image 
              src={`/images/${works[1].src}`}
              fill={true}
              alt={"image"}
            />
            </Link>
          </div>
          <div className={styles.body}>
              <h3>{works[1].name}</h3>
              <p>{works[1].client}</p>
              <p>{works[1].description}</p>
          </div>
        </div>
  
      </div>
    )
}