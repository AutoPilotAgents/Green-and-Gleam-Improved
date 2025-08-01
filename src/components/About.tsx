import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Leaf, Award } from "lucide-react";
import { useScrollAnimation, scrollAnimations } from "@/hooks/useScrollAnimation";

const About = () => {
  const leftAnimation = useScrollAnimation({ threshold: 0.1 });
  const rightAnimation = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={leftAnimation.ref}
            className={`${scrollAnimations.fadeInLeft} ${
              leftAnimation.isVisible ? scrollAnimations.fadeInLeftActive : scrollAnimations.fadeInLeftInitial
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Green & Gleam?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're not just another service company - we're your neighbors, committed to excellence in every job.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary-lime" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Eco-Conscious Approach</h3>
                  <p className="text-muted-foreground">
                    We use environmentally safe products and techniques that protect your family and pets.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="mt-1 flex-shrink-0">
                  <Leaf className="w-6 h-6 text-primary-lime" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Local Saint Paul Roots</h3>
                  <p className="text-muted-foreground">
                    Born and raised here, we understand Minnesota's unique weather challenges and seasonal needs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="mt-1 flex-shrink-0">
                  <Award className="w-6 h-6 text-primary-lime" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Satisfaction Guaranteed</h3>
                  <p className="text-muted-foreground">
                    Your complete satisfaction is our priority. We don't consider the job done until you're 100% happy.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image placeholder - replace with your image */}
          <div 
            ref={rightAnimation.ref}
            className={`${scrollAnimations.fadeInRight} ${
              rightAnimation.isVisible ? scrollAnimations.fadeInRightActive : scrollAnimations.fadeInRightInitial
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto bg-gray-300 rounded-full mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Image Placeholder</h3>
                <p className="text-gray-500">Replace with your image using the instructions provided</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;