export async function sendContactForm(
  formData: Record<string, FormDataEntryValue | null>,
) {
  formData["access_key"] = import.meta.env.CONTACT_ACCESS_KEY;

  await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  });
}
