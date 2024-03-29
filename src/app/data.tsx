import * as prismStyles from "react-syntax-highlighter/dist/esm/styles/prism";
import * as hljs from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dark, tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';


const themes = [
  { name: "coy", style: prismStyles.coy },
  // { name: "dark", style: prismStyles.dark },
  { name: "funky", style: prismStyles.funky },
  { name: "okaidia", style: prismStyles.okaidia },
  { name: "solarizedlight", style: prismStyles.solarizedlight },
  { name: "tomorrow", style: tomorrow },
  { name: "twilight", style: prismStyles.twilight },
  { name: "prism", style: prism },
  { name: "a11yDark", style: prismStyles.a11yDark },
  { name: "atomDark", style: prismStyles.atomDark },
  {
    name: "base16AteliersulphurpoolLight",
    style: prismStyles.base16AteliersulphurpoolLight,
  },
  { name: "cb", style: prismStyles.cb },
  { name: "coldarkCold", style: prismStyles.coldarkCold },
  { name: "coldarkDark", style: prismStyles.coldarkDark },

  { name: "darcula", style: hljs.darcula },
  { name: "dracula", style: hljs.dracula },
  { name: "ascetic", style: hljs.ascetic },
  { name: "duotoneDark", style: prismStyles.duotoneDark },
  { name: "duotoneEarth", style: prismStyles.duotoneEarth },
  { name: "duotoneForest", style: prismStyles.duotoneForest },
  { name: "duotoneLight", style: prismStyles.duotoneLight },
  { name: "duotoneSea", style: prismStyles.duotoneSea },
  { name: "duotoneSpace", style: prismStyles.duotoneSpace },
  { name: "ghcolors", style: prismStyles.ghcolors },
  { name: "gruvboxDark", style: prismStyles.gruvboxDark },
  { name: "gruvboxLight", style: prismStyles.gruvboxLight },

  { name: "hopscotch", style: prismStyles.hopscotch },

  { name: "materialDark", style: prismStyles.materialDark },
  { name: "materialLight", style: prismStyles.materialLight },
  { name: "materialOceanic", style: prismStyles.materialOceanic },

  { name: "nord", style: prismStyles.nord },
  { name: "oneDark", style: prismStyles.oneDark },
  { name: "oneLight", style: prismStyles.oneLight },
  { name: "pojoaque", style: prismStyles.pojoaque },
  { name: "shadesOfPurple", style: prismStyles.shadesOfPurple },

  { name: "synthwave84", style: prismStyles.synthwave84 },
  { name: "vs", style: prismStyles.vs },
  { name: "vscDarkPlus", style: prismStyles.vscDarkPlus },
  { name: "xonokai", style: prismStyles.xonokai },
  { name: "dark", style: dark },
  // { name: "darcula", style: hljs.darcula },
];
const languages = [
  "javascript",
  "cpp",
  "c",
  "python",
  "java",
  "ruby",
  "go",
  "swift",
  "typescript",
  "rust",
  "php",
  "html",
  "css",
  "sass",
  "scss",
  "bash",
  "powershell",
  "perl",
  "lua",
  "kotlin",
  "r",
  "scala",
  "groovy",
  "dart",
  "haskell",
  "elixir",
  "erlang",

  "coffeescript",
  "f#",
];

export { themes, languages };
