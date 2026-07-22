export const SKILLS_DATA = {
  networking: [
    { name: "Cisco Routing & Switching", level: 88, years: "3+ yrs", color: "#00D4FF", category: "Networking" },
    { name: "LAN/WAN Design", level: 90, years: "3+ yrs", color: "#00D4FF", category: "Networking" },
    { name: "OSPF / EIGRP / RIP", level: 85, years: "2+ yrs", color: "#00D4FF", category: "Networking" },
    { name: "VPN Configuration", level: 82, years: "2+ yrs", color: "#00D4FF", category: "Networking" },
    { name: "Network Monitoring", level: 78, years: "2+ yrs", color: "#00D4FF", category: "Networking" },
  ],
  cybersecurity: [
    { name: "FortiGate Firewall", level: 82, years: "2+ yrs", color: "#E23636", category: "Cybersecurity" },
    { name: "Network Defense", level: 78, years: "2+ yrs", color: "#E23636", category: "Cybersecurity" },
    { name: "Access Control", level: 75, years: "2+ yrs", color: "#E23636", category: "Cybersecurity" },
    { name: "Pen Testing (Growing)", level: 62, years: "1+ yr", color: "#E23636", category: "Cybersecurity", growing: true },
    { name: "Vulnerability Assessment", level: 60, years: "1+ yr", color: "#E23636", category: "Cybersecurity", growing: true },
  ],
  programming: [
    { name: "Python", level: 88, years: "3+ yrs", color: "#FFD700", category: "Programming" },
    { name: "Java", level: 82, years: "2+ yrs", color: "#FFD700", category: "Programming" },
    { name: "React.js — Entry Level", level: 68, years: "1+ yr", color: "#61DAFB", category: "Programming", growing: true },
    { name: "PowerShell", level: 72, years: "2+ yrs", color: "#FFD700", category: "Programming" },
    { name: "JavaScript", level: 68, years: "2+ yrs", color: "#FFD700", category: "Programming" },
    { name: "C#", level: 65, years: "1+ yr", color: "#FFD700", category: "Programming" },
  ],
  systems: [
    { name: "Windows Server", level: 90, years: "3+ yrs", color: "#7B00FF", category: "Systems" },
    { name: "Linux (Ubuntu/CentOS)", level: 82, years: "2+ yrs", color: "#7B00FF", category: "Systems" },
    { name: "Active Directory", level: 90, years: "3+ yrs", color: "#7B00FF", category: "Systems" },
    { name: "DNS & DHCP", level: 92, years: "3+ yrs", color: "#7B00FF", category: "Systems" },
    { name: "Group Policy", level: 85, years: "2+ yrs", color: "#7B00FF", category: "Systems" },
  ]
};

export const ALL_SKILLS = [
  ...SKILLS_DATA.networking,
  ...SKILLS_DATA.cybersecurity,
  ...SKILLS_DATA.programming,
  ...SKILLS_DATA.systems
];

export const TECH_STACK = [
  { name: "Cisco", icon: "🌐", category: "Networking" },
  { name: "Python", icon: "🐍", category: "Programming" },
  { name: "Linux", icon: "🐧", category: "Systems" },
  { name: "Windows Server", icon: "🪟", category: "Systems" },
  { name: "Java", icon: "☕", category: "Programming" },
  { name: "JavaScript", icon: "⚡", category: "Programming" },
  { name: "React.js", icon: "⚛️", category: "Frontend" },
  { name: "MySQL", icon: "🗄️", category: "Database" },
  { name: "Git", icon: "🔧", category: "Tools" },
  { name: "FortiGate", icon: "🛡️", category: "Security" },
  { name: "AWS", icon: "☁️", category: "Cloud" },
  { name: "PowerShell", icon: "💠", category: "Automation" },
  { name: "HTML5", icon: "📄", category: "Frontend" },
  { name: "CSS3", icon: "🎨", category: "Frontend" },
  { name: "Ubuntu", icon: "🟠", category: "OS" },
  { name: "VMware", icon: "🖥️", category: "Virtualization" },
  { name: "Docker", icon: "🐳", category: "DevOps" },
  { name: "GitHub", icon: "🐙", category: "Tools" },
  { name: "VS Code", icon: "💻", category: "Tools" },
  { name: "Wireshark", icon: "🦈", category: "Security" },
  { name: "Bash", icon: "📟", category: "Automation" },
];

export const SKILL_CATEGORIES = [
  { id: "all", label: "ALL WEAPONS", icon: "◉", count: ALL_SKILLS.length },
  { id: "networking", label: "NETWORKING", icon: "⚡", count: SKILLS_DATA.networking.length },
  { id: "cybersecurity", label: "CYBERSECURITY", icon: "🛡️", count: SKILLS_DATA.cybersecurity.length },
  { id: "programming", label: "PROGRAMMING", icon: "🐍", count: SKILLS_DATA.programming.length },
  { id: "systems", label: "SYSTEMS", icon: "⚙️", count: SKILLS_DATA.systems.length },
];
