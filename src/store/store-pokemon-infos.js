const state = {
    'PkmId001': {
        nationalNo: 001,
        name: 'Bulbasaur',
        type: ['grass', 'poison'],
        species: 'Seed Pokemon',
        description: 'For some time after its birth, it grows by gaining nourishment from the seed on its back',
        region: ['Kanto'],
        height: 0.7,
        weight: 6.9,
        abilities: ['Overgrow'],
        pvpTier: 'Untiered',
        evYield: '+1 Sp. Attack',
        eggGroup: ['Monster', 'Plant'],
        baseStats: {
            hp: 45,
            attack: 49,
            defense: 49,
            spAttack: 65,
            spDefense: 65,
            speed: 45
        },
        moves: [
            {
                level: 'START',
                name: 'Tackle',
                type: 'normal',
                power: 40,
                pp: 35,
                acc: 100
            },
            {
                level: 'Lv. 3',
                name: 'Growl',
                type: 'normal',
                power: '',
                pp: 40,
                acc: 100
            }
        ],
        locations: [
            {
                type: 'Grass',
                region: 'Kanto',
                location: 'ROUTE 5',
                levels: '10',
                rarity: 'Rare'
            }
        ],
        evolutionTree: '001 002 003'
    }
}