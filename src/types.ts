export interface NavItem {
  label: string;
  href: string;
}

export interface SecurityNode {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface FeatureItem {
  id: string;
  number: string;
  title: string;
  description: string;
  category: string;
}

export interface SosStep {
  step: number;
  title: string;
  status: string;
  description: string;
  detail: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
