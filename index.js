const { Plugin } = require('powercord/entities');

module.exports = class HeyRanni extends Plugin {
  constructor () {
    super();
    this.uglyimages = [
    "https://cdn.discordapp.com/emojis/625026302554144779.png?v=1",
    "https://cdn.discordapp.com/emojis/648510943076155392.png?v=1",
    "https://cdn.discordapp.com/emojis/623940676530470927.gif?v=1",
    "https://cdn.discordapp.com/emojis/624022144178716673.png?v=1",
    ]
    this.images = [
    "https://cdn.discordapp.com/attachments/297732013006389252/665224716797083649/unknown.png",
    "https://cdn.discordapp.com/attachments/297732013006389252/665225303710367754/a_ranni_pepe_evil.png",
    "https://cdn.discordapp.com/attachments/297732013006389252/665225307237777438/a_ranni_amor.png",
    "https://cdn.discordapp.com/attachments/297732013006389252/665225311150931969/a_ranni_facepalm.png",
    "https://cdn.discordapp.com/attachments/297732013006389252/665225311008456714/a_ranni_burro.png",
    "https://cdn.discordapp.com/attachments/297732013006389252/665225315521658880/a_ranni_gado.png",
    "https://cdn.discordapp.com/attachments/297732013006389252/665226151601635329/a_ranni_pride.png",
    "https://cdn.discordapp.com/attachments/297732013006389252/665226153094676480/a_ranni_mention.png"
    ]
  }

  startPlugin () {
    this.registerCommand(
      'heyranni',
      [],
      'ranni delicia fodase',
      '{c} [vomito]',
      async (args) => {
      	this.heyranni(args[0] == "vomito" ? true : false);
      }
    );
  }

  getRandomURL (option) {
  	let all = [].concat(this.uglyimages, this.images)
    return option ? all[Math.floor(Math.random() * all.length)] : this.uglyimages[Math.floor(Math.random() * this.uglyimages.length)]
  }

  heyranni (option) {
    document.querySelectorAll('[style*="background-image"]')
      .forEach(({ style }) => (
        style.backgroundImage = `url("${this.getRandomURL(!option)}")`
      ));

    document.querySelectorAll('img')
      .forEach(image => (
        image.src = this.getRandomURL(!option)
      ));
  }
};
