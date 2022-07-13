import React from 'react';

function NotFoundPage(): JSX.Element {
  return (
    <React.Fragment>
      <section className="film-card">
        <h1>404. Page not found</h1>
      </section>

      <div className="page-content">
        <a href="/">Вернуться на главную</a>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default NotFoundPage;
