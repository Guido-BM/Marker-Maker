const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      markers: [],
      selectedMarker: null,
    },
    actions: {},
  };
};

export default getState;
