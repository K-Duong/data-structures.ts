export interface DataStructureInfo {
  name: string;
  description: string;
  timeComplexity: {
    access?: string;
    search?: string;
    insertion?: string;
    deletion?: string;
    [key: string]: string | undefined;
  };
  demo: () => void;
}

export const registry: Map<string, DataStructureInfo> = new Map();

export function registerStructure(info: DataStructureInfo) {
  registry.set(info.name.toLowerCase(), info);
}
