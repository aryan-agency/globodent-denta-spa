import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Phone, MessageCircle, Calendar, Clock } from "lucide-react";
import { WHATSAPP_LINK, PHONE_LINK, PHONE_NUMBER } from "@/lib/constants";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { BlogPost } from "./blogData";

const BlogPostPage = ({ data }: { data: BlogPost }) => (
  <>
    <SEOHead
      title={data.title}
      description={data.metaDescription}
      canonical={`/blog/${data.slug}`}
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": data.h1,
        "description": data.metaDescription,
        "datePublished": data.date,
        "author": {
          "@type": "Organization",
          "name": "Globodent Dental Spa®",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Globodent Dental Spa®",
          "url": "https://globodentdentalspa.com",
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://globodentdentalspa.com/blog/${data.slug}`,
        },
      }}
    />
    <div className="pt-20">
      {/* Top CTA Bar */}
      <div className="bg-primary">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-4 py-3 px-4">
          <a href={PHONE_LINK} className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:bg-primary-foreground/20 transition-colors">
            <Phone className="h-4 w-4" /> Call {PHONE_NUMBER}
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
            <MessageCircle className="h-4 w-4" /> WhatsApp Us
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4 leading-tight">{data.h1}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
            <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" /> {new Date(data.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {data.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="section-padding">
        <div className="container mx-auto max-w-3xl prose-container">
          {data.content.map((block, i) => {
            switch (block.type) {
              case "h2":
                return <h2 key={i} className="text-2xl md:text-3xl font-heading mt-10 mb-4">{block.text}</h2>;
              case "h3":
                return <h3 key={i} className="text-xl font-heading mt-8 mb-3">{block.text}</h3>;
              case "paragraph":
                return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{block.text}</p>;
              case "list":
                return (
                  <ul key={i} className="space-y-2 mb-6 ml-1">
                    {block.items?.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-muted-foreground">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              case "cta":
                return (
                  <div key={i} className="my-8 p-6 rounded-2xl bg-card border border-border text-center">
                    <p className="font-heading text-lg mb-4">{block.text}</p>
                    <div className="flex flex-wrap justify-center gap-3">
                      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
                        <MessageCircle className="h-4 w-4" /> WhatsApp Us
                      </a>
                      <a href={PHONE_LINK} className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
                        <Phone className="h-4 w-4" /> Call Now
                      </a>
                    </div>
                  </div>
                );
              default:
                return null;
            }
          })}

          {/* Inline CTA */}
          <div className="my-10 p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center">
            <p className="font-heading text-lg mb-2">Ready to Book Your Appointment?</p>
            <p className="text-muted-foreground text-sm mb-4">Visit Globodent Dental Spa® in Malviya Nagar for expert dental care.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
                <MessageCircle className="h-4 w-4" /> Book on WhatsApp
              </a>
              <a href={PHONE_LINK} className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
                <Phone className="h-4 w-4" /> Call {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* FAQs */}
      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-heading mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {data.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Services */}
      {data.relatedServices.length > 0 && (
        <section className="section-padding">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl font-heading mb-6 text-center">Related Services</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {data.relatedServices.map(s => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-card border border-border text-sm font-medium hover:border-primary hover:text-primary transition-colors">
                  {s.name} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Blogs */}
      {data.relatedBlogs.length > 0 && (
        <section className="section-padding bg-card">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl font-heading mb-6 text-center">Read More Articles</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {data.relatedBlogs.map(b => (
                <Link key={b.slug} to={`/blog/${b.slug}`} className="p-4 rounded-xl bg-background border border-border hover:border-primary transition-colors group">
                  <p className="font-medium group-hover:text-primary transition-colors">{b.title}</p>
                  <span className="text-sm text-muted-foreground inline-flex items-center gap-1 mt-2">Read article <ArrowRight className="h-3 w-3" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-heading text-primary-foreground mb-4">Book Your Appointment Today</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">Visit Globodent Dental Spa® in Malviya Nagar for world-class dental care in a comfortable, premium environment.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              <MessageCircle className="h-5 w-5" /> WhatsApp Us
            </a>
            <a href={PHONE_LINK} className="inline-block bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/20 transition-colors">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default BlogPostPage;
