const fs = require("fs");
const path = require("path");

const docsDir = path.resolve(__dirname, "docs");

// Function to scan folders inside the docs directory
function generateNavbarItems() {
  const subfolders = fs
    .readdirSync(docsDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const navbarItems = subfolders.map((folder) => ({
    type: "docSidebar",
    sidebarId: `${folder}Sidebar`, // Automatically create sidebarId based on folder name
    label: folder.charAt(0).toUpperCase() + folder.slice(1), // Capitalize folder name for label
  }));

  return navbarItems;
}

module.exports = generateNavbarItems;
