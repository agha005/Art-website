'use client'
import {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Loader = () => {
  useEffect(() => {
    // Function to initialize AOS after all images have loaded
    const initAos = () => {
      Aos.init({
        duration: 500,
        once: false,
        offset: 100
      })
    }

    const imageLoadCheck = document.images
    const totalImages = imageLoadCheck.length
    let loadedImages = 0

    // Function to handle image load or error
    const imageLoaded = () => {
      loadedImages++
      if (loadedImages === totalImages) {
        initAos()
      }
    }

    // Adding event listeners to each image
    Array.from(imageLoadCheck).forEach((img) => {
      if (img.complete) {
        imageLoaded() // Immediately count images that are already loaded
      } else {
        img.addEventListener('load', imageLoaded)
        img.addEventListener('error', imageLoaded) // Handle broken images
      }
    })

    // Cleanup function to remove event listeners
    return () => {
      Array.from(imageLoadCheck).forEach((img) => {
        img.removeEventListener('load', imageLoaded)
        img.removeEventListener('error', imageLoaded)
      })
    }
  }, [])

  return null
}

export default Loader
