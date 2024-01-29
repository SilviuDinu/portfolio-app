import useDelayedRender from '@hooks/useDelayedRender';
import classNames from 'classnames';
import { PropsWithChildren, useLayoutEffect, useMemo } from 'react';
import './style.scss';

export interface PageProps extends PropsWithChildren {
  title?: JSX.Element | string;
  className?: string;
}

const Page = ({ className, title, children }: PageProps) => {
  const titleElement = useMemo(() => {
    if (typeof title === 'string') {
      return <h1 className='title'>{title}</h1>;
    }

    return title;
  }, [title]);

  useLayoutEffect(() => {
    window?.scrollTo({ top: 0 });
  }, []);

  return (
    <div className={classNames('page', className)}>
      {title && <section className='title-container'>{titleElement}</section>}
      <section className='page-content'>{children}</section>
    </div>
  );
};

const PageWrapper = (props: PageProps) => {
  return useDelayedRender(<Page {...props} />, 1000);
};

export default PageWrapper;
