import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import { blogPostList } from "./blogData";

const BlogListPage = () => (
  <>
    <SEOHead
      title="Dental Care Blog – Expert Tips & Guides | Globodent Dental Spa®"
      description="Read expert dental care articles, treatment guides, and tips from Globodent Dental Spa® in Malviya Nagar, South Delhi. Stay informed about your oral health."
      canonical="/blog"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Globodent Dental Spa® Blog",
        "description": "Expert dental care articles and treatment guides from the best dental clinic in Malviya Nagar, South Delhi.",
        "url": "https://globodentdentalspa.com/blog",
        "publisher": {
          "@type": "Organization",
          "name": "Globodent Dental Spa®",
        },
      }}
    />
    <div className="pt-20">
      <section className="section-padding bg-card">
        <div className="container mx-auto text-center max-w-3xl">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Our Blog</p>
          <h1 className="text-3xl md:text-5xl font-heading mb-4">Dental Care Tips & Expert Guides</h1>
          <p className="text-muted-foreground text-lg">Stay informed about dental treatments, costs, and oral health tips from the experts at Globodent Dental Spa® in Malviya Nagar.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="grid gap-6">
            {blogPostList.map((post, i) => (
              <ScrollReveal key={post.slug}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="block p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-heading mb-2 group-hover:text-primary transition-colors">{post.h1}</h2>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                    Read Article <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  </>
);

export default BlogListPage;
