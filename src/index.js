import fsp from "@absolunet/fsp"
import path from "path"
import yargs from "yargs"

const job = async ({outputFile}) => {
  await fsp.outputFile(outputFile, "hello")
}

const main = async () => {
  /**
   * @type {import("yargs").CommandBuilder}
   */
  const builder = {
    "output-file": {
      alias: "o",
      type: "string",
      default: path.join(process.cwd(), "readme.md"),
      description: "Output file.",
    },
    "config-directory": {
      alias: "c",
      type: "string",
      default: path.join(process.cwd(), "readme"),
      description: "Directory where config files for customizing readme output are stored in.",
    },
  }

  yargs
    .scriptName(_PKG_NAME)
    .version(_PKG_VERSION)
    .command("$0", _PKG_DESCRIPTION, builder, job).argv
}

main()