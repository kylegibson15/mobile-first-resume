import OpenCV from './OpenCV';
import MVH from './MVH';
import Sleuth from './Sleuth';

export enum PROJECTS {
  cv,
  mvh,
  sleuth,
}

export const projects = new Map([
  [PROJECTS.mvh, { component: MVH, env: 'production', name: PROJECTS.mvh, title: 'My Vacation Home' }],
  [PROJECTS.cv, { component: OpenCV, env: 'development', name: PROJECTS.cv, title: 'OpenCV' }],
  [PROJECTS.sleuth, { component: Sleuth, env: 'development', name: PROJECTS.sleuth, title: 'Sleuth' }],
]);
