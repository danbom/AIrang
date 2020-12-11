'''
Created on May 12, 2009

@author: Justin Bozonier
'''
#import pysynth
import numpy as np
from .MarkovBuilder import MarkovBuilder

class MusicMatrix:
    def __init__(self, song=None):
        self._previous_note = None

        if song is not None:
            notes = np.array(song, dtype=str)[:, 0]
            durations = np.array(song, dtype=str)[:, 1]

            for i, d in enumerate(durations):
                durations[i] = self.float2str(durations[i])

            self._markov = MarkovBuilder(np.unique(notes).tolist())
            self._timings = MarkovBuilder(np.unique(durations).tolist())

            for note in song:
                self.add(note)
        else:
            self._markov = MarkovBuilder(["a", "a#", "b", "c", "c#", "d", "d#", "e", "f", "f#", "g", "g#"])
            self._timings = MarkovBuilder([1, 2, 4, 8, 16])

        # print(self._markov._value_lookup)
        # print(self._timings._value_lookup)

    def float2str(self, d):
        if float(d) >= 1:
            return '%d' % int(float(d))
        else:
            return '%.2f' % float(d)

    def add(self, to_note):
        """Add a path from a note to another note. Re-adding a path between notes will increase the associated weight."""

        to_note = list(to_note)
        to_note[1] = self.float2str(to_note[1])

        if(self._previous_note is None):
            self._previous_note = to_note
            return
        from_note = self._previous_note
        self._markov.add(from_note[0], to_note[0])
        self._timings.add(from_note[1], to_note[1])
        self._previous_note = to_note
        
    def next_note(self, from_note):
        from_note = list(from_note)
        from_note[1] = self.float2str(from_note[1])

        return [self._markov.next_value(from_note[0]), float(self._timings.next_value(from_note[1]))]

if __name__ == "__main__":
    # Playing it comes next :)
    #test = [['c',4], ['e',4], ['g',4], ['c5',1]]
    #pysynth.make_wav(test, fn = "test.wav")

    musicLearner = MusicMatrix()

    # Input the melody of Row, Row, Row Your Boat
    # The MusicMatrix will automatically use this to 
    # model our own song after it.
    musicLearner.add(["c", 4])
    musicLearner.add(["c", 4])
    musicLearner.add(["c", 4])
    musicLearner.add(["d", 8])
    musicLearner.add(["e", 4])
    musicLearner.add(["e", 4])
    musicLearner.add(["d", 8])
    musicLearner.add(["e", 4])
    musicLearner.add(["f", 8])
    musicLearner.add(["g", 2])

    musicLearner.add(["c", 8])
    musicLearner.add(["c", 8])
    musicLearner.add(["c", 8])

    musicLearner.add(["g", 8])
    musicLearner.add(["g", 8])
    musicLearner.add(["g", 8])

    musicLearner.add(["e", 8])
    musicLearner.add(["e", 8])
    musicLearner.add(["e", 8])

    musicLearner.add(["c", 8])
    musicLearner.add(["c", 8])
    musicLearner.add(["c", 8])

    musicLearner.add(["g", 4])
    musicLearner.add(["f", 8])
    musicLearner.add(["e", 4])
    musicLearner.add(["d", 8])
    musicLearner.add(["c", 2])

    random_score = []
    current_note = ["c", 4]
    for i in range(0,100):
        print(current_note[0] + ", " + str(current_note[1]))
        current_note = musicLearner.next_note(current_note)
        random_score.append(current_note)

    pysynth.make_wav(random_score, fn = "first_score.wav")