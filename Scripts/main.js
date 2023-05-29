import { Model } from "./model.js";
import { Controller } from "./controller.js";
import { View } from "./view.js";

function main() {
  const model = new Model();
  const controller = new Controller(model);
  new View(controller);
}
main();
