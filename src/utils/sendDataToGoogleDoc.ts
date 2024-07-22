import toast from "react-hot-toast";

export async function sendDataToGoogleDoc(data: FormData) {
  fetch(
    "https://script.google.com/macros/s/AKfycbyO5ehQNOTbe4tCBe1bRjuWiNJuF6RqNszJtHFIejmRGTzhl_JFJTTvmxphSEEwaTteNg/exec",
    {
      method: "POST",
      body: data,
    },
  ).then((res) =>
    res.ok
      ? toast.success("We will contact with you")
      : toast.error("Sorry something went wrong"),
  );
}