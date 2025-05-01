export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Feng Haoyuan'
export const headline = 'Ecust CSer'
export const introduction =
  "Hi,my name is Feng Haoyuan. I dream of becoming a master in the field of artificial intelligence."
export const email = 'fhaoy97@gmail.com'
export const githubUsername = 'FENGHaoY'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "My name is fhy.I'm currently pursuing a combined undergraduate and doctoral degree in Computer Science and Technology. My research focuses on computer vision and multimodal learning.",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about AI, programming and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://www.tiktok.com/@harvard?lang=en',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/2054169001',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
