import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { MarqueImg } from "@/components/ui/marquee-img";
import { Sparkles, ArrowRight, Star, Users, Target, BarChart3, Brain, Mic2, Calendar } from "lucide-react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router";
import heroImg from "@/assets/img/hero.jpg";
import officeImg from "@/assets/img/office.jpg";
import firebaseLogo from "@/assets/img/logo/firebase.png";
import meetLogo from "@/assets/img/logo/meet.png";
import zoomLogo from "@/assets/img/logo/zoom.png";
import microsoftLogo from "@/assets/img/logo/microsoft.png";
import tailwindLogo from "@/assets/img/logo/tailwindcss.png";

const HomePage = () => {
    // const logos = [firebaseLogo, meetLogo, zoomLogo, microsoftLogo, tailwindLogo];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/50 via-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-blue-600/10 to-purple-600/10 transform -skew-y-3 -translate-y-32"></div>
        
        <Container className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 text-sm font-medium text-blue-700 mb-6">
                <Sparkles className="w-4 h-4 mr-2" /> AI-Powered Interview Excellence
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Master Interviews
                </span>
                <span className="block text-slate-800 mt-2">With AI Precision</span>
              </h1>

              <p className="text-lg text-slate-600 max-w-2xl mb-8">
                Preplora transforms your interview preparation with personalized AI coaching, 
                realistic practice environments, and actionable feedback to help you land your dream job.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <Link to={"/generate"}>
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-md font-semibold rounded-full shadow-lg shadow-blue-500/30">
                    Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white"></div>
                    ))}
                  </div>
                  <span>2k+ Active Users</span>
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-1">4.9/5</span>
                </div>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20">
                <img
                  src={heroImg}
                  alt="AI Interview"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                
                
                
                
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200/30 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200/30 rounded-full"></div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-slate-50">
        <Container>
          <div className="text-center text-sm font-medium text-slate-500 uppercase tracking-wider mb-8">
            Trusted by professionals at leading companies
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
            
            <Marquee pauseOnHover gradient={false} speed={50}>
              {[
                firebaseLogo,
                meetLogo,
                zoomLogo,
                microsoftLogo,
                tailwindLogo,
                firebaseLogo,
                meetLogo,
                zoomLogo,
                microsoftLogo,
                tailwindLogo
              ].map((img, index) => (
                <div key={index} className="mx-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <MarqueImg img={img} />
                </div>
              ))}
            </Marquee>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why Preplora Stands Out
            </h2>
            <p className="text-lg text-slate-600">
              Our AI-powered platform provides everything you need to transform your interview skills and boost your confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8 text-blue-600" />,
                title: "Smart Question Bank",
                description: "Access thousands of industry-specific questions tailored to your experience level and job role."
              },
              {
                icon: <Mic2 className="h-8 w-8 text-purple-600" />,
                title: "Real-time Practice",
                description: "Practice with our AI interviewer that adapts to your responses and provides instant feedback."
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-green-600" />,
                title: "Performance Analytics",
                description: "Track your progress with detailed metrics on your speaking pace, clarity, and content quality."
              },
              {
                icon: <Target className="h-8 w-8 text-orange-600" />,
                title: "Personalized Roadmap",
                description: "Get a customized preparation plan based on your strengths, weaknesses, and timeline."
              },
              {
                icon: <Users className="h-8 w-8 text-pink-600" />,
                title: "Peer Comparison",
                description: "See how you stack up against other candidates preparing for similar roles."
              },
              {
                icon: <Calendar className="h-8 w-8 text-indigo-600" />,
                title: "Flexible Scheduling",
                description: "Practice anytime with 24/7 access to our AI interviewers that never get tired."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50/30">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              How Preplora Works
            </h2>
            <p className="text-lg text-slate-600">
              Getting interview-ready has never been easier with our simple 3-step process
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              <img
                src={officeImg}
                alt="How Preplora works"
                className="w-full rounded-3xl shadow-xl"
              />
            </div>
            
            <div className="flex-1">
              <div className="space-y-8">
                {[
                  { number: "01", title: "Set Your Preferences", description: "Tell us about your target role, industry, and experience level to customize your practice sessions." },
                  { number: "02", title: "Practice with AI", description: "Engage in realistic interview simulations with our AI that adapts to your responses in real-time." },
                  { number: "03", title: "Review & Improve", description: "Get detailed feedback on your performance with actionable insights to strengthen your weak areas." }
                ].map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link to={"/generate"} className="mt-10 inline-block">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-md font-semibold rounded-full shadow-lg shadow-blue-500/30">
                  Start Your Journey <Sparkles className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl mx-4 mb-16">
        <Container>
          <div className="text-center max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to transform your interview skills?
            </h2>
            <p className="text-lg text-blue-100 mb-10">
              Join thousands of professionals who have boosted their confidence and landed their dream jobs with Preplora.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={"/generate"}>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-md font-semibold rounded-full">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
            </div>
            
            <p className="text-blue-200 text-sm mt-6">No credit card required • 7-day free trial</p>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;