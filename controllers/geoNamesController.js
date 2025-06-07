import fetch from "node-fetch";

const URL = 'https://secure.geonames.org/searchJSON?';

const getPlaces = async (req, res) => {
    const { name } = req.query;
    const username = process.env.GEONAMES_USERNAME;

    if(!name) {
        return res.status(400).json({ error: 'Name parameter is required' });
    }

    try{
        const response = await fetch(`${URL}q=${encodeURIComponent(name)}&username=${username}`);

        const data = await response.json();

        if(!response.ok){
            return res.status(404).json({ error: data.message || 'Location not found' });
        }
        res.json(data);
    
    } catch (error) {
        console.error('Error fetching location data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


export { getPlaces, };