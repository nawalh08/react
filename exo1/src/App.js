
import "./App.css";
import FirstComponent from "./components/FirstComponent/FirstComponent";
import ParentComponent from "./components/ParentComponent";
import ListingComponent from "./components/ListingComponent";


function App() {
  return (
    <div className="App">
      <FirstComponent />
    
      <ListingComponent/>
      <ParentComponent/>
     
    </div>
  );
}

export default App;
