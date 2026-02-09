import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    type: 'image',
    url: '/attached_assets/IMG-20241017-WA0019_1768212799106.jpg',
    alt: 'Testimonial Image 1'
  },
  {
    type: 'image',
    url: '/attached_assets/IMG-20241017-WA0027_1768212799107.jpg',
    alt: 'Testimonial Image 2'
  },
  {
    type: 'image',
    url: '/attached_assets/IMG-20241111-WA0004_1768212799108.jpg',
    alt: 'Testimonial Image 3'
  },
  {
    type: 'image',
    url: '/attached_assets/IMG20241029102602_1768212799108.jpg',
    alt: 'Testimonial Image 4'
  },
  {
    type: 'image',
    url: '/attached_assets/shared_image_(15)_1768213883273.jfif',
    alt: 'Testimonial Image 5'
  },
  {
    type: 'image',
    url: '/attached_assets/shared_image_(14)_1768213883274.jfif',
    alt: 'Testimonial Image 6'
  },
  {
    type: 'image',
    url: '/attached_assets/shared_image_(13)_1768213883274.jfif',
    alt: 'Testimonial Image 7'
  },
  {
    type: 'image',
    url: '/attached_assets/shared_image_(37)_1768284257273.jfif',
    alt: 'Testimonial Image 8'
  },
  {
    type: 'image',
    url: '/attached_assets/shared_image_(33)_1768284257273.jfif',
    alt: 'Testimonial Image 9'
  },
  {
    type: 'image',
    url: '/attached_assets/shared_image_(32)_1768284257274.jfif',
    alt: 'Testimonial Image 10'
  },
  {
    type: 'image',
    url: '/attached_assets/shared_image_(28)_1768284257275.jfif',
    alt: 'Testimonial Image 11'
  },
  {
    type: 'image',
    url: '/attached_assets/shared_image_(21)_1768284257275.jfif',
    alt: 'Testimonial Image 12'
  },
  {
    type: 'image',
    url: '/attached_assets/shared_image_(18)_1768284257276.jfif',
    alt: 'Testimonial Image 13'
  },
  {
    type: 'image',
    url: '/attached_assets/shared_image_(41)_1768292922456.jfif',
    alt: 'Testimonial Image 14'
  },
  {
    type: 'image',
    url: '/attached_assets/shared_image_(36)_1768292922458.jfif',
    alt: 'Testimonial Image 15'
  },
  {
    type: 'image',
    url: '/attached_assets/shared_image_(31)_1768292922461.jfif',
    alt: 'Testimonial Image 16'
  },
  {
    type: 'image',
    url: '/attached_assets/shared_image_(22)_1768292922462.jfif',
    alt: 'Testimonial Image 17'
  },
  {
    type: 'image',
    url: '/attached_assets/shared_image_(17)_1768292922463.jfif',
    alt: 'Testimonial Image 18'
  }
];

const videos = [
  { url: '/attached_assets/Sharing_from_Student_regarding_Eriksha_1768210210845.mp4', title: 'Student Feedback - E-Riksha' },
  { url: '/attached_assets/MicrosoftTeams-video_1768292028030.mp4', title: 'Community Success' },
  { url: '/attached_assets/MicrosoftTeams-video_(5)_1768212409420.mp4', title: 'Community Impact' },
  { url: '/attached_assets/MicrosoftTeams-video_(4)_1768209339241.mp4', title: 'Success Story' },
  { url: '/attached_assets/VID-20260107-WA0011_1768209339241.mp4', title: 'Field Work' },
  { url: '/attached_assets/VID-20260107-WA0008_1768209339242.mp4', title: 'Empowerment' },
  { url: '/attached_assets/MicrosoftTeams-video_(3)_1768209339243.mp4', title: 'Sustainable Growth' },
  { url: '/attached_assets/MicrosoftTeams-video_(1)_1768292218890.mp4', title: 'Community Transformation' }
];

const Testimonials = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      <main className="pt-0">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest-dark">
          <div className="absolute inset-0 opacity-40">
            <img 
              src="/attached_assets/generated_images/rural_community_gathering_in_india.png" 
              alt="Testimonials Hero" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container-wide relative z-10 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-body text-golden text-sm tracking-[0.2em] uppercase mb-6 block"
            >
              Voices of the Community
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-8xl text-cream mb-8 leading-tight"
            >
              Testimonials
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-body text-xl md:text-2xl text-cream/80 max-w-3xl mx-auto leading-relaxed"
            >
              Real stories from the communities we serve and the impact of our collective efforts.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12"
            >
              <div className="animate-bounce inline-block p-2 rounded-full border border-cream/20">
                <ChevronRight className="w-6 h-6 text-cream rotate-90" />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="relative group max-w-4xl mx-auto mb-20">
              <Carousel 
                className="w-full"
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
                opts={{
                  loop: true,
                }}
              >
                <CarouselContent>
                  {testimonials.map((item, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card className="border-none shadow-none bg-transparent">
                          <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden rounded-2xl">
                            <img 
                              src={item.url} 
                              alt={item.alt}
                              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CarouselNext className="right-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Carousel>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow bg-white group rounded-2xl">
                    <div className="aspect-[9/16] relative overflow-hidden bg-black">
                      <video 
                        src={video.url} 
                        className="w-full h-full object-cover"
                        controls
                        preload="metadata"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-display text-lg text-forest-dark">{video.title}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Testimonials;
