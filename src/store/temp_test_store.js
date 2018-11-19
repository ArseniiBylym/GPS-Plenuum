export const carsList = {
    cars: [
    {
        name: 'Car',
        icon_url: 'https://s1.gps-server.net/img/markers/objects/land-car-1.svg',
        date: +new Date(),
        speed: 100,
        current_position: {
            lat: 52,
            long: 11
        },
        last_position: {
            lat: 51,
            long: 10
        },
        engineState: true,
        connectionState: true,
        details: {
            ['Altitude']: 119,
            ['Angle']: 158,
            ['Driver Name']: 'Andrew Andrew',
            ['Engine ID']: '33659212b',
            ['Engine Type']: 'Petrol',
            ['Engine Hours']: '5048 h 42 min 50 s',
            ['Ignition']: 'off',
            ['Model']: 'Plaxton Elite',
            ['Nearest Zone']: 'Recklinghausen (295.59 km)',
            ['Odometer']: '3754568 km',
            ['Plate']: 'PLA987',
            ['Position']: {
                lat: '51.48258176623268', 
                long: '-0.21393631536935412',
            },
            ['Status']:	'Stopped 3 s',
            ['Time (position)']:	+new Date(),
            ['Time (server)']: +new Date(),
        },
        isVisible: true
    },
    {
        name: 'Bus',
        icon_url: 'https://s1.gps-server.net/img/markers/objects/land-bus-1.svg',
        date: new Date(),
        speed: 80,
        current_position: {
            lat: 55,
            long: 13
        },
        last_position: {
            lat: 56,
            long: 14
        },
        engineState: true,
        connectionState: true,
        details: {
            ['Altitude']: 119,
            ['Angle']: 158,
            ['Driver Name']: 'John John',
            ['Engine ID']: '33659212a',
            ['Engine Type']: 'Petrol',
            ['Engine Hours']: '5048 h 42 min 50 s',
            ['Ignition']: 'off',
            ['Model']: 'Plaxton Elite',
            ['Nearest Zone']: 'Recklinghausen (295.59 km)',
            ['Odometer']: '3754568 km',
            ['Plate']: 'PLA987',
            ['Position']: {
                lat: '51.54332609041597', 
                long: '-0.07614621427870284',
            },
            ['Status']:	'Stopped 3 s',
            ['Time (position)']:	+new Date(),
            ['Time (server)']: +new Date(),
        },
        isVisible: true,
    }
]
}