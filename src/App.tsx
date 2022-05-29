import { Outlet } from "react-router-dom";

const App: React.FC = () => (
  <main className='px-2 min-h-screen'>
    <h1 className='hidden'>Phasmophobia Journal</h1>

    <Outlet />
  </main>
);

export default App;
