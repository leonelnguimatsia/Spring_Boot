/*======================================================
 * Projekt    : Mitarbeitermanagement-Anwendung          *
 * Datei      : App.jsx                                  *
 * Ordner     : src                                      *
 * Autor      : Leonel Nguimatsia                        *
 * Version    : 1.0                                      *
 * Datum      : 2026                                     *
 *======================================================*/

import './App.css';

/* Kopfzeile der Anwendung */
import { HeaderComponent } from './components/HeaderComponent';

/* Hauptkomponente für die Mitarbeiterliste */
import ListEmployeeComponent from './components/ListEmployeeComponent';

/* Fußzeile der Anwendung */
import { FooterComponent } from './components/FooterComponent';

/* Seite zum Hinzufügen eines neuen Mitarbeiters */
import { EmployeeComponent } from './components/EmployeeComponent';

/* Routing-Anbieter für die Navigation */
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* Einstiegspunkt der Anwendung */
function App() {
  return (
    <>
      <BrowserRouter>
        {/* Header oben auf der Seite anzeigen */}
        <HeaderComponent />

        {/* Routen der Anwendung */}
        <Routes>
          {/* http://localhost:3000 — zeigt die Mitarbeiterliste an: Base URL */}
          <Route path="/" element={<ListEmployeeComponent />}></Route>
          {/* http://localhost:3000/employees — zeigt ebenfalls die Mitarbeiterliste an */}
          <Route path="/employees" element={<ListEmployeeComponent />}></Route>
          {/* http://localhost:3000/add-employee — zeigt die Seite zum Hinzufügen eines neuen Mitarbeiters an */}
          <Route path="/add-employee" element={<EmployeeComponent />}></Route>
          {/* http://localhost:3000/edit-employee/1 — zeigt die Seite zum Aktualisieren eines bestehenden Mitarbeiters an */}
          <Route
            path="/edit-employee/:id"
            element={<EmployeeComponent />}
          ></Route>
        </Routes>

        {/* Footer unten auf der Seite anzeigen */}
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
