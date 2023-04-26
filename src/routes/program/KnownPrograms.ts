interface ProgramLink {
  title: string;
  link: string;
}

export class KnownPrograms {
  programs: ProgramLink[];

  constructor(serialized: string | undefined = undefined) {
    if (serialized) {
      this.programs = JSON.parse(serialized);
    } else {
      this.programs = [];
    }
  }

  add(title: string, link: string) {
    this.programs.push({ title, link });
  }

  searialize() {
    return JSON.stringify(this.programs);
  }
}
