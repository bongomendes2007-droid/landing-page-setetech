export type ServicePillar =
  | 'web'
  | 'design'
  | 'ia'
  | 'infra'
  | 'marketing'
  | 'govtech'
  | 'gestao'

export interface Service {
  id: ServicePillar
  title: string
  shortDescription: string
  fullDescription: string
  features: string[]
  icon: string
  color: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  photo: string
  linkedin?: string
  github?: string
  specialties: string[]
}

export interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  message: string
  avatar?: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  company?: string
  subject: string
  message: string
  serviceInterest?: ServicePillar
}

export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  platform: 'linkedin' | 'instagram' | 'github' | 'whatsapp' | 'email'
  href: string
  label: string
}
