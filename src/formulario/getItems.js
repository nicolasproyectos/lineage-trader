
export const getItems = async(radio) => {
    const datos = await fetch(`http://localhost:4000/${radio}s`, { method: "GET" });
    const respuesta = await datos.json();
    return respuesta;
}
