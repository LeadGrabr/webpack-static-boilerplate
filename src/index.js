import { default as React } from 'react'
import { render } from 'react-dom'
import { renderToString } from 'react-dom/server'
import { createMemoryHistory } from 'history'
import { Router, RouterContext, match, browserHistory } from 'react-router'
import { default as routes } from './routes'
import { Html } from './components'
import { default as createStore } from './redux/create'
import { Provider } from 'react-redux'
import { default as canUseDOM } from 'can-use-dom'
import { default as useScroll } from 'scroll-behavior/lib/useStandardScroll'
import { syncHistoryWithStore } from 'react-router-redux'

if (canUseDOM) {
    let history = useScroll(() => browserHistory)()
    const store = createStore(history)
    history = syncHistoryWithStore(history, store)
    render(
        <Provider store={store}>
            <Router
                history={history}
                routes={routes}
            />
        </Provider>,
        document.getElementById('content')
    )
}

export default ({ assets, path }, callback) => {
    const history = createMemoryHistory()
    const store = createStore(history)
    const location = history.createLocation(path)

    match({ routes, location }, (error, redirectLocation, props) => {
        const html = renderToString(
            <Html
                assets={assets}
                component={
                    <Provider store={store}>
                        <RouterContext {...props}/>
                    </Provider>
                }
            />
        )
        callback(null, html)
    })
}
