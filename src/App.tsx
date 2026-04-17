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
import ScrollToTop from "./components/ScrollToTop";

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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <FloatingButtons />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
