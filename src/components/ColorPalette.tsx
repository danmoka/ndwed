interface Color {
  name: string;
  hex: string;
}

interface ColorPaletteProps {
  colors: Color[];
}

export function ColorPalette({ colors }: ColorPaletteProps) {
  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {colors.map((color) => (
        <div key={color.hex} className="text-center">
          <div
            className="w-16 h-16 rounded-full mb-2"
            style={{ backgroundColor: color.hex }}
          />
          <span className="text-sm text-gray-200">{color.name}</span>
        </div>
      ))}
    </div>
  );
}