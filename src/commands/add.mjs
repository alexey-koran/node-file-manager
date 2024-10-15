import { writeFile } from 'node:fs/promises';

import { programErrors } from '../messages.mjs';

export const add = async (newFileName, flags) => {
  if (flags && flags.length > 0) {
    throw new Error(`${programErrors.invalidInput}. \nAdd command does not support flags.`);
  }

  if (!newFileName || newFileName.length === 0) {
    throw new Error(`${programErrors.invalidInput}. \nNew file name is not specified.`);
  }

  try {
    await writeFile(`${import.meta.dirname}/${newFileName}`, '', { flag: 'wx' });
  } catch (error) {
    throw new Error(`${programErrors.operationFailed}. \n${error}`);
  }
};
