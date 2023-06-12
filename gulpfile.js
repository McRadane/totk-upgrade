import gulp from "gulp";

const { src, dest, parallel } = gulp;

export const copyAssets = () => {
  return src(["dist/*.*", "dist/**", "!dist/index.html"]).pipe(
    dest("build/totk-upgrade")
  );
};

export const copyIndex = () => {
  return src(["dist/index.html"]).pipe(dest("build"));
};

export const buildprod = parallel(copyAssets, copyIndex);

export default parallel(copyAssets, copyIndex);
