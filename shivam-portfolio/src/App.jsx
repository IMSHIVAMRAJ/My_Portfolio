"use client"

import { useState, useEffect } from "react"
import { Button } from "./components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import shivam from "./assets/shivam.jpg"
import hack from "./assets/hack.png"
import glow from "./assets/glow.png"
import postman from "./assets/postman.png"
import genai from "./assets/genai.png"
import solution from "./assets/solution.png"
import { Badge } from "./components/ui/badge"
import wecare from "./assets/we.png"
import {
  Download,
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  Moon,
  Sun,
  Menu,
  X,
  Code,
  Database,
  Server,
  Globe,
  Award,
  GraduationCap,
  User,
  FolderOpen,
  MessageCircle,
  Sparkles,
  Zap,
  Rocket,
  Star,
  Code2,
} from "lucide-react"
import { useTheme } from "./hooks/useTheme"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  // Function to download resume
  const downloadResume = () => {
    // Create a temporary link element
    const link = document.createElement("a")
    link.href = "/resume.pdf" // Make sure to add your resume.pdf file to the public folder
    link.download = "Shivam_Raj_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Function to open external links
  const openExternalLink = (url) => {
    if (url.startsWith("mailto:") || url.startsWith("tel:")) {
      // For mailto and tel links, use window.location.href
      window.location.href = url
    } else {
      // For regular URLs, open in new tab
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  const skills = {
    "Programming Languages": {
      items: ["JavaScript", "SQL", "C", "C++", "Basic JAVA", "Python"],
      icon: Code,
      gradient: "from-purple-500 to-pink-500",
    },
    "Backend Development": {
      items: ["Node.js", "Express.js", "Web Socket"],
      icon: Server,
      gradient: "from-blue-500 to-cyan-500",
    },
    "Frontend Development": {
      items: ["React.js", "Tailwind CSS", "HTML", "CSS"],
      icon: Globe,
      gradient: "from-green-500 to-emerald-500",
    },
    "Database Management": {
      items: ["MongoDB", "SQL", "Basic AWS"],
      icon: Database,
      gradient: "from-orange-500 to-red-500",
    },
    Tools: {
      items: ["Git", "GitHub", "Postman"],
      icon: Award,
      gradient: "from-indigo-500 to-purple-500",
    },
  }

  const projects = [
    {
      name: "WeCare",
      description:
        "WeCare is a service management platform designed to assist senior citizens and differently abled individuals by offering a wide range of personalized services like grooming, medical support, physiotherapy, companionship, and mobility assistance.The platform enables users to explore categorized services, view detailed descriptions, and facilitates efficient service delivery via an admin-managed backend.It has a user panel , admin panel and a expert care panel.",
      tech: ["React.js", "TailwindCSS", "Node.js", "MongoDB", "Express.js", "Cloudinary", "Postman", "Multer"],
      liveLink: "https://we-caree.vercel.app/",
      githubLink: "https://github.com/IMSHIVAMRAJ/WeCare",
      image: wecare,
      gradient: "from-purple-600 via-pink-600 to-blue-600",
      featured: true, // Keeping this property for data, but not for rendering distinction
    },
    {
      name: "HackVerse",
      description:
        "HackVerse is a community-driven platform designed to help students and developers find ideal teammates for hackathons based on their skills, interests, and experience.Users can create profiles, list their technical strengths, browse or post hackathon events, and connect with potential teammates — ensuring stronger, diverse, and complementary teams. The goal is to make collaboration easier, faster, and more impactful for hackathon enthusiasts.",
      tech: ["React.js", "Socket.io", "Node.js", "MongoDB", "JWT-based login/signup", "Tailwind CSS", "Express.js"],
      liveLink: "https://hack-verse-sr.vercel.app/",
      githubLink: "https://github.com/IMSHIVAMRAJ/HackVerse",
      image: hack,
      gradient: "from-cyan-500 via-blue-500 to-indigo-600",
      featured: false,
    },
    {
      name: "Glowlii",
      description:
        "A homebeauty app that provides a platform for users to book beauty services at home. It features a user-friendly interface, service categories, booking management, and secure payment integration.Comes with a user panel and an admin panel for managing services, bookings, and user profiles and a beautician panel for managing their services,slots and bookings.",
      tech: [
        "React.js",
        "ExpressJs",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Multer",
        "Cloudinary",
        "Postman",
        "Razorpay",
        "fast2sms for otp",
      ],
      liveLink: "https://glowlii.in/",
      githubLink: "https://github.com/shivamraj/weather-dashboard",
      image: glow,
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      featured: false,
    },
  ]

  const experiences = [
    {
      title: "Backend Developer",
      company: "DiGrows",
      period: "May 2025 - Present",
      description: "Developing scalable backend solutions and APIs for agricultural technology platform",
      icon: Rocket,
      color: "text-purple-500",
    },
    {
      title: "Technical Manager Intern",
      company: "Eco Fast Agri Solutions",
      period: "July 2024 – Oct 2024",
      description: "Managed technical projects and coordinated development teams for agricultural solutions",
      icon: Zap,
      color: "text-blue-500",
    },
    {
      title: "Core Team Member",
      company: "Google Developers Groups",
      period: "Sep 2024 – Present",
      description: "Organizing tech events, workshops, and contributing to open-source projects",
      icon: Star,
      color: "text-green-500",
    },
    {
      title: "Freelance Developer",
      company: "Various Clients",
      period: "2025 - Present",
      description: "Worked on multiple freelance projects including web applications and API development",
      icon: Sparkles,
      color: "text-orange-500",
    },
  ]

  const navigation = [
    { name: "Home", href: "hero" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Experience", href: "experience" },
    { name: "Education", href: "education" },
    { name: "Contact", href: "contact" },
  ]

  const certifications = [
    {
      title: "Postman Student Expert",
      issuer: "Postman",
      date: "2024",
      image: postman,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Generative AI Study Jams",
      issuer: "Google",
      date: "2024",
      image: genai,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Solution Challenge",
      issuer: "Google Developers Group",
      date: "2025",
      image: solution,
      gradient: "from-green-600 to-teal-600",
    },
  ]

  // Social media links
  const socialLinks = {
    email: "mailto:sraj2004bxr@gmail.com",
    linkedin: "https://www.linkedin.com/in/shivam-raj-ojha-1680b5284/",
    github: "https://github.com/IMSHIVAMRAJ",
    leetcode: "https://leetcode.com/u/SHIVAM_RAJ_OJHA/",
    phone: "tel:+919955399037",
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Mouse Follower */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Shivam Raj
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative px-3 py-2 text-white/80 hover:text-white transition-all duration-300 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10 bg-black/40 backdrop-blur-md">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 px-4 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-10 min-h-screen flex items-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 z-10">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <Sparkles className="h-4 w-4 mr-2 text-yellow-400" />
                  <span className="text-sm">Available for new opportunities</span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                    Shivam Raj
                  </span>
                </h1>

                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl text-white/90 font-light">MERN Stack Developer</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                </div>

                <p className="text-xl text-white/70 max-w-lg leading-relaxed">
                  Crafting digital experiences that blend{" "}
                  <span className="text-purple-400 font-semibold">innovation</span> with{" "}
                  <span className="text-pink-400 font-semibold">functionality</span>. Specialized in building scalable
                  web applications.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={downloadResume}
                  className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-md"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Let's Talk
                </Button>
              </div>

              <div className="flex space-x-4">
                {[
                  { icon: Mail, href: socialLinks.email },
                  { icon: Linkedin, href: socialLinks.linkedin },
                  { icon: Github, href: socialLinks.github },
                  { icon: Code2, href: socialLinks.leetcode }, // LeetCode icon
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    onClick={() => openExternalLink(social.href)}
                    className="relative overflow-hidden group bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10"
                  >
                    <social.icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-md">
                  <img src={shivam || "/placeholder.svg"} alt="Shivam Raj" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
                  <Code className="h-12 w-12 text-white" />
                </div>

                {/* Floating Icons */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center animate-bounce">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <div className="absolute top-8 -right-12 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                  <Zap className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-15 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <Card className="relative bg-white/5 backdrop-blur-md border border-white/10">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                      <User className="h-8 w-8 text-white" />
                    </div>
                    <div className="space-y-6 text-white/80">
                      <p className="text-lg leading-relaxed">
                        Hey there! I'm Shivam, a curious and driven college student with a strong passion for all things
                        tech — from crafting full-stack web applications to solving brain-twisting DSA problems (yes, I
                        enjoy both 😄).
                      </p>
                      <p className="text-lg leading-relaxed">
                        I love building clean, efficient, and scalable backends using Node.js, Express, MongoDB, and
                        more. But beyond development, I've spent a lot of time honing my skills in Data Structures &
                        Algorithms, solving problems and learning how to think like a true engineer.
                      </p>
                      <p className="text-lg leading-relaxed">
                        Whether it's creating real-world projects, participating in coding challenges, or learning new
                        tools just for fun — I believe in consistency over hype and growth over shortcuts. 🚀
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, data]) => {
              const IconComponent = data.icon
              return (
                <div key={category} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                  <Card className="relative bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-500 h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className={`p-2 bg-gradient-to-r ${data.gradient} rounded-lg`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-white">{category}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {data.items.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors duration-300"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          {/* Unified Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500`}
                ></div>
                <Card className="relative bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden h-full">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <FolderOpen className="h-5 w-5 text-purple-400" />
                      {project.name}
                    </CardTitle>
                    <CardDescription className="text-white/70">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-white/30 text-white/80">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => openExternalLink(project.liveLink)}
                          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 flex-1"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => openExternalLink(project.githubLink)}
                          className="border-white/30 text-white hover:bg-white/10 flex-1 bg-transparent"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Experience Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon
              return (
                <div key={index} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                  <Card className="relative bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-500">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl`}>
                            <IconComponent className={`h-6 w-6 text-white`} />
                          </div>
                          <div>
                            <CardTitle className="text-white text-xl">{exp.title}</CardTitle>
                            <CardDescription className="text-lg font-medium text-purple-400">
                              {exp.company}
                            </CardDescription>
                          </div>
                        </div>
                        <Badge variant="outline" className="border-white/30 text-white/80">
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/70 leading-relaxed">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <Card className="relative bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-500">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-xl">
                        Bachelor of Technology in Computer Science And Engineering
                      </CardTitle>
                      <CardDescription className="text-lg text-purple-400">
                        Quantum University, Roorkee | CGPA: 8.0
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="border-white/30 text-white/80">
                    2023 - 2027
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Certifications & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-xl text-white/70 mt-6 max-w-2xl mx-auto">
              Continuous learning and professional development through industry-recognized certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="group relative">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${cert.gradient} rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500`}
                ></div>
                <Card className="relative bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 h-full">
                  {/* Certificate Image */}
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={cert.image || "/placeholder.svg"}
                      alt={`${cert.title} Certificate`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className={`p-2 bg-gradient-to-r ${cert.gradient} rounded-lg backdrop-blur-md`}>
                        <Award className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-white text-lg leading-tight">{cert.title}</CardTitle>
                    <CardDescription className="text-purple-400 font-medium">{cert.issuer}</CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="border-white/30 text-white/80">
                          {cert.date}
                        </Badge>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-purple-400 hover:text-pink-400 hover:bg-white/10 p-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Let's Connect 
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            <p className="text-xl text-white/70 mt-6 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "sraj2004bxr@gmail.com",
                  href: socialLinks.email,
                  gradient: "from-red-500 to-pink-500",
                },
                {
                  icon: Linkedin,
                  title: "LinkedIn",
                  value: "/in/shivamraj",
                  href: socialLinks.linkedin,
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Github,
                  title: "GitHub",
                  value: "/IMSHIVAMRAJ",
                  href: socialLinks.github,
                  gradient: "from-gray-500 to-gray-700",
                },
                {
                  icon: Code2,
                  title: "LeetCode",
                  value: "/shivamraj",
                  href: socialLinks.leetcode,
                  gradient: "from-yellow-500 to-orange-500",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+919955399037",
                  href: socialLinks.phone,
                  gradient: "from-green-500 to-emerald-500",
                },
              ].map((contact, index) => (
                <div key={index} className="group relative">
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${contact.gradient} rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500`}
                  ></div>
                  <Card className="relative bg-white/5 backdrop-blur-md border border-white/10 text-center hover:bg-white/10 transition-all duration-500 h-full">
                    <CardContent className="p-6">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${contact.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <contact.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2 text-white">{contact.title}</h3>
                      <button
                        onClick={() => openExternalLink(contact.href)}
                        className="text-purple-400 hover:text-pink-400 transition-colors duration-300 text-sm"
                      >
                        {contact.value}
                      </button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="group relative inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
                <Button
                  size="lg"
                  onClick={() => openExternalLink(socialLinks.email)}
                  className="relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 text-lg px-8 py-4"
                >
                  <MessageCircle className="h-6 w-6 mr-3" />
                  Start a Conversation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Shivam Raj
              </h3>
              <p className="text-white/70 leading-relaxed">
                MERN Stack Developer passionate about creating innovative web solutions that make a difference.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <div className="space-y-2">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block text-white/70 hover:text-purple-400 transition-colors duration-300"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Connect</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: socialLinks.github },
                  { icon: Linkedin, href: socialLinks.linkedin },
                  { icon: Mail, href: socialLinks.email },
                  { icon: Code2, href: socialLinks.leetcode },
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    onClick={() => openExternalLink(social.href)}
                    className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 group"
                  >
                    <social.icon className="h-5 w-5 text-white/70 group-hover:text-purple-400 transition-colors duration-300" />
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-white/60">
              &copy; 2025 Shivam Raj. Crafted with <span className="text-red-400">♥</span> and lots of{" "}
              <span className="text-yellow-400">☕</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
