import { Command } from "@oclif/core";

export default class Duck extends Command {
  static description = "Try it, you won't regret it";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static flags = {};

  static args = {};

  public async run(): Promise<void> {
    // NOTE: check docs/adr/0001-alias-bin.md
    const isFunny = process.argv.some((arg) => arg.endsWith("run-alias"));

    if (isFunny === false) {
      this.log("You just missed a great joke 😕");
      this.log("Please, re-run this command using `psy duck`. It's funnier 🦆");
    } else {
      this.log(`
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣆⢀⣶⡶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⣿⢸⠟⣠⣶⡷⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⢀⣀⠀⢀⣠⠴⠴⠶⠚⠿⠿⠾⠭⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⢀⠴⢋⡽⠚⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠢⣀⠀⠀⠀⠀⠀⠀
  ⠀⠀⢀⡔⠁⡰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⠚⠛⣖⠀⠀⠀⠀
  ⠀⢀⡏⠀⡼⢡⠚⡛⠒⣄⠀⠀⠀⠀⣠⠖⠛⠛⠲⡄⠐⢯⠁⠀⠀⠹⡧⠀⠀⠀
  ⠀⣸⠀⠀⡇⠘⠦⣭⡤⢟⡤⠤⣀⠀⠣⣀⡉⢁⣀⠟⠀⠀⢷⠀⠀⠀⠙⣗⠀⠀
  ⠁⢻⠀⠀⢷⢀⡔⠉⢻⡅⣀⣤⡈⠙⠒⠺⠯⡍⠁⠀⠀⠀⢸⡆⠀⠀⠀⠘⡶⠄
  ⠀⣈⣧⠴⠚⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣰⠃⠀⠀⠀⠀⣸⡇⠀⠀⠀⠀⠸⣔
  ⣾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣧⣤⡤⠴⠖⠋⢹⠃⠀⠀⠀⠀⠀⣷
  ⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⣻⠁⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⣼
  ⠙⠑⣤⣀⠀⠀⠀⠀⠀⢀⠀⠀⢄⣐⠴⠋⠀⠀⠀⠀⠀⠀⠘⢆⠀⠀⠀⠀⣰⠟
  ⠀⠀⠀⣑⡟⠛⠛⠛⠛⠛⠛⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢴⡾⠋⠀
  ⠀⠀⠀⡾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡇⠀⠀
  ⠀⠀⣰⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀
  ⠀⠀⠸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠃⠀⠃
`);
    }
  }
}
