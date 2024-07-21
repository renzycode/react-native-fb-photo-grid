# react-native-fb-photo-grid

> A React Native component to display photos in a grid like Facebook's newsfeed.

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

- 🔥 Display photos in a Facebook-style grid
- 🔥 Responsive layout
- 🔥 Customizable grid and gutter sizes
- 🔥 Accessible child to parent function

Example: https://github.com/renzycode/react-native-fb-photo-grid-example

<p align="center">
  <img src="https://github.com/renzycode/react-native-fb-photo-grid/blob/main/assets/react-native-fb-photo-grid.gif?raw=true" height="480" />
</p>

## Installation

```bash
yarn add @renzycode/react-native-fb-photo-grid
```

or

```bash
npm install --save @renzycode/react-native-fb-photo-grid
```

## Usage

```jsx
import React from 'react';
import { View } from 'react-native';
import FBPhotoGrid from '@renzycode/react-native-fb-photo-grid';

const photos = [
  'https://example.com/photo1.jpg',
  'https://example.com/photo2.jpg',
  'https://example.com/photo3.jpg',
];

const App = () => (
  <View>
    <FBPhotoGrid
      height={400}
      gutterColor="#fff"
      photos={photos}
      gutterSize={2}
      onTouchPhoto={(photoUri, index) => console.log(photoUri, index)}
    />
  </View>
);

export default App;
```

## Props

| Prop name                | Description                                                                                         | Type                                          | Default | Required |
| ------------------------ | --------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------- | -------- |
| `Height`                 | Height of the photo grid                                                                            | number                                        | 400     | false    |
| `gutterColor`            | Background color of the grid                                                                        | string                                        | `#fff`  | false    |
| `photos`                 | Array of photo URIs                                                                                 | string[]                                      | []      | true     |
| `gutterSize`             | Size of space between photos                                                                        | number                                        | 0       | false    |
| `onTouchPhoto`           | Callback function when a photo is touched                                                           | (photoUri: string, index: number) => void     | ()=>{}  | false    |

## License

[MIT](LICENSE)
