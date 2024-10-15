import { homedir } from 'node:os';
import { join } from 'node:path';

import { programErrors } from '../messages.mjs';

export const cd = ({
  properties: pathToDirectory,
  currentWorkingDirectory,
  changeCurrentWorkingDirectory,
}) => {
  const newPath = join(currentWorkingDirectory, pathToDirectory);
  const homeDir = homedir();

  if (!newPath.startsWith(homeDir)) {
    throw new Error(`${programErrors.invalidInput}. You can't go upper than root directory.`);
  }

  changeCurrentWorkingDirectory(newPath);
};
