export interface Skill {
  type: string;
  list: string[] | ProfessionalSkill[];
}

export interface ProfessionalSkill {
  token: string;
  level: number;
  priority?: number;
}
