'use client'
import { motion } from 'framer-motion'

import abouthero from "@/images/about/about-hero.jpg"
import fold3icon1 from "@/images/about/fold3icon1.svg"
import fold3icon2 from "@/images/about/fold3icon2.svg"

import fold4icon1 from "@/images/about/fold4icon1.svg"
import fold4icon2 from "@/images/about/fold4icon2.svg"
import fold4icon3 from "@/images/about/fold4icon3.svg"
import fold4icon4 from "@/images/about/fold4icon4.svg"
import fold4icon5 from "@/images/about/fold4icon5.svg"
import fold4icon6 from "@/images/about/fold4icon6.svg"

import fold5image1 from "@/images/about/fold5img.png"

import fold5icon1 from "@/images/about/fold5icon1.svg"
import fold5icon2 from "@/images/about/fold5icon2.svg"
import fold5icon3 from "@/images/about/fold5icon3.svg"
import fold5icon4 from "@/images/about/fold5icon4.svg"
import fold5icon5 from "@/images/about/fold5icon5.svg"
import fold5icon6 from "@/images/about/fold5icon6.svg"

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

const containerVariants = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, staggerChildren: 0.15 }
}

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const itemVariants = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.5 }
}

export default function MainSection() {
  // Core Values data
  const values = [
    {
      icon: fold4icon1,
      title: "Integrity & Transparency",
      description: "Every interaction is built on honesty, clarity, and trust."
    },
    {
      icon: fold4icon2,
      title: "Customer-Centric Thinking",
      description: "We design and deliver solutions that truly serve their needs."
    },
    {
      icon: fold4icon3,
      title: "Innovation & Excellence", 
      description: "Every product reflects our commitment to quality and progress."
    },
    {
      icon: fold4icon4,
      title: "Sustainability & Responsibility",
      description: "Our processes and materials reflect our environmental values."
    },
    {
      icon: fold4icon5,
      title: "Teamwork & Leadership",
      description: "Collaboration fuels our growth and success."
    },
    {
      icon: fold4icon6,
      title: "Community Impact", 
      description: "through education, employment, and development initiatives."
    }
  ]

  // VR Pumps Edge features data
  const features = [
    { icon: fold5icon1, text: "20+ Years of Industry Knowledge" },
    { icon: fold5icon2, text: "International Standards at Indian Prices" },
    { icon: fold5icon3, text: "Dealer-First Approach with Marketing and Sales Assistance" },
    { icon: fold5icon4, text: "Sector-Specific Innovations for Diverse Use Cases" },
    { icon: fold5icon5, text: "Superior Warranty & After-Sales Support" },
    { icon: fold5icon6, text: "Ethical & Sustainable Manufacturing" }
  ]

  return (
    <main className="font-sans text-gray-700">
      
      {/* ========================================
          FOLD 1: HERO SECTION (NO CONTAINER)
          ======================================== */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-cover bg-cover h-150" 
        style={{backgroundImage: "url('https://in-cdn1.blr1.cdn.digitaloceanspaces.com/figma-assets/images/firstfold.jpg')"}}
      >
        {/* Hero content can be added here if needed */}
        <img src={abouthero.src} alt='hero background' className='bg-cover h-full' style={{width:"100%"}}></img>
      </motion.section>

      {/* ========================================
          FOLD 2: OUR STORY (WITH CONTAINER)
          ======================================== */}
      <motion.section 
        className="py-16 px-6 md:px-20"
        {...fadeInUp}
      >
        <div className="max-w-[1350px] mx-auto">
          <motion.h2 
            className="text-3xl font-bold mb-10 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Story
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 text-gray-600 text-sm leading-relaxed">
            <motion.ul 
              className="space-y-4 list-disc pl-5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <li>Founded in 2006, VR Pumps began as a vision to transform the Indian pump industry with a simple yet powerful belief: every Indian deserves access to high-quality, reliable pumps without paying premium prices.</li>
              <li>What started nearly two decades ago as a small manufacturing unit in Coimbatore has evolved into a trusted name across Tamil Nadu and beyond. Our founder, <strong>Mr. Krishnan</strong>, recognized a critical gap in the market - while international-quality pumps existed, they were often unaffordable for the average Indian consumer, and affordable options frequently compromised on quality and durability.</li>
              <li>Through years of dedication, continuous learning, and unwavering commitment to our customers, we have built a reputation for manufacturing pumps that deliver exceptional performance across Agriculture, Industrial, Construction, and Domestic applications.</li>
            </motion.ul>
            <motion.ul 
              className="space-y-4 list-disc pl-5"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <li>Our journey has been marked by constant innovation, understanding the unique challenges faced by Indian customers, and developing solutions that truly work in our diverse climatic and operational conditions.</li>
              <li>Today, as we stand on the threshold of our next growth phase, our <strong>19-year foundation</strong> gives us the stability and experience to dream bigger - expanding across India while staying true to our core promise of quality, affordability, and exceptional service.</li>
            </motion.ul>
          </div>
        </div>
      </motion.section>

      {/* ========================================
          FOLD 3: VISION & MISSION (WITH CONTAINER)
          ======================================== */}
      <motion.section 
        className="bg-blue-900 py-16 px-6 md:px-20 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1350px] mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-10"
            variants={containerVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white text-gray-800 p-8 rounded-xl shadow-lg text-center"
              variants={cardVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="flex justify-center items-center mb-4">
                <div className="w-36 h-36 flex items-center justify-center mr-4">
                  <img src={fold3icon1.src} alt="vision icon"/>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Our Vision</h3>
              <p className="text-sm text-gray-600 leading-relaxed">"To become India's leading pump manufacturer, delivering top-quality, innovative, and long-lasting pumps with international standards at affordable prices, while building an exceptional dealer network across the nation and driving sector-specific innovations that solve real-world challenges in Agriculture, Industrial, Construction, and Domestic applications."</p>
            </motion.div>
            <motion.div 
              className="bg-white text-gray-800 p-8 rounded-xl shadow-lg text-center"
              variants={cardVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="flex justify-center items-center mb-4">
                <div className="w-36 h-36 flex items-center justify-center mr-4">
                  <img src={fold3icon2.src} alt="mission icon"/>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Our Mission</h3>
              <p className="text-sm text-gray-600 leading-relaxed">"We manufacture high-quality, durable pumps using cutting-edge technology and sustainable materials, serving Agriculture, Industrial, Construction, and Domestic sectors. Through our commitment to affordability, reliability, innovation, and excellence in customer relationships, we empower our dealer network and end-users with superior products and unmatched support services."</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ========================================
          FOLD 4: CORE VALUES (WITH CONTAINER)
          ======================================== */}
      <motion.section 
        className="py-16 px-6 md:px-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1350px] mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Core Values
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8 text-center"
            variants={containerVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="p-6 border border-gray-200 rounded-lg text-left hover:border-blue-300 transition-all duration-300"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 8px 25px rgba(59, 130, 246, 0.15)",
                  transition: { duration: 0.2 }
                }}
              >
                <div className="w-16 h-16 flex items-center mb-4">
                  <img src={value.icon.src} alt={`${value.title} icon`}/>
                </div>
                <h4 className="font-semibold mb-2 text-gray-800">{value.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ========================================
          FOLD 5: VR PUMPS EDGE (1/3 IMAGE + 2/3 GRID LAYOUT)
          ======================================== */}
      <motion.section 
        className="bg-blue-900 text-white py-16 px-6 md:px-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1350px] mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The VR Pumps Edge
          </motion.h2>
          {/* 1/3 Image + 2/3 Features Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left: Image (1/3 width on desktop) */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={fold5image1.src} 
                alt="VR Pumps Manufacturing" 
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
            
            {/* Right: Features Grid (2/3 width on desktop) */}
            <motion.div 
              className="lg:col-span-2"
              variants={containerVariants}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {/* 2x3 Grid Layout for Features with Lines */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className={`flex flex-col space-x-4 py-8 `}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <img src={feature.icon.src} alt={`feature ${index + 1} icon`} className="w-full h-full"/>
                    </div>
                    <div className="flex-1  border-t border-white pt-2 mt-4">
                      <p className="text-sm font-medium leading-relaxed">{feature.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ========================================
          FOLD 6: CEO MESSAGE (WITH CONTAINER)
          ======================================== */}
      <motion.section 
        className="py-16 px-6 md:px-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-[1350px] mx-auto">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="bg-white p-10 rounded-xl shadow-lg relative"
              whileHover={{ 
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.h3 
                className="text-2xl font-bold mb-8 text-gray-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                CEO Message
              </motion.h3>          
              
              <motion.div 
                className="text-gray-600 text-sm leading-relaxed space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p>
                  "When I started VR Pumps in 2006, I had a simple dream - to create pumps that would never let our customers down, at prices they could afford. Coming from a region where agriculture and industry form the backbone of our economy, I witnessed firsthand how pump failures could devastate a farmer's crop or halt an entire factory's production.
                </p>
                <p>
                  Over the past 19 years, this dream has evolved into a mission. We've learned that true success isn't just about manufacturing pumps - it's about understanding the pulse of our customers' needs, the rhythm of their challenges, and the flow of their aspirations.
                </p>
                <p>
                  Today, as we embark on our most ambitious growth phase, I'm excited about what lies ahead. Our goal to reach ₹250 crores in revenue isn't just a number - it represents thousands of satisfied customers, hundreds of successful dealers, and dozens of team members who will grow with us.
                </p>
                <p>
                  I believe our greatest strength lies not in our machines or technology, but in our people - our dedicated team, our trusted dealers, and our loyal customers who have supported us through this incredible journey. Together, we're not just building a company; we're building a legacy of reliability, innovation, and service excellence.
                </p>
                <p>
                  The next chapter of our story will be written by all of us, and I'm confident it will be our most remarkable yet."
                </p>
              </motion.div>
              
              <motion.div 
                className="text-right mt-8 pt-6 border-t border-gray-200"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <p className="font-semibold text-gray-800">- Mr. Krishnan</p>
                <p className="text-sm text-gray-600 italic">Managing Director & Founder</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

    </main>
  )
}