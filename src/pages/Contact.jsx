import { useState } from "react";
import { Mail, Clock3, Package } from "lucide-react";
import { Button, Head } from "../components/UI";
export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="pageHeader">
        <Head
          eyebrow="GET IN TOUCH"
          title="We'd Love to Hear From You"
          sub="Questions, custom orders, or just want to say hi? Send us a message and we'll reply within 24 hours."
        />
      </section>
      <section className="contactMain">
        <form
          className="contactForm"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="two">
            <Field l="First Name" p="Jane" />
            <Field l="Last Name" p="Doe" />
          </div>
          <Field l="Email" p="you@example.com" type="email" />
          <Field l="Subject" p="How can we help?" />
          <label>
            Message
            <textarea
              required
              placeholder="Tell us what you're looking for..."
            />
          </label>
          <button className="btn" type="submit">
            {sent ? "Message Sent ✓" : "Send Message"}
          </button>
          {sent && (
            <div className="success light">
              Thanks! We'll get back to you within 24 hours.
            </div>
          )}
        </form>
        <div className="contactInfo">
          <Info
            icon={<Mail />}
            title="Email Us"
            detail="hello@definedartgallery.com"
          />
          <Info title="Follow Along" detail="@definedartgallery" />
          <Info
            icon={<Clock3 />}
            title="Studio Hours"
            detail="Mon–Fri, 9am – 5pm"
          />
          <Info
            icon={<Package />}
            title="Custom Orders"
            detail="We love bespoke pieces — just ask!"
          />
        </div>
      </section>
    </>
  );
}
function Field({ l, p, type = "text" }) {
  return (
    <label>
      {l}
      <input required type={type} placeholder={p} />
    </label>
  );
}
function Info({ icon, title, detail }) {
  return (
    <div className="info">
      <span>{icon}</span>
      <div>
        <b>{title}</b>
        <p>{detail}</p>
      </div>
    </div>
  );
}
