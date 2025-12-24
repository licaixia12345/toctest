import { useState, useEffect } from 'react'
import { ArrowDown, Mail, Github, Linkedin, Twitter, ExternalLink, Menu, X } from 'lucide-react'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      
      const sections = ['home', 'about', 'projects', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const projects = [
    {
      title: '项目一',
      description: '一个简洁优雅的网络应用，专注于用户体验和性能优化。',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      link: '#'
    },
    {
      title: '项目二', 
      description: '现代化的移动优先设计，提供流畅的跨设备体验。',
      tech: ['Vue.js', 'Vite', 'PWA'],
      link: '#'
    },
    {
      title: '项目三',
      description: '数据驱动的可视化平台，帮助用户更好地理解复杂信息。',
      tech: ['D3.js', 'Python', 'FastAPI'],
      link: '#'
    }
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-light tracking-wide">Portfolio</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-light transition-colors duration-300 hover:text-gray-600 ${
                    activeSection === section ? 'text-gray-900 border-b border-gray-900' : 'text-gray-500'
                  }`}
                >
                  {section === 'home' ? '首页' : 
                   section === 'about' ? '关于' :
                   section === 'projects' ? '项目' : '联系'}
                </button>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4 pt-4">
                {['home', 'about', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => {
                      scrollToSection(section)
                      setIsMenuOpen(false)
                    }}
                    className={`text-left text-sm font-light transition-colors duration-300 hover:text-gray-600 ${
                      activeSection === section ? 'text-gray-900' : 'text-gray-500'
                    }`}
                  >
                    {section === 'home' ? '首页' : 
                     section === 'about' ? '关于' :
                     section === 'projects' ? '项目' : '联系'}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="relative z-10 text-center px-6 animate-fadeInUp">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-tight animate-fadeInUp">
              你好，我是
              <span className="block text-gray-700 mt-2">设计师</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed animate-fadeInUp" style={{animationDelay: '0.2s'}}>专注于创造简洁、优雅且功能性的数字体验</p>
          </div>
          
          <button
            onClick={() => scrollToSection('about')}
            className="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-light rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 animate-fadeInUp" style={{animationDelay: '0.4s'}}
          >
            了解更多
            <ArrowDown className="ml-2 w-4 h-4" />
          </button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6 text-gray-900">关于我</h2>
              <div className="space-y-4 text-gray-600 font-light leading-relaxed">
                <p>
                  我是一名充满热情的设计师和开发者，相信好的设计应该是看不见的——它应该自然而然地引导用户，让复杂的任务变得简单。
                </p>
                <p>
                  在过去的几年里，我一直致力于创造既美观又实用的数字产品。我相信极简主义的力量，认为每一个元素都应该有其存在的理由。
                </p>
                <p>
                  当我不在工作时，你会发现在探索新的设计趋势，阅读关于用户体验的文章，或者简单地享受一杯好咖啡。
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-light mb-4 text-gray-900">技能</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Figma', 'Tailwind CSS', 'Node.js', 'Python'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600 font-light">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                <div className="text-6xl text-gray-500">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-900">精选项目</h2>
            <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
              这里展示了我最近的一些工作，每个项目都体现了我对细节和用户体验的关注
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-light text-gray-900">{project.title}</h3>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </div>
                  
                  <p className="text-gray-600 font-light mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-white border border-gray-200 rounded text-xs text-gray-500 font-light">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className="text-gray-900 font-light hover:text-gray-600 transition-colors duration-300">
                    查看项目 →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">让我们一起创造</h2>
          <p className="text-xl text-gray-300 font-light mb-12 max-w-2xl mx-auto">
            有项目想法或者想要合作？我很乐意听到你的声音
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="mailto:hello@example.com" 
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 font-light rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-4 h-4 mr-2" />
              发送邮件
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Twitter, href: '#', label: 'Twitter' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-400 font-light">
            © 2024 极简作品集. 用心制作，用爱分享.
          </p>
        </div>
      </footer>
    </div>
  )
}