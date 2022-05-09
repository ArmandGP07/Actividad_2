export const fetchHelloWorld = async () => {
    const response = await fetch("http://localhost:9000");
    return await response.text();
};