import { useState, FormEvent } from "react";
import SectionHeader from "../components/SectionHeader";
import { contactDetails } from "../data/content";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<FormState>;

const emptyForm: FormState = { name: "", email: "", subject: "", message: "" };

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.subject.trim()) errors.subject = "Subject is required.";
  if (!form.message.trim()) errors.message = "Message is required.";
  return errors;
}

const IconPhone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
    <path
      d="M5.5 4.5c.5 3 1.5 5.5 3.5 7.5s4.5 3 7.5 3.5l2-2a1 1 0 011.2-.1c1.2.7 2.5 1.2 3.8 1.5a1 1 0 01.7 1v3.6a1 1 0 01-1 1C9.6 21 3 14.4 3 4.5a1 1 0 011-1h3.6a1 1 0 011 .7c.3 1.3.8 2.6 1.5 3.8a1 1 0 01-.1 1.2L7.5 10"
      stroke="#2563eb"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const IconEmail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
    <rect x="2" y="4" width="20" height="16" rx="3" stroke="#2563eb" strokeWidth="1.8" />
    <path d="M2 7l10 7 10-7" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Focus first error field
      const firstKey = Object.keys(errs)[0] as keyof FormState;
      document.getElementById(`field-${firstKey}`)?.focus();
      return;
    }
    setSubmitted(true);
    setForm(emptyForm);
    setErrors({});
  };

  const inputBase =
    "w-full border rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white";

  return (
    <main id="main-content">
      {/* Page header */}
      <section
        aria-label="Page header"
        className="page-header-bg border-b border-slate-100"
      >
        <div className="container-main py-14 lg:py-20">
          <SectionHeader
            tag="Contact Us"
            title="Get in Touch"
            subtitle="For enquiries or general questions about the FootprintLK project."
            as="h1"
          />
        </div>
      </section>

      <section aria-label="Contact details and form" className="page-section bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact details */}
            <aside
              aria-label="Contact information"
              className="lg:col-span-2"
            >
              <h2 className="text-[0.95rem] font-bold text-slate-800 mb-5">
                Contact information
              </h2>

              <ul role="list" className="flex flex-col gap-4 mb-8">
                {contactDetails.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5"
                  >
                    <div className="mt-0.5">
                      {item.type === "phone" ? <IconPhone /> : <IconEmail />}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-0.5">
                        {item.label}
                      </p>
                      {item.type === "email" ? (
                        <a
                          href={`mailto:${item.value}`}
                          className="text-sm text-blue-700 hover:text-blue-800 transition-colors break-all"
                          aria-label={`Email: ${item.value}`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <a
                          href={`tel:${item.value.replace(/\s/g, "")}`}
                          className="text-sm text-slate-800 hover:text-blue-700 transition-colors"
                          aria-label={`Phone: ${item.value}`}
                        >
                          {item.value}
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Privacy notice */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3.5">
                <p className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1.5">
                  Privacy Notice
                </p>
                <p className="text-xs text-amber-700 leading-relaxed">
                  Do not submit passwords, authentication credentials, or sensitive
                  personal data via this form. This form is for general and research
                  enquiries only.
                </p>
              </div>
            </aside>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <h2 className="text-[0.95rem] font-bold text-slate-800 mb-5">
                Send a message
              </h2>

              {submitted ? (
                <div
                  role="alert"
                  aria-live="polite"
                  className="flex flex-col items-start gap-4 bg-green-50 border border-green-200 rounded-xl px-6 py-8"
                >
                  <div
                    aria-hidden="true"
                    className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12l5 5L20 7"
                        stroke="#15803d"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-green-800 mb-1">
                      Message received
                    </h3>
                    <p className="text-sm text-green-700 leading-relaxed">
                      Thank you for reaching out. This form is for demonstration
                      purposes. In a production environment, your message would be
                      delivered to the research team.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary mt-2 text-green-700 border-green-400 hover:bg-green-100"
                    aria-label="Send another message"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  noValidate
                  onSubmit={handleSubmit}
                  aria-label="Contact form"
                  className="flex flex-col gap-5"
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="field-name"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Full Name <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      id="field-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      aria-required="true"
                      aria-describedby={errors.name ? "err-name" : undefined}
                      aria-invalid={!!errors.name}
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`${inputBase} ${errors.name ? "border-red-400 focus:ring-red-400" : "border-slate-300"
                        }`}
                    />
                    {errors.name && (
                      <p id="err-name" role="alert" className="text-xs text-red-600 mt-1.5">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="field-email"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Email Address <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      id="field-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      aria-required="true"
                      aria-describedby={errors.email ? "err-email" : undefined}
                      aria-invalid={!!errors.email}
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`${inputBase} ${errors.email ? "border-red-400 focus:ring-red-400" : "border-slate-300"
                        }`}
                    />
                    {errors.email && (
                      <p id="err-email" role="alert" className="text-xs text-red-600 mt-1.5">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="field-subject"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Subject <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      id="field-subject"
                      name="subject"
                      type="text"
                      required
                      aria-required="true"
                      aria-describedby={errors.subject ? "err-subject" : undefined}
                      aria-invalid={!!errors.subject}
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Research enquiry / Collaboration / Other"
                      className={`${inputBase} ${errors.subject ? "border-red-400 focus:ring-red-400" : "border-slate-300"
                        }`}
                    />
                    {errors.subject && (
                      <p id="err-subject" role="alert" className="text-xs text-red-600 mt-1.5">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="field-message"
                      className="block text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Message <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="field-message"
                      name="message"
                      rows={5}
                      required
                      aria-required="true"
                      aria-describedby={errors.message ? "err-message" : undefined}
                      aria-invalid={!!errors.message}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Your message to the research team..."
                      className={`${inputBase} resize-y min-h-[120px] ${errors.message ? "border-red-400 focus:ring-red-400" : "border-slate-300"
                        }`}
                    />
                    {errors.message && (
                      <p id="err-message" role="alert" className="text-xs text-red-600 mt-1.5">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
                    <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                      Fields marked with <span aria-hidden="true" className="text-red-500 font-semibold">*</span> are required. This form is for general enquiries only.
                    </p>
                    <button
                      type="submit"
                      className="btn-primary flex-shrink-0"
                      aria-label="Submit contact form"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
