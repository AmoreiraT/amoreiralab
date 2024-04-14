import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { HomePage } from '@features/HomePage';
import { PaletteTree } from './palette';

export function ComponentPreviews() {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/home">
        <HomePage />
      </ComponentPreview>
      <ComponentPreview path="/ComponentPreviews">
        <ComponentPreviews />
      </ComponentPreview>
    </Previews>
  );
}
