#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

function removeAllChildren(targetDir) {
  if (!fs.existsSync(targetDir)) return;
  for (const item of fs.readdirSync(targetDir)) {
    const itemPath = path.join(targetDir, item);
    fs.rmSync(itemPath, { recursive: true, force: true });
  }
}

function cleanBuildOutput() {
  const projectRoot = path.resolve("..");
  const matrixDir = path.join(projectRoot, "htdocs", "luci-static", "matrix");
  const resourcesDir = path.join(
    projectRoot,
    "htdocs",
    "luci-static",
    "resources",
  );

  console.log("🧹 start clean build output...");

  if (fs.existsSync(matrixDir)) {
    for (const item of fs.readdirSync(matrixDir)) {
      if (item !== "public") {
        const itemPath = path.join(matrixDir, item);
        console.log(`   remove: ${itemPath}`);
        fs.rmSync(itemPath, { recursive: true, force: true });
      } else {
        console.log(`   keep: ${path.join(matrixDir, "public")}`);
      }
    }
  }

  if (!fs.existsSync(resourcesDir)) {
    fs.mkdirSync(resourcesDir, { recursive: true });
  } else {
    console.log(`   clean: ${resourcesDir}/*`);
    removeAllChildren(resourcesDir);
  }

  console.log("✅ clean build output done!");
}

cleanBuildOutput();
