const imageAssets = import.meta.glob<string>(
  '/src/assets/images/**/*.{avif,gif,jpeg,jpg,png,webp}',
  { eager: true, import: 'default', query: '?url' }
);

export function getImageUrl(sourcePath: string): string {
  const imageUrl = imageAssets[sourcePath];
  if (!imageUrl) {
    throw new Error(`Image asset not found: ${sourcePath}`);
  }
  return imageUrl;
}
