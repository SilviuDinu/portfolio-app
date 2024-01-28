import routes from '@constants/routes';
import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <>
      {routes.map(({ label, path, classNames: classes }, idx) => (
        <Link
          key={idx}
          to={path}
          className={classNames('menu-item', classes)}>
          {label}
        </Link>
      ))}
    </>
  );
}

export default React.memo(Menu);
