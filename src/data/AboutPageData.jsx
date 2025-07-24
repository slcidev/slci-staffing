import React from "react";
import { Users, Target, Award, Zap } from "lucide-react";

export const stats = [
  { number: "500+", label: "Happy Clients", icon: Users },
  { number: "1000+", label: "Projects Completed", icon: Target },
  { number: "15+", label: "Years Experience", icon: Award },
  { number: "24/7", label: "Support Available", icon: Zap },
];

export const features = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals with diverse expertise",
    bgFrom: "teal-50",
    bgTo: "blue-50",
    borderColor: "teal-100",
  },
  {
    icon: Award,
    title: "Quality Focus",
    description: "Commitment to excellence in every project",
    bgFrom: "teal-50",
    bgTo: "blue-50",
    borderColor: "teal-100",
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "Focused on delivering measurable outcomes",
    bgFrom: "teal-50",
    bgTo: "blue-50",
    borderColor: "teal-100",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Cutting-edge solutions for modern challenges",
    bgFrom: "teal-50",
    bgTo: "blue-50",
    borderColor: "teal-100",
  },
];
