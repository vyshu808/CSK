export default async function handler(req, res) {
    try {
        const cskData = {
            price: 125,  // Replace with actual data (from database, etc.)
            marketCap: 3750000000,
            faceValue: 10,
            weekHigh: 140,
            weekLow: 95,
            //... add all the fields you need
        };

        res.status(200).json(cskData);
    } catch (error) {
        console.error("Error fetching CSK data:", error);
        res.status(500).json({ error: "Failed to fetch CSK data" });
    }
}