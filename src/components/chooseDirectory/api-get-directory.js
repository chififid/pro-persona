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
  13: {
    name: "Internet",
    folders: {
      14: {
        name: "Freigegebene Dokumente",
        folders: {
          15: {
            name: "Verträge",
          },
        },
      },
    },
  },
  16: {
    name: "Internet",
    folders: {
      17: {
        name: "Freigegebene Dokumente",
        folders: {
          18: {
            name: "Verträge",
          },
        },
      },
    },
  },
  19: {
    name: "Internet",
    folders: {
    20: {
        name: "Freigegebene Dokumente",
        folders: {
          21: {
            name: "Verträge",
          },
        },
      },
    },
  },
  22: {
    name: "Internet",
    folders: {
      23: {
        name: "Freigegebene Dokumente",
        folders: {
          24: {
            name: "Verträge",
          },
        },
      },
    },
  },
  25: {
    name: "Internet",
    folders: {
      26: {
        name: "Freigegebene Dokumente",
        folders: {
          27: {
            name: "Verträge",
          },
        },
      },
    },
  },
  28: {
    name: "Internet",
    folders: {
      29: {
        name: "Freigegebene Dokumente",
        folders: {
          30: {
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
