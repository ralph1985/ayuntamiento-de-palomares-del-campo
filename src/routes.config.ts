import { createI18n } from '@project-manager/pm-i18n';
import { translations } from './i18n/dictionaries';

export type Locale = 'es' | 'en';
export const locales: Locale[] = ['es', 'en'];

type PathByLocale = Record<Locale, string>;

export type StaticPageId =
  | 'home'
  | 'about'
  | 'contact'
  | 'news'
  | 'notices'
  | 'galleries'
  | 'testimonials'
  | 'search'
  | 'legal'
  | 'cookies'
  | 'privacy';

type StaticPageEntry = {
  id: StaticPageId;
  path: PathByLocale;
  label: PathByLocale;
  title: PathByLocale;
  description?: PathByLocale;
};

export const staticPages: StaticPageEntry[] = [
  {
    id: 'home',
    path: { es: '', en: '' },
    label: { es: 'Inicio', en: 'Home' },
    title: { es: 'Inicio', en: 'Home' },
    description: {
      es: 'Bienvenidos a Palomares del Campo.',
      en: 'Welcome to Palomares del Campo.',
    },
  },
  {
    id: 'about',
    path: { es: 'sobre-el-pueblo', en: 'about' },
    label: { es: 'Sobre el pueblo', en: 'About' },
    title: { es: 'Sobre el pueblo', en: 'About the town' },
    description: {
      es: 'Perfil municipal y contexto.',
      en: 'Town profile and context.',
    },
  },
  {
    id: 'contact',
    path: { es: 'contacto', en: 'contact' },
    label: { es: 'Contacto', en: 'Contact' },
    title: { es: 'Contacto', en: 'Contact' },
    description: {
      es: 'Formulario de contacto en preparación.',
      en: 'Contact form coming soon.',
    },
  },
  {
    id: 'news',
    path: { es: 'noticias', en: 'news' },
    label: { es: 'Noticias', en: 'News' },
    title: { es: 'Noticias', en: 'News' },
    description: {
      es: 'Listado de noticias.',
      en: 'News listing.',
    },
  },
  {
    id: 'notices',
    path: { es: 'bandos', en: 'notices' },
    label: { es: 'Bandos', en: 'Notices' },
    title: { es: 'Bandos', en: 'Notices' },
    description: {
      es: 'Avisos municipales.',
      en: 'Official notices.',
    },
  },
  {
    id: 'galleries',
    path: { es: 'galerias', en: 'galleries' },
    label: { es: 'Galerías', en: 'Galleries' },
    title: { es: 'Galerías fotográficas', en: 'Photo galleries' },
    description: {
      es: 'Selección de imágenes de los proyectos.',
      en: 'Photo selections for municipal projects.',
    },
  },
  {
    id: 'testimonials',
    path: { es: 'testimonios', en: 'testimonials' },
    label: { es: 'Testimonios', en: 'Testimonials' },
    title: { es: 'Opiniones', en: 'Testimonials' },
    description: {
      es: 'Opiniones en preparación.',
      en: 'Voices in preparation.',
    },
  },
  {
    id: 'search',
    path: { es: 'buscar', en: 'search' },
    label: { es: 'Buscar', en: 'Search' },
    title: { es: 'Buscador', en: 'Search' },
    description: {
      es: 'Buscador en construcción.',
      en: 'Search in progress.',
    },
  },
  {
    id: 'legal',
    path: { es: 'aviso-legal', en: 'legal-notice' },
    label: { es: 'Aviso legal', en: 'Legal notice' },
    title: { es: 'Aviso legal', en: 'Legal notice' },
    description: {
      es: 'Texto legal pendiente.',
      en: 'Legal copy pending.',
    },
  },
  {
    id: 'cookies',
    path: { es: 'politica-de-cookies', en: 'cookies-policy' },
    label: { es: 'Cookies', en: 'Cookies' },
    title: { es: 'Política de cookies', en: 'Cookies policy' },
    description: {
      es: 'Política de cookies pendiente.',
      en: 'Cookies policy placeholder.',
    },
  },
  {
    id: 'privacy',
    path: { es: 'politica-de-privacidad', en: 'privacy-policy' },
    label: { es: 'Privacidad', en: 'Privacy' },
    title: { es: 'Política de privacidad', en: 'Privacy policy' },
    description: {
      es: 'Texto de privacidad pendiente.',
      en: 'Privacy copy placeholder.',
    },
  },
];

export type GalleryEntry = {
  id: string;
  path: PathByLocale;
  title: PathByLocale;
  description: PathByLocale;
};

export const galleryEntries: GalleryEntry[] = [
  {
    id: 'gallery-1',
    path: { es: 'galerias/galeria-1', en: 'galleries/gallery-1' },
    title: { es: 'Galería 1 en borrador', en: 'Gallery 1 placeholder' },
    description: {
      es: 'Placeholder de la galería 1 hasta añadir fotos y texto.',
      en: 'Placeholder for gallery 1 until photos and copy are ready.',
    },
  },
  {
    id: 'gallery-2',
    path: { es: 'galerias/galeria-2', en: 'galleries/gallery-2' },
    title: { es: 'Galería 2 en borrador', en: 'Gallery 2 placeholder' },
    description: {
      es: 'Placeholder de la galería 2 hasta añadir fotos y texto.',
      en: 'Placeholder for gallery 2 until photos and copy are ready.',
    },
  },
];

export const i18n = createI18n({
  defaultLocale: 'es',
  locales,
  translations,
  pages: staticPages,
  extraEntries: galleryEntries,
});

export const { t, getNavLinks, translatePath, buildStaticPaths, buildExtraPaths } =
  i18n;
