import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Automated Collection Management',
    icon: '',
    description: (
      <>
        Create and manage Plex collections from multiple sources including
        Trakt, IMDb, Letterboxd and MDBList.
      </>
    ),
  },
  {
    title: 'Grab Missing Items',
    icon: '',
    description: (
      <>
        Automatically download missing items from your collections, ensuring your
        library stays fresh. Use either Radarr/Sonarr or Overseerr requests.
      </>
    ),
  },
  {
    title: 'Modern Web Interface',
    icon: '',
    description: (
      <>
        Clean, intuitive UI. Easily create and manage all your collections in just a few clicks. Docker-ready
        for quick deployment on any platform.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureIcon}>{icon}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
