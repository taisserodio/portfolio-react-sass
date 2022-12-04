import MainContent from "./componentes/MainContent";
import Sidebar from "./componentes/Sidebar";

import "./styles/components/app.sass";

function App() {
  return (
    <div id="portfolio">
      <h1>Tais Seródio</h1>
      <Sidebar/>
      <MainContent/>
    </div>
  );
}

export default App;
