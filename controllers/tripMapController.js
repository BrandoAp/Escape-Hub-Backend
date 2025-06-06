import fetch from "node-fetch";

const URL = 'https://eu-central-1.hapio.net/v1/locations';

const getPlaces = async (req, res) => {
    const { name } = req.query;
    const apiKey = process.env.HAPIO_API_KEY;

    if(!name) {
        return res.status(400).json({ error: 'Name parameter is required' });
    }


    try{
        const response = await fetch(`${URL}?name[eq]=${encodeURIComponent(name)}`,{
            headers: {
                Authorization: `Bearer ${apiKey}`
            },
        });

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

export { getPlaces };