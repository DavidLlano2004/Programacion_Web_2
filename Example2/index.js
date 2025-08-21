import app from "./src/app.js";

const main = async () => {
  try {
    app.listen(3000, () => {
      console.log("Servidor corriendo");
    });
  } catch (error) {
    console.error("Error al iniciar la app:", error);
  }
}

main();
