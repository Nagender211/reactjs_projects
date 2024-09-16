import React, { Component } from 'react'
import MatchGameContent from './MatchGameContent';
import TabNnavigation from './TabNnavigation';


const FruitList=[
    {
        id: 1,
        name: 'Apple',
        imgUrl: ''
    },
    {
        id: 2,
        name: 'Banana',
        imgUrl: ''
    },
    {
        id: 3,
        name: 'Cherry',
        imgUrl: ''
    },
    {
        id: 4,
        name: 'Dragon Fruit',
        imgUrl: ''
    },
    {
        id: 5,
        name: 'Grape',
        imgUrl: ''
    },
    {
        id: 6,
        name: 'Kiwi',
        imgUrl: ''
    },
    {
        id: 7,
        name: 'Lemon',
        imgUrl: ''
    },
    {
        id: 8,
        name: 'Mango',
        imgUrl: ''
    },
    {
        id: 9,
        name: 'Orange',
        imgUrl: ''
    },
    {
        id: 10,
        name: 'Pineapple',
        imgUrl: ''
    }
];

const Animals=[
    {
        id: 1,
        name: 'Elephant',
        imgUrl: ''
    },
    {
        id: 2,
        name: 'Giraffe',
        imgUrl: ''
    },
    {
        id: 3,
        name: 'Hippopotamus',
        imgUrl: ''
    },
    {
        id: 4,
        name: 'Iguana',
        imgUrl: ''
    },
    {
        id: 5,
        name: 'Jaguar',
        imgUrl: ''
    },
    {
        id: 6,
        name: 'Kangaroo',
        imgUrl: ''
    },
    {
        id: 7,
        name: 'Lion',
        imgUrl: ''
    },
    {
        id: 8,
        name: 'Monkey',
        imgUrl: ''
    },
    {
        id: 9,
        name: 'Narwhal',
        imgUrl: ''
    },
    {
        id: 10,
        name: 'Octopus',
        imgUrl: ''
    }

];

const Places=[
    {
        id: 1,
        name: 'Beach',
        imgUrl: ''
    },
    {
        id: 2,
        name: 'Mountain',
        imgUrl: ''
    },
    {
        id: 3,
        name: 'Forest',
        imgUrl: ''
    },
    {
        id: 4,
        name: 'Desert',
        imgUrl: ''
    },
    {
        id: 5,
        name: 'River',
        imgUrl: ''
    },
    {
        id: 6,
        name: 'Sea',
        imgUrl: ''
    },
    {
        id: 7,
        name: 'Sky',
        imgUrl: ''
    },
    {
        id: 8,
        name: 'Cave',
        imgUrl: ''
    },
    {
        id: 9,
        name: 'Ocean',
        imgUrl: ''
    },
    {
        id: 10,
        name: 'Valley',
        imgUrl: ''
    }
]


class MatchGame extends Component{
    state={
        fruit: FruitList,
        animal: Animals,
        place: Places,
        selectedFruit: null,
        selectedAnimal: null,
        selectedPlace: null
    }


    render(){
        return (
            <div>
                <TabNnavigation />
                <h1>Match Game </h1>
                <MatchGameContent />
            </div>
        )
    }
}

export default MatchGame
