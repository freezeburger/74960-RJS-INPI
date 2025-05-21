
import * as UI from '@/components';

function App() {

  return (
    <>
      <UI.Button level="primary" action={() => alert('Click')}>Click me</UI.Button>
      <UI.Button level="primary">Click me</UI.Button>
    </>
  )
}

export default App
