export interface User {
  id?: string;
  first_name: string;
  last_name: string;
  portfolio_primary_title: string;
  portfolio_secondary_title: string;
  about_me_slogan?: string;
  about_me_description?: string;
}

export interface Service {
  id?: string;
  title: string;
  icon: string;
}

export interface Technology {
  id?: string;
  name: string;
  icon: string;
}

export interface Experience {
  id?: string;
  designation: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
  tech: string;
  url: string;
}

export interface Testimony {
  id?: string;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

export interface Project {
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  source_code_link: string;
  live_link?: string;
}

export interface Tag {
  name: string;
  color: string;
}

export interface Testimony {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}
