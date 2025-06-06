import fetch from "node-fetch";

const URL = "https://api.openweathermap.org/data/2.5/weather";

const getWeatherCity = async (req, res) => {
    const { city } = req.query;
    const apiKey = process.env.OPEN_WEATHER_API_KEY;

    if(!city) {
        return res.status(400).json({ error: "City name is required" });
    }

    try{
        const url = `${URL}?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=es`;
        const response = await fetch(url);

        if (!response.ok) {
            const error = await response.json();
            return res.status(404).json({ error: "City not found" });
        }

        const data = await response.json();
        res.json(data);

    } catch (error) {
        console.error("Error fetching weather data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export { getWeatherCity };