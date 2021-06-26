import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './page/Home'
import { NewRoom } from './page/NewRoom'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/rooms/new" component={NewRoom} />
            </Switch>
        </BrowserRouter>
    )
}
