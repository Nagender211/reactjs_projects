import React, { Component } from 'react'




const ReviewList=[
    {
        id: 1,
        
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1pH7kRFtyfTda6Jy4nMkUAObQelb_RKktA&s',
        name: 'John Doe',
        rating: 4,
        comment: 'This is a great app!'
    },{
        id: 2,
        image: 'https://media.istockphoto.com/id/491603012/photo/portrait-of-the-young-woman-of-25-years.jpg?s=170667a&w=0&k=20&c=0Ni-DXImYDZ_mGBnoyYgB3HR09jhUNRUvQqzjRL_usI=',
        name: 'Jane Smith',
        rating: 5,
        comment: 'I love this app!'
    },{
        id: 3,
        image: 'https://th.bing.com/th/id/OIP.V0K01Dd-U6e2VnriYwLMVwHaJQ?rs=1&pid=ImgDetMain',
        name: 'Bob Johnson',
        rating: 3,
        comment: 'It has some bugs.'
    },{
        id: 4,
        image: 'https://th.bing.com/th/id/OIP.LgTMHXXPkizZ4xpcxZqwYAAAAA?w=191&h=259&c=7&r=0&o=5&pid=1.7',
        name: 'Alice Davis',
        rating: 2,
        comment: 'I dislike this app.'
    }
]

class ReviewsApp extends Component{
    state={
        reviews: ReviewList,
        currentIndex: 0
    }



    updatePrevew=(id)=>{
        this.setState(pre =>{
            const {reviews,currentIndex}=this.state
            let newIndex=pre.currentIndex-1;
            if(newIndex<0){
                newIndex=reviews.length-1;
            }
            return {currentIndex: newIndex}
        })
        
    }
    updateNeaxt=()=>{
        this.setState(next=>{
            const {reviews,currentIndex}=this.state

            let newIndex=next.currentIndex+1;
            if(newIndex>=reviews.length){
                newIndex=0;
            }
            return {currentIndex: newIndex}
        })
        
    }
    render(){
        const {reviews,currentIndex}=this.state;
        const {name,rating,comment,image}=reviews[currentIndex];
        return(
            <div>
                <h1>Reviews App</h1>
                <p>This is a simple reviews application</p>
                <img src={image} alt='review' style={{width: '100px', height: '100px'}}/>
                <h2>{name}</h2>
                <p>{comment}</p>
                <button onClick={this.updatePrevew}><img src='https://assets.ccbp.in/frontend/react-js/left-arrow-img.png' alt='preview' /></button>
                <button onClick={this.updateNeaxt}><img src='https://assets.ccbp.in/frontend/react-js/left-arrow-img.png' alt='Next' /></button>
            </div>
        )
    }
}

export default ReviewsApp
