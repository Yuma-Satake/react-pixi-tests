import { Graphics, Stage, Text } from '@pixi/react';
import { useCallback, useState } from 'react';
import '@pixi/events';

const App = () => {
  const draw = useCallback((g: any) => {
    g.clear();
    g.lineStyle(0);
    g.beginFill(0xffff0b, 0.5);
    g.drawCircle(470, 90, 60);
    g.endFill();
  }, []);

  return (
    <Stage
      options={{
        background: 'gray',
      }}
    >
      <Text
        text="Hello World"
        x={100}
        y={100}
        click={() => {
          console.log('click');
        }}
        mousedown={() => {
          console.log('mousedown');
        }}
      />
      <Graphics
        interactive
        draw={draw}
        click={() => {
          console.log('click');
        }}
        mousedown={() => {
          console.log('mousedown');
        }}
      />
    </Stage>
  );
};

export default App;
