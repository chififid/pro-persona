const testData = {
  1: {
    name: "Internet",
    folders: {
      2: {
        name: "Freigegebene Dokumente",
        folders: {
          3: {
            name: "Verträge",
          },
        },
      },
    },
  },
  4: {
    name: "Internet",
    folders: {
      5: {
        name: "Freigegebene Dokumente",
        folders: {
          6: {
            name: "Verträge",
          },
        },
      },
    },
  },
  7: {
    name: "Internet",
    folders: {
      8: {
        name: "Freigegebene Dokumente",
        folders: {
          9: {
            name: "Verträge",
          },
        },
      },
    },
  },
  10: {
    name: "Internet",
    folders: {
      11: {
        name: "Freigegebene Dokumente",
        folders: {
          12: {
            name: "Verträge",
          },
        },
      },
    },
  },
};

export function getDirectory() {
  return testData;
}

export function refreshFolder(folderKey) {
  console.log(folderKey);
  return testData;
}
