import React, { Component } from 'react';
import MatchGameContent from './MatchGameContent';
import TabNnavigation from './TabNnavigation';

// Sample data for the tabs
const TabItem = [
    { tabId: 'FRUIT', title: 'Fruits' },
    { tabId: 'ANIMAL', title: 'Animals' },
    { tabId: 'PLACE', title: 'Places' }
];

// Sample data for the projects (with images categorized)

const projectItems =[
    {
        projectId: 0,
        catagery: 'FRUIT',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTMAvgwR5zkFsUG3Jp7V0hI8lJwWgW4AUPRg&s',
    },
    {
        projectId: 1,
        catagery: 'ANIMAL',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcuxHZa3v-lXfJ7pht9asToYn0T2iaDZYC-Q&s',
    },
    {
        projectId: 2,
        catagery: 'PLACE',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt1TVreWLtKosPnGeYx3NTLG6YgLBryfcMrw&s',
    },
    {
        projectId: 3,
        catagery: 'FRUIT',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQikfp0_dNMeFDtHw2vum4Xhjzcb6-yrZaHPg&s',
    },
    {
        projectId: 4,
        catagery: 'ANIMAL',
        imgUrl: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        projectId: 5,
        catagery: 'PLACE',
        imgUrl: 'https://cdn.pixabay.com/photo/2017/03/28/12/01/asia-2181892_640.jpg',
    },
    {
        projectId: 6,
        catagery: 'FRUIT',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrNU62jLjaRJ2XvCKDbaXhrVbvO5nO9n5cvA&s',
    },
    {
        projectId: 7,
        catagery: 'ANIMAL',
        imgUrl: 'https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        projectId: 8,
        catagery: 'PLACE',
        imgUrl: 'https://cdn.pixabay.com/photo/2019/04/08/09/23/dog-4111651_960_720.jpg',
    },
    {
        projectId: 9,
        catagery: 'FRUIT',
        imgUrl: '',
    },
    {
        projectId: 10,
        catagery: 'ANIMAL',
        imgUrl: 'https://images.pexels.com/photos/34770/haan-crows-mohawk.jpg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        projectId: 11,
        catagery: 'PLACE',
        imgUrl: 'https://cdn.pixabay.com/photo/2020/06/03/14/53/fashion-5255195_640.jpg',
    },
    {
        projectId: 12,
        catagery: 'FRUIT',
        imgUrl: 'https://cdn.pixabay.com/photo/2020/05/08/18/16/healthy-5146826_640.jpg',
    },
    {
        projectId: 13,
        catagery: 'ANIMAL',
        imgUrl: 'https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        projectId: 14,
        catagery: 'PLACE',
        imgUrl: 'https://cdn.pixabay.com/photo/2015/07/29/22/56/taj-mahal-866692_640.jpg',
    },
    {
        projectId: 15,
        catagery: 'FRUIT',
        imgUrl: 'https://cdn.pixabay.com/photo/2016/12/10/21/28/plums-1898196_640.jpg',
    },
    {
        projectId: 16,
        catagery: 'ANIMAL',
        imgUrl: 'https://images.pexels.com/photos/1059823/pexels-photo-1059823.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        projectId: 17,
        catagery: 'PLACE',
        imgUrl: 'https://cdn.pixabay.com/photo/2015/11/05/15/18/buddha-1024347_640.jpg',
    },
    {
        projectId: 18,
        catagery: 'FRUIT',
        imgUrl: 'https://cdn.pixabay.com/photo/2021/09/16/16/12/fruit-6630499_640.jpg',
    },
    {
        projectId: 19,
        catagery: 'ANIMAL',
        imgUrl: 'https://images.pexels.com/photos/802112/pexels-photo-802112.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        projectId: 20,
        catagery: 'PLACE',
        imgUrl: 'https://cdn.pixabay.com/photo/2013/08/05/06/21/sunset-169925_640.jpg',
    },
    {
        projectId: 21,
        catagery: 'FRUIT',
        imgUrl: 'https://cdn.pixabay.com/photo/2014/12/21/23/39/bananas-575773_640.png',
    },
    {
        projectId: 22,
        catagery: 'ANIMAL',
        imgUrl: 'https://cdn.pixabay.com/photo/2010/11/29/elephant-375_640.jpg',
    },
    {
        projectId: 23,
        catagery: 'PLACE',
        imgUrl: 'https://cdn.pixabay.com/photo/2016/01/28/10/02/temple-1166023_640.jpg',
    },
    {
        projectId: 24,
        catagery: 'FRUIT',
        imgUrl: 'https://cdn.pixabay.com/photo/2023/01/12/05/31/orange-7713308_640.jpg',
    },
    {
        projectId: 25,
        catagery: 'ANIMAL',
        imgUrl: 'https://images.pexels.com/photos/357159/pexels-photo-357159.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        projectId: 26,
        catagery: 'PLACE',
        imgUrl: 'https://cdn.pixabay.com/photo/2024/03/27/02/59/woman-8658049_640.png',
    },
    {
        projectId: 27,
        catagery: 'FRUIT',
        imgUrl: 'https://cdn.pixabay.com/photo/2023/07/31/16/37/sugar-apple-8161386_640.jpg',
    },
    {
        projectId: 28,
        catagery: 'ANIMAL',
        imgUrl: 'https://images.pexels.com/photos/638738/pexels-photo-638738.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        projectId: 29,
        catagery: 'PLACE',
        imgUrl: 'https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        projectId: 30,
        catagery: 'FRUIT',
        imgUrl: 'https://cdn.pixabay.com/photo/2023/12/09/21/03/pineapple-8440180_640.jpg',
    },
   
]

class MatchGame extends Component {
    state = {
        activeTabId: TabItem[0].tabId,
        displayedImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTMAvgwR5zkFsUG3Jp7V0hI8lJwWgW4AUPRg&s',
        score: 0,
        gameOver: false,
    };

    getFilteredItems = () => {
        const { activeTabId } = this.state;
        const filteredList = projectItems.filter(item => item.catagery === activeTabId);
        return filteredList;
    };

    updateTab = (tabId) => {
        this.setState({ activeTabId: tabId });
    };

    getRandomImageUrl = (category) => {
        const filteredItems = projectItems.filter(item => item.catagery === category);
        const randomIndex = Math.floor(Math.random() * filteredItems.length);
        return filteredItems[randomIndex]?.imgUrl || '';
    };

    onUpdatePhoto = (clickedImage, clickedCategory) => {
        const { displayedImage, displayedCategory, score } = this.state;

        let nextCategory, nextDisplayedImage;

        // Determine the next category for display based on the current category
        if (displayedCategory === 'FRUIT') {
            nextCategory = 'ANIMAL';
        } else if (displayedCategory === 'ANIMAL') {
            nextCategory = 'PLACE';
        } else {
            nextCategory = 'FRUIT';
        }

        nextDisplayedImage = this.getRandomImageUrl(nextCategory);

        // Check if the clicked image matches the currently displayed image exactly
        if (clickedImage === displayedImage) {
            this.setState({
                score: score + 1,          // Increment score
                displayedImage: nextDisplayedImage,  // Show a new random image
                displayedCategory: nextCategory,
            });
        } else {
            // Game over if images don't match
            this.setState({
                gameOver: true,
                score: 0,  // Reset score
            });
        }
    };

    resetGame = () => {
        const newDisplayedImage = this.getRandomImageUrl('FRUIT');
        this.setState({
            score: 0,
            gameOver: false,
            displayedImage: newDisplayedImage,
            displayedCategory: 'FRUIT',
        });
    };

    render() {
        const filteredList = this.getFilteredItems();
        const { displayedImage, score, gameOver } = this.state;

        return (
            <div>
                {TabItem.map((eachTab) => (
                    <TabNnavigation tabId={eachTab.tabId} eachTab={eachTab} update={this.updateTab} />
                ))}

                <h1>Match Game</h1>
                <p>Score: {score}</p>

                {gameOver ? (
                    <div>
                        <h2>Game Over!</h2>
                        <button onClick={this.resetGame}>Play Again</button>
                    </div>
                ) : (
                    <div>
                        <img src={displayedImage} alt="Displayed" style={{ display: 'flex', height: '300px', width: '200px', justifyContent: 'center', alignItems: 'center' }} />
                        {filteredList.map(eachFilter => (
                            <MatchGameContent 
                                eachFilter={eachFilter} 
                                key={eachFilter.projectId} 
                                onUpdatePhoto={() => this.onUpdatePhoto(eachFilter.imgUrl, eachFilter.catagery)} 
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }
}



export default MatchGame;



