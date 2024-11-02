import toast from "react-hot-toast";

export async function sendDataToGoogleDoc(data: FormData) {
  fetch(
    "https://script.google.com/macros/s/AKfycbzvORhsYtQWCxy3bZunDbpynbk5vS8nlXKxIkbVd9j84clSZ6RoVdl4ZzqzhHd4wPx4HA/exec",
    {
      method: "POST",
      body: data,
    },
  ).then((res) => {
    if (!res.ok) {
      toast.error("Sorry something went wrong");
    }
  });
}