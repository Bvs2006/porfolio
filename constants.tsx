
import React from 'react';
import { 
  Code2, 
  Terminal, 
  Database, 
  Globe, 
  Cpu, 
  Trophy, 
  BookOpen, 
  Award,
  Mail,
  Phone,
  Linkedin,
  Github
} from 'lucide-react';
import { Project, SkillCategory, Education, Achievement, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Venkata Srujith Bellamkonda",
  phone: "+91 8331893625",
  email: "venkatasrujithb@gmail.com",
  linkedin: "https://linkedin.com",
  github: "https://github.com/Bvs2006",
  objective: "Motivated B.Tech student in Artificial Intelligence & Machine Learning with a strong foundation in programming, data structures, and algorithmic problem-solving. Proficient in C++ and Java, with hands-on experience in debugging, optimizing code, and developing efficient solutions."
};

export const CODING_PROFILES = [
  {
    platform: "LeetCode",
    solved: "200+",
    info: "Rating: 1411",
    color: "from-yellow-500/20 to-yellow-600/20",
    textColor: "text-yellow-500",
    url: "https://leetcode.com/u/srujithcoder/"
  },
  {
    platform: "CodeChef",
    solved: "200+",
    info: "Rating: 1247",
    color: "from-orange-500/20 to-orange-600/20",
    textColor: "text-orange-500",
    url: "https://www.codechef.com/users/bvs_coder_"
  },
  {
    platform: "Codeforces",
    solved: "Active",
    info: "@bvs_2006",
    color: "from-red-500/20 to-red-600/20",
    textColor: "text-red-500",
    url: "https://codeforces.com/profile/bvs_2006"
  },
  {
    platform: "HackerRank",
    solved: "3 Star",
    info: "Java, SQL, C Badges",
    color: "from-green-500/20 to-green-600/20",
    textColor: "text-green-500",
    url: "https://www.hackerrank.com/profile/srujith7780"
  },
  {
    platform: "GeeksforGeeks",
    solved: "50+",
    info: "Problem Solver",
    color: "from-blue-500/20 to-blue-600/20",
    textColor: "text-blue-500",
    url: "https://www.geeksforgeeks.org/user/bvs2006/"
  }
];

export const SKILLS: SkillCategory[] = [
  { category: "Programming Languages", items: ["C++", "C", "Java", "Python"] },
  { category: "Frontend", items: ["HTML", "CSS", "React", "Tailwind CSS"] },
  { category: "Databases", items: ["Oracle SQL", "MongoDB"] },
  { category: "Data & Analytics", items: ["MS Excel", "Python Libraries (Pandas, NumPy)"] },
  { category: "Coursework", items: ["Data Structures & Algorithms", "Operating Systems"] }
];

export const PROJECTS: Project[] = [
  {
    title: "Mini GameHub",
    tech: "C++",
    github: "https://github.com/Bvs2006",
    description: [
      "Developed a C++ console-based mini game hub integrating four classic games: Tic-Tac-Toe, Minesweeper, Sliding Puzzle, and Match-3.",
      "Implemented core game logic for grid-based board updates, win/loss detection, and recursive reveal for Minesweeper.",
      "Engineered tile swapping with match detection and gravity for Match-3 style gameplay."
    ]
  },
  {
    title: "NoteWise",
    tech: "React, Firebase",
    github: "https://github.com/Bvs2006",
    description: [
      "Designed and developed a teacher-student collaborative learning platform with real-time features.",
      "Implemented user authentication and role-based access control (RBAC).",
      "Built responsive frontend with Firebase backend for real-time database synchronization."
    ],
    team: "Venkata Srujith, P Satya Narayana Reddy, Vivek, Shanmukh, and Ram Charan",
    impact: "Increased user engagement by 35% through optimized UI/UX design."
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Aditya University",
    location: "Surampalem",
    period: "2024 - Present",
    degree: "Bachelor of Technology in AI & ML",
    score: "CGPA: 9.02"
  },
  {
    institution: "Narayana Junior College",
    location: "Nellore",
    period: "2022 - 2024",
    degree: "Class XII",
    score: "95.8%"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: "LeetCode", value: "200+ Problems Solved" },
  { title: "HackerRank", value: "3 Star Java/SQL" },
  { title: "CodeChef", value: "Rating 1247" },
  { title: "Technical Hub", value: "Master of Skills Trainee" }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "C Essentials, C++ Essentials", issuer: "Cisco" },
  { name: "Microsoft Office Specialist-Excel 2019", issuer: "Microsoft" },
  { name: "Power Platform Fundamentals", issuer: "Microsoft" },
  { name: "Problem Solving (Basic)", issuer: "HackerRank" },
  { name: "SQL (Basic)", issuer: "HackerRank" },
  { name: "RHA 200 Certification", issuer: "RedHat", status: "In Progress" }
];
