// Services page specific JavaScript functionality

document.addEventListener("DOMContentLoaded", () => {
  initServiceCardAnimations()
  initHoverEffects()
  initConstellationAnimation()
  initServiceFiltering()
  initScrollAnimations()
})

// Service card animations
function initServiceCardAnimations() {
  const serviceCards = document.querySelectorAll(".service-card")
  
  serviceCards.forEach((card, index) => {
    // Add entrance animation delay
    card.style.opacity = "0"
    card.style.transform = "translateY(50px)"
    
    setTimeout(() => {
      card.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
      card.style.opacity = "1"
      card.style.transform = "translateY(0)"
    }, index * 150 + 500)
    
    // Enhanced hover interactions
    card.addEventListener("mouseenter", () => {
      // Pause other animations
      serviceCards.forEach(otherCard => {
        if (otherCard !== card) {
          otherCard.style.opacity = "0.7"
          otherCard.style.transform = "scale(0.98)"
        }
      })
      
      // Add glow effect
      card.style.boxShadow = "var(--shadow-glow), var(--shadow-2xl)"
      
      // Animate feature tags
      const featureTags = card.querySelectorAll(".feature-tag")
      featureTags.forEach((tag, tagIndex) => {
        setTimeout(() => {
          tag.style.transform = "translateY(-4px) scale(1.05)"
        }, tagIndex * 50)
      })
    })
    
    card.addEventListener("mouseleave", () => {
      // Reset other cards
      serviceCards.forEach(otherCard => {
        otherCard.style.opacity = "1"
        otherCard.style.transform = "scale(1)"
      })
      
      // Reset feature tags
      const featureTags = card.querySelectorAll(".feature-tag")
      featureTags.forEach(tag => {
        tag.style.transform = "translateY(0) scale(1)"
      })
    })
    
    // Click interaction
    card.addEventListener("click", (e) => {
      if (!e.target.closest(".service-card__link")) {
        const link = card.querySelector(".service-card__link")
        if (link) {
          // Create ripple effect
          createRippleEffect(e, card)
          
          // Navigate after animation
          setTimeout(() => {
            window.location.href = link.href
          }, 300)
        }
      }
    })
  })
}

// Enhanced hover effects
function initHoverEffects() {
  const serviceCards = document.querySelectorAll(".service-card")
  
  serviceCards.forEach(card => {
    const hoverContent = card.querySelector(".service-card__hover-content")
    const icon = card.querySelector(".service-card__icon")
    
    if (hoverContent) {
      // Stagger animation for hover content list items
      const listItems = hoverContent.querySelectorAll(".hover-content__list li")
      
      card.addEventListener("mouseenter", () => {
        listItems.forEach((item, index) => {
          item.style.opacity = "0"
          item.style.transform = "translateX(-20px)"
          
          setTimeout(() => {
            item.style.transition = "all 0.3s ease"
            item.style.opacity = "1"
            item.style.transform = "translateX(0)"
          }, index * 100 + 200)
        })
        
        // Icon rotation effect
        if (icon) {
          icon.style.transform = "scale(1.1) rotate(360deg)"
        }
      })
      
      card.addEventListener("mouseleave", () => {
        listItems.forEach(item => {
          item.style.opacity = "1"
          item.style.transform = "translateX(0)"
          item.style.transition = "none"
        })
        
        // Reset icon
        if (icon) {
          icon.style.transform = "scale(1) rotate(0deg)"
        }
      })
    }
  })
}

// Constellation animation
function initConstellationAnimation() {
  const constellation = document.querySelector(".cyber-constellation")
  if (!constellation) return
  
  const nodes = constellation.querySelectorAll(".constellation-node")
  const connections = constellation.querySelectorAll(".constellation-connection")
  
  // Add interactive effects
  nodes.forEach((node, index) => {
    node.addEventListener("mouseenter", () => {
      node.style.transform = "scale(1.5)"
      node.style.boxShadow = "0 0 30px rgba(0, 212, 255, 1)"
      
      // Highlight connected lines
      connections.forEach(connection => {
        connection.style.opacity = "1"
        connection.style.background = "linear-gradient(to bottom, var(--accent-color), var(--accent-secondary), var(--accent-color))"
      })
    })
    
    node.addEventListener("mouseleave", () => {
      node.style.transform = "scale(1)"
      node.style.boxShadow = "0 0 20px rgba(0, 212, 255, 0.6)"
      
      // Reset connections
      connections.forEach(connection => {
        connection.style.opacity = "0.6"
        connection.style.background = "linear-gradient(to bottom, transparent, var(--accent-color), transparent)"
      })
    })
    
    // Random pulse effect
    setInterval(() => {
      if (!node.matches(":hover")) {
        node.style.animation = "none"
        setTimeout(() => {
          node.style.animation = "constellationPulse 3s ease-in-out infinite"
        }, 10)
      }
    }, 5000 + index * 1000)
  })
  
  // Dynamic connection animation
  connections.forEach((connection, index) => {
    setInterval(() => {
      connection.style.animationDuration = `${3 + Math.random() * 2}s`
    }, 4000 + index * 500)
  })
}

// Service filtering (for future enhancement)
function initServiceFiltering() {
  // This can be expanded to add filtering functionality
  const serviceCards = document.querySelectorAll(".service-card")
  
  // Add data attributes for filtering
  serviceCards.forEach(card => {
    const title = card.querySelector(".service-card__title").textContent.toLowerCase()
    const features = Array.from(card.querySelectorAll(".feature-tag")).map(tag => tag.textContent.toLowerCase())
    
    card.dataset.category = title.replace(/\s+/g, "-")
    card.dataset.features = features.join(",")
  })
}

// Advanced scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target
        
        // Special animation for services container
        if (element.classList.contains("services__container")) {
          const cards = element.querySelectorAll(".service-card")
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("animate-in")
            }, index * 100)
          })
        }
        
        // CTA section animation
        if (element.classList.contains("cta__content")) {
          const title = element.querySelector(".cta__title")
          const description = element.querySelector(".cta__description")
          const actions = element.querySelector(".cta__actions")
          
          setTimeout(() => title.style.opacity = "1", 200)
          setTimeout(() => description.style.opacity = "1", 400)
          setTimeout(() => actions.style.opacity = "1", 600)
        }
        
        observer.unobserve(element)
      }
    })
  }, observerOptions)
  
  // Observe elements
  document.querySelectorAll(".services__container, .cta__content").forEach(el => {
    observer.observe(el)
  })
  
  // Initially hide CTA elements
  const ctaElements = document.querySelectorAll(".cta__title, .cta__description, .cta__actions")
  ctaElements.forEach(el => {
    el.style.opacity = "0"
    el.style.transition = "opacity 0.8s ease"
  })
}

// Utility function for ripple effect
function createRippleEffect(event, element) {
  const ripple = document.createElement("div")
  const rect = element.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height)
  const x = event.clientX - rect.left - size / 2
  const y = event.clientY - rect.top - size / 2
  
  ripple.style.cssText = `
    position: absolute;
    top: ${y}px;
    left: ${x}px;
    width: ${size}px;
    height: ${size}px;
    background: rgba(0, 212, 255, 0.3);
    border-radius: 50%;
    transform: scale(0);
    animation: rippleExpand 0.6s ease-out;
    pointer-events: none;
    z-index: 10;
  `
  
  element.appendChild(ripple)
  
  setTimeout(() => {
    ripple.remove()
  }, 600)
}

// Add CSS for animations
const style = document.createElement("style")
style.textContent = `
  .animate-in {
    animation: slideInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
  }
  
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes rippleExpand {
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
`
document.head.appendChild(style)

// Performance optimization
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Optimize scroll and resize events
window.addEventListener("scroll", debounce(() => {
  // Additional scroll-based animations can be added here
}, 16))

window.addEventListener("resize", debounce(() => {
  // Handle responsive adjustments
}, 250))
