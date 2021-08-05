import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
const defaultLocations = [
  {
    id: 'default-Maryland',
    predictionPlace: {
      address: 'Maryland, USA',
      bounds: new LatLngBounds(new LatLng(39.447, -76.362), new LatLng(39.158, -76.801)),
    },
  },
  {
    id: 'default-Florida',
    predictionPlace: {
      address: 'Florida, USA',
      bounds: new LatLngBounds(new LatLng(27.910,-82.582), new LatLng(27.577, -82.808)),
    },
  },
  {
    id: 'default-Washington_DC',
    predictionPlace: {
      address: 'Washington DC, USA',
      bounds: new LatLngBounds(new LatLng(38.995, -76.909), new LatLng(38.791, -77.119)),
    },
  },
  /*{
    id: 'default-oulu',
    predictionPlace: {
      address: 'Oulu, Finland',
      bounds: new LatLngBounds(new LatLng(65.56434, 26.77069), new LatLng(64.8443, 24.11494)),
    },
  },*/
  /*{
    id: 'default-ruka',
    predictionPlace: {
      address: 'Ruka, Finland',
      bounds: new LatLngBounds(new LatLng(66.16997, 29.16773), new LatLng(66.16095, 29.13572)),
    },
  },*/
];
export default defaultLocations;
