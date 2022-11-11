import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FormPage } from './pages/FormPage';
import { Home } from './pages/Home';
import { TablePage } from './pages/TablePage';
import { CustomNavbar } from './components/CustomNavbar';
import { MsalProvider } from '@azure/msal-react';
// 






function App ({ msalInstance }: any)  {
  return (
    // <div>
    //   <CustomNavbar />
    //   <TablePage />
    // </div>
    <MsalProvider instance={msalInstance}>
        <CustomNavbar/>
    </MsalProvider>
    // <BrowserRouter >

    //       <Routes>
    //         <Route path='/form' element={<TablePage />} />

    //       </Routes>
    // </BrowserRouter>


  );
}



export default App;


