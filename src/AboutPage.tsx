
import { Container } from "@/components/container";
// import { Button } from "@/components/ui/button";
import { 
  Users, 
  Target, 
  BarChart3, 
  Heart, 
  Award,
  Globe,
  Lightbulb,
  Shield,
  BookOpen,
  // Star
} from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Preplora</h1>
            <p className="text-xl opacity-90">
              Revolutionizing interview preparation through AI-powered coaching and personalized feedback
            </p>
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Preplora was founded in 2025 by a team of tech industry veterans who recognized a critical gap 
                in interview preparation. Despite the abundance of technical resources, candidates struggled with 
                the practical aspects of interviewing - communication, presentation, and handling pressure.
              </p>
              <p className="text-gray-600 mb-4">
                We set out to create a platform that combines AI technology with human insights to deliver 
                personalized interview coaching. Today, Preplora has helped thousands of candidates land their 
                dream jobs at top companies worldwide.
              </p>
              {/* <Button className="bg-blue-600 hover:bg-blue-700">
                Meet Our Team
              </Button> */}
            </div>
            <div className="bg-blue-100 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <Globe className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-700 font-semibold">Serving candidates in 50+ countries</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To democratize interview preparation by providing accessible, affordable, and effective 
                AI-powered coaching that helps candidates showcase their true potential.
              </p>
            </div>

            <div className="bg-purple-50 rounded-2xl p-8">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the world's most trusted interview preparation platform, transforming how 
                people prepare for career opportunities and bridging the gap between talent and opportunity.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuesData.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-blue-600 text-white">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <p className="opacity-90">Candidates Helped</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">92%</div>
              <p className="opacity-90">Success Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="opacity-90">Countries Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <p className="opacity-90">User Rating</p>
            </div>
          </div>
        </Container>
      </section>


      {/* CTA Section */}
      
    </div>
  );
};

// Values data
const valuesData = [
  {
    icon: <Heart className="h-6 w-6 text-blue-600" />,
    title: "Candidate Success",
    description: "We measure our success by our users' success. Your career growth is our ultimate goal."
  },
  {
    icon: <Shield className="h-6 w-6 text-blue-600" />,
    title: "Integrity",
    description: "We provide honest, constructive feedback and maintain the highest ethical standards."
  },
  {
    icon: <BookOpen className="h-6 w-6 text-blue-600" />,
    title: "Continuous Learning",
    description: "We constantly improve our platform based on user feedback and industry trends."
  },
  {
    icon: <Users className="h-6 w-6 text-blue-600" />,
    title: "Inclusivity",
    description: "We're committed to making interview preparation accessible to everyone, everywhere."
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
    title: "Data-Driven",
    description: "Our approach is grounded in data and research to deliver the most effective preparation."
  },
  {
    icon: <Award className="h-6 w-6 text-blue-600" />,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from platform features to user support."
  }
];

// Testimonials data

export default AboutPage;