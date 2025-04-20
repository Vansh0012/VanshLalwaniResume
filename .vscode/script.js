function togglePopup(section) {
    const popup = document.getElementById("popup");
    const content = document.getElementById("popup-content");
  
    if (popup.classList.contains("hidden")) {
      let html = "";
      if (section === "skills") {
        html = `
          <h3>Skills</h3>
          <ul>
            <li>Leadership & Team Management</li>
            <li>Negotiation & Critical Thinking</li>
            <li>Event Strategy & Branding</li>
            <li>Digital Marketing</li>
            <li>Creativity & Innovation</li>
          </ul>`;
      } else if (section === "experience") {
        html = `
          <h3>Experience</h3>
          <ul>
            <li><strong>Brandaholic Event Strategist</strong> – Prestige Institute of Management</li>
            <li><strong>Event Manager</strong> – Chameli Devi Public School</li>
            <li><strong>AGILE COIL Program</strong> – Cross-border collaboration, project leadership</li>
          </ul>`;
      } else if (section === "education") {
        html = `
          <h3>Education</h3>
          <ul>
            <li>IIM Bangalore – BBA in Digital Business & Entrepreneurship (2024–27)</li>
            <li>Chameli Devi Public School – Commerce Stream (2009–2024)</li>
          </ul>`;
      } else if (section === "achievements") {
        html = `
          <h3>Achievements</h3>
          <ul>
            <li>"Mr. Diligent" Award for Leadership</li>
            <li>AGILE COIL Badge (Cross-Cultural Innovation)</li>
            <li>Led Balvigyan & Diwali School Events</li>
          </ul>`;
      }
  
      content.innerHTML = html;
      popup.classList.remove("hidden");
    } else {
      popup.classList.add("hidden");
      content.innerHTML = "";
    }
  }
  