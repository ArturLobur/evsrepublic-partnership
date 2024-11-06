import toast from "react-hot-toast";

export async function sendDataToGoogleDoc(data: FormData) {
  fetch(
    "https://script.google.com/macros/s/AKfycbz346ioacmnG7H9NyLcM4HNlji8bF4IUEvwgD5sIXGccFYZg8RtITFfOhwinPD1KWMgnQ/exec",
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