const { Plugin } = require('powercord/entities');

module.exports = class HeyRanni extends Plugin {
  constructor () {
    super();

    this.URLs = [
    "https://cdn.discordapp.com/emojis/625026302554144779.png?v=1",
    "https://cdn.discordapp.com/emojis/648510943076155392.png?v=1",
    "https://cdn.discordapp.com/emojis/623940676530470927.gif?v=1",
    "https://cdn.discordapp.com/emojis/624022144178716673.png?v=1"
    ]
  }

  startPlugin () {
    this.registerCommand(
      'heyranni',
      [],
      'ranni delicia fodase',
      '{c}',
      this.heyranni.bind(this)
    );
  }

  getRandomURL () {
    return this.URLs[Math.floor(Math.random() * this.URLs.length)];
  }

  heyranni () {
    document.querySelectorAll('[style*="background-image"]')
      .forEach(({ style }) => (
        style.backgroundImage = `url("${this.getRandomURL()}")`
      ));

    document.querySelectorAll('img')
      .forEach(image => (
        image.src = this.getRandomURL()
      ));
  }
};
