import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We put our customers at the heart of everything we do, ensuring exceptional service and satisfaction.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We carefully curate our products to ensure only the highest quality items reach our customers.'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'We believe in building strong relationships with our customers and supporting our community.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We continuously innovate to improve the shopping experience and stay ahead of trends.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Sarah founded ShopHub with a vision to create a better online shopping experience for everyone.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Product',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Michael leads our product team in developing innovative features and maintaining our high standards.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Customer Success Manager',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Emily ensures our customers have the best possible experience with ShopHub.'
    },
    {
      name: 'David Thompson',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'David manages our supply chain and ensures smooth operations across all departments.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About ShopHub
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              We're passionate about providing exceptional products and outstanding customer service. 
              Our mission is to make online shopping simple, enjoyable, and reliable.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2020, ShopHub started as a small idea to revolutionize the online shopping 
                  experience. We noticed that many e-commerce platforms were complex, overwhelming, 
                  and didn't prioritize customer satisfaction.
                </p>
                <p>
                  Our founders, coming from diverse backgrounds in technology, retail, and customer 
                  service, came together with a shared vision: to create a shopping platform that 
                  puts customers first, offers quality products, and provides an intuitive, 
                  enjoyable shopping experience.
                </p>
                <p>
                  Today, we serve thousands of customers worldwide and continue to grow while 
                  maintaining our commitment to quality, customer service, and innovation. Every 
                  product we sell is carefully selected, and every customer interaction is handled 
                  with care and attention to detail.
                </p>
              </div>
            </div>
            
            <div>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team working together"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and help us deliver the best possible 
              experience to our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts is dedicated to making ShopHub the best it can be.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Shop?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the ShopHub difference today. Browse our curated selection of 
            quality products and enjoy exceptional customer service.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Start Shopping
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;