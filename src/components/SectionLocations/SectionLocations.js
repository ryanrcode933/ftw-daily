import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.module.css';

import baltimoreImage from './images/location_baltimore_map.jpg';
import floridaImage from './images/location_florida_map.jpg';
import dcImage from './images/location_dc_map.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Baltimore',
          baltimoreImage,
          '?address=Maryland%2C%20USA&bounds=39.447%2C-76.362%2C39.158%2C-76.801'
        )}
        {locationLink(
          'Florida',
          floridaImage,
          '?address=St.%20Petersburg%2C%20Florida%2C%20United%20States&bounds=27.910639933%2C-82.582464041%2C27.577110072%2C-82.808839707'
        )}
        {locationLink(
          'Washington DC',
          dcImage,
          '?address=Chevy%20Chase%2C%20Maryland%2C%20United%20States&bounds=39.011612977%2C-77.04670704%2C38.956765013%2C-77.112808993'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
