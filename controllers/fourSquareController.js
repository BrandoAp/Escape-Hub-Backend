import fetch from "node-fetch";

const URL = 'https://api.foursquare.com/v3/places/search';

const getFourSquareData = async (req, res) => {
    const { nameCity } = req.query;
    const apiKey = process.env.FOODS_PLACES_API_KEY;

    if (!nameCity) {
        return res.status(400).json({ error: 'Name city parameter is required' });
    }

    try{
        const response = await fetch(`${URL}?query=${encodeURIComponent(nameCity)}`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            return res.status(response.status).json({ error: errorData.message || 'Location not found' });
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching Foursquare data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export default getFourSquareData;