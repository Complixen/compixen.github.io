// Solutions Page JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Solution modal functionality
  const modal = document.getElementById("solution-modal")
  const modalTitle = document.getElementById("modal-title")
  const modalBody = document.getElementById("modal-body")
  const modalClose = document.getElementById("modal-close")
  const modalOverlay = modal?.querySelector(".modal__overlay")
  const modalTriggers = document.querySelectorAll(".solution-modal-trigger")

  // Solution data
  const solutionData = {
    "zero-trust": {
      title: "Zero-Trust Architecture",
      content: `
                <div class="solution-detail">
                    <div class="solution-detail__overview">
                        <h4>Overview</h4>
                        <p>Our Zero-Trust Architecture solution implements a comprehensive "never trust, always verify" security model that protects your organization from both external threats and insider risks. By treating every user, device, and application as potentially compromised, we create multiple layers of verification and continuous monitoring.</p>
                    </div>
                    
                    <div class="solution-detail__features">
                        <h4>Key Features</h4>
                        <ul>
                            <li><strong>Identity & Access Management (IAM):</strong> Advanced multi-factor authentication and identity verification</li>
                            <li><strong>Micro-segmentation:</strong> Network isolation and granular access controls</li>
                            <li><strong>Continuous Monitoring:</strong> Real-time threat detection and behavioral analysis</li>
                            <li><strong>Policy Engine:</strong> Dynamic access policies based on risk assessment</li>
                            <li><strong>Device Trust:</strong> Comprehensive device health and compliance verification</li>
                        </ul>
                    </div>
                    
                    <div class="solution-detail__benefits">
                        <h4>Business Benefits</h4>
                        <ul>
                            <li>Reduce security breaches by up to 90%</li>
                            <li>Improve compliance posture and audit readiness</li>
                            <li>Enable secure remote work and BYOD policies</li>
                            <li>Minimize lateral movement of threats</li>
                            <li>Streamline access management processes</li>
                        </ul>
                    </div>
                    
                    <div class="solution-detail__action">
                        <a href="contact.html" class="btn btn--primary">Request Demo</a>
                    </div>
                </div>
            `,
    },
    "cloud-security": {
      title: "Cloud Security Mesh",
      content: `
                <div class="solution-detail">
                    <div class="solution-detail__overview">
                        <h4>Overview</h4>
                        <p>Our Cloud Security Mesh provides unified protection across multi-cloud and hybrid environments. This comprehensive solution ensures consistent security policies, threat detection, and compliance management regardless of where your applications and data reside.</p>
                    </div>
                    
                    <div class="solution-detail__features">
                        <h4>Key Features</h4>
                        <ul>
                            <li><strong>Multi-Cloud Security:</strong> Unified protection across AWS, Azure, GCP, and private clouds</li>
                            <li><strong>Container Protection:</strong> Kubernetes and Docker security with runtime protection</li>
                            <li><strong>API Security Gateway:</strong> Comprehensive API protection and monitoring</li>
                            <li><strong>Cloud Workload Protection:</strong> Server and serverless function security</li>
                            <li><strong>Data Loss Prevention:</strong> Cloud-native DLP with encryption and tokenization</li>
                        </ul>
                    </div>
                    
                    <div class="solution-detail__benefits">
                        <h4>Business Benefits</h4>
                        <ul>
                            <li>Reduce cloud security complexity by 80%</li>
                            <li>Accelerate cloud migration with confidence</li>
                            <li>Ensure consistent security across all environments</li>
                            <li>Improve visibility into cloud assets and risks</li>
                            <li>Optimize cloud security costs</li>
                        </ul>
                    </div>
                    
                    <div class="solution-detail__action">
                        <a href="contact.html" class="btn btn--primary">Request Demo</a>
                    </div>
                </div>
            `,
    },
    "ai-detection": {
      title: "AI Threat Detection",
      content: `
                <div class="solution-detail">
                    <div class="solution-detail__overview">
                        <h4>Overview</h4>
                        <p>Our AI Threat Detection platform leverages advanced machine learning and artificial intelligence to identify, analyze, and respond to security threats in real-time. With behavioral analytics and predictive intelligence, we detect even the most sophisticated attacks before they cause damage.</p>
                    </div>
                    
                    <div class="solution-detail__features">
                        <h4>Key Features</h4>
                        <ul>
                            <li><strong>Behavioral Analytics:</strong> ML-powered user and entity behavior analysis</li>
                            <li><strong>Automated Response:</strong> Intelligent threat containment and remediation</li>
                            <li><strong>Predictive Intelligence:</strong> Proactive threat hunting and risk assessment</li>
                            <li><strong>Anomaly Detection:</strong> Advanced statistical analysis for threat identification</li>
                            <li><strong>Threat Intelligence:</strong> Global threat feeds and contextual analysis</li>
                        </ul>
                    </div>
                    
                    <div class="solution-detail__benefits">
                        <h4>Business Benefits</h4>
                        <ul>
                            <li>Achieve 99.9% threat detection accuracy</li>
                            <li>Reduce false positives by 95%</li>
                            <li>Enable sub-second threat response</li>
                            <li>Minimize security analyst workload</li>
                            <li>Improve overall security posture</li>
                        </ul>
                    </div>
                    
                    <div class="solution-detail__action">
                        <a href="contact.html" class="btn btn--primary">Request Demo</a>
                    </div>
                </div>
            `,
    },
    "quantum-ready": {
      title: "Quantum-Ready Security",
      content: `
                <div class="solution-detail">
                    <div class="solution-detail__overview">
                        <h4>Overview</h4>
                        <p>Prepare your organization for the quantum computing era with our Quantum-Ready Security solutions. We implement post-quantum cryptography and quantum-resistant protocols to protect your data against both current and future quantum-based attacks.</p>
                    </div>
                    
                    <div class="solution-detail__features">
                        <h4>Key Features</h4>
                        <ul>
                            <li><strong>Post-Quantum Cryptography:</strong> NIST-approved quantum-resistant algorithms</li>
                            <li><strong>Quantum Key Distribution:</strong> Ultra-secure key exchange mechanisms</li>
                            <li><strong>Migration Planning:</strong> Phased transition from classical to quantum-safe cryptography</li>
                            <li><strong>Hybrid Security:</strong> Seamless integration with existing security infrastructure</li>
                            <li><strong>Compliance Ready:</strong> Future-proof compliance with emerging regulations</li>
                        </ul>
                    </div>
                    
                    <div class="solution-detail__benefits">
                        <h4>Business Benefits</h4>
                        <ul>
                            <li>Future-proof your security investments</li>
                            <li>Maintain competitive advantage in quantum era</li>
                            <li>Ensure long-term data protection</li>
                            <li>Meet emerging regulatory requirements</li>
                            <li>Reduce quantum transition risks</li>
                        </ul>
                    </div>
                    
                    <div class="solution-detail__action">
                        <a href="contact.html" class="btn btn--primary">Request Demo</a>
                    </div>
                </div>
            `,
    },
  }

  // Modal event listeners
  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      const solutionType = this.getAttribute("data-solution")
      const solution = solutionData[solutionType]

      if (solution) {
        modalTitle.textContent = solution.title
        modalBody.innerHTML = solution.content
        modal.classList.add("active")
        document.body.style.overflow = "hidden"
      }
    })
  })

  // Close modal
  function closeModal() {
    modal.classList.remove("active")
    document.body.style.overflow = ""
  }

  modalClose?.addEventListener("click", closeModal)
  modalOverlay?.addEventListener("click", closeModal)

  // Close modal on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal()
    }
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
})
