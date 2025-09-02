// filepath: /path/to/custom-modules.d.ts
declare module '*.png?react' {
  import React from 'react';
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
