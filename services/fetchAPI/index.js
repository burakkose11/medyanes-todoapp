const URL = "/api/todos";

const getAPI = async () => {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }
    return await response.json();
  } catch (error) {
    // console.error("Error fetching todos", error);
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
    // console.error("Error adding todo :", error);
    return null;
  }
};

const deleteAPI = async (id) => {
  try {
    const response = await fetch(`/api/todos/${id}`, { method: "DELETE" });

    if (!response.ok) {
      throw new Error("Failed to delete todo");
    }
    return true;
  } catch (error) {
    // console.error("Error deleting todo:", error);
    return false;
  }
};

const updateAPI = async (id, updates) => {
  try {
    const response = await fetch(`/api/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error("Failed to update todo");
    }

    return result;
  } catch (error) {
    console.error("Error updating todo:", error);
    return null;
  }
};

export { getAPI, postAPI, deleteAPI, updateAPI };
