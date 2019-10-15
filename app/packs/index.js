import apollo from './apollo-studios-sfx-library.json';
import element from './element-soundkit.json';
import guitar from './guitar-americana.json';
import infamous from './infamous-classic-kit.json';

const packs = [ apollo, element, guitar, infamous ].map(pack => {
  return {
    ...pack,
    beats: pack.beats.sort((a, b) => (a.name > b.name) ? 1 : -1)
  }
})

module.exports = packs;