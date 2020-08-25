import { Fragment, h, render } from 'preact'

import Slider from './components/slider'

const App = () => {
    return (
        <Fragment>
            <Slider />
        </Fragment>
    )
}

render(<App />, document.body)
