import React, { useEffect } from "react"

const Payment = ({ embedURL, onSuccess, onFailure }) => {
  useEffect(() => {
    window.PayHere.launch({
      embedURL,
      onSuccess,
      onFailure
    })
  }, [embedURL])

  return (
    <>
    </>
  )
}

export default Payment
