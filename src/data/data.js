import tailwind from '../../public/techIcons/tailwind-mark.svg';
import astro from '../../public/techIcons/astro.svg';
import astro_dark from '../../public/techIcons/astro-dark.svg';
import js from '../../public/techIcons/js.svg';
import ts from '../../public/techIcons/ts.svg';
import angular from '../../public/techIcons/angular.svg';
import react from '../../public/techIcons/react.svg';
import csharp from '../../public/techIcons/csharp.svg';
import dotnet from '../../public/techIcons/dotnet-logo.svg';
import mssql from '../../public/techIcons/mssql.svg';
import node from '../../public/techIcons/nodejs.svg';
import wordpress from '../../public/techIcons/wordpress.svg';
import dato from '../../public/techIcons/datocms.svg';
import oli from '../../public/about/oli.webp';
import wix from '../../public/techIcons/wix.svg';
import fsma from '../../public/testimonials/fsma.webp';
import trasloc from '../../public/testimonials/alessandro.webp';


export const frontendToolsData = {
  techIcons: [
    {
      img: js,
      alt: 'Javascript Programming Language',
      url: 'https://developer.mozilla.org/en-US/docs/Web/javascript'
    },
    {
      img: ts,
      alt: 'Typescript Programming Language',
      url: 'https://www.typescriptlang.org/'
    },
    {
      img: angular,
      alt: 'Logo Angular Framework',
      url: 'https://angular.io'
    },
    {
      img: react,
      alt: 'Logo React Framework',
      url: 'https://react.dev/'
    },
    {
      img: astro_dark,
      darkOptionImg: astro,
      alt: 'Astro Web Framework',
      url: 'https://astro.build/'
    },
  ]
};

export const backendToolsData = {
  techIcons: [
    {
      img: csharp,
      alt: 'C# Programming Language',
      url: 'https://dotnet.microsoft.com/en-us/languages/csharp'
    },
    {
      img: dotnet,
      alt: '.NET Framework',
      url: 'https://dotnet.microsoft.com/en-us/'
    },
    {
      img: node,
      alt: 'Node Serverside Javascript',
      url: 'https://nodejs.org/en'
    },
    {
      img: mssql,
      alt: 'MS SQL Databases',
      url: 'https://www.microsoft.com/en-us/sql-server/'
    }
  ]
};

export const cmsToolsData = {
  techIcons: [
    {
      img: wordpress,
      alt: 'Wordpress CMS',
      url: 'https://wordpress.org/'
    },
    {
      img: dato,
      alt: 'DatoCMS',
      url: 'https://www.datocms.com/'
    },
    {
      img: wix,
      alt: 'WiX CMS',
      url: 'https://www.wix.com/'
    }
  ]
}

export const testimonialsData = [
  {
    img: fsma,
    alt: 'Fitter. Stronger. More Athletic.',
    author: 'Andri Koeferli',
    url: 'https://fitterstrongermoreathletic.com',
    title: '',
    subtitle: '',
    description: 'Here is the description'
  },
  {
    img: trasloc,
    alt: 'Traslocorsino.',
    author: 'Alessandro Orsino',
    url: 'https://traslocorsino.ch',
    title: '',
    subtitle: '',
    description: ''
  }
]

export const aboutData = {
  aboutImage: {
    img: oli,
    alt: "Oli Dias"
  }
}
