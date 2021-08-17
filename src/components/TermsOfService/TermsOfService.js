import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './TermsOfService.module.css';

const TermsOfService = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: August 17, 2021</p>

      <p>
        Thank you for using JH Tech Marketplace! The Golden Rule is important here. Please adhere to it.
      </p>

      <h2>1 User Registration</h2>
      <p>
      You may be required to register with the Site. You agree to keep your password confidential
      and will be responsible for all use of your account and password.
      </p>

      <h2>2 Prohibited Activities</h2>
      <p>
      You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.

As a user of the Site, you agree not to:

systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.
make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.
use a buying agent or purchasing agent to make purchases on the Site.
use the Site to advertise or offer to sell goods and services.
circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.
engage in unauthorized framing of or linking to the Site.
trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords;
make improper use of our support services or submit false reports of abuse or misconduct.
engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.
interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.
attempt to impersonate another user or person or use the username of another user.
sell or otherwise transfer your profile.
use any information obtained from the Site in order to harass, abuse, or harm another person.
use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise.
decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site.
attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site.
harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you.
delete the copyright or other proprietary rights notice from any Content.
copy or adapt the Site’s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.
upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.
upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (“gifs”), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as “spyware” or “passive collection mechanisms” or “pcms”).
except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Site, or using or launching any unauthorized script or other software.
disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.
use the Site in a manner inconsistent with any applicable laws or regulations.
      </p>

      <h2>3 User Generated Contributions</h2>
      <p>
      The Site may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, “Contributions”).

Contributions may be viewable by other users of the Site and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available any Contributions, you thereby represent and warrant that:

the creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.
you are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Site, and other users of the Site to use your Contributions in any manner contemplated by the Site and these Terms of Service.
you have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Site and these Terms of Service.
your Contributions are not false, inaccurate, or misleading.
your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.
your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).
your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.
your Contributions do not advocate the violent overthrow of any government or incite, encourage, or threaten physical harm against another.
your Contributions do not violate any applicable law, regulation, or rule.
your Contributions do not violate the privacy or publicity rights of any third party.
your Contributions do not contain any material that solicits personal information from anyone under the age of 18 or exploits people under the age of 18 in a sexual or violent manner.
your Contributions do not violate any federal or state law concerning child pornography, or otherwise intended to protect the health or well-being of minors;
your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.
your Contributions do not otherwise violate, or link to material that violates, any provision of these Terms of Service, or any applicable law or regulation.
Any use of the Site in violation of the foregoing violates these Terms of Service and may result in, among other things, termination or suspension of your rights to use the Site.


      </p>
    </div>
  );
};

TermsOfService.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

TermsOfService.propTypes = {
  rootClassName: string,
  className: string,
};

export default TermsOfService;
