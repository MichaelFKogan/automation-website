import Link from 'next/link';
import styles from './toolbar.module.css';
import Icon from '../Icon';

export default function ToolBar() {
  return (
    <div className="nk-sticky-toolbar z-index-highest position-fixed top-0 end-0 mt-12 pt-10">
      <ul className="rounded-start-1">
        <li className={styles.wraper}>
          <Link
            className="btn btn-icon btn-sm btn-info rounded-0"
            href="https://copygen-nextjs-rtl.vercel.app/"
            target="_blank"
          >
            <small>RTL</small>
          </Link>
          <div className={styles.title}>See RTL Demo</div>
        </li>
        <li className={styles.wraper}>
          <Link
            className="btn btn-icon btn-sm btn-warning rounded-0"
            href="https://copygen-nextjs14-dashboard.vercel.app"
            target="_blank"
          >
            <Icon icon="dashboard" className="icon" />
          </Link>
          <div className={styles.title}>Go to Dashboard</div>
        </li>
        <li className={styles.wraper}>
          <Link
            className="btn btn-icon btn-sm bg-body border-light border-start rounded-0"
            href="/landing"
            target="_blank"
          >
            <img src="/images/favicon.png" alt="Copygen" />
          </Link>
          <div className={styles.title}>Go to Intro Page</div>
        </li>
        <li className={styles.wraper}>
          <Link
            className="btn btn-icon btn-sm btn-success text-white rounded-0"
            target="_blank"
            href="#"
          >
            <Icon icon="cart" className="icon" />
          </Link>
          <div className={styles.title}>Purchase</div>
        </li>
      </ul>
    </div>
  );
}
