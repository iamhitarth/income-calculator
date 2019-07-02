import * as React from 'react'
import { render } from 'react-dom'

const Calculator: React.FunctionComponent = () => (<div>
  <h1>Income Calculator</h1>
  <input placeholder="Target amount" />
</div>)

render(<Calculator/>, document.getElementById('main'));