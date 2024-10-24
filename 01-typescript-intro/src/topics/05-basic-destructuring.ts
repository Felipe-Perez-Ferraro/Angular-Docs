const audioPlayer: AudioPlayer = {
  audioVolume: 100,
  songDuration: 36,
  song: 'Mess',
  details: {
    author: 'Ed Sheeran',
    year: 2015,
  },
};

const song = 'Awesome song';

const { song: originalSong, songDuration: duration, details } = audioPlayer;
const { author } = details;

console.log('Song: ' + originalSong);
console.log('Author: ' + author);
console.log('duration: ' + duration);

interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const got: string[] = ['Jhon Snow', 'Cersei', 'Daenerys'];
const [jhonSnow, cersei, daenerys] = got;

console.log('Personaje 3: ' + daenerys);
