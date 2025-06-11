import fetch from "node-fetch";

const URL_FOURSQUARE= 'https://api.foursquare.com/v3/places/search';
const URL_COORDINATES = 'https://nominatim.openstreetmap.org/search'

const getFourSquareData = async (req, res) => {
    const { nameCity } = req.query;
    const apiKey = process.env.FOODS_PLACES_API_KEY;

    if (!nameCity) {
        return res.status(400).json({ error: 'Name city parameter is required' });
    }

    try{
        const responseCoordinates = await fetch(`${URL_COORDINATES}?q=${encodeURIComponent(nameCity)}&format=json&limit=1`);
        const dataCoordinates = await responseCoordinates.json();

        if (!dataCoordinates || dataCoordinates.length === 0) {
            return res.status(404).json({ error: 'Location not found' });
        }

        const { lat, lon } = dataCoordinates[0];

        const response = await fetch(`${URL_FOURSQUARE}?query=food&ll=${lat},${lon}`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `${apiKey}`,
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            return res.status(response.status).json({ error: errorData.message || 'Foursquare request failed' });
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching Foursquare data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export { getFourSquareData };