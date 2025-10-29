// pages/sentry-example-page.js (or app/sentry-example-page/page.js)
import React from 'react'

function SentryExamplePage() {
  const throwError = () => {
    throw new Error('This is a test error from Sentry example page!')
  }

  return (
    <div>
      <h1>Sentry Example Page</h1>
      <p>
        Click the button below to intentionally throw an error and test your
        Sentry setup.
      </p>
      <button onClick={throwError}>Throw Error</button>
    </div>
  )
}

export default SentryExamplePage
