import { mkdirSync, writeFileSync } from "node:fs";

const text = `Snow all night.
At dawn my grandmother laces her boots by the stove,
slow, one side, then the other.
The kettle ticks as it cools.
Outside, the field is one unbroken page.
She stands at its edge, breathing steam,
then sets down the first footprint
and walks on.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
