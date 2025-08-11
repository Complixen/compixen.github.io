// Home page specific JavaScript functionality

document.addEventListener("DOMContentLoaded", () => {
  initHeroAnimations()
  initCyberGrid()
  initSecurityNodes()
  initDataStreams()
  initIndustrySlider()
  initTestimonialRotation()
  initDashboardAnimation()
  initParticleSystem()
  setTimeout(initAdvancedScrollAnimations, 1000)
  setTimeout(initMouseTrail, 2000)
})

// Hero section animations
function initHeroAnimations() {
  const heroContent = document.querySelector(".hero__content")
  const heroVisual = document.querySelector(".hero__visual")

  if (heroContent && heroVisual) {
    // Stagger animation for hero elements with advanced timing
    const heroElements = [
      heroContent.querySelector(".hero__title-main"),
      heroContent.querySelector(".hero__title-sub"),
      heroContent.querySelector(".hero__actions"),
    ]

    heroElements.forEach((element, index) => {
      if (element) {
        element.style.opacity = "0"
        element.style.transform = "translateY(50px)"

        setTimeout(
          () => {
            element.style.transition = "all 1s cubic-bezier(0.4, 0, 0.2, 1)"
            element.style.opacity = "1"
            element.style.transform = "translateY(0)"
          },
          index * 300 + 500,
        ) // Delay after preloader
      }
    })

    // Animate hero visual with sophisticated entrance
    setTimeout(() => {
      heroVisual.style.opacity = "1"
      heroVisual.style.transform = "translateX(0) scale(1)"
    }, 1000)
  }
}

// Cyber grid animation system
function initCyberGrid() {
  const gridLines = document.querySelectorAll(".grid-line")

  gridLines.forEach((line, index) => {
    // Add interactive hover effects
    line.addEventListener("mouseenter", () => {
      line.style.animationDuration = "1s"
      line.style.opacity = "1"
    })

    line.addEventListener("mouseleave", () => {
      line.style.animationDuration = "3s"
      line.style.opacity = "0.6"
    })

    // Random pulse variations
    setInterval(
      () => {
        const randomDelay = Math.random() * 2000
        setTimeout(() => {
          line.style.opacity = "1"
          setTimeout(() => {
            line.style.opacity = "0.6"
          }, 500)
        }, randomDelay)
      },
      5000 + index * 1000,
    )
  })
}

// Enhanced security nodes with advanced interactions
function initSecurityNodes() {
  const securityNodes = document.querySelectorAll(".security-node")

  securityNodes.forEach((node, index) => {
    // Add click interaction with ripple effect
    node.addEventListener("click", (e) => {
      createRippleEffect(e, node)
      showNodeInfo(node, index)
    })

    // Enhanced hover effects
    node.addEventListener("mouseenter", () => {
      node.style.transform = "scale(1.15) rotate(5deg)"
      node.style.zIndex = "10"

      // Pause floating animation
      node.style.animationPlayState = "paused"

      // Create glow effect
      const glow = document.createElement("div")
      glow.className = "node-glow"
      glow.style.cssText = `
        position: absolute;
        top: -20px;
        left: -20px;
        right: -20px;
        bottom: -20px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(0,212,255,0.3) 0%, transparent 70%);
        animation: glowPulse 1s ease-in-out infinite;
        pointer-events: none;
        z-index: -1;
      `
      node.appendChild(glow)
    })

    node.addEventListener("mouseleave", () => {
      node.style.transform = "scale(1) rotate(0deg)"
      node.style.zIndex = "1"
      node.style.animationPlayState = "running"

      // Remove glow effect
      const glow = node.querySelector(".node-glow")
      if (glow) {
        glow.remove()
      }
    })

    // Random activation states
    setInterval(
      () => {
        const randomDelay = Math.random() * 3000
        setTimeout(() => {
          node.style.transform = "scale(1.05)"
          const pulse = node.querySelector(".node-pulse")
          if (pulse) {
            pulse.style.animation = "nodePulse 1s ease-out"
          }
          setTimeout(() => {
            node.style.transform = "scale(1)"
          }, 300)
        }, randomDelay)
      },
      8000 + index * 2000,
    )
  })

  function createRippleEffect(e, node) {
    const ripple = document.createElement("div")
    const rect = node.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)

    ripple.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      width: ${size}px;
      height: ${size}px;
      background: rgba(0, 212, 255, 0.3);
      border-radius: 50%;
      transform: translate(-50%, -50%) scale(0);
      animation: rippleExpand 0.8s ease-out;
      pointer-events: none;
      z-index: 5;
    `

    node.appendChild(ripple)

    setTimeout(() => {
      ripple.remove()
    }, 800)
  }

  function showNodeInfo(node, index) {
    const nodeTypes = [
      { name: "Threat Detection", status: "Active", threats: "0 detected" },
      { name: "Access Control", status: "Secure", users: "1,247 authenticated" },
      { name: "Data Monitor", status: "Scanning", files: "50,000+ protected" },
    ]

    const info = nodeTypes[index] || nodeTypes[0]

    // Create info tooltip
    const tooltip = document.createElement("div")
    tooltip.className = "node-tooltip"
    tooltip.innerHTML = `
      <div class="tooltip-header">${info.name}</div>
      <div class="tooltip-status">Status: <span class="status-active">${info.status}</span></div>
      <div class="tooltip-detail">${Object.values(info)[2]}</div>
    `

    tooltip.style.cssText = `
      position: absolute;
      top: -120px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(10, 14, 26, 0.95);
      color: white;
      padding: 1rem;
      border-radius: 8px;
      font-size: 0.875rem;
      white-space: nowrap;
      z-index: 1000;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(0, 212, 255, 0.3);
      opacity: 0;
      transform: translateX(-50%) translateY(10px);
      transition: all 0.3s ease;
    `

    node.appendChild(tooltip)

    setTimeout(() => {
      tooltip.style.opacity = "1"
      tooltip.style.transform = "translateX(-50%) translateY(0)"
    }, 10)

    setTimeout(() => {
      tooltip.style.opacity = "0"
      setTimeout(() => {
        tooltip.remove()
      }, 300)
    }, 3000)
  }
}

// Data streams animation
function initDataStreams() {
  const dataStreams = document.querySelectorAll(".data-stream")

  dataStreams.forEach((stream, index) => {
    // Add random data packets
    setInterval(
      () => {
        createDataPacket(stream)
      },
      2000 + index * 500,
    )
  })

  function createDataPacket(stream) {
    const packet = document.createElement("div")
    packet.style.cssText = `
      position: absolute;
      width: 4px;
      height: 20px;
      background: linear-gradient(to bottom, var(--accent-color), var(--accent-secondary));
      border-radius: 2px;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      animation: packetFlow 3s linear;
      box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
    `

    stream.appendChild(packet)

    setTimeout(() => {
      packet.remove()
    }, 3000)
  }
}

// Enhanced industry slider with touch support
function initIndustrySlider() {
  const slider = document.querySelector(".industries__slider")
  if (!slider) return

  let isDown = false
  let startX
  let scrollLeft
  let velocity = 0
  let momentum = 0

  // Enhanced mouse events
  slider.addEventListener("mousedown", (e) => {
    isDown = true
    slider.classList.add("active")
    startX = e.pageX - slider.offsetLeft
    scrollLeft = slider.scrollLeft
    velocity = 0
  })

  slider.addEventListener("mouseleave", () => {
    isDown = false
    slider.classList.remove("active")
    applyMomentum()
  })

  slider.addEventListener("mouseup", () => {
    isDown = false
    slider.classList.remove("active")
    applyMomentum()
  })

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - slider.offsetLeft
    const walk = (x - startX) * 2
    velocity = walk - (slider.scrollLeft - scrollLeft)
    slider.scrollLeft = scrollLeft - walk
  })

  // Enhanced touch events
  let touchStartX = 0
  let touchScrollLeft = 0

  slider.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.touches[0].clientX
      touchScrollLeft = slider.scrollLeft
      velocity = 0
    },
    { passive: true },
  )

  slider.addEventListener(
    "touchmove",
    (e) => {
      const touchX = e.touches[0].clientX
      const walk = (touchStartX - touchX) * 1.5
      velocity = walk - (slider.scrollLeft - touchScrollLeft)
      slider.scrollLeft = touchScrollLeft + walk
    },
    { passive: true },
  )

  slider.addEventListener("touchend", () => {
    applyMomentum()
  })

  function applyMomentum() {
    if (Math.abs(velocity) > 1) {
      momentum = velocity * 0.95
      const animate = () => {
        slider.scrollLeft += momentum
        momentum *= 0.95
        if (Math.abs(momentum) > 0.5) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }

  // Auto-scroll functionality
  let autoScrollInterval
  let isUserInteracting = false

  function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
      if (!isUserInteracting) {
        const maxScroll = slider.scrollWidth - slider.clientWidth
        if (slider.scrollLeft >= maxScroll) {
          slider.scrollTo({ left: 0, behavior: "smooth" })
        } else {
          slider.scrollBy({ left: 300, behavior: "smooth" })
        }
      }
    }, 4000)
  }

  function stopAutoScroll() {
    clearInterval(autoScrollInterval)
  }

  // Pause auto-scroll on interaction
  slider.addEventListener("mouseenter", () => {
    isUserInteracting = true
    stopAutoScroll()
  })

  slider.addEventListener("mouseleave", () => {
    isUserInteracting = false
    startAutoScroll()
  })

  // Start auto-scroll
  startAutoScroll()
}

// Advanced testimonial rotation with smooth transitions
function initTestimonialRotation() {
  const testimonials = document.querySelectorAll(".testimonial-card")
  if (testimonials.length === 0) return

  let currentIndex = 0
  let rotationInterval

  // Add active class to first testimonial
  testimonials[0].classList.add("active")

  function rotateTestimonials() {
    // Remove active class from current
    testimonials[currentIndex].classList.remove("active")
    testimonials[currentIndex].style.transform = "scale(0.95) translateY(20px)"
    testimonials[currentIndex].style.opacity = "0.7"

    // Move to next testimonial
    currentIndex = (currentIndex + 1) % testimonials.length

    // Add active class to new current
    setTimeout(() => {
      testimonials[currentIndex].classList.add("active")
      testimonials[currentIndex].style.transform = "scale(1) translateY(0)"
      testimonials[currentIndex].style.opacity = "1"
    }, 300)

    // Reset previous testimonial
    setTimeout(() => {
      testimonials.forEach((testimonial, index) => {
        if (index !== currentIndex) {
          testimonial.style.transform = "scale(1) translateY(0)"
          testimonial.style.opacity = "1"
        }
      })
    }, 600)
  }

  function startRotation() {
    rotationInterval = setInterval(rotateTestimonials, 6000)
  }

  function stopRotation() {
    clearInterval(rotationInterval)
  }

  // Pause rotation on hover
  testimonials.forEach((testimonial) => {
    testimonial.addEventListener("mouseenter", stopRotation)
    testimonial.addEventListener("mouseleave", startRotation)
  })

  // Start rotation
  startRotation()
}

// Dashboard animation with real-time updates
function initDashboardAnimation() {
  const dashboard = document.querySelector(".cyber-dashboard")
  if (!dashboard) return

  const metricBars = dashboard.querySelectorAll(".metric-fill")
  const nodes = dashboard.querySelectorAll(".node")
  const statusIndicator = dashboard.querySelector(".status-indicator--secure")

  // Animate metric bars with random updates
  function updateMetrics() {
    metricBars.forEach((bar, index) => {
      const currentWidth = Number.parseInt(bar.style.width) || 0
      const targetWidth = Math.max(70, Math.min(98, currentWidth + (Math.random() - 0.5) * 10))

      bar.style.transition = "width 1s ease"
      bar.style.width = targetWidth + "%"

      // Update bar color based on value
      if (targetWidth > 90) {
        bar.style.background = "var(--gradient-accent)"
      } else if (targetWidth > 75) {
        bar.style.background = "var(--gradient-primary)"
      } else {
        bar.style.background = "linear-gradient(135deg, var(--warning-color), var(--danger-color))"
      }
    })
  }

  // Animate nodes with status changes
  function updateNodes() {
    nodes.forEach((node, index) => {
      const isActive = Math.random() > 0.2 // 80% chance to be active

      if (isActive) {
        node.className = "node node--active"
        node.style.background = "var(--success-color)"
        node.style.boxShadow = "0 0 8px rgba(16, 185, 129, 0.5)"
      } else {
        node.className = "node node--warning"
        node.style.background = "var(--warning-color)"
        node.style.boxShadow = "0 0 8px rgba(245, 158, 11, 0.5)"
      }
    })
  }

  // Status indicator pulse
  function updateStatus() {
    if (statusIndicator) {
      statusIndicator.style.animation = "none"
      setTimeout(() => {
        statusIndicator.style.animation = "pulse 2s infinite"
      }, 10)
    }
  }

  // Initial animation
  setTimeout(() => {
    updateMetrics()
    updateNodes()
    updateStatus()
  }, 1000)

  // Regular updates
  setInterval(updateMetrics, 5000)
  setInterval(updateNodes, 7000)
  setInterval(updateStatus, 3000)
}

// Particle system for enhanced visual effects
function initParticleSystem() {
  const hero = document.querySelector(".hero")
  if (!hero) return

  const particleContainer = document.createElement("div")
  particleContainer.className = "particle-system"
  particleContainer.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    overflow: hidden;
    z-index: 0;
  `

  hero.appendChild(particleContainer)

  function createParticle() {
    const particle = document.createElement("div")
    particle.className = "floating-particle"

    const size = Math.random() * 4 + 2
    const startX = Math.random() * window.innerWidth
    const duration = Math.random() * 20 + 15
    const delay = Math.random() * 5

    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: rgba(0, 212, 255, ${Math.random() * 0.5 + 0.2});
      border-radius: 50%;
      left: ${startX}px;
      bottom: -10px;
      animation: floatUp ${duration}s linear ${delay}s infinite;
      box-shadow: 0 0 ${size * 2}px rgba(0, 212, 255, 0.3);
    `

    particleContainer.appendChild(particle)

    setTimeout(
      () => {
        particle.remove()
      },
      (duration + delay) * 1000,
    )
  }

  // Create particles periodically
  setInterval(createParticle, 2000)

  // Add CSS animation for floating particles
  if (!document.querySelector("#particle-animations")) {
    const style = document.createElement("style")
    style.id = "particle-animations"
    style.textContent = `
      @keyframes floatUp {
        0% {
          transform: translateY(0) translateX(0) rotate(0deg);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px) rotate(360deg);
          opacity: 0;
        }
      }
      
      @keyframes glowPulse {
        0%, 100% {
          opacity: 0.3;
          transform: scale(1);
        }
        50% {
          opacity: 0.6;
          transform: scale(1.1);
        }
      }
      
      @keyframes rippleExpand {
        0% {
          transform: translate(-50%, -50%) scale(0);
          opacity: 1;
        }
        100% {
          transform: translate(-50%, -50%) scale(2);
          opacity: 0;
        }
      }
      
      @keyframes packetFlow {
        0% {
          transform: translateX(-50%) translateY(0);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateX(-50%) translateY(400px);
          opacity: 0;
        }
      }
    `
    document.head.appendChild(style)
  }
}

// Enhanced scroll-triggered animations
function initAdvancedScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target

        // Add staggered animation for grid items
        if (
          element.classList.contains("offerings__grid") ||
          element.classList.contains("features__grid") ||
          element.classList.contains("industries__slider")
        ) {
          const items = element.children
          Array.from(items).forEach((item, index) => {
            setTimeout(() => {
              item.style.opacity = "1"
              item.style.transform = "translateY(0)"
            }, index * 100)
          })
        }

        observer.unobserve(element)
      }
    })
  }, observerOptions)

  // Observe grid containers
  document.querySelectorAll(".offerings__grid, .features__grid, .industries__slider").forEach((grid) => {
    // Initially hide items
    Array.from(grid.children).forEach((item) => {
      item.style.opacity = "0"
      item.style.transform = "translateY(30px)"
      item.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
    })

    observer.observe(grid)
  })
}

// Mouse trail effect for hero section
function initMouseTrail() {
  const hero = document.querySelector(".hero")
  if (!hero) return

  const trail = []
  const trailLength = 20

  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    trail.push({ x, y, time: Date.now() })

    if (trail.length > trailLength) {
      trail.shift()
    }

    updateTrail()
  })

  function updateTrail() {
    const existingTrail = hero.querySelectorAll(".mouse-trail-dot")
    existingTrail.forEach((dot) => dot.remove())

    trail.forEach((point, index) => {
      const dot = document.createElement("div")
      dot.className = "mouse-trail-dot"

      const opacity = ((index + 1) / trail.length) * 0.5
      const size = ((index + 1) / trail.length) * 8 + 2

      dot.style.cssText = `
        position: absolute;
        left: ${point.x}px;
        top: ${point.y}px;
        width: ${size}px;
        height: ${size}px;
        background: rgba(0, 212, 255, ${opacity});
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%);
        transition: all 0.1s ease;
        box-shadow: 0 0 ${size}px rgba(0, 212, 255, ${opacity * 0.5});
      `

      hero.appendChild(dot)
    })
  }
}
