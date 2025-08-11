// Main JavaScript functionality for Complixen website

document.addEventListener("DOMContentLoaded", () => {
  initPreloader()
  initNavigation()
  initScrollEffects()
  initAnimations()
  initForms()
  initScrollReveal()
})

// Preloader functionality
function initPreloader() {
  const preloader = document.getElementById("preloader")
  const progressBar = document.getElementById("progress-bar")
  const status = document.getElementById("preloader-status")

  if (!preloader) return

  const loadingSteps = [
    { progress: 20, text: "Loading security protocols..." },
    { progress: 40, text: "Initializing threat detection..." },
    { progress: 60, text: "Establishing secure connection..." },
    { progress: 80, text: "Verifying compliance frameworks..." },
    { progress: 100, text: "Security systems online!" },
  ]

  let currentStep = 0

  function updateProgress() {
    if (currentStep < loadingSteps.length) {
      const step = loadingSteps[currentStep]
      progressBar.style.width = step.progress + "%"
      status.textContent = step.text
      currentStep++

      setTimeout(updateProgress, 600)
    } else {
      setTimeout(() => {
        preloader.classList.add("hidden")
        document.body.style.overflow = ""

        // Trigger initial animations
        setTimeout(() => {
          initScrollReveal()
        }, 300)
      }, 500)
    }
  }

  // Prevent scrolling during preload
  document.body.style.overflow = "hidden"

  // Start loading animation
  setTimeout(updateProgress, 500)
}

// Navigation functionality
function initNavigation() {
  const header = document.getElementById("header")
  const navToggle = document.getElementById("nav-toggle")
  const navMenu = document.getElementById("nav-menu")
  const navClose = document.getElementById("nav-close")
  const navLinks = document.querySelectorAll(".nav__link")

  // Advanced header scroll effect with throttling
  let ticking = false

  function updateHeader() {
    const scrollY = window.scrollY

    if (scrollY >= 100) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }

    ticking = false
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateHeader)
      ticking = true
    }
  }

  // Mobile menu functionality
  function showMenu() {
    navMenu.classList.add("show")
    document.body.style.overflow = "hidden"

    // Animate menu items
    const menuItems = navMenu.querySelectorAll(".nav__link")
    menuItems.forEach((item, index) => {
      item.style.opacity = "0"
      item.style.transform = "translateX(30px)"
      setTimeout(() => {
        item.style.transition = "all 0.3s ease"
        item.style.opacity = "1"
        item.style.transform = "translateX(0)"
      }, index * 100)
    })
  }

  function hideMenu() {
    navMenu.classList.remove("show")
    document.body.style.overflow = ""
  }

  // Event listeners
  window.addEventListener("scroll", requestTick, { passive: true })

  if (navToggle) {
    navToggle.addEventListener("click", showMenu)
  }

  if (navClose) {
    navClose.addEventListener("click", hideMenu)
  }

  // Close menu when clicking on nav links (mobile)
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        hideMenu()
      }
    })
  })

  // Close menu when clicking outside (mobile)
  navMenu.addEventListener("click", (e) => {
    if (e.target === navMenu) {
      hideMenu()
    }
  })

  // Enhanced dropdown functionality
  const dropdowns = document.querySelectorAll(".nav__dropdown")
  dropdowns.forEach((dropdown) => {
    const link = dropdown.querySelector(".nav__link")
    const menu = dropdown.querySelector(".nav__dropdown-menu")
    let timeout

    if (window.innerWidth > 768) {
      dropdown.addEventListener("mouseenter", () => {
        clearTimeout(timeout)
        menu.style.display = "block"
        setTimeout(() => {
          menu.style.opacity = "1"
          menu.style.visibility = "visible"
          menu.style.transform = "translateY(0)"
        }, 10)
      })

      dropdown.addEventListener("mouseleave", () => {
        timeout = setTimeout(() => {
          menu.style.opacity = "0"
          menu.style.visibility = "hidden"
          menu.style.transform = "translateY(-10px)"
          setTimeout(() => {
            menu.style.display = "none"
          }, 300)
        }, 100)
      })
    }

    // Mobile dropdown
    link.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault()
        const isOpen = menu.style.display === "block"
        menu.style.display = isOpen ? "none" : "block"

        if (!isOpen) {
          const items = menu.querySelectorAll(".nav__dropdown-link")
          items.forEach((item, index) => {
            item.style.opacity = "0"
            item.style.transform = "translateX(20px)"
            setTimeout(() => {
              item.style.transition = "all 0.2s ease"
              item.style.opacity = "1"
              item.style.transform = "translateX(0)"
            }, index * 50)
          })
        }
      }
    })
  })
}

// Scroll effects and animations
function initScrollEffects() {
  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]')
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const headerHeight = document.getElementById("header").offsetHeight
        const targetPosition = targetElement.offsetTop - headerHeight - 20

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Parallax effect for hero section
  const hero = document.querySelector(".hero")
  if (hero) {
    let ticking = false

    function updateParallax() {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.3
      hero.style.transform = `translateY(${rate}px)`
      ticking = false
    }

    function requestParallaxTick() {
      if (!ticking) {
        requestAnimationFrame(updateParallax)
        ticking = true
      }
    }

    window.addEventListener("scroll", requestParallaxTick, { passive: true })
  }
}

// Scroll reveal animations
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right")

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.style.getPropertyValue("--delay") || "0s"
        const delayMs = Number.parseFloat(delay) * 1000

        setTimeout(() => {
          entry.target.classList.add("revealed")
        }, delayMs)

        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  revealElements.forEach((el) => {
    observer.observe(el)
  })
}

// Animations
function initAnimations() {
  // Counter animation for statistics
  const counters = document.querySelectorAll(".stat__number")
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target)
          counterObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 },
  )

  counters.forEach((counter) => {
    counterObserver.observe(counter)
  })

  function animateCounter(element) {
    const text = element.textContent
    const hasPercent = text.includes("%")
    const hasPlus = text.includes("+")
    const hasK = text.includes("K")

    let target = Number.parseInt(text.replace(/[^\d]/g, ""))
    if (hasK) target *= 1000

    const duration = 2000
    const step = target / (duration / 16)
    let current = 0

    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        let finalText = target.toString()
        if (hasK) finalText = Math.floor(target / 1000) + "K"
        if (hasPlus) finalText += "+"
        if (hasPercent) finalText += "%"
        element.textContent = finalText
        clearInterval(timer)
      } else {
        let displayValue = Math.floor(current)
        if (hasK) displayValue = Math.floor(current / 1000) + "K"
        if (hasPlus) displayValue += "+"
        if (hasPercent) displayValue += "%"
        element.textContent = displayValue
      }
    }, 16)
  }

  // Interactive security nodes
  const securityNodes = document.querySelectorAll(".security-node")
  securityNodes.forEach((node, index) => {
    node.addEventListener("click", () => {
      // Create ripple effect
      const ripple = document.createElement("div")
      ripple.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100px;
        height: 100px;
        background: rgba(0, 212, 255, 0.3);
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
      `

      node.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)

      // Add CSS animation if not exists
      if (!document.querySelector("#ripple-animation")) {
        const style = document.createElement("style")
        style.id = "ripple-animation"
        style.textContent = `
          @keyframes ripple {
            to {
              transform: translate(-50%, -50%) scale(2);
              opacity: 0;
            }
          }
        `
        document.head.appendChild(style)
      }
    })

    // Add hover effects
    node.addEventListener("mouseenter", () => {
      node.style.transform = "scale(1.1)"
      node.style.boxShadow = "var(--shadow-glow), var(--shadow-2xl)"
    })

    node.addEventListener("mouseleave", () => {
      node.style.transform = "scale(1)"
      node.style.boxShadow = ""
    })
  })

  // Testimonial card interactions
  const testimonialCards = document.querySelectorAll(".testimonial-card")
  testimonialCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const quote = card.querySelector(".testimonial-card__quote")
      const author = card.querySelector(".testimonial-card__author")

      quote.style.transform = "translateY(-5px)"
      author.style.transform = "translateY(5px)"
    })

    card.addEventListener("mouseleave", () => {
      const quote = card.querySelector(".testimonial-card__quote")
      const author = card.querySelector(".testimonial-card__author")

      quote.style.transform = "translateY(0)"
      author.style.transform = "translateY(0)"
    })
  })
}

// Form handling
function initForms() {
  // Newsletter form
  const newsletterForm = document.getElementById("newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", handleNewsletterSubmit)
  }

  // Contact forms
  const contactForms = document.querySelectorAll(".contact-form")
  contactForms.forEach((form) => {
    form.addEventListener("submit", handleContactSubmit)
  })

  function handleNewsletterSubmit(e) {
    e.preventDefault()
    const email = e.target.querySelector('input[type="email"]').value
    const button = e.target.querySelector('button[type="submit"]')

    // Validate email
    if (!isValidEmail(email)) {
      showNotification("Please enter a valid email address", "error")
      return
    }

    // Show loading state
    const originalHTML = button.innerHTML
    button.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 12l4-4 4 4"/>
      </svg>
      Subscribing...
    `
    button.disabled = true

    // Simulate API call
    setTimeout(() => {
      // Reset form
      e.target.reset()
      button.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 6L9 17l-5-5"/>
        </svg>
        Subscribed!
      `
      button.style.background = "var(--success-color)"

      // Reset button after 3 seconds
      setTimeout(() => {
        button.innerHTML = originalHTML
        button.disabled = false
        button.style.background = ""
      }, 3000)

      // Show success message
      showNotification("Successfully subscribed to our newsletter!", "success")
    }, 1500)
  }

  function handleContactSubmit(e) {
    e.preventDefault()
    const button = e.target.querySelector('button[type="submit"]')

    // Show loading state
    const originalHTML = button.innerHTML
    button.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
        <circle cx="12" cy="12" r="10"/>
      </svg>
      Sending...
    `
    button.disabled = true

    // Simulate API call
    setTimeout(() => {
      // Reset form
      e.target.reset()
      button.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 6L9 17l-5-5"/>
        </svg>
        Message Sent!
      `
      button.style.background = "var(--success-color)"

      // Reset button after 3 seconds
      setTimeout(() => {
        button.innerHTML = originalHTML
        button.disabled = false
        button.style.background = ""
      }, 3000)

      // Show success message
      showNotification("Message sent successfully! We'll get back to you soon.", "success")
    }, 2000)
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
}

// Notification system
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification")
  existingNotifications.forEach((notification) => notification.remove())

  const notification = document.createElement("div")
  notification.className = `notification notification--${type}`

  const colors = {
    success: "var(--success-color)",
    error: "var(--danger-color)",
    warning: "var(--warning-color)",
    info: "var(--accent-color)",
  }

  const icons = {
    success: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>`,
    error: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
    warning: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    info: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  }

  notification.innerHTML = `
    <div style="display: flex; align-items: center; gap: 0.75rem;">
      ${icons[type]}
      <span>${message}</span>
    </div>
    <button class="notification__close" onclick="this.parentElement.remove()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
  `

  // Add styles
  Object.assign(notification.style, {
    position: "fixed",
    top: "2rem",
    right: "2rem",
    padding: "1rem 1.5rem",
    backgroundColor: colors[type],
    color: "white",
    borderRadius: "var(--radius-lg)",
    boxShadow: "var(--shadow-2xl)",
    zIndex: "10000",
    transform: "translateX(100%)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
    maxWidth: "400px",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  })

  // Style close button
  const closeButton = notification.querySelector(".notification__close")
  Object.assign(closeButton.style, {
    background: "none",
    border: "none",
    color: "white",
    cursor: "pointer",
    padding: "0.25rem",
    borderRadius: "var(--radius-sm)",
    transition: "all 0.2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })

  closeButton.addEventListener("mouseenter", () => {
    closeButton.style.backgroundColor = "rgba(255, 255, 255, 0.2)"
  })

  closeButton.addEventListener("mouseleave", () => {
    closeButton.style.backgroundColor = "transparent"
  })

  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => {
      if (notification.parentElement) {
        notification.remove()
      }
    }, 400)
  }, 5000)
}

// Utility functions
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

function throttle(func, limit) {
  let inThrottle
  return function () {
    const args = arguments
    
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Keyboard navigation support
document.addEventListener("keydown", (e) => {
  // ESC key closes mobile menu
  if (e.key === "Escape") {
    const navMenu = document.getElementById("nav-menu")
    if (navMenu && navMenu.classList.contains("show")) {
      navMenu.classList.remove("show")
      document.body.style.overflow = ""
    }
  }
})

// Add CSS for spin animation
const spinStyle = document.createElement("style")
spinStyle.textContent = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`
document.head.appendChild(spinStyle)

// Export functions for use in other scripts
window.ComplixenUtils = {
  showNotification,
  debounce,
  throttle,
}

// Initialize intersection observer for performance
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
}

// Lazy loading for images
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target
      if (img.dataset.src) {
        img.src = img.dataset.src
        img.removeAttribute("data-src")
        imageObserver.unobserve(img)
      }
    }
  })
}, observerOptions)

// Observe all images with data-src
document.querySelectorAll("img[data-src]").forEach((img) => {
  imageObserver.observe(img)
})
