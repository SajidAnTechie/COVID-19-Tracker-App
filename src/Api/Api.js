import axios from "axios";

export const fetchdata = async () => {
  try {
    const response = await axios.get("https://covid19.mathdro.id/api");
    return response.data;
  } catch (error) {
    alert(error);
  }
};
export const filterByConfirmed = async () => {
  try {
    const { data } = await axios.get(
      "https://covid19.mathdro.id/api/confirmed"
    );
    return data.map(
      ({ countryRegion, confirmed, recovered, deaths, active }) => ({
        countryRegion: countryRegion,
        confirmed: confirmed,
        recovered: recovered,
        deaths: deaths,
        active: active,
      })
    );
  } catch (error) {
    alert(error);
  }
};
export const filterByCountry = async (countryName) => {
  try {
    const { data } = await axios.get(
      `https://covid19.mathdro.id/api/countries/${countryName}/confirmed`
    );
    return data.map(
      ({
        provinceState,
        countryRegion,
        confirmed,
        recovered,
        deaths,
        active,
      }) => ({
        provinceState: provinceState,
        countryRegion: countryRegion,
        confirmed: confirmed,
        recovered: recovered,
        deaths: deaths,
        active: active,
      })
    );
  } catch (error) {
    alert(error);
  }
};
