import { join } from 'node:path';

import { pathToDirectory } from '../parameters/index.mjs';
import { getCommandUsage } from '../utils/commandUsage.mjs';
import { validatePath } from '../utils/validation.mjs';

const parameters = {
  mandatory: [pathToDirectory],
};

const help = {
  usage: getCommandUsage('cd', [...parameters.mandatory]),
  description: {
    text: 'Go to dedicated folder from current directory',
    hint: '(<path_to_directory> can be relative or absolute)',
  },
};

const cd = async ({
  passedParameters: [_pathToDirectory],
  currentWorkingDirectory,
  changeCurrentWorkingDirectory,
}) => {
  const newPath = join(currentWorkingDirectory, _pathToDirectory);

  await validatePath(newPath, { checkPath: true });

  changeCurrentWorkingDirectory(newPath);

  return newPath;
};

export default {
  func: cd,
  parameters,
  help,
};
