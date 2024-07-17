-- Connect to the database
\c songs_dev;

-- Insert seed data into the songs table, excluding the id column


INSERT INTO songs (id, name, artist, album, time, is_favorite, playlist_id) VALUES
(1, 'In the Hall of the Mountain King', 'Edvard Grieg', 'Peer Gynt', '2:55', true, 1),
(2, 'Danse Macabre', 'Camille Saint-Saëns', 'Danse Macabre', '7:10', true, 2),
(3, 'Toccata and Fugue in D Minor', 'Johann Sebastian Bach', 'Toccata and Fugue', '8:45', true, 2),
(4, 'Night on Bald Mountain', 'Modest Mussorgsky', 'Night on Bald Mountain', '10:30', true, 3),
(5, 'Dies Irae', 'Giuseppe Verdi', 'Requiem', '1:55', true, 2),
(6, 'Ride of the Valkyries', 'Richard Wagner', 'Die Walküre', '5:20', true, 1),
(7, 'Requiem', 'Wolfgang Amadeus Mozart', 'Requiem', '8:55', true, 3);
