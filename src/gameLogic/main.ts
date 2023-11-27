import k from "./kaboomCtx";
import loadAssets from "./loadAssets";

export default async function main() {
  loadAssets(k);

  k.add([k.sprite("npc")]);
}
