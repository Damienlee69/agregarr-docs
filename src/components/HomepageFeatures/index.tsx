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
        Create and manage Plex collections automatically from multiple sources including
        Trakt, IMDb, Letterboxd and MDBList.
      </>
    ),
  },
  {
    title: 'Grab Missing Items',
    icon: '',
    description: (
      <>
        Automatically
        monitor and download missing items from your collections, ensuring your
        library stays complete. Use either Radarr/Sonarr or Overseerr requests.
      </>
    ),
  },
  {
    title: 'Modern Web Interface',
    icon: '',
    description: (
      <>
        Clean, intuitive UI. Easily create,
        manage, and monitor all your collections from a single dashboard. Docker-ready
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
        <Heading as="h2" className={styles.featuresTitle}>
          Why Choose Agregarr?
        </Heading>
        <p className={styles.featuresSubtitle}>
          The easiest way to create and manage Plex Collections
        </p>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
