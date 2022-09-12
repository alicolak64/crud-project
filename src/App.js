import EmployeeContextProvider from "./Contexts/EmployeeContext";

import EmployeeList from "./Components/EmployeeList";

function App() {
  return (
    <div className="App">

      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <EmployeeContextProvider>
              <EmployeeList />
            </EmployeeContextProvider>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;