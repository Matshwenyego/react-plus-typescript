declare module '*.css' {
    const css: {[key: string]: string};
    export default css;
}

declare module '*.svg' {
    const ReactComponent: React.ComponentType<React.SVGAttributes<SVGAElement>>;
    export default ReactComponent;
}