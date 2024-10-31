import toast from "react-hot-toast";

export async function sendDataToGoogleDoc(data: FormData) {
  fetch(
    "https://script.google.com/macros/s/AKfycbz-NW064vhgsnX9Y4mW35qdUa8MCJRkFbO0phZYS2x3NLt4oGucFpNkmnol001R1-YFEw/exec",
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