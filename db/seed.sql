-- -- Connect to the database
-- \c songs_dev;

-- -- Insert seed data into the songs table, excluding the id column


-- INSERT INTO songs (id, name, artist, album, time, is_favorite) VALUES
-- (1, 'In the Hall of the Mountain King', 'Edvard Grieg', 'Peer Gynt', '2:55', true),
-- (2, 'Danse Macabre', 'Camille Saint-Saëns', 'Danse Macabre', '7:10', true),
-- (3, 'Toccata and Fugue in D Minor', 'Johann Sebastian Bach', 'Toccata and Fugue', '8:45', true),
-- (4, 'Night on Bald Mountain', 'Modest Mussorgsky', 'Night on Bald Mountain', '10:30', true),
-- (5, 'Dies Irae', 'Giuseppe Verdi', 'Requiem', '1:55', true),
-- (6, 'Ride of the Valkyries', 'Richard Wagner', 'Die Walküre', '5:20', true),
-- (7, 'Requiem', 'Wolfgang Amadeus Mozart', 'Requiem', '8:55', true);



-- Connect to the database
\c music_dev;


-- Insert seed data into the artists table
INSERT INTO artists (name, genre, country, is_active) VALUES
('Edvard Grieg', 'Classical', 'Norway', TRUE),
('Camille Saint-Saëns', 'Classical', 'France', TRUE),
('Johann Sebastian Bach', 'Classical', 'Germany', FALSE),
('Modest Mussorgsky', 'Classical', 'Russia', FALSE),
('Giuseppe Verdi', 'Classical', 'Italy', FALSE),
('Richard Wagner', 'Classical', 'Germany', FALSE),
('Wolfgang Amadeus Mozart', 'Classical', 'Austria', FALSE),
('Efisio Cross', 'Classical', 'Unknown', TRUE),
('Ilya Beshevli', 'Classical', 'Russia', TRUE),
('Elephant Music', 'Soundtrack', 'Unknown', TRUE),
('Keith Merrill', 'Soundtrack', 'Unknown', TRUE),
('Luke Richards', 'Soundtrack', 'Unknown', TRUE),
('J.T. Peterson', 'Soundtrack', 'Unknown', TRUE),
('Eternal Eclipse', 'Soundtrack', 'Unknown', TRUE),
('Maxi Göthling', 'Soundtrack', 'Unknown', TRUE),
('Krale', 'Soundtrack', 'Unknown', TRUE),
('Glory Oath + Blood', 'Soundtrack', 'Unknown', TRUE),
('City & Vine', 'Soundtrack', 'Unknown', TRUE),
('Secession Studios', 'Soundtrack', 'Unknown', TRUE),
('Audiomachine', 'Soundtrack', 'Unknown', TRUE),
('Dream Cave', 'Soundtrack', 'Unknown', TRUE),
('Twisted Jukebox', 'Soundtrack', 'Unknown', TRUE),
('David Chappell', 'Soundtrack', 'Unknown', TRUE),
('Anne-Sophie Versnaeyen', 'Soundtrack', 'Unknown', TRUE),
('Gabriel Saban', 'Soundtrack', 'Unknown', TRUE),
('Nicholas Brittel', 'Soundtrack', 'Unknown', TRUE),
('Ludwig van Beethoven', 'Classical', 'Germany', FALSE),
('Niccolo Paganini', 'Classical', 'Italy', FALSE),
('Vittorio Monti', 'Classical', 'Italy', FALSE),
('Antonio Vivaldi', 'Classical', 'Italy', FALSE),
('Gustav Mahler', 'Classical', 'Austria', FALSE);

-- Insert seed data into the playlists table
INSERT INTO playlists (name, description, creation_date, is_public) VALUES
('You''re Playing Chess With Death And You''re About To Give A Checkmate', 'A thrilling collection of classical pieces perfect for a game of chess against the ultimate opponent.', '2024-07-27', TRUE),
('You''re A Villain Plotting Your Revenge', 'Dark and dramatic scores for those moments when you are plotting your master plan.', '2024-07-27', TRUE),
('You''re A Cat Preparing for War', 'Epic soundtracks to inspire the slow but steady march into battle.', '2024-07-27', TRUE);

-- Insert seed data into the songs table
INSERT INTO songs (name, album, duration, is_favorite, artist_id) VALUES
('In the Hall of the Mountain King', 'Peer Gynt', 175, TRUE, (SELECT id FROM artists WHERE name = 'Edvard Grieg')),
('Danse Macabre', 'Danse Macabre', 430, TRUE, (SELECT id FROM artists WHERE name = 'Camille Saint-Saëns')),
('Toccata and Fugue in D Minor', 'Toccata and Fugue', 525, TRUE, (SELECT id FROM artists WHERE name = 'Johann Sebastian Bach')),
('Night on Bald Mountain', 'Night on Bald Mountain', 630, TRUE, (SELECT id FROM artists WHERE name = 'Modest Mussorgsky')),
('Dies Irae', 'Requiem', 115, TRUE, (SELECT id FROM artists WHERE name = 'Giuseppe Verdi')),
('Ride of the Valkyries', 'Die Walküre', 320, TRUE, (SELECT id FROM artists WHERE name = 'Richard Wagner')),
('Requiem', 'Requiem', 535, TRUE, (SELECT id FROM artists WHERE name = 'Wolfgang Amadeus Mozart')),
('Lettre à Elise', 'Single', 252, TRUE, (SELECT id FROM artists WHERE name = 'Efisio Cross')),
('Compassion', 'Single', 428, TRUE, (SELECT id FROM artists WHERE name = 'Ilya Beshevli')),
('Against the Clock', 'Single', 589, FALSE, (SELECT id FROM artists WHERE name = 'Elephant Music')),
('Envisage', 'Single', 852, FALSE, (SELECT id FROM artists WHERE name = 'Keith Merrill')),
('Fateful News', 'Single', 995, FALSE, (SELECT id FROM artists WHERE name = 'Luke Richards')),
('Petrichor', 'Single', 1138, FALSE, (SELECT id FROM artists WHERE name = 'J.T. Peterson')),
('Inferia', 'Single', 1292, FALSE, (SELECT id FROM artists WHERE name = 'Eternal Eclipse')),
('Frenzied Mad with a Throne built on a cadaver of lies', 'Single', 1496, FALSE, (SELECT id FROM artists WHERE name = 'Maxi Göthling')),
('Endless bonds and broken promises', 'Single', 1680, FALSE, (SELECT id FROM artists WHERE name = 'Krale')),
('Such is your destiny', 'Single', 1870, FALSE, (SELECT id FROM artists WHERE name = 'Glory Oath + Blood')),
('Soul Battles', 'Single', 2068, FALSE, (SELECT id FROM artists WHERE name = 'City & Vine')),
('King', 'Single', 2200, FALSE, (SELECT id FROM artists WHERE name = 'Elephant Music')),
('To the Gallows', 'Single', 2545, FALSE, (SELECT id FROM artists WHERE name = 'Secession Studios')),
('Wildfire', 'Single', 2700, FALSE, (SELECT id FROM artists WHERE name = 'Audiomachine')),
('Valiant', 'Single', 2830, FALSE, (SELECT id FROM artists WHERE name = 'Dream Cave')),
('The maze', 'Single', 3003, FALSE, (SELECT id FROM artists WHERE name = 'Twisted Jukebox')),
('No Tomorrow', 'Single', 3141, FALSE, (SELECT id FROM artists WHERE name = 'David Chappell')),
('The Heart of Life', 'Single', 3270, FALSE, (SELECT id FROM artists WHERE name = 'Anne-Sophie Versnaeyen')),
('True Love''s Last Kiss', 'Single', 3440, FALSE, (SELECT id FROM artists WHERE name = 'Gabriel Saban')),
('Ghosts and Legends', 'Single', 3600, FALSE, (SELECT id FROM artists WHERE name = 'Nicholas Brittel')),
('Symphony No. 5', 'Single', 3750, FALSE, (SELECT id FROM artists WHERE name = 'Ludwig van Beethoven')),
('Caprice No. 24', 'Single', 3972, FALSE, (SELECT id FROM artists WHERE name = 'Niccolo Paganini')),
('Czardas', 'Single', 4200, FALSE, (SELECT id FROM artists WHERE name = 'Vittorio Monti')),
('The Four Seasons', 'Single', 4370, FALSE, (SELECT id FROM artists WHERE name = 'Antonio Vivaldi')),
('Symphony No. 1', 'Single', 4534, FALSE, (SELECT id FROM artists WHERE name = 'Gustav Mahler'));

-- Insert seed data into the playlist_songs table
INSERT INTO playlist_songs (playlist_id, song_id) VALUES
((SELECT id FROM playlists WHERE name = 'You''re Playing Chess With Death And You''re About To Give A Checkmate'), (SELECT id FROM songs WHERE name = 'In the Hall of the Mountain King')),
((SELECT id FROM playlists WHERE name = 'You''re Playing Chess With Death And You''re About To Give A Checkmate'), (SELECT id FROM songs WHERE name = 'Danse Macabre')),
((SELECT id FROM playlists WHERE name = 'You''re Playing Chess With Death And You''re About To Give A Checkmate'), (SELECT id FROM songs WHERE name = 'Toccata and Fugue in D Minor')),
((SELECT id FROM playlists WHERE name = 'You''re A Villain Plotting Your Revenge'), (SELECT id FROM songs WHERE name = 'Night on Bald Mountain')),
((SELECT id FROM playlists WHERE name = 'You''re A Villain Plotting Your Revenge'), (SELECT id FROM songs WHERE name = 'Dies Irae')),
((SELECT id FROM playlists WHERE name = 'You''re A Villain Plotting Your Revenge'), (SELECT id FROM songs WHERE name = 'Ride of the Valkyries')),
((SELECT id FROM playlists WHERE name = 'You''re A Cat Preparing for War'), (SELECT id FROM songs WHERE name = 'Requiem')),
((SELECT id FROM playlists WHERE name = 'You''re A Cat Preparing for War'), (SELECT id FROM songs WHERE name = 'Lettre à Elise')),
((SELECT id FROM playlists WHERE name = 'You''re A Cat Preparing for War'), (SELECT id FROM songs WHERE name = 'Compassion'));
