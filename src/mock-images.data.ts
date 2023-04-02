import { UnsplashImage } from "./image-loader.component";

export const mockUnsplashImages: UnsplashImage[] = [
  {
    title: 'Unsplash Image 1',
    id: 'photo-1675946581335-7ce800416a95',
    srcset: '800w, 1600w',
    sizes: '(max-width: 1600px) 800px, 1600px',
    fill: true,
    decoding: 'sync',
    quality: 80,
    priority: true,
  },
  {
    title: 'Unsplash Image 2',
    id: 'photo-1680289184206-758a33cbe01b',
    srcset: '800w, 1600w',
    sizes: '(max-width: 1600px) 800px, 1600px',
    width: 800,
    height: 450,
    fill: false,
    decoding: 'auto',
    loading: 'lazy',
    quality: 80,
    priority: false,
  },
  {
    title: 'Unsplash Image 3',
    id: 'photo-1680156145891-54e9d443fd54',
    srcset: '800w, 1600w',
    sizes: '(max-width: 1600px) 800px, 1600px',
    width: 800,
    height: 450,
    fill: false,
    decoding: 'auto',
    loading: 'lazy',
    quality: 80,
    priority: false,
  },
  {
    title: 'Unsplash Image 4',
    id: 'photo-1680120336698-4bb1898241ca',
    srcset: '800w, 1600w',
    sizes: '(max-width: 1600px) 800px, 1600px',
    width: 800,
    height: 450,
    fill: false,
    decoding: 'auto',
    loading: 'lazy',
    quality: 80,
    priority: false,
  },
];
