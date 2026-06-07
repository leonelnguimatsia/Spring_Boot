/*======================================================
 * Projekt    : Mitarbeitermanagement-Anwendung          *
 * Datei      : HeaderComponent.jsx                      *
 * Ordner     : components                               *
 * Autor      : Leonel Nguimatsia                        *
 * Version    : 1.0                                      *
 * Datum      : 2026                                     *
 *======================================================*/

import React from 'react';

/* Navigationsleiste oben auf der Seite */
export const HeaderComponent = () => {
  return (
    <div>
      <header>
        {/* Dunkle Bootstrap-Navbar */}
        {/* w-100: volle Breite auf allen Geräten — kein style-Hack nötig */}
        <nav className="navbar navbar-dark bg-dark w-100">
          {/* container-fluid + justify-content-center: Text zentriert auf Handy und Desktop */}
          <div className="container-fluid justify-content-center">
            <a
              className="navbar-brand text-center"
              href="https://github.com/leonelnguimatsia"
              target="_blank"
              rel="noreferrer"
            >
              Employee Management System
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};
