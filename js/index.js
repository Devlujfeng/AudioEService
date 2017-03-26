var sound = new Howl({
  src: ['../src/Jeremih-BirthdaySex.mp3']
});

// Clear listener after first call.
sound.once('load', function(){
  sound.play();
});

// Fires when the sound finishes playing.
sound.on('end', function(){
  console.log('Finished!');
});
