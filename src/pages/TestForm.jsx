import { SubmitToGoogleSheet } from "../utils/SubmitToGoogleSheet";

function TestForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      Name: e.target.name.value,
      Email: e.target.email.value,
      Message: e.target.message.value,
      Date: new Date().toLocaleString(),
    };

    try {
      const res = await SubmitToGoogleSheet(data);
      alert("Submitted: " + res);
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" required />
      <input name="email" placeholder="Email" required />
      <input name="message" placeholder="Message" required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TestForm;
