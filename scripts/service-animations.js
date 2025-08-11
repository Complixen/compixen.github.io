// Service-specific animations and interactions

document.addEventListener("DOMContentLoaded", () => {
  initServiceAnimations()
  initInteractiveElements()
  initScrollTriggers()
})

// Initialize service-specific animations
function initServiceAnimations() {
  // Cloud Security Animation
  initCloudAnimation()
  
  // Application Security Animation
  initAppSecurityAnimation()
  
  // SOC Animation
  initSOCAnimation()
  
  // GRC Animation
  initGRCAnimation()
  
  // Staff Augmentation Animation
  initStaffAnimation()
  
  // Incident Response Animation
  initIncidentAnimation()
}

// Cloud Security Animation
function initCloudAnimation() {
  const cloudAnimation = document.querySelector('.cloud-animation')
  if (!cloudAnimation) return
  
  const providers = cloudAnimation.querySelectorAll('.provider-node')
  const layers = cloudAnimation.querySelectorAll('.security-layer')
  
  // Add hover effects to provider nodes
  providers.forEach((provider, index) => {
    provider.addEventListener('mouseenter', () => {
      provider.style.transform = 'scale(1.1)'
      provider.style.boxShadow = 'var(--shadow-glow)'
      
      // Highlight corresponding security layer
      if (layers[index]) {
        layers[index].style.borderColor = 'var(--accent-secondary)'
        layers[index].style.opacity = '0.8'
      }
    })
    
    provider.addEventListener('mouseleave', () => {
      provider.style.transform = 'scale(1)'
      provider.style.boxShadow = 'none'
      
      if (layers[index]) {
        layers[index].style.borderColor = 'var(--accent-color)'
        layers[index].style.opacity = '0.3'
      }
    })
  })
}

// Application Security Animation
function initAppSecurityAnimation() {
  const appAnimation = document.querySelector('.app-security-animation')
  if (!appAnimation) return
  
  const layers = appAnimation.querySelectorAll('.app-layer')
  const scanLines = appAnimation.querySelectorAll('.scan-line')
  
  // Add click interactions to layers
  layers.forEach((layer, index) => {
    layer.addEventListener('click', () => {
      // Highlight clicked layer
      layers.forEach(l => l.style.opacity = '0.5')
      layer.style.opacity = '1'
      layer.style.transform = 'translateX(10px) scale(1.05)'
      
      // Activate corresponding scan line
      if (scanLines[index]) {
        scanLines[index].style.background = 'var(--gradient-secondary)'
        scanLines[index].style.width = '4px'
      }
      
      // Reset after 2 seconds
      setTimeout(() => {
        layers.forEach(l => {
          l.style.opacity = '1'
          l.style.transform = 'translateX(0) scale(1)'
        })
        if (scanLines[index]) {
          scanLines[index].style.background = 'var(--gradient-primary)'
          scanLines[index].style.width = '2px'
        }
      }, 2000)
    })
  })
}

// SOC Animation
function initSOCAnimation() {
  const socAnimation = document.querySelector('.soc-animation')
  if (!socAnimation) return
  
  const socLogo = socAnimation.querySelector('.soc-logo')
  const threatDots = socAnimation.querySelectorAll('.threat-dot')
  const dataStreams = socAnimation.querySelectorAll('.data-stream')
  
  if (socLogo) {
    socLogo.addEventListener('click', () => {
      // Trigger alert mode
      socLogo.style.background = 'var(--gradient-danger)'
      
      // Make threat dots more active
      threatDots.forEach(dot => {
        dot.style.background = 'var(--accent-secondary)'
        dot.style.animation = 'threatBlink 0.5s ease-in-out infinite'
      })
      
      // Increase data stream activity
      dataStreams.forEach(stream => {
        stream.style.background = 'linear-gradient(to bottom, transparent, var(--danger-color), transparent)'
        stream.style.animation = 'streamFlow 1s ease-in-out infinite'
      })
      
      // Reset after 3 seconds
      setTimeout(() => {
        socLogo.style.background = 'var(--gradient-primary)'
        threatDots.forEach(dot => {
          dot.style.background = 'var(--danger-color)'
          dot.style.animation = 'threatBlink 2s ease-in-out infinite'
        })
        dataStreams.forEach(stream => {
          stream.style.background = 'linear-gradient(to bottom, transparent, var(--accent-color), transparent)'
          stream.style.animation = 'streamFlow 2s ease-in-out infinite'
        })
      }, 3000)
    })
  }
}

// GRC Animation
function initGRCAnimation() {
  const grcAnimation = document.querySelector('.grc-animation')
  if (!grcAnimation) return
  
  const grcNodes = grcAnimation.querySelectorAll('.grc-node')
  const grcLines = grcAnimation.querySelectorAll('.grc-line')
  const grcCenter = grcAnimation.querySelector('.grc-logo')
  
  grcNodes.forEach((node, index) => {
    node.addEventListener('mouseenter', () => {
      // Highlight the node
      node.style.transform = 'scale(1.2)'
      node.style.boxShadow = '0 0 20px var(--accent-color)'
      
      // Highlight connected lines
      grcLines.forEach(line => {
        line.style.opacity = '1'
        line.style.boxShadow = '0 0 10px var(--accent-color)'
      })
      
      // Spin center faster
      if (grcCenter) {
        grcCenter.style.animation = 'grcCenterSpin 2s linear infinite'
      }
    })
    
    node.addEventListener('mouseleave', () => {
      node.style.transform = 'scale(1)'
      node.style.boxShadow = '0 0 0 0 rgba(0, 212, 255, 0.4)'
      
      grcLines.forEach(line => {
        line.style.opacity = '0.5'
        line.style.boxShadow = 'none'
      })
      
      if (grcCenter) {
        grcCenter.style.animation = 'grcCenterSpin 6s linear infinite'
      }
    })
  })
}

// Staff Augmentation Animation
function initStaffAnimation() {
  const staffAnimation = document.querySelector('.staff-animation')
  if (!staffAnimation) return
  
  const teamMembers = staffAnimation.querySelectorAll('.team-member')
  const centerLogo = staffAnimation.querySelector('.augmentation-icon')
  
  teamMembers.forEach((member, index) => {
    member.addEventListener('mouseenter', () => {
      // Highlight the member
      const avatar = member.querySelector('.member-avatar')
      const title = member.querySelector('.member-title')
      
      if (avatar) {
        avatar.style.transform = 'scale(1.2)'
        avatar.style.boxShadow = 'var(--shadow-glow)'
      }
      
      if (title) {
        title.style.color = 'var(--accent-color)'
        title.style.fontWeight = '700'
      }
      
      // Pulse center logo
      if (centerLogo) {
        centerLogo.style.transform = 'translate(-50%, -50%) scale(1.1)'
      }
    })
    
    member.addEventListener('mouseleave', () => {
      const avatar = member.querySelector('.member-avatar')
      const title = member.querySelector('.member-title')
      
      if (avatar) {
        avatar.style.transform = 'scale(1)'
        avatar.style.boxShadow = 'none'
      }
      
      if (title) {
        title.style.color = 'var(--text-light)'
        title.style.fontWeight = '600'
      }
      
      if (centerLogo) {
        centerLogo.style.transform = 'translate(-50%, -50%) scale(1)'
      }
    })
  })
}

// Incident Response Animation
function initIncidentAnimation() {
  const incidentAnimation = document.querySelector('.incident-animation')
  if (!incidentAnimation) return
  
  const alertIcon = incidentAnimation.querySelector('.alert-icon')
  const phaseNodes = incidentAnimation.querySelectorAll('.phase-node')
  const waves = incidentAnimation.querySelectorAll('.wave')
  
  if (alertIcon) {
    alertIcon.addEventListener('click', () => {
      // Trigger incident response sequence
      alertIcon.style.color = 'var(--accent-secondary)'
      alertIcon.style.animation = 'alertPulse 0.5s ease-in-out infinite'
      
      // Activate phases in sequence
      phaseNodes.forEach((phase, index) => {
        setTimeout(() => {
          phase.style.opacity = '1'
          phase.style.transform = `translate(-50%, -50%) rotate(var(--angle)) translateY(-130px) scale(1.2)`
          
          const phaseIcon = phase.querySelector('.phase-icon')
          if (phaseIcon) {
            phaseIcon.style.background = 'var(--gradient-secondary)'
            phaseIcon.style.boxShadow = 'var(--shadow-glow)'
          }
          
          // Reset phase after 1 second
          setTimeout(() => {
            phase.style.opacity = '0.6'
            phase.style.transform = `translate(-50%, -50%) rotate(var(--angle)) translateY(-120px) scale(1)`
            if (phaseIcon) {
              phaseIcon.style.background = 'var(--gradient-primary)'
              phaseIcon.style.boxShadow = 'none'
            }
          }, 1000)
        }, index * 500)
      })
      
      // Activate waves
      waves.forEach((wave, index) => {
        setTimeout(() => {
          wave.style.animation = 'waveExpand 2s ease-out'
        }, index * 300)
      })
      
      // Reset after sequence completes
      setTimeout(() => {
        alertIcon.style.color = 'var(--danger-color)'
        alertIcon.style.animation = 'alertPulse 2s ease-in-out infinite'
        waves.forEach(wave => {
          wave.style.animation = 'waveExpand 3s ease-out infinite'
        })
      }, 4000)
    })
  }
}

// Initialize interactive elements
function initInteractiveElements() {
  // Add click-to-copy functionality for contact information
  const contactItems = document.querySelectorAll('.footer__contact-item')
  
  contactItems.forEach(item => {
    const link = item.querySelector('a')
    if (link && (link.href.includes('mailto:') || link.href.includes('tel:'))) {
      item.style.cursor = 'pointer'
      item.addEventListener('click', () => {
        const text = link.textContent
        navigator.clipboard.writeText(text).then(() => {
          // Show copied feedback
          const originalText = item.innerHTML
          item.innerHTML = '<span style="color: var(--success-color);">Copied!</span>'
          setTimeout(() => {
            item.innerHTML = originalText
          }, 2000)
        })
      })
    }
  })
}

// Initialize scroll-triggered animations
function initScrollTriggers() {
  const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target
        
        // Trigger service-specific animations when they come into view
        if (element.classList.contains('cloud-animation')) {
          triggerCloudSequence()
        } else if (element.classList.contains('app-security-animation')) {
          triggerAppSecuritySequence()
        } else if (element.classList.contains('soc-animation')) {
          triggerSOCSequence()
        } else if (element.classList.contains('grc-animation')) {
          triggerGRCSequence()
        } else if (element.classList.contains('staff-animation')) {
          triggerStaffSequence()
        } else if (element.classList.contains('incident-animation')) {
          triggerIncidentSequence()
        }
        
        observer.unobserve(element)
      }
    })
  }, observerOptions)
  
  // Observe all service animations
  document.querySelectorAll('.cloud-animation, .app-security-animation, .soc-animation, .grc-animation, .staff-animation, .incident-animation').forEach(el => {
    observer.observe(el)
  })
}

// Animation sequence triggers
function triggerCloudSequence() {
  const providers = document.querySelectorAll('.provider-node')
  const layers = document.querySelectorAll('.security-layer')
  
  providers.forEach((provider, index) => {
    setTimeout(() => {
      provider.style.animation = 'providerPulse 2s ease-in-out'
    }, index * 200)
  })
  
  layers.forEach((layer, index) => {
    setTimeout(() => {
      layer.style.animation = 'layerExpand 3s ease-in-out infinite'
    }, index * 300 + 500)
  })
}

function triggerAppSecuritySequence() {
  const layers = document.querySelectorAll('.app-layer')
  const scanLines = document.querySelectorAll('.scan-line')
  
  layers.forEach((layer, index) => {
    setTimeout(() => {
      layer.style.animation = 'layerSlide 2s ease-in-out'
    }, index * 150)
  })
  
  setTimeout(() => {
    scanLines.forEach((line, index) => {
      setTimeout(() => {
        line.style.animation = 'scanMove 1.5s linear infinite'
      }, index * 200)
    })
  }, 800)
}

function triggerSOCSequence() {
  const socLogo = document.querySelector('.soc-logo')
  const threatDots = document.querySelectorAll('.threat-dot')
  const dataStreams = document.querySelectorAll('.data-stream')
  
  if (socLogo) {
    socLogo.style.animation = 'socPulse 1.5s ease-in-out infinite'
  }
  
  setTimeout(() => {
    threatDots.forEach((dot, index) => {
      setTimeout(() => {
        dot.style.animation = 'threatBlink 1.5s ease-in-out infinite'
      }, index * 100)
    })
  }, 300)
  
  setTimeout(() => {
    dataStreams.forEach((stream, index) => {
      setTimeout(() => {
        stream.style.animation = 'streamFlow 1.5s ease-in-out infinite'
      }, index * 150)
    })
  }, 600)
}

function triggerGRCSequence() {
  const grcNodes = document.querySelectorAll('.grc-node')
  const grcLines = document.querySelectorAll('.grc-line')
  const grcCenter = document.querySelector('.grc-logo')
  
  grcNodes.forEach((node, index) => {
    setTimeout(() => {
      node.style.animation = 'grcNodePulse 2s ease-in-out infinite'
    }, index * 200)
  })
  
  setTimeout(() => {
    grcLines.forEach((line, index) => {
      setTimeout(() => {
        line.style.animation = 'grcLineGlow 3s ease-in-out infinite'
      }, index * 150)
    })
  }, 600)
  
  if (grcCenter) {
    setTimeout(() => {
      grcCenter.style.animation = 'grcCenterSpin 4s linear infinite'
    }, 800)
  }
}

function triggerStaffSequence() {
  const teamMembers = document.querySelectorAll('.team-member')
  const centerLogo = document.querySelector('.augmentation-icon')
  
  teamMembers.forEach((member, index) => {
    setTimeout(() => {
      member.style.animation = 'memberFloat 3s ease-in-out infinite'
    }, index * 150)
  })
  
  if (centerLogo) {
    setTimeout(() => {
      centerLogo.style.animation = 'augmentationPulse 2s ease-in-out infinite'
    }, 500)
  }
}

function triggerIncidentSequence() {
  const alertIcon = document.querySelector('.alert-icon')
  const phaseNodes = document.querySelectorAll('.phase-node')
  const waves = document.querySelectorAll('.wave')
  
  if (alertIcon) {
    alertIcon.style.animation = 'alertPulse 1.5s ease-in-out infinite'
  }
  
  setTimeout(() => {
    phaseNodes.forEach((phase, index) => {
      setTimeout(() => {
        phase.style.animation = 'phaseActivate 3s ease-in-out infinite'
      }, index * 200)
    })
  }, 300)
  
  setTimeout(() => {
    waves.forEach((wave, index) => {
      setTimeout(() => {
        wave.style.animation = 'waveExpand 2.5s ease-out infinite'
      }, index * 300)
    })
  }, 800)
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

// Performance optimization for animations
function optimizeAnimations() {
  // Pause animations when page is not visible
  document.addEventListener('visibilitychange', () => {
    const animations = document.querySelectorAll('[style*="animation"]')
    
    if (document.hidden) {
      animations.forEach(el => {
        el.style.animationPlayState = 'paused'
      })
    } else {
      animations.forEach(el => {
        el.style.animationPlayState = 'running'
      })
    }
  })
}

// Initialize performance optimizations
optimizeAnimations()
