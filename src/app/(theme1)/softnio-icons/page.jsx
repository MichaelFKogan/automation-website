'use client';
import { useState } from 'react';
import IconCard from './IconCard';
import iconData from './iconData.json';
import parse from 'html-react-parser';
import styles from './iconcard.module.css';
import Icon from '@/app/ui/Icon';

export default function AllSoftnioIcons() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(iconData.iconData);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    const results = iconData.iconData.filter(str =>
      str.toLowerCase().includes(event.target.value.toLowerCase()),
    );
    setSearchResults(results);
  };

  return (
    <>
      <div className="nk-header" />
      <div className="container">
        <div className={styles.iconsHeadSection}>
          <h2 className="nk-block-title fw-normal">Nioicon Font</h2>
          <div className="nk-block-des">
            <p className="lead">
              <strong>Nioicon</strong> is hand-crafted and beautiful icon set
              which is designed by <strong>Softnio</strong> Team. <br />
              We inspired from google icons and carefuly designed. It&apos;s
              have over than {iconData.iconData?.length} icons that helps much
              in your project.
            </p>
            <div className={styles.box}>
              <div className={styles.boxLeft}>
                <p>
                  <strong>Usage: </strong> <br />
                  Import icon component:{' '}
                  {parse(
                    `<code className="code-tag">import Icon from '../components/Icon'</code>`,
                  )}
                  . <br />
                  Use component in template:{' '}
                  <code className="code-tag">{`<Icon icon='covid'/>`}</code>
                </p>
              </div>
              <div className={styles.boxRight}>
                <div className={styles.form}>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search..."
                    className="form-control form-control-lg"
                  />
                  <button className="text-heading">
                    <Icon icon="search" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {searchResults.length > 0 ? (
          <div className="row">
            {searchResults.map((item, index) => (
              <div className="col-lg-2" key={index}>
                <IconCard icon={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.nothingFound}>😞 Whoops, nothing found.</div>
        )}
      </div>
    </>
  );
}
