import OpenCV from './OpenCV';
import MVH from './MVH';
import Sleuth from './Sleuth';
import WIP from './WIP';

export enum PROJECTS {
  cv,
  mvh,
  sleuth,
  wip,
}

export const projects = new Map([
  [PROJECTS.mvh, { component: MVH, env: 'production', name: PROJECTS.mvh, title: 'My Vacation Home' }],
  [PROJECTS.cv, { component: OpenCV, env: 'development', name: PROJECTS.cv, title: 'OpenCV' }],
  [PROJECTS.sleuth, { component: Sleuth, env: 'development', name: PROJECTS.sleuth, title: 'Sleuth' }],
  [PROJECTS.wip, { component: WIP, env: 'production', name: PROJECTS.wip, title: 'More...' }],
]);
