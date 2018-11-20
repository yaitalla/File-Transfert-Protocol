const css = {
  container: {
    backgroundColor: "#ddd"
  },
  noBullet: {
    listStyleType: "none",
    "display": "flex",
    flexDirection: "row",
    "justifyContent": "center"

  },
  item: {
    flexDirection: "row",
    margin: "25px"
  }
}

// FAIS plutot du cas par cas, que tu export 1 par 1, comme ca tu peux l'import n'importe où, sans importer tout le reste !!
// ex:

const container = {
   backgroundColor: "#ddd",
}

const noBullet = {
  listStyleType: "none",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
},
      
export {
  container,
  noBullet
}

export default css;
