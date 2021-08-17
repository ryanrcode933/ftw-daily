import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import { FormattedMessage } from '../../util/reactIntl';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  NamedLink,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.module.css';
import image from './about-us-1056.jpeg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About JH Tech Marketplace',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>This printer is ready to get back to work.</h1>
          <img className={css.coverImage} src={image} alt="ready for work." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Did you know that Johns Hopkins departments are leasing printers which are going unused?</p>
            </div>

            <div className={css.contentMain}>
              <h2>
                All of us working here at Johns Hopkins know that it is a very large organization. Within our
                enterprise, there are many departments with underutilized technology assets.
                While at the same time, there are many departments looking to source similar items.
              </h2>

              <p>
                The JH Tech Marketplace is here to bring these departments together.
              </p>

              <h3 className={css.subtitle}>Does your department have unused technology assets?</h3>

              <p>
                JH Tech Marketplace offers you a landing page to list all of these items so that other departments can see they are available.
              </p>

              <h3 id="contact" className={css.subtitle}>
                Would you like to see what kind of technology items are available within Hopkins before looking to an outside vendor?
              </h3>
              <p>
                Browse the assets other departments have listed 
                at the
                <NamedLink name="LandingPage">
                  <FormattedMessage id="SectionAbout.newlisting"/>
                </NamedLink>
                first.
              </p>
              </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
