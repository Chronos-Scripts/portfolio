import discord from '@/public/discord.svg'
import devforum from '@/public/devforum.svg'
import wcs from '@/public/wcs.png'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const projectsData = [
  {
    title: 'this is it',
    description:
      'i made this portfolio with no work to show',
    tags: ['sad'],
    imageUrl: wcs,
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
] as const

export type ContactLabelData = (typeof contactsData)[number]
export const contactsData = [
  {
    name: 'Discord',
    text: '@ccronos',
    icon: discord,
    url: 'https://discordid.netlify.app/?id=1061987118441836554',
  },
  {
    name: 'Developer Forum',
    text: '@PhoenixBlade1000',
    icon: devforum,
    url: 'https://devforum.roblox.com/u/phoenixblade1000',
  },
] as const

type LinkTuple = [string, string?]
export const skillsData: LinkTuple[] = [
  ['Rojo', 'https://rojo.space/'],
  ['Roblox-Ts', 'https://roblox-ts.com/'],
  ['Wally', 'https://wally.run/'],
  ['TypeScript', 'https://www.typescriptlang.org/'],
  ['JavaScript', undefined],
  ['React', 'https://react.dev/'],
  ['Reflex', 'https://littensy.github.io/reflex/'],
  ['Fusion', 'https://elttob.uk/Fusion/0.2/'],
  ['Lua', undefined],
  ['Luau', 'https://luau-lang.org/'],
  ['Flamework', 'https://flamework.fireboltofdeath.dev/'],
  ['Github', 'https://github.com/'],
  ['Git', 'https://git-scm.com/'],
  ['Promise', 'https://eryn.io/roblox-lua-promise/'],
] as const