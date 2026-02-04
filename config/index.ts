import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Rudolf Sam | Space Portfolio",
  description: "Welcome to my Cloud DevOps portfolio.",
  keywords: [
    "terraform",
    "docker",
    "linux",
    "shellscript",
    "python",
    "azure",
    "github",
    "githubaction",
    "azure devops",
    "apache-airflow",
    "prometheus",
    "vscode",
    "java",
    "oracle",
    "logstash",
    "putty",
    "jira",
    "ubuntu",
  ] as Array<string>,
  authors: {
    name: "Rudolf Sam",
    url: "https://github.com/rudolf-sam",
  },
} as const;
