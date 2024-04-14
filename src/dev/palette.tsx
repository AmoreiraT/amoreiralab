import React from 'react';
import {
  Category,
  Component,
  Palette,
  Variant,
} from '@react-buddy/ide-toolbox';

export function ExampleLoaderComponent() {
  return <>Loading...</>;
}

export function PaletteTree() {
  return (
    <Palette>
      <Category name="App">
        <Component name="Loader">
          <Variant>
            <ExampleLoaderComponent />
          </Variant>
        </Component>
      </Category>
    </Palette>
  );
}
