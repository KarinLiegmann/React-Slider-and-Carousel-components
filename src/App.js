import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import StandardSlider from './pages/StandardSlider'
import AnimatedCard from './pages/AnimatedCard'

import DesktopNavigation from './components/DesktopNavigation'


function App() {
  return (
    <>
      <DesktopNavigation />
      <main>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/standard-slider">
            <StandardSlider />
          </Route>

          <Route path="/animated-card">
            <AnimatedCard />
          </Route>

        </Switch>
      </main>
    </>

  );
}

export default App;
