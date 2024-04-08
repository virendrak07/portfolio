import React, { useState, useEffect } from 'react'
import certificateImage1 from '../../assets/images/CertificateJavaScript.jpeg'
import certificateImage2 from '../../assets/images/figmaCertificate.jpg'
import './index.scss'
import Loader from 'react-loaders'

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay
    const timeoutId = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    // Cleanup timeout
    return () => clearTimeout(timeoutId)
  }, [])

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc)
  }

  const handleClosePopup = () => {
    setSelectedImage(null)
  }

  const handleDownload = () => {
    if (selectedImage) {
      // Create an anchor element
      const anchor = document.createElement('a')
      // Set the href attribute to the selected image source
      anchor.href = selectedImage
      // Set the download attribute to force download the image
      anchor.download = `certificate.${selectedImage.split('.').pop()}`
      // Programmatically click the anchor element to trigger the download
      anchor.click()
    }
  }

  return (
    <>
      {isLoading ? (
        <Loader type="pacman" />
      ) : (
        <div className="certificates-container" data-aos="fade-down">
          {selectedImage && (
            <div
              className="popup-overlay"
              onClick={handleClosePopup}
              data-aos="zoom-in-up"
            >
              <button className="button-download" onClick={handleDownload}>
                Download
              </button>
              <div className="popup-content">
                <img src={selectedImage} alt="Selected Certificate" />
              </div>
            </div>
          )}
          <div
            className="certificate-box"
            onClick={() => handleImageClick(certificateImage1)}
          >
            <img src={certificateImage1} alt="Certificate 1" />
          </div>
          <div
            className="certificate-box"
            onClick={() => handleImageClick(certificateImage2)}
          >
            <img src={certificateImage2} alt="Certificate 2" />
          </div>
        </div>
      )}
    </>
  )
}

export default Certificates
