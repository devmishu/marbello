
export const getAllTiles = async (title_like = "") => {
    const res = await fetch(`https://merbelloapi.onrender.com/tiles?title_like=${title_like}`);
    return await res.json();
}