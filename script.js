/**
 * A1 Musical Instrument
 * Piano Synth
 */

// ---------- Settings ----------

const noteKeys = {
  a: "C",
  s: "D",
  d: "E",
  f: "F",
  g: "G",
};

// ---------- State ----------

let octave = 4;

// ---------- Sound ----------

const synth = new Tone.PolySynth(Tone.Synth).toDestination();

// ---------- Update ----------

function update() {
  setTimeout(update, 100);
}

// ---------- Use ----------

function use() {
  setTimeout(use, 100);
}

// ---------- Controls ----------

// Author: at2061
function playNote(key) {
  const note = noteKeys[key] + octave;
  synth.triggerAttack(note);
}

// Author: at2061
function stopNote(key) {
  const note = noteKeys[key] + octave;
  synth.triggerRelease(note);
}

// Runs every time a key goes down.
function keyDown(event) {
  Tone.start();

  if (event.repeat === false) {
    console.log("Key down:", event.key);

    // Play notes
    if (noteKeys[event.key]) {
      playNote(event.key);
    }

    // Octave up
    if (event.key === "ArrowUp") {
      if (octave < 6) {
        octave++;
        console.log("Octave:", octave);
      }
    }

    // Octave down
    if (event.key === "ArrowDown") {
      if (octave > 2) {
        octave--;
        console.log("Octave:", octave);
      }
    }
  }
}

// Runs every time a key comes up.
function keyUp(event) {
  console.log("Key up:", event.key);

  if (noteKeys[event.key]) {
    stopNote(event.key);
  }
}

// ---------- Setup ----------

function setup() {
  update();
  use();

  window.addEventListener("keydown", keyDown);
  window.addEventListener("keyup", keyUp);
}

setup();
