import toast from "react-hot-toast";

export async function sendDataToGoogleDoc(data: FormData) {
  fetch(
    "https://script.google.com/macros/s/AKfycbxatqUhiA0SzdDiThomScNsnDD2HhZK0DlKBKGHCIk_4syC6iJ683CjYsNtAPDox8qySw/exec",
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