CREATE TABLE cards (
  id serial,
  name text,
  type text,
  interruption boolean
);

INSERT INTO cards (name, type, interruption) VALUES ('Centre commercial', 'Lieu', false);
INSERT INTO cards (name, type, interruption) VALUES ('Egouts', 'Lieu', false);
INSERT INTO cards (name, type, interruption) VALUES ('Bar', 'Lieu', false);
INSERT INTO cards (name, type, interruption) VALUES ('Hangar', 'Lieu', false);
INSERT INTO cards (name, type, interruption) VALUES ('Décharge', 'Lieu', true);

INSERT INTO cards (name, type, interruption) VALUES ('Batte de baseball', 'Objet', false);
INSERT INTO cards (name, type, interruption) VALUES ('Bras robotique', 'Objet', true);
INSERT INTO cards (name, type, interruption) VALUES ('Ordinateur', 'Objet', false);
INSERT INTO cards (name, type, interruption) VALUES ('Bombe', 'Objet', false);
INSERT INTO cards (name, type, interruption) VALUES ('Fusil', 'Objet', false);

INSERT INTO cards (name, type, interruption) VALUES ('Gredin', 'Personnage', false);
INSERT INTO cards (name, type, interruption) VALUES ('Recelleur', 'Personnage', true);
INSERT INTO cards (name, type, interruption) VALUES ('Dealer', 'Personnage', false);
INSERT INTO cards (name, type, interruption) VALUES ('Policier', 'Personnage', false);
INSERT INTO cards (name, type, interruption) VALUES ('Senateur', 'Personnage', false);
INSERT INTO cards (name, type, interruption) VALUES ('Hackeur', 'Personnage', false);

INSERT INTO cards (name, type, interruption) VALUES ('Mourant', 'Aspect', false);
INSERT INTO cards (name, type, interruption) VALUES ('En fuite', 'Aspect', true);
INSERT INTO cards (name, type, interruption) VALUES ('Tres fort', 'Aspect', false);
INSERT INTO cards (name, type, interruption) VALUES ('Caché', 'Aspect', false);
INSERT INTO cards (name, type, interruption) VALUES ('Laid', 'Aspect', false);

INSERT INTO cards (name, type, interruption) VALUES ('Une explosion', 'Evenement', false);
INSERT INTO cards (name, type, interruption) VALUES ('La nuit tombe', 'Evenement', true);
INSERT INTO cards (name, type, interruption) VALUES ('Un combat', 'Evenement', false);
INSERT INTO cards (name, type, interruption) VALUES ('Qui dort', 'Evenement', false);
INSERT INTO cards (name, type, interruption) VALUES ('Est blessé', 'Evenement', false);
