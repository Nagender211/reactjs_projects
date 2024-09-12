import React, { Component } from 'react'
import EmojiGameContent from './EmojiGameContent'
import NavBar from './NavBar'




const emojiGame=[
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

    }
];





class EmojiGame extends Component{
    state={
        score: 0,
        highScore: 0,
        emoList: emojiGame,
        // iscliked: false,
        clickedEmojis: [],  // Track clicked emojis

    }
    shufflingArray=(array)=>{
        const newAraary=[...array];
    
        for(let i=newAraary.length-1; i>0; i--){
            const j = Math.floor(Math.random() * (i + 1));

            [newAraary[i], newAraary[j]]=[newAraary[j], newAraary[i]];
        }
        return newAraary;

    }
    
    onclickEmoji=(id)=>{
        const {clickedEmojis}=this.state;
        const shufflingArrayList=this.shufflingArray([...this.state.emoList])

        if(clickedEmojis.includes(id)){
            this.setState((pre)=>({
                highScore: pre.score,
                score: 0,
            }))
            console.log("same id is clicked you loos please play again");

        }else{
            this.setState(pre=>({
                score: pre.score+1,
                emoList: shufflingArrayList,
                clickedEmojis: [...pre.clickedEmojis, id],
                // highScore: Math.max(pre.score, pre.highScore),
          
    
    
            }))

        }
        
        
        
        console.log(`emoji ${id} clicked`)

    
    }
    render(){
       
        return (
            <div>
                <NavBar score={this.state.score} highScore={this.state.highScore} />
               
                {this.state.emoList.map(eachEmoji=>(
                    <EmojiGameContent key={eachEmoji.id} id={eachEmoji.id}  emoji={eachEmoji.emoji} emojiName={eachEmoji.emojiName} onclickEmoji={this.onclickEmoji}/>
                ))}
                
            </div>
        )
    }
}

export default EmojiGame
