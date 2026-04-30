
export const getFeaturedTiles = async () => {
    const res = await fetch('https://merbelloapi.onrender.com/tiles?featured=true');
    return await res.json();
}