const css = {
  container: {
    width: "80%",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  noBullet: {
    listStyleType: "none",
    padding: 0,
  },
  icon: {
    fontSize: "8em",
    padding: "20px 0",
    color: "rgba(10, 180, 180, 1)",
  },
  h2: {
     paddingTop: "30px",
     fontWeight: 300,
   },
   p: {
     fontSize: "18px",
   },
  info: {
    width: "45%",
    background: "rgba(20, 20, 20, .8)",
    padding: "30px 0",
    borderRight: "5px solid rgba(30, 30, 30, .8)",
  },
  inpuFields: {
    margin: "15px 0",
    fontSize: "16px",
    padding: "10px",
    width: "250px",
    border: "1px solid rgba(10, 180, 180, 1)",
    "borderTop": "none",
    "borderLeft": "none",
    "borderRight": "none",
    background: "rgba(20, 20, 20, .2)",
    color: "white",
    outline: "none",
  },
  "joinBtn": {
    border: "1px solid rgba(10, 180, 180, 1)",
    background: "rgba(20, 20, 20, .6)",
    "font-size": "18px",
    color: "white",
    "margin-top": "20px",
    padding: "10px 50px",
    cursor: "pointer",
    transition: ".4s",
/*
    &:hover {
      background: rgba(20, 20, 20, .8),
      padding: 10px 80px,
    }
    */
  },
  signupSection: {
    backgroundRepeat: "no-repeat",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "800px",
    height: "450px",
    textAlign: "center",
    display: "flex",
    color: "white",
    boxShadow: "3px 10px 20px 5px rgba(0, 0, 0, .5)",
  },
  signupForm: {
    width: "70%",
    padding: "30px 0",
    background: "rgba(20, 40, 40, .8)",
    transition: ".2s",
  }

};

export default css;
