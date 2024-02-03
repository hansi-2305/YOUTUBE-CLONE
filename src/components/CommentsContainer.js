
import React from 'react'
import { useSelector } from 'react-redux';

const commentsData = [
    {
        name:"Aksahy saini",
        text:"lorem ipsum dollar are th floakj4k",
        replies:[
            {
                name:"Aksahy saini",
                text:"lorem ipsum dollar are th floakj4k",
                replies:[{
                    name:"Aksahy saini",
                    text:"lorem ipsum dollar are th floakj4k",
                    replies:[
            
                    ]
            
                },]
        
            },

        ]

    },
    {
        name:"Hanshika Agarwal",
        text:"lorem ipsum dollar are th floakj4k",
        replies:[
            {
                name:"Rose",
                text:"lorem ipsum dollar are th floakj4k",
                replies:[{
                    name:"Lotus",
                    text:"lorem ipsum dollar are th floakj4k",
                    replies:[
            
                    ]
            
                },]
        
            },

        ]

    },
    {
        name:"Aksahy saini",
        text:"lorem ipsum dollar are th floakj4k",
        replies:[
            {
                name:"Aksahy kumar",
                text:"lorem ipsum dollar are th floakj4k",
                replies:[{
                    name:"Deepika ",
                    text:"lorem ipsum dollar are th floakj4k",
                    replies:[
            
                    ]
            
                },]
        
            },

        ]

    },
    {
        name:"Mayur Chopra",
        text:"lorem ipsum dollar are th floakj4k",
        replies:[
            {
                name:"Suraj kapoor",
                text:"lorem ipsum dollar are th floakj4k",
                replies:[{
                    name:"Asish kaur",
                    text:"lorem ipsum dollar are th floakj4k",
                    replies:[
            
                    ]
            
                },]
        
            },

        ]

    },
];

const Comment =({data})=>{

    const {name,text,replies}=data;
    const theme =useSelector((store)=>store.app.theme);

    return <div className={"flex shadow-sm bg-gray-300 p-2 rounded-lg my-4" +
    (theme ? "bg-gray-400" : "bg-black")}>
        <img className="w-12 h-12 pr-2"
        alt="user"
        
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuafeZPHbbEvob9OolK9lNmUtF7B80asQjt2oMTB6lA&s">

        </img>
        <div className={"px-3" + (!theme ? "text-black" : "text-black")}>
            <p className={"font-bold text-black" 
     }>{name}</p>
            <p className={(!theme ? "text-black" : "text-black")}>{text}</p>
        </div>
    </div>

}

const CommentsList= ({comments})=>{

   return comments.map((comment,index)=>
   <div key={index}>
    <Comment  data={comment}/>
    <div className="pl-5 border border-l-black ml-5">
        {/* <Comment  key={index}  data={comment}/>
        <Comment  key={index}  data={comment}/>
        <Comment  key={index}  data={comment}/> */}

        <CommentsList comments= {comment.replies}/>
    </div>

   </div>


   )
    


}

const CommentsContainer = () => {
  return (
    <div className="m-5 -p-2">
        <h1 className="text-2xl font-bold">Comments</h1>
        <CommentsList  comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer