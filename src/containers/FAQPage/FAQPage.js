import React from 'react'
import {StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';

import css from './FAQPage.module.css';

const FAQPage = () => {
  // prettier-ignore
  return(
    <StaticPage
      title= "Frequently Asked Questions"
      schema={{
        "@context": "http://schema.org",
        "@type": "FAQPage",
        "description": "Frequently asked questions in JH Tech Marketplace.",
        "name": "Frequently Asked Questions",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "1. How should our departments coordinate a transaction?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Answer: Once you have found a listing which matches your needs, contact the listing department and set up a preferred communication channel. All transactions should be handled through sharing of internal billing information."
            }
          }
        ]
      }}
      >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
          </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.mainWrapper}>
          <h1>Frequently Asked Questions</h1>

          <div>
            <h3>1. How should our departments coordinate a transaction?</h3>
            <p>Once you have found a listing which matches your needs, contact the listing department and set up a preferred communication channel. All transactions should be handled through sharing of internall billing information. </p>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
            <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default FAQPage;
