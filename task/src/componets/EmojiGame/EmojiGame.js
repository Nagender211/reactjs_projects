import React, { Component } from 'react';
import EmojiGameContent from './EmojiGameContent';
import NavBar from './NavBar';
import LoosGame from './LoosGame';
import WonGame from './WonGame';
import './EmojiGame.css';


const emojiGame = [
    {
        id: 1,
        emoji: 'https://media.istockphoto.com/id/2158608308/vector/smiling-face-with-heart-eyes-large-size-of-yellow-emoji-smile-with-hair.jpg?s=1024x1024&w=is&k=20&c=1DSVdueVWBJyIICNqxsvr_lNr9h_0YaMY4O1wHeZtYc=',
        emojiName: 'Lovely',
    },
    {
        id: 2,
        emoji: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdLREMre8QaJ87g9AZXe6GfCOrjTJxl7SbGA&s',
        emojiName: 'Grinning face with smiling eyes',
    },
    {
        id: 3,
        emoji: 'https://media.istockphoto.com/id/684666524/vector/smiling-yellow-cartoon-emoji-face-character-licking-his-lips.jpg?s=1024x1024&w=is&k=20&c=HpCCZx4TFB9qX_ZpiZxGFXs_nLaU-PQ2hWwfUHU6LxE=',
        emojiName: 'Face with tears of joy',
    },
    {
        id: 4,
        emoji: 'https://media.istockphoto.com/id/1318016903/vector/blowing-a-kiss-emoji-icon.jpg?s=1024x1024&w=is&k=20&c=u7Bc1Sk1iR1wik7-xiXLG0MzCO0Ya3CEq_1zXUt5RAI=',
        emojiName: 'Smiling face with open mouth',
    },
    {
        id: 5,
        emoji: 'https://media.istockphoto.com/id/1318016917/vector/halo-emoji-icon.jpg?s=1024x1024&w=is&k=20&c=6d4meduC2s5tMvDNymcFLFnO0VzMILyT-n1eXC5CnO4=',
        emojiName: 'Heart with ribbon',
    },
    {
        id: 6,
        emoji: 'https://media.istockphoto.com/id/1318016899/vector/awed-emoji-icon.jpg?s=1024x1024&w=is&k=20&c=Pcykq8xGqcMAgY3VupQhEQcX5uOBE9kHV7QisN4fnsM=',
        emojiName: 'Heart with green heart',
    },
    {
        id: 7,
        emoji: 'https://toppng.com/uploads/preview/sad-emoji-png-pic-115455082153aswbve4fc.png',
        emojiName: 'Grinning face',
    },
    {
        id: 8,
        emoji: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbf7AavhDU54ITuBnqRAQGP3YR8Hnvy1Szxw&s',
        emojiName: 'Smiling face with open mouth',

    },
    {
        id: 9,
        emoji: 'https://www.adnradio.cl/resizer/v2/Y5TOOUCOSVII7D6DB6SAWJHXNU.jpg?auth=190e3f9699da225c97ccbfd00d63cf610b7e365f59db220cd8bcf68f2336cb09&width=768&height=576&quality=70&smart=true',
        emojiName: 'Smiling face with sunglasses',
    }
];

class EmojiGame extends Component {
    state = {
        score: 0,
        highScore: 0,
        emoList: emojiGame,
        clickedEmojis: [],
        gameOver: false,
        won: false,
    };

    // Shuffle the array
    shufflingArray = (array) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    // Handle emoji click
    onclickEmoji = (id) => {
        const { clickedEmojis, score, highScore } = this.state;
        const shuffledArray = this.shufflingArray([...this.state.emoList]);

        // Check if the emoji was already clicked
        if (clickedEmojis.includes(id)) {
            // Game over, update high score if needed
            this.setState({
                highScore: Math.max(highScore, score),
                score: 0,
                gameOver: true,
                won: false,
            });
            console.log("Same id clicked, you lose. Please play again.");
        } else if (clickedEmojis.length + 1 === emojiGame.length) {
            // If all emojis are clicked, the player wins
            this.setState({
                gameOver: true,
                won: true,
                score: score + 1,
                highScore: Math.max(highScore, score + 1),
                clickedEmojis: [],
            });
        } else {
            // Continue the game
            this.setState((prevState) => ({
                score: prevState.score + 1,
                emoList: shuffledArray,
                clickedEmojis: [...prevState.clickedEmojis, id],
            }));
        }
    };

    // Reset game for "Play Again" button
    resetGame = () => {
        this.setState({
            score: 0,
            clickedEmojis: [],
            gameOver: false,
            won: false,
            emoList: this.shufflingArray(emojiGame),
        });
    };

    // Reset both score and high score for the "Reset All" button
    resetAll = () => {
        this.setState({
            score: 0,
            highScore: 0,
            clickedEmojis: [],
            gameOver: false,
            won: false,
            emoList: this.shufflingArray(emojiGame),
        });
    };

    render() {
        const { score, highScore, gameOver, won } = this.state;

        if (gameOver) {
            // If game over, show either LoosGame or WonGame
            return (
                <div>
                    <NavBar score={score} highScore={highScore} />
                    {won ? (
                        <WonGame resetGame={this.resetGame} resetAll={this.resetAll} />
                    ) : (
                        <LoosGame resetGame={this.resetGame} resetAll={this.resetAll} />
                    )}
                </div>
            );
        }

        return (
            <div>
                <NavBar score={this.state.score} highScore={this.state.highScore} />
                <div className="emoji-grid">
          {this.state.emoList.map((eachEmoji) => (
            <EmojiGameContent
              key={eachEmoji.id}
              id={eachEmoji.id}
              emoji={eachEmoji.emoji}
              emojiName={eachEmoji.emojiName}
              onclickEmoji={this.onclickEmoji}
            />
          ))}
        </div>
            </div>
        );
    }
}

export default EmojiGame;
