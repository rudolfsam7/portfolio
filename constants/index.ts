import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "Azure",
    image: "azure.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Terraform",
    image: "terraform.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Shell Scirpt",
    image: "shellscipt.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    image: "python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Github",
    image: "github.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Github Action",
    image: "githubaction.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Linux",
    image: "linux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Prometheus",
    image: "prometheus.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Apache Airflow",
    image: "airflow.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Azure DevOps",
    image: "azdev.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Visual Studio Code",
    image: "vscode.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java",
    image: "java.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "PuTTy",
    image: "putty.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Oracle",
    image: "oracle.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Jira",
    image: "jira.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Logstash",
    image: "logstash.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Ubuntu",
    image: "ubuntu.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "XML",
    image: "xml.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Windows",
    image: "windows.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "YAML",
    image: "yaml.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Kubernetes",
    image: "kuber.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "SSH",
    image: "ssh.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Apache",
    image: "apache.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Red Hat",
    image: "red.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Unix",
    image: "unix.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Kaggle",
    image: "kaggle.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "Maven",
    image: "maven.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Json",
    image: "json.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "PowerShell",
    image: "power.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "NGINX",
    image: "nginx.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "PyCharm",
    image: "pycharm.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "CentOs",
    image: "centos.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Selenium",
    image: "selenium.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Nano",
    image: "nano.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Git",
    image: "git.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "Solaris On-Prem to Linux Private Cloud Migration",
    description:
      'Supported Solaris to Linux migration projects within a hybrid cloud architecture using Apache CloudStack. Implemented IaC and CD workflows with Terraform and GitHub Actions to provision and manage VMs across Azure and private clouds.',
    image: "/projects/project-1.png",
    link: "",
  },
  {
    title: "Wildfly using Docker",
    description:
      'Supported WebSphere to WildFly application migration by containerizing workloads using Docker. Built and deployed CI/CD pipelines in Azure DevOps to run containerized applications on Azure App Services.',
    image: "/projects/project-2.png",
    link: "",
  },
  {
    title: "Terraform Upgrade",
    description:
      'Worked on Terraform upgrades by updating variables within standardized module templates. Used Azure DevOps CD pipelines to provision Azure resources',
    image: "/projects/project-3.png",
    link: "",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/rudolf-sam",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Contact Me",
        icon: null,
        link: "rudolfsam73@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Experience",
    link: "#projects",
  },
] as const;

export const LINKS = {
};
