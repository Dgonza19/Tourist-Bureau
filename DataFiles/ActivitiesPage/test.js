document.addEventListener("DOMContentLoaded", function () {
  const activityCategory = document.getElementById("activityCategory");
  const activityName = document.getElementById("activityName");
  const activityDetails = document.getElementById("activityDetails");
  const activityId = document.getElementById("activityId");
  const activityNameDisplay = document.getElementById("activityNameDisplay");
  const activityDescription = document.getElementById("activityDescription");
  const activityLocation = document.getElementById("activityLocation");
  const activityPrice = document.getElementById("activityPrice");
  const purchaseForm = document.getElementById("purchaseForm");
  const purchaseMessage = document.getElementById("purchaseMessage");

  activityCategory.addEventListener("change", function () {
    activityName.disabled = false;
    activityName.innerHTML = '<option value="" disabled selected>Select one</option>';
    activityDetails.style.display = "none";
    // Populate the activityName dropdown based on the selected category (You would need to fetch this data from a server in a real application).
    // For this example, let's assume a hardcoded list.
    if (activityCategory.value === "adventures") {
      addActivityOptions(["Adventure 1", "Adventure 2", "Adventure 3"]);
    } else if (activityCategory.value === "museums") {
      addActivityOptions(["Museum 1", "Museum 2", "Museum 3"]);
    } else if (activityCategory.value === "wineTastings") {
      addActivityOptions(["Wine Tasting 1", "Wine Tasting 2", "Wine Tasting 3"]);
    }
  });

  activityName.addEventListener("change", function () {
    if (activityName.value) {
      // Display activity details based on the selected activity (You would need to fetch this data from a server in a real application).
      // For this example, let's assume hardcoded details.
      displayActivityDetails(activityCategory.value, activityName.value);
    }
  });

  purchaseForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // In a real application, you would send the form data to a server for payment processing.
    const numTickets = document.getElementById("numTickets").value;
    const creditCard = document.getElementById("creditCard").value;
    const email = document.getElementById("email").value;
    const activity = activityName.value;
    const price = activityPrice.textContent;

    // Display a purchase message (simulated)
    purchaseMessage.innerHTML = `Your credit card has been charged $${price} for ${numTickets} to ${activity}. A confirmation email has been sent to ${email}.`;
    purchaseMessage.style.display = "block";
  });

  function addActivityOptions(activityList) {
    activityList.forEach((activity) => {
      const option = document.createElement("option");
      option.value = activity;
      option.textContent = activity;
      activityName.appendChild(option);
    });
  }

  function displayActivityDetails(category, name) {
    // Simulated activity details (You would fetch this from a server in a real application).
    let details = {};
    if (category === "adventures") {
      details = {
        id: "001",
        name: name,
        description: "Exciting adventure in the local area.",
        location: "Local Area",
        price: "50.00",
      };
    } else if (category === "museums") {
      details = {
        id: "002",
        name: name,
        description: "Explore the history and culture of the area.",
        location: "Local Museum",
        price: "20.00",
      };
    } else if (category === "wineTastings") {
      details = {
        id: "003",
        name: name,
        description: "Taste the finest wines in the region.",
        location: "Local Winery",
        price: "30.00",
      };
    }

    activityDetails.style.display = "block";
    activityId.textContent = details.id;
    activityNameDisplay.textContent = details.name;
    activityDescription.textContent = details.description;
    activityLocation.textContent = details.location;
    activityPrice.textContent = details.price;
  }
});
