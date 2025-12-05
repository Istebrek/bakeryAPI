const initApp = async() => {
    const url = "https://localhost:5001/api/customers";

    try {
        const response = await fetch(url);
        if (response.ok) {
            const result = await response.json();
            console.log(result);
        }
    } catch (error) {
        console.log("Det gick fel", error);
    }
}

document.addEventListener("DOMContentLoaded", initApp);