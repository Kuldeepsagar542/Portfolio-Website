document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("downloadBtn");

  btn.addEventListener("click", function () {
    // File ka URL
    const fileUrl = "assets/resume.pdf";   // apni file ka path yaha likho
    const fileName = "My-Resume.pdf";      // download hone ke baad file ka naam

    // Blob fetch karke force download karte hain
    fetch(fileUrl)
      .then(res => res.blob())
      .then(blob => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(err => console.error("Download failed:", err));
  });
});
