import { extract, compile } from "@formatjs/cli-lib";
import fs from "fs";
import path from "path";

export const walk = (dir, callback, excludeNodeModules = true) => {
  const list = fs.readdirSync(dir);
  list.forEach((filename) => {
    const file = path.resolve(dir, filename);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      /* Recurse into a subdirectory */
      if (!excludeNodeModules || filename !== "node_modules") {
        walk(file, callback);
      }
    } else {
      /* Is a file */
      callback(filename, file, dir);
    }
  });
};

const argv = process.argv.slice(2);

const extractFunction = async () => {
  const files = [];

  walk("./src", (filename, file, dir) => {
    if (filename.endsWith(".tsx")) {
      files.push(file);
    } else if (filename.endsWith(".ts") && !filename.endsWith(".d.ts")) {
      files.push(file);
    }
  });

  // console.log({files})

  const resultAsString = await extract(files, {
    idInterpolationPattern: "[sha512:contenthash:base64:6]",
  });

  // console.log({files, resultAsString})

  fs.writeFileSync("./i18n/en.json", resultAsString);
};

const getProperty = () => ({
  type: "object",
  properties: {
    defaultMessage: {
      type: "string",
    },
    description: {
      type: "string",
    },
  },
  required: ["defaultMessage"],
});

const generateSchema = async () => {
  const en = JSON.parse(fs.readFileSync("./i18n/en.json", "utf8"));

  const properties = {};
  const required = [];

  Object.keys(en).forEach((key) => {
    properties[key] = getProperty();
    required.push(key);
  });

  fs.writeFileSync(
    `./.vscode/schema.json`,
    JSON.stringify({
      $schema: "http://json-schema.org/draft-04/schema#",
      type: "object",
      properties,
      required,
    })
  );
};

const buildFile = async (fileName, targetName) => {
  const resultAsString = await compile([fileName], {});

  fs.writeFileSync(targetName, resultAsString);
};

const generateSources = async () => {
  const files = fs.readdirSync("./i18n");

  const en = JSON.parse(fs.readFileSync("./i18n/en.json", "utf8"));

  const externalLanguages = files.filter((file) => file !== "en.json");

  if (!fs.existsSync("./temp")) {
    fs.mkdirSync("./temp");
  }

  await buildFile("./i18n/en.json", "./src/lang/en.json");

  for (const language of externalLanguages) {
    const lang = JSON.parse(fs.readFileSync(`./i18n/${language}`, "utf8"));

    const fullLang = { ...en, ...lang };

    console.log(`Generating ${language}...`);

    fs.writeFileSync(`./temp/${language}`, JSON.stringify(fullLang));

    await buildFile(`./temp/${language}`, `./src/lang/${language}`);
  }
};

if (argv.includes("--extract")) {
  extractFunction();
} else if (argv.includes("--generate-schema")) {
  generateSchema();
} else if (argv.includes("--generate-sources")) {
  generateSources();
} else {
  console.log(
    "Unknown command. Use flag --extract, --generate-schema, or --generate-sources"
  );
}
