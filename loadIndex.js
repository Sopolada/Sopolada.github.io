fetch("content.json")
  .then(response => response.json())
  .then(files => {
    const container = document.getElementById("list");

    files.forEach(file => {
      const link = document.createElement("a");

      link.textContent = file;
      link.href = "/content/"+file+".pdf";

      container.appendChild(link);
      container.appendChild(document.createElement("br"));
    });
  });
