import toast from "react-hot-toast";

export async function sendDataToGoogleDoc(data: FormData) {
  fetch(
    "https://script.google.com/macros/s/AKfycbzvDkXn_d-Fph66JLYgbQfudJDMMzwhVkwV66G7-qkH2Ri0mvGAohJlTQnFeviBrmExfA/exec",
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