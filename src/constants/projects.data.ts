export const PROJECTS_DATA = [
  {
    id: "alpha-01",
    operationCode: "ALPHA-01",
    classification: "TOP SECRET",
    status: "COMPLETED",
    title: "Network Automation Suite",
    subtitle: "GUI-based toolkit for configuring Cisco devices at scale",
    description: "Engineered a Python desktop application that automates Cisco IOS configuration deployment, backup & compliance checks across multiple devices simultaneously. Reduced manual configuration time by 85%.",
    longDescription: "Full automation toolkit with Netmiko + Paramiko SSH, Tkinter GUI, multi-threaded execution, rollback capabilities & audit logging.",
    technologies: ["Python", "Netmiko", "Paramiko", "Tkinter", "Cisco IOS", "Threading"],
    features: [
      "Bulk configuration push to 50+ devices",
      "Automated backup & version control",
      "Pre/post change validation",
      "GUI with real-time logs"
    ],
    category: "automation",
    featured: true,
    githubUrl: "https://github.com/pmanojan",
    demoUrl: "#",
    codePreview: `import netmiko
from tkinter import Tk
from concurrent.futures import ThreadPoolExecutor

device = {
  "device_type": "cisco_ios",
  "host": "10.0.0.1",
  "username": "admin",
  "password": "*******"
}

def deploy_config(device, commands):
    conn = netmiko.ConnectHandler(**device)
    output = conn.send_config_set(commands)
    conn.save_config()
    return output

with ThreadPoolExecutor(max_workers=20) as executor:
    results = executor.map(deploy_config, all_devices)

# [MISSION SUCCESS: 52 DEVICES CONFIGURED]
`,
    image: "network-automation"
  },
  {
    id: "beta-02",
    operationCode: "BETA-02",
    classification: "CLASSIFIED",
    status: "COMPLETED",
    title: "FortiGate Policy Automation",
    subtitle: "REST API security policy lifecycle management",
    description: "Python REST API wrapper automating FortiGate firewall policy creation, auditing & cleanup — eliminating manual GUI errors and enabling policy-as-code.",
    technologies: ["Python", "FortiGate API", "Security", "REST", "JSON"],
    features: ["Automated policy provisioning", "Shadow policy detection", "Compliance reporting"],
    category: "security",
    featured: false,
    githubUrl: "https://github.com/pmanojan",
    demoUrl: "#",
    codePreview: `# FortiGate REST API Automation
import requests

url = "https://fortigate/api/v2/cmdb/firewall/policy"
headers = {"Authorization": "Bearer ***"}

payload = {
  "name": "BLOCK_MALICIOUS",
  "srcintf": "wan1",
  "dstintf": "internal",
  "action": "deny"
}
requests.post(url, json=payload)
`,
    image: "fortigate"
  },
  {
    id: "gamma-03",
    operationCode: "GAMMA-03",
    classification: "CONFIDENTIAL",
    status: "COMPLETED",
    title: "Campus Network Infrastructure",
    subtitle: "Multi-building enterprise network redesign — BCAS",
    description: "Architected and deployed end-to-end campus network infrastructure across multiple buildings — VLAN segmentation, inter-VLAN routing, redundancy & documentation.",
    technologies: ["Cisco", "LAN/WAN", "VLAN", "OSPF", "Documentation"],
    features: ["Multi-building backbone", "VLAN for 6 departments", "HSRP redundancy"],
    category: "networking",
    featured: false,
    githubUrl: "https://github.com/pmanojan",
    demoUrl: "#",
    image: "campus"
  },
  {
    id: "delta-04",
    operationCode: "DELTA-04",
    classification: "RESTRICTED",
    status: "COMPLETED",
    title: "Active Directory Manager",
    subtitle: "PowerShell automation for AD user lifecycle",
    description: "PowerShell toolkit automating Active Directory bulk user provisioning, group management, password policy enforcement & audit reporting.",
    technologies: ["PowerShell", "Active Directory", "Automation", "Windows Server"],
    features: ["Bulk user import from CSV", "Automated OU assignment", "Password expiry reports"],
    category: "automation",
    featured: false,
    githubUrl: "https://github.com/pmanojan",
    demoUrl: "#",
    image: "ad-manager"
  },
  {
    id: "epsilon-05",
    operationCode: "EPSILON-05",
    classification: "UNCLASSIFIED",
    status: "COMPLETED",
    title: "Network Topology Visualizer",
    subtitle: "Interactive Java GUI for network discovery visualization",
    description: "Java Swing application that maps network topology via SNMP discovery & visualizes device interconnections with interactive graph rendering.",
    technologies: ["Java", "Swing", "SNMP", "Graph Visualization", "GUI"],
    features: ["SNMP auto-discovery", "Interactive zoom/pan map", "Export to PNG/PDF"],
    category: "python",
    featured: false,
    githubUrl: "https://github.com/pmanojan",
    demoUrl: "#",
    image: "visualizer"
  }
];

export const PROJECT_CATEGORIES = [
  { id: "all", label: "ALL OPS" },
  { id: "automation", label: "AUTOMATION" },
  { id: "networking", label: "NETWORKING" },
  { id: "security", label: "SECURITY" },
  { id: "python", label: "PYTHON" },
];
