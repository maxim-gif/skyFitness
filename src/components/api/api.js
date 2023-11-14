 
const dataUrl = "https://skyfitness-f3ebe-default-rtdb.europe-west1.firebasedatabase.app/courses.json"

export async function getData() {
    const response = await fetch(dataUrl);
    const data = await response.json();
    return data;
  }