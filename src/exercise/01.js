// Code splitting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const loadGloabe = () => {
  console.log('ok. looo')
  return import('../globe')
}
const Globe = React.lazy(loadGloabe)

function App() {
  const [showGlobe, setShowGlobe] = React.useState(false)

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: '2rem',
      }}
    >
      <label style={{marginBottom: '1rem'}} onMouseOver={loadGloabe}>
        <input
          type="checkbox"
          checked={showGlobe}
          onChange={e => setShowGlobe(e.target.checked)}
        />
        {' show globe'}
      </label>
      <div style={{width: 400, height: 400}}>
        {showGlobe ? (
          <React.Suspense fallback={<p>Loading...</p>}>
            <Globe />
          </React.Suspense>
        ) : null}
      </div>
    </div>
  )
}
// 🦉 Note that if you're not on the isolated page, then you'll notice that this
// app actually already has a React.Suspense component higher up in the tree
// where this component is rendered, so you *could* just rely on that one.

export default App
