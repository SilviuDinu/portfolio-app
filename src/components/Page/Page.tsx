import classNames from 'classnames';
import { PropsWithChildren, useMemo } from 'react';
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

  return (
    <div className={classNames('page', className)}>
      {title && <section className='title-container'>{titleElement}</section>}
      <section className='page-content'>{children}</section>
    </div>
  );
};

export default Page;
