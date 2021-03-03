/*
* cleanup.ts
*
* Copyright (C) 2020 by RStudio, PBC
*
*/

import { existsSync } from "fs/mod.ts";

import { removeIfExists } from "../../core/path.ts";

import { Format } from "../../config/format.ts";
import { kKeepMd, kKeepTex } from "../../config/constants.ts";

export function cleanup(
  selfContained: boolean,
  format: Format,
  finalOutput: string,
  supporting: string[],
  keepMd?: string,
) {
  // cleanup md if necessary
  if (keepMd && !format.render[kKeepMd] && keepMd !== finalOutput) {
    removeIfExists(keepMd);
  }

  // if we aren't keeping the markdown and we are self-contained, then
  // delete the supporting files
  if (
    !format.render[kKeepMd] && !format.render[kKeepTex] && selfContained
  ) {
    if (supporting) {
      supporting.forEach((path) => {
        if (existsSync(path)) {
          Deno.removeSync(path, { recursive: true });
        }
      });
    }
  }
}
