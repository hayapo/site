import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  jsxFramework: "preact",
  // define the content to scan 👇🏻
  include: [
    "./src/**/*.{ts,tsx,js,jsx,astro}",
    "./pages/**/*.{ts,tsx,js,jsx,astro}",
  ],
  exclude: [],
  outdir: "styled-system",

  conditions: {
    dark: ".dark &",
    sr_only: ".sr-only",
  },

  theme: {
    semanticTokens: {
      colors: {
        text: {
          value: {
            base: "black",
            _dark: "white",
          },
        },
        accent: {
          value: {
            base: "#6900bf",
            _dark: "#FF7A00",
          },
        },
        "accent-blured": {
          value: {
            base: "#6900BF2A",
            _dark: "#FF7A0058",
          },
        },
        "accent-background": {
          value: {
            base: "#e1e1e1",
            _dark: "#1A1A1A",
          },
        },
        "accent-background-text": {
          value: {
            base: "#525252",
            _dark: "#B3B3B3",
          },
        },
        borderAccent: {
          value: {
            base: "#A6A6A6",
            _dark: "#797979",
          },
        },
        background: {
          value: {
            base: "#FFF",
            _dark: "#242424",
          },
        },
        iconDefault: {
          value: {
            base: "#444444",
            _dark: "#FFF",
          },
        },
        hatebuBlue: {
          value: "#00A4DE",
        },
        twitterWhite: {
          value: "#FFFFFF",
        },
        twitterBlue: {
          value: "#1d9bf1ff",
        },
      },
    },
    tokens: {
      sizes: {
        header: { value: "5rem" },
        full: { value: "100%" },
				sm: { value: "12px" },
				md: { value: "16px" },
				lg: { value: "24px" },
				xl: { value: "32px" },
				"2xl": { value: "48px" },
				"3xl": { value: "64px" },
				"4xl": { value: "96px" },
      },
      spacing: {
        header: { value: "5rem" },
      },
      fonts: {
        code: { value: "consolas, monaco, monospace" },
      },
    },
  },

  // define the global styles 👇🏻
  /*
  The CSS in this style tag is based off of Bear Blog's default CSS.
  https://github.com/HermanMartinus/bearblog/blob/297026a877bc2ab2b3bdfbd6b9f7961c350917dd/templates/styles/blog/default.css
  License MIT: https://github.com/HermanMartinus/bearblog/blob/master/LICENSE.md
 */
  globalCss: {
    html: {
      fontFamily: "system-ui, sans-serif",
      m: 0,
      p: 0,
      scrollPaddingTop: "header",
    },
    body: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      backgroundColor: "background",
      color: "text",
      lineHeight: 1.8,
      overflowWrap: "break-word",
      wordWrap: "break-word",
    },
    main: {
      m: "auto",
      px: { base: "0.5rem", sm: "1.5rem" },
      py: "2.0rem",
      maxWidth: "calc(100% - 15px)",
      width: "1300px",
    },
    h1: {
      fontSize: "39px",
      mt: "1rem",
      lineHeight: 1.4,
    },
    h2: {
      fontSize: "31px",
      mt: "1rem",
      lineHeight: 1.4,
    },
    h3: {
      fontSize: "25px",
      mt: "1rem",
      lineHeight: 1.4,
    },
    h4: {
      fontSize: "20px",
      mt: "1rem",
      lineHeight: 1.4,
    },
    h5: {
      fontSize: "15px",
      mt: "1rem",
      lineHeight: 1.4,
    },
    strong: {
      fontWeight: 900,
    },
    b: {
      fontWeight: 900,
    },
    section: {
      display: "block",
      "& ol": {
        listStyle: "decimal",
      },
    },
    blockquote: {
      borderLeft: "0.25rem solid #ddd",
      pl: "1rem",
      mt: "0.5rem",
      fontSize: "1.333em",
    },
    ul: {
      mt: "1rem",
      ml: "1rem",
      listStyle: "inside",
      "& ul": {
        mt: 0,
      },
    },
    ol: {
      mt: "1rem",
      ml: "1rem",
      listStyle: "decimal inside",
      "& ul": {
        mt: 0,
      },
    },
    table: {
      width: "100%",
    },
    thread: {
      display: "table",
      verticalAlign: "middle",
      borderSpacing: "2px",
    },
    tr: {
      display: "table-row",
      verticalAlign: "inherit",
      borderColor: "inherit",
      border: "1px solid",
    },
    th: {
      display: "table-cell",
      verticalAlign: "inherit",
      fontWeight: "bold",
      textAlign: "internal center",
      border: "1px solid",
    },
    td: {
      display: "table-cell",
      verticalAlign: "inherit",
      textAlign: "center",
      border: "1px solid",
    },
    hr: {
      mt: "1.0rem",
      border: "none",
      borderTop: "1px solid #ddd",
    },
    article: {
      sup: {
        a: {
          color: "accent",
          fontWeight: "bold",
          ml: "0.1rem",
        },
      },
      p: {
        mt: "1.0rem",
        _first: {
          mt: 0,
        },
      },
      em: {
        fontStyle: "italic",
      },
      code: {
        fontFamily: "code",
        fontSizes: "xx-large",
        backgroundColor: { base: "#e1e1e1", _dark: "#1A1A1A" },
        px: "0.3rem",
        py: "0.1rem",
        mx: "0.2rem",
        borderRadius: "0.3rem",
      },
      pre: {
        fontFamily: "code",
        "& > code": { all: "unset" },
        _dark: {
          "& > code": { all: "unset" },
        },
        my: "1.5rem",
        p: "1.5rem",
        borderRadius: "1.0rem",
      },
      mark: {
        backgroundColor: "#c085ff",
        px: "0.3rem",
      },
    },
  },
});
