import toast from "react-hot-toast";

export async function sendDataToGoogleDoc(data: FormData) {
  fetch(
    "https://script.google.com/macros/s/AKfycbxfbgNH8qondYzdrZxcz2wJFw2jlaaQL-GjCPvzragQcDf1DfY_6wsvzeJ4_o3TrFyY/exec",
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