import React from 'react'
import * as views from './components'
import { IndexRoute, Route } from 'react-router'

export default (
    <Route
        component={views.App}
        path="/"
    >
        <IndexRoute component={views.Home}/>
        <Route
            component={views.About}
            path="/about"
        />
        <Route
            component={views.Contact}
            path="/contact"
        />
        <Route
            component={views.Gallery}
            path="/gallery"
        />
    </Route>
)
