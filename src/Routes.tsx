import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from './page/Home'
import { NewRoom } from './page/NewRoom'

import { AuthContextProvider } from './contexts/AuthContext'

export default function Routes() {

    return (
        <BrowserRouter>
            <AuthContextProvider>
                <Route path="/" exact component={Home} />
                <Route path="/rooms/new" component={NewRoom} />
            </AuthContextProvider>
        </BrowserRouter>
    )
}
