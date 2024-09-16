import React, { Component } from 'react'
import MatchGameContent from './MatchGameContent';
import TabNnavigation from './TabNnavigation';

const TabItem=[
    {tabId: 'FRUIT',title: 'Fruits'},
    
    {tabId: 'ANIMAL',title: 'Animals'},
    {tabId: 'PLACE',title: 'Places'}
]
const projerctItems=[
    {
        projectId: 0,
        catagery: 'FRUIT',
        imgUrl: '',
    },
    {
        projectId: 1,
        catagery: 'ANIMAL',
        imgUrl: '',
    },
    {
        projectId: 2,
        catagery: 'PLACE',
        imgUrl: '',
    },
    {
        projectId: 3,
        catagery: 'FRUIT',
        imgUrl: '',
    },
    {
        projectId: 4,
        catagery: 'ANIMAL',
        imgUrl: '',
    },
    {
        projectId: 5,
        catagery: 'PLACE',
        imgUrl: '',
    },
    {
        projectId: 6,
        catagery: 'FRUIT',
        imgUrl: '',
    },
    {
        projectId: 7,
        catagery: 'ANIMAL',
        imgUrl: '',
    },
    {
        projectId: 8,
        catagery: 'PLACE',
        imgUrl: '',
    },
    {
        projectId: 9,
        catagery: 'FRUIT',
        imgUrl: '',
    },
    {
        projectId: 10,
        catagery: 'ANIMAL',
        imgUrl: '',
    },
    {
        projectId: 11,
        catagery: 'PLACE',
        imgUrl: '',
    },
    {
        projectId: 12,
        catagery: 'FRUIT',
        imgUrl: '',
    },
    {
        projectId: 13,
        catagery: 'ANIMAL',
        imgUrl: '',
    },
    {
        projectId: 14,
        catagery: 'PLACE',
        imgUrl: '',
    },
    {
        projectId: 15,
        catagery: 'FRUIT',
        imgUrl: '',
    },
    {
        projectId: 16,
        catagery: 'ANIMAL',
        imgUrl: '',
    },
    {
        projectId: 17,
        catagery: 'PLACE',
        imgUrl: '',
    },
    {
        projectId: 18,
        catagery: 'FRUIT',
        imgUrl: '',
    },
    {
        projectId: 19,
        catagery: 'ANIMAL',
        imgUrl: '',
    },
    {
        projectId: 20,
        catagery: 'PLACE',
        imgUrl: '',
    },
    {
        projectId: 21,
        catagery: 'FRUIT',
        imgUrl: '',
    },
    {
        projectId: 22,
        catagery: 'ANIMAL',
        imgUrl: '',
    },
    {
        projectId: 23,
        catagery: 'PLACE',
        imgUrl: '',
    },
    {
        projectId: 24,
        catagery: 'FRUIT',
        imgUrl: '',
    },
    {
        projectId: 25,
        catagery: 'ANIMAL',
        imgUrl: '',
    },
    {
        projectId: 26,
        catagery: 'PLACE',
        imgUrl: '',
    },
    {
        projectId: 27,
        catagery: 'FRUIT',
        imgUrl: '',
    },
    {
        projectId: 28,
        catagery: 'ANIMAL',
        imgUrl: '',
    },
    {
        projectId: 29,
        catagery: 'PLACE',
        imgUrl: '',
    },
    {
        projectId: 30,
        catagery: 'FRUIT',
        imgUrl: '',
    },
   
]
class MatchGame extends Component{
    state={
        activeTabId: TabItem[0].tabId
    }

    getFillterIteam =()=>{
        const {activeTabId}=this.state
        const fillteredList=projerctItems.filter(eeachProject=> eeachProject.catagery === activeTabId)
        return fillteredList
    }
    update=(tabId)=>{
        this.setState({activeTabId: tabId})
        console.log(`the tab id is: ${tabId}`)

    }

   
    render()
    {
        const fillteredList=this.getFillterIteam();
        // const {TabItem,projerctItems,projectId}=this.state
       
        return (
            
            <div>
               {TabItem.map((eachTab)=>(
                <TabNnavigation tabId={eachTab.tabId} eachTab={eachTab} update={this.update}/>

               ))}
                <h1>Match Game </h1>
                {fillteredList.map((eachfillter)=>(
                    <MatchGameContent eachfillter={eachfillter} projectId={eachfillter.projectId}/>
                ))}
            </div>
        )
    }
}

export default MatchGame
