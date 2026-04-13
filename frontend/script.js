function sendAlert(type) {
  navigator.geolocation.getCurrentPosition(position => {

    const data = {
      type: type,
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    };

    fetch("http://localhost:5000/alert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(() => {
      // 👉 Redirect after success
      window.location.href = "success.html";
    })
    .catch(err => {
      console.error("Error:", err);
      alert("Failed to send alert");
    });

  });
}