function goToType() {
  window.location.href = "type.html";
}

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
    .then(() => {
      window.location.href = "success.html";
    });
  });
}