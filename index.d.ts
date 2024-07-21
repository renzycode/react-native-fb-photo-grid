declare module '@renzycode/react-native-fb-photo-grid' {
    import { ComponentType } from 'react';
  
    interface FBPhotoGridProps {
      height?: number;
      gutterColor?: string;
      photos: string[];
      gutter?: number;
      onTouchPhoto?: (photoUri: string, index: number) => void;
    }
  
    const FBPhotoGrid: ComponentType<FBPhotoGridProps>;
  
    export default FBPhotoGrid;
  }
  