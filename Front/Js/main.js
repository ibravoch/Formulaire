const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  console.log("page chargée");

  $.querySelector("#contact-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const response = await axios.post("http://localhost:3001/send-email", {
      firstname: $.querySelector("#firstname").value,
      lastname: $.querySelector("#lastname").value,
      email: $.querySelector("#email").value,
      object: $.querySelector("#object").value,
      message: $.querySelector("#message").value,
    });
    console.log(response.data);
  });
});
