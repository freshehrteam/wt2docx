import fs from 'fs';

export type Config = {
  displayTechnicalOccurrences: boolean;
  hideNodeIds: boolean;
  skippedAQLPaths: string[];
  includedAnnotations: string[];
  excludedRMTags: string[];
  title: string;
  hideParticipations: boolean;
  displayAQLPaths: boolean;
  displayToC: boolean;
  hideXmindValues: boolean
}


const defaultConfig: Config = {
  displayTechnicalOccurrences: false,
  hideNodeIds: true,
  skippedAQLPaths: [],
  includedAnnotations: [],
  excludedRMTags: ['territory','language', 'encoding','subject', 'transition','category','context', 'current_state', 'careflow_step'],
  title: "",
  hideParticipations: true,
  displayAQLPaths: false,
  displayToC: false,
  hideXmindValues: true
};

 export function importConfig(path: string): Config {

   if (fs.existsSync(path)) {
     const localConfig = JSON.parse(fs.readFileSync(path, { encoding: 'utf8', flag: 'r' }));
     return { ...defaultConfig, ...localConfig } ;
   }
   else
     return defaultConfig;
 }

