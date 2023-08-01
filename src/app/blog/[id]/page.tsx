"use client"
import Header from '@/app/components/header';
import data from '../../../redux/MOCK_DATA.json';
import { useState} from 'react';



// export async function getStaticProps({params}: any) {
//   const posts =await  data.filter((post) => post.id === params.id);
 
//   return {
//      post: posts[0],
//   }
// }


export function getPost(id: string): any{
  const posts =  data.filter((post) => post.id === id);
  return posts[0];
} 

export default function BlogPostPage({params}: any) {

  const [comments, setComments]: any = useState([]);

  const [input , setInput] = useState('')

  const post = getPost(params.id);

  // get the Data from id 
    return (<div className="flex flex-col items-center min-h-screen">
      <Header/>
      
      <div className="max-w-xl mx-auto my-8 bg-white rounded-lg shadow-lg">
      <img src={"https://picsum.photos/800/500"} alt="Blog Post" className="w-full h-64 object-cover rounded-t-lg" />
      <div className="px-4 py-6">
        <h1 className="text-2xl font-semibold">{post.title}</h1>
        <p className="text-gray-500 text-sm">{post.createdAt}</p>
        <p className="mt-4">{post.content}</p>
      </div>

        {
          comments.map((comment: any) =>(<div className="flex p-2 items-start space-x-2">
          <img src={"https://picsum.photos/50/50"} alt={comment.user} className="w-12 h-12 rounded-full" />
          <div className="flex-1">
            <h4 className="font-bold text-md">{comment.user}</h4>
            <p>{comment.comment}</p>
          </div>
        </div>))
        }

      <div className="px-4 py-6 bg-gray-100 rounded-b-lg">
        <textarea
          className="w-full p-2 mb-4 bg-white border rounded"
          rows={4}
          placeholder="Leave a comment..."
          value={input}
          onChange={(e) => setInput(e.target.value) }
        />
        <button  
         onClick={() => {
          setComments([...comments, { user: "Random User", comment: input}])
           setInput('')
        }}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Comment
        </button>
      </div>
    </div>
      </div>)
  }