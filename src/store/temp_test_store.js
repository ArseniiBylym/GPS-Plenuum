export const carsList = {
    cars: [
    {
        name: 'Car',
        icon_url: 'https://s1.gps-server.net/img/markers/objects/land-car-1.svg',
        date: +new Date(),
        speed: 100,
        current_position: {
            lat: 52,
            lng: 11
        },
        last_position: {
            lat: 51,
            lng: 10
        },
        engineState: false,
        connectionState: false,
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
                lat: 51.4825, 
                lng: -0.2139,
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
            lng: 13
        },
        last_position: {
            lat: 56,
            lng: 14
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
                lat: 51.5433, 
                lng: -0.0761,
            },
            ['Status']:	'Stopped 3 s',
            ['Time (position)']:	+new Date(),
            ['Time (server)']: +new Date(),
        },
        isVisible: true,
    }
]
}

export const eventsList = {
    events: [
        {
            _id: Math.random() + new Date(),
            time: +new Date(),
            object: 'Car',
            type: 'Overspeed',
            details: {
                address: 'A67, 5928 Venlo, Netherlands',
                ['Position']: {
                    lat: 51,
                    lng: 6,
                },
                altitude: '20 m',
                angle: '89',
                speed: '129 kph',
            }
        },
        {
            _id: Math.random() + new Date(),
            time: +new Date(),
            object: 'Bus',
            type: 'Zone out',
            details: {
                address: 'A67, 5928 Venlo, Netherlands',
                ['Position']: {
                    lat: 50,
                    lng: 5,
                },
                altitude: '13 m',
                angle: '70',
                speed: '80 kph',
            }
        },
        {
            _id: Math.random() + new Date(),
            time: +new Date(),
            object: 'Bus',
            type: 'Zone in',
            details: {
                address: 'A67, 5928 Venlo, Netherlands',
                ['Position']: {
                    lat: 50,
                    lng: 5,
                },
                altitude: '50 m',
                angle: '50',
                speed: '50 kph',
            }
        }
        
    ]

}

export const zonesList = {
    zones: [
        {
            _id: Math.random() + new Date(),
            name: 'Coventry',
            coords: [
                [51.509, -0.08],
                [51.503, -0.06],
                [51.51, -0.047]
            ],
            color: 'red',
            fillColor: '#f03',
            isVisible: true
        },
        {
            _id: Math.random() + new Date(),
            name: 'Manchester',
            coords: [
                [51.5584, -0.1895],
                [51.5459, -0.1140],
                [51.5243, -0.2160]
            ],
            color: 'green',
            fillColor: '#f03',
            isVisible: true
        }
    ]
}

export const windowsList = {
        // about: {name: 'about', value: true},
        // help: {name: 'help', value: true},
        // settings: {name: 'settings', value: true},
        // points: {name: 'points', value: false},
        // search: {name: 'search', value: false},
        // reports: {name: 'reports', value: false},
        // tasks: {name: 'tasks', value: false},
        // rfid: {name: 'rfid', value: false},
        // dtc: {name: 'dtc', value: false},
        // object: {name: 'object', value: false},
        // gallery: {name: 'gallery', value: false},
        // chart: {name: 'chart', value: false},

        about: {value: false},
        help: {value: false},
        settings: {value: false},
        points: {value: false},
        search: {value: false},
        reports: {value: false},
        tasks: {value: false},
        rfid: {value: false},
        dtc: {value: false},
        object: {value: false},
        gallery: {value: false},
        chart: {value: false},
}