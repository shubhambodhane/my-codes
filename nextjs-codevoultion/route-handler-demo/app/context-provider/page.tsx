"use client";

import { useTheme } from "./theme-provider";

export default function ContextProvider() {
  const theme = useTheme();
  return (
    <>
      <h4 className="font-bold text-2xl">Context Provider in Next JS</h4>
      <span style={{ color: theme.colors.secondary }}>
        Theme context Provider usage
      </span>
      <ul className="list-disc list-inside">
        <li>
          Context provider typically live near the root of an application to
          share the global state and logic.
        </li>
        <li>ex. Application theme (dark or light)</li>
        <li>
          As we know, the React server component directly does not support
          context provider.
        </li>
        <li>
          The solution is to create you context and render its provider inside
          dedicated client component.
        </li>
      </ul>
      <h4 className="text-lg font-bold">Note:</h4>
      <ul className="list-disc list-inside">
        <li>for React v18 and below: need to use context.Provider</li>
        <li>
          for React v19 and above: only context is required to pass the value.
        </li>
        <li>
          We create theme-provider (client component as react client component
          supports it) component and setting the default value there, we use
          createContext and useContext there to pass the default value and
          creating provider there.
        </li>
        <li>
          we export Provider and Context to use in our application ex
          ThemeProvider to wrap children in root layout or required layout
          component.
        </li>
        <li>
          we export useContext to use this in our application ex useTheme to use
          in our application.
        </li>
        <li>In client component we can use it.</li>
        <li>ex. import it then const theme= useTheme();</li>
        <li>adding in the style object: style={`{theme.color.primary}`}</li>
      </ul>
    </>
  );
}
