
export const getTileById = async (id) => {
    const res = await fetch(`https://merbelloapi.onrender.com/tiles/${id}`);
    return await res.json();
}