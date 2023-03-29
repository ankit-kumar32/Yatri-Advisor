import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'X-RapidAPI-Key': '0980f56838msh6df19bc7b8448bcp18e6b6jsn8086c2b958da',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });
        return data?.filter((place) => (place.name && place.num_reviews > 0));
    }
    catch (error) {
        console.error(error);
    }
};

export const getWeatherData = async (lat, lng) => {
    try {
        const { data } = await axios.get(`https://open-weather13.p.rapidapi.com/city/latlon/30.438/-89.1028`, {
            // params: {
            //     lat: lat,
            //     lon: lng
            // },
            headers: {
                'X-RapidAPI-Key': '2a959121abmsh0cd5f299d988fc5p1f4a70jsna2c65e79b961',
    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com' 
            }
        });
        return data;
    }
    catch (error) {
        console.error(error);
    }

};