import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Smart Hiring, Exceptional Results!',
    Svg: require('@site/static/img/ai.svg').default,
    description: (
      <>
        Hiring with our AI powered onboarding platform, featuring automated resume screening, pre-employment
        tests, and online interviews for faster, smarter and seamless candidate assessment and recruitment.
      </>
    ),
  },
  {
    title: 'Assess Like a Pro, No Guesswork!',
    Svg: require('@site/static/img/office.svg').default,
    description: (
      <>
        Unlock precision with AI powered tools like job assessment tests and aptitude tests for placement. Gain 
        data driven insights into candidate skills for smarter and faster hiring decisions. 
      </>
    ),
  },
  {
    title: 'Smooth Sailing Through Hiring!',
    Svg: require('@site/static/img/hiring.svg').default,
    description: (
      <>
        Streamline recruitment with our AI-powered onboarding platform, featuring automated resume screening and
        pre-employment tests for smarter, faster, and hassle-free hiring at every step.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
