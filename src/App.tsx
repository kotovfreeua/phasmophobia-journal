import { I18nextProvider } from "react-i18next";
import { Outlet } from "react-router-dom";
import i18n from "@/i18n";

const App: React.FC = () => (
  <I18nextProvider i18n={i18n}>
    <main className='px-2 min-h-screen'>
      <h1 className='hidden'>Phasmophobia Journal</h1>

      <Outlet />
    </main>
  </I18nextProvider>
);

export default App;
