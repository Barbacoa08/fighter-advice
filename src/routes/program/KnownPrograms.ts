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
    if (!this.programs.find((p) => p.title === title)) {
      this.programs.push({ title, link });
    }
  }

  remove(title: string) {
    this.programs = this.programs.filter((p) => p.title !== title);
  }

  searialize() {
    return JSON.stringify(this.programs);
  }
}
