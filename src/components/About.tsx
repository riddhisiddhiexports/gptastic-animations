
import React, { useRef, useEffect, useState } from "react";
import { CheckCircle, Headset, Rocket, BarChart3, Github } from "lucide-react";

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const features = [
    {
        icon: <Headset size={24} />,
        title: "Customer Focus",
        description: "Our top priority is customer satisfaction, ensuring every solution is tailored to your needs.",
    },
    {
      icon: <Rocket size={24} />,
      title: "Innovation",
      description: "We're constantly pushing the boundaries of what's possible with machine learning and AI.",
    },
    {
      icon: <Github size={24} />,
      title: "Open Source",
      description: "All our projects are open-sourced, allowing for community collaboration and transparency.",
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Results-Driven",
      description: "Our solutions are designed to deliver measurable results.",
    },
  ];

  return (
    <section id="about" ref={aboutRef} className="section-padding bg-white">
      <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300"
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
          >
            About Us
          </h2>
        </div>
        <p className="text-lg text-gray-500 mb-8 text-center">
                We're on a mission to make advanced AI technology accessible to everyone. Our tools are designed to be powerful yet intuitive, helping you harness the full potential of machine learning.
              </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl blur-xl"></div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/90 to-indigo-600/90 mix-blend-multiply z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                    alt="AI Technology" 
                    className="object-cover h-full w-full transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* <div className="absolute left-0 right-0 bottom-0 p-6 z-20">
                    <div className="glassmorphism rounded-xl p-4 backdrop-blur-md bg-white/20 transform hover:translate-y-[-5px] transition-transform">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                          <CheckCircle size={24} className="text-white" />
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">Trusted by</p>
                          <p className="text-white text-xl font-bold">500+ Companies</p>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className={`transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              {/* <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Revolutionizing Industries with AI Technology
              </h2> */}
              
              
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`flex gap-4 transition-all duration-700 hover:bg-gray-50 p-4 rounded-xl cursor-pointer transform hover:-translate-y-1`}
                    style={{ transitionDelay: `${300 + index * 150}ms` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-primary animate-pulse-soft">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                      <p className="text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
