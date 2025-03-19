const URL = "/api/todos";

const getAPI = async () => {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching todos", error);
    return [];
  }
};

const postAPI = async (title) => {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    if (!response.ok) throw new Error("Failed to add todo");
    return await response.json();
  } catch (error) {
    console.error("Error adding todo :", error);
    return null;
  }
};

export { getAPI, postAPI };
