import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hex = rgbToHex(...rgb)
  const hexValue = `#${hexColor}`

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 4000)
    return () => clearTimeout(timeout)
  }, [alert])

  const copyColor = () => {
    setAlert(true)
    navigator.clipboard.writeText(hex)
  //  navigator.clipboard.writeText(hexValue)
  }

  return (
    <article onClick={copyColor} className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor : `rgb(${bcg})`}}>
      <p className="percent-value">{weight}% </p>
      <p className="color-value">{hex}</p>

      {/* <p className="percent-value">{weight}% </p>
      <p className="color-value">{hexValue}</p> */}
      {
        alert && <p className='alert'>Copied to clipboard</p>
      }
    </article>
  )
}

export default SingleColor
