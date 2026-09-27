import type { Metadata } from "next";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="contact-page">
      <h1>Contact {site.name}</h1>
      <p className="lede">
        {site.email} · {site.phone}
      </p>
      <InquiryForm />
    </section>
  );
}
