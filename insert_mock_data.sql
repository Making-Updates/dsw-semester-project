-- Insert data into admin login --
INSERT INTO
    `admin_login` (`email`, `password`)
VALUES
    ('admin', 'adminpass'),
    ('admin2', 'adminpass2');

-- Insert data into user login --
INSERT INTO
    `user_login` (`email`, `password`, `confirm_password`)
VALUES
    ('test@gmail.com', 'testpass', 'testpass'),
    (
        'testing@gmail.com',
        'testingpass',
        'testingpass'
    );

-- Insert data into homeless people locations --
INSERT INTO
    `homeless_people`(`longitude`, `latitude`, `count`)
VALUES
    ('28.012771367939425', '-26.188358858284495', '1'),
    ('28.01088309279294', '-26.190052920567382', '5'),
    (
        '28.009423971088836',
        '-26.195288957320923',
        '20'
    );

-- Insert data into homeless shelter locations --
INSERT INTO
    `homeless_shelter`(`longitude`, `latitude`, `name`)
VALUES
    ('28.01092600813718', '-26.1871652996113', 'test'),
    (
        '28.005819082172824',
        '-26.18932139669458',
        'testing'
    ),
    (
        '28.016762494953586',
        '-26.192824969345317',
        'testshelter'
    );