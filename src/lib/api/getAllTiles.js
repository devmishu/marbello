
export const getAllTiles = async () => {
    const res = await fetch('https://merbelloapi.onrender.com/tiles');
    return await res.json();
}