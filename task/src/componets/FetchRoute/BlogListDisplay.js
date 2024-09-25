import React, { Component } from 'react'
import BlogList from './BlogList'

const blogList=[
  {
    "id": 1,
    "title": "React v16.9.0 and the Roadmap Update",
    "image_url": "https://miro.medium.com/max/1050/1*i3hzpSEiEEMTuWIYviYweQ.png",
    "avatar_url": "https://miro.medium.com/max/4096/1*wiOSfPd2sY0gXSNK9vv6bg.jpeg",
    "author": "Dan Abramov,",
    "topic": "React.js"
  },
  {
    "id": 2,
    "title": "React v16.7: No, This Is Not the One With Hooks",
    "image_url": "https://miro.medium.com/max/3158/1*kEPCQNY4dwVyaFuLEwJcNQ.png",
    "avatar_url": "https://avatars.githubusercontent.com/u/3624098?v=4",
    "author": "Andrew Clark",
    "topic": "React.js"
  },
  {
    "id": 3,
    "title": "Building Great User Experiences with Concurrent Mode and Suspense",
    "image_url": "https://cdn.buttercms.com/O007i3wQgmRBu4ru92yF",
    "avatar_url": "https://images.squarespace-cdn.com/content/v1/6042ecd4513f6b5c4dc91aaf/1615155824885-GIE4JGQZG2QOVGL294PK/ke17ZwdGBToddI8pDm48kF4bdfD-ia1l4Dx5GCxoHspZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyFxcEUL_E3rtTKOK6YDZfFOvno4nmWnq-VrpVZhpg5d7A5XYUWepj6KEiZHiJnCAU/Screen+Shot+2021-03-07+at+5.23.16+PM.png",
    "author": "Joseph Savona",
    "topic": "React.js"
  },
  {
    "id": 4,
    "title": "Introducing The Problem Solver React v17.0",
    "image_url": "https://i.morioh.com/201014/e14da0fb.webp",
    "avatar_url": "https://miro.medium.com/max/4096/1*wiOSfPd2sY0gXSNK9vv6bg.jpeg",
    "author": "Dan Abramov,",
    "topic": "ReactJs"
  },
  {
    "id": 5,
    "title": "What about the React v16.13.0 That we Developed",
    "image_url": "https://www.hkinfosoft.com/wp-content/uploads/2020/02/react-banner.png",
    "avatar_url": "https://i.pinimg.com/280x280_RS/2d/61/90/2d6190d6a11e233ee84cac73cc8a7e5f.jpg",
    "author": "Sunil Pai",
    "topic": "ReactJs"
  },
  {
    "id": 6,
    "title": "React v16.4.2: Server-side vulnerability fix",
    "image_url": "https://community-cdn-digitalocean-com.global.ssl.fastly.net/variants/eSpohinjrEQFb4B54C2RGDQi/035575f2985fe451d86e717d73691e533a1a00545d7230900ed786341dc3c882",
    "avatar_url": "https://miro.medium.com/max/4096/1*wiOSfPd2sY0gXSNK9vv6bg.jpeg",
    "author": "Dan Abramov,",
    "topic": "React.js"
  },
  {
    "id": 7,
    "title": "Introducing Zero-Bundle-Size React Server Components",
    "image_url": "https://ahmadawais.com/wp-content/uploads/2020/12/react-server-components.jpg",
    "avatar_url": "https://miro.medium.com/max/4096/1*wiOSfPd2sY0gXSNK9vv6bg.jpeg",
    "author": "Dan Abramov,",
    "topic": "ReactJs"
  },
  {
    "id": 8,
    "title": "Introducing the New JSX Transform",
    "image_url": "https://assets.ccbp.in/frontend/content/react-js/introducing-the-new-jsx-transform.png",
    "avatar_url": "https://reactjs.org/static/afb31f3065fd4e93dc7c21e8d316983e/b17f8/lunaruan.jpg",
    "author": "Luna Ruan",
    "topic": "ReactJs"
  },
  {
    "id": 9,
    "title": "Introducing the New React DevTools",
    "image_url": "https://reactjs.org/static/9552e88d7605ef4e547af89096a9225d/1e088/devtools-v4-screenshot.png",
    "avatar_url": "https://egghead.io/_next/image?url=https%3A%2F%2Fimage.simplecastcdn.com%2Fimages%2F2ac34c%2F2ac34cab-4949-40aa-bac7-d7e3a70f0a39%2F4c24a78b-f2fd-41f2-87e9-265ead1acb93%2F1534346357artwork.jpg&w=384&q=75",
    "author": "Brian Vaughn",
    "topic": "React.js"
  },
  {
    "id": 10,
    "title": "Sneak Peek: Beyond React 16",
    "image_url": "https://on.notist.cloud/slides/deck1964/large-58.png",
    "avatar_url": "https://avatars.githubusercontent.com/u/3624098?v=4",
    "author": "Andrew Clark",
    "topic": "React.js"
  }
]

class BlogListDisplay extends Component{
    render() {
      return (
        <div>
          
         {blogList.map(item=>(
          <BlogList item={item} id={item.id} />
         ))}
        </div>
      )
    }
}

export default BlogListDisplay
