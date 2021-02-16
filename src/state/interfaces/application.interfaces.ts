import { PROJECTS } from '../../components/Projects';

export interface IApplicationState {
  theme: 'dark' | 'light';
  locale: string;
  project: PROJECTS;
}
