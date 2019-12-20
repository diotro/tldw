import coffee from "coffee"
import ms from "ms.macro"
import path from "path"

const main = path.resolve(process.env.MAIN)

it("should run", async () => {
  const outputFile = path.join(__dirname, "..", "dist", "test", "readme.md")
  const sourceGlob = path.join(__dirname, "exampleSrc", "**")
  return coffee.fork(main, ["--output-file", outputFile, "--source-glob", sourceGlob])
    .expect("code", 0)
    .debug()
    .end()
}, ms`30 seconds`)

it("should output version", async () => {
  return coffee.fork(main, ["--version"])
    .expect("stdout", `${_PKG_VERSION}\n`)
    .expect("code", 0)
    .debug()
    .end()
})