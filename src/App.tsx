import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import DoctorsPage from "./pages/DoctorsPage";
import GalleryPage from "./pages/GalleryPage";
import ReviewsPage from "./pages/ReviewsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/services/ServicePage";
import BlogListPage from "./pages/blog/BlogListPage";
import BlogPage from "./pages/blog/BlogPage";
import BestDentalClinic from "./pages/landing/BestDentalClinic";
import DentalClinicNearMe from "./pages/landing/DentalClinicNearMe";
import BestDentistMalviyaNagar from "./pages/landing/BestDentistMalviyaNagar";
import DentistNearMeMalviyaNagar from "./pages/landing/DentistNearMeMalviyaNagar";
import PainlessTreatment from "./pages/widgets/PainlessTreatment";
import AdvancedTechnology from "./pages/widgets/AdvancedTechnology";
import ExperiencedDentist from "./pages/widgets/ExperiencedDentist";
import AffordableTreatment from "./pages/widgets/AffordableTreatment";
import TrustedClinic from "./pages/widgets/TrustedClinic";
import DrAbrarHussain from "./pages/doctors/DrAbrarHussain";
import DrKamalAggarwal from "./pages/doctors/DrKamalAggarwal";
import AboutAryanSrivastav from "./pages/AboutAryanSrivastav";
import ScrollToTop from "./components/ScrollToTop";
import PreFooterCTA from "./components/PreFooterCTA";
import BestServicePage from "./pages/best/BestServicePage";
import { bestServices } from "./pages/best/bestServiceData";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServicePage />} />
              <Route path="/doctors" element={<DoctorsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogListPage />} />
              <Route path="/blog/:slug" element={<BlogPage />} />
              <Route path="/best-dental-clinic-in-malviya-nagar" element={<BestDentalClinic />} />
              <Route path="/dental-clinic-near-me-malviya-nagar" element={<DentalClinicNearMe />} />
              <Route path="/best-dentist-in-malviya-nagar" element={<BestDentistMalviyaNagar />} />
              <Route path="/dentist-near-me-in-malviya-nagar" element={<DentistNearMeMalviyaNagar />} />
              <Route path="/painless-dental-treatment-malviya-nagar" element={<PainlessTreatment />} />
              <Route path="/advanced-dental-technology-malviya-nagar" element={<AdvancedTechnology />} />
              <Route path="/experienced-dentist-malviya-nagar" element={<ExperiencedDentist />} />
              <Route path="/affordable-dental-treatment-malviya-nagar" element={<AffordableTreatment />} />
              <Route path="/trusted-dental-clinic-south-delhi" element={<TrustedClinic />} />
              <Route path="/doctors/dr-abrar-hussain-orthodontist-malviya-nagar" element={<DrAbrarHussain />} />
              <Route path="/doctors/dr-kamal-aggarwal-dental-implant-specialist-malviya-nagar" element={<DrKamalAggarwal />} />
              <Route path="/about-aryan-srivastav" element={<AboutAryanSrivastav />} />
              {bestServices.map((s) => (
                <Route key={s.slug} path={`/${s.slug}`} element={<BestServicePage />} />
              ))}
              <Route path="*" element={<NotFound />} />

            </Routes>
          </main>
          <PreFooterCTA />
          <Footer />
          <FloatingButtons />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
