
class Draft(object):
    '''
    rounds = {
        0: {
            "Luis Scott-Vargas": [
                "Ember-Eye Wolf",
                "Ember-Eye Wolf",
                "Abandon Hope"
            ],
            "Pascal Maynard": [
                "Comet Storm",
                "Tarmogoyf",
                "Burst Lightning"
            ]
        }
    }
    '''
    def __init__(self, players=None, picks=None):
        self.players = players
        self.picks = picks
        self.rebuild_packs()

    def rebuild_packs(self):
        n_players = len(self.players)
        packs = [[] for i in xrange(n_players * 3)]
        for x in xrange(3):
            for i in xrange(n_players):
                for j in xrange(15):
                    packs[x*i].append(self.picks[i % n_players][j])
                    packs[x*i+1].append(self.picks[(i+1) % n_players][j])
                    packs[x*i+2].append(self.picks[(i+2) % n_players][j])
        self.packs = packs

    def get_player_pick(self, player, pack_no, pick_no):
        player_position = self.players.index(player)
        if player_position == -1:
            raise ValueError("Player {p} does not exist in this draft".format(p=player))
        else:
            return self.rounds[pack_no - 1][player][pick_no - 1]

class DraftParser(object):

    def __init__(self, csv):
        self.csv_content = [row for row in csv]

    def _contiguous(self, row, up_to=None):
        r = []
        for i, v in enumerate(row):
            if not v or (up_to and i == up_to):
                break
            r.append(v)
        return r

    def parse(self):
	import pudb; pudb.set_trace()
        players = self._contiguous(self.csv_content[0])
        players_picks = {p: [] for p in players}

        for row in self.csv_content[2:]:
            c_row = self._contiguous(row)
            if c_row:
                for i, p in enumerate(players):
                    players_picks[players[i]].append(c_row[i])
        
	draft = Draft(players=players, picks=players_picks)
	return draft

	
