import React, { useEffect } from "react"

const Payment = ({ embedURL, onSuccess, onFailure, onClose }) => {
  useEffect(() => {
    window.PayHere.launch({
      embedURL,
      onSuccess,
      onFailure,
      onClose
    })
  }, [embedURL])

  return (
    <>
    </>
  )
}

export default Payment
