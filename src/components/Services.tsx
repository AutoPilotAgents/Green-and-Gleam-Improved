"use client";

import { Button } from "@/components/ui/button";
import { 
  Leaf, 
  Scissors, 
  Droplets, 
  Sun, 
  TreePine, 
  Flower2,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Leaf,
    title: "Landscape Design",
    description: "Custom outdoor living spaces designed to reflect your personal style and enhance your property's natural beauty.",
    features: ["3D Renderings", "Plant Selection", "Hardscaping Plans"]
  },
  {
    icon: Scissors,
    title: "Lawn Care",
    description: "Professional lawn maintenance services to keep your grass healthy, green, and perfectly manicured year-round.",
    features: ["Mowing", "Edging", "Fertilization"]
  },
  {
    icon: Droplets,
    title: "Irrigation Systems",
    description: "Efficient watering solutions that conserve water while keeping your landscape lush and vibrant.",
    features: ["System Installation", "Repairs", "Upgrades"]
  },
  {
    icon: Sun,
    title: "Garden Maintenance",
    description: "Seasonal care and upkeep to ensure your garden thrives throughout the year with minimal effort.",
    features: ["Pruning", "Weeding", "Mulching"]
  },
  {
    icon: TreePine,
    title: "Tree Services",
    description: "Expert tree care including planting, pruning, and removal to maintain the health and safety of your property.",
    features: ["Trimming", "Planting", "Removal"]
  },
  {
    icon: Flower2,
    title: "Flower Beds",
    description: "Beautiful, colorful flower arrangements designed and maintained to add vibrant life to your landscape.",
    features: ["Design", "Planting", "Seasonal Updates"]
  }
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-forest mb-4">
            Our Premium Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive landscaping solutions tailored to transform your outdoor space into a stunning oasis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-primary-emerald/10 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary-emerald" />
                </div>
                <h3 className="text-xl font-bold text-primary-forest mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary-lime rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary-forest to-primary-emerald rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Outdoor Space?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our expert team today and let us create the landscape of your dreams.
          </p>
          <Button
            variant="hero-secondary"
            size="lg"
            className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
            onClick={() => navigate('/contact')}
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;