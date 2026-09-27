import type { ReactNode } from "react";

export interface ThemeProps {
  isActive: boolean;
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface HomePage {
  Name: string;
  info: string;
  roles: string[];
  location: string;
  availability: string;
  photo: string;
  link1: string;
  link2: string;
  Github_logo: ReactNode;
  Linkedin_logo: ReactNode;
  ResumeLink: string;
}

export interface ContactInfo {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  Mail_logo: ReactNode;
  Location_logo: ReactNode;
}

export interface AboutContent {
  text0: string;
  text1: string;
  text2: string;
  BackImg: string;
  FrontImg: string;
}

export interface Skill {
  icon: ReactNode;
  name: string;
}

export interface SkillCategory {
  title: string;
  items: Skill[];
}

export interface Experience {
  CompanyName: string;
  Role: string;
  Location: string;
  TimeLine: string;
  Bullets: string[];
}

export interface Education {
  School: string;
  Location: string;
  Degree: string;
  TimeLine: string;
  Details?: string;
}

export interface Project {
  Name: string;
  About: string;
  Image?: string;
  GithubLink?: string;
  Tech?: string[];
  Featured?: boolean;
  Status?: string;
}
