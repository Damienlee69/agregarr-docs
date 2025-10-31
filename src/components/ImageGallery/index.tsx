import React from 'react';
import styles from './styles.module.css';

interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  columns?: 2 | 3 | 4;
}

export default function ImageGallery({ images, columns = 3 }: ImageGalleryProps): React.ReactElement {
  return (
    <div className={styles.gallery} data-columns={columns}>
      {images.map((image, idx) => (
        <img
          key={idx}
          src={image.src}
          alt={image.alt}
          className={styles.galleryImage}
        />
      ))}
    </div>
  );
}
