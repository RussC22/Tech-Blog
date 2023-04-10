const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value.trim();

  const content = document.querySelector("#post-text").value.trim();

  if (title && content) {
    const response = await fetch(`/api/post/`, {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create post");
    }
  }
};

document.querySelector("#postForm").addEventListener("submit", newFormHandler);
