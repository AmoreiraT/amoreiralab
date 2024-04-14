import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { HomePage } from '@features/HomePage';
import { PaletteTree } from './palette';

export function ComponentPreviews() {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/HomePage">
        <HomePage />
      </ComponentPreview>
    </Previews>
  );
}
