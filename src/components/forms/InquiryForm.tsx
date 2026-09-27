"use client";

import { useState } from "react";

export function InquiryForm() {
  const [sent, setSent] = useState(false);
  if (sent) {
    return (
      <p className="form-success" role="status">
        Saved in the browser only. Connect email or a database before launch.
      </p>
    );
  }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <label>
        <span>Name</span>
        <input name="name" required />
      </label>
      <label>
        <span>Email</span>
        <input name="email" type="email" required />
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" rows={5} required />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}
