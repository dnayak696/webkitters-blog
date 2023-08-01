"use client"
import { useState, useEffect } from "react";
import Header from "./components/header"
import _ from "lodash"
import Data from './../redux/MOCK_DATA.json';
import Link from "next/link";

import Pagination from "./components/pagination";
import BlogCard from "./components/blgcard";

export default function Home({params}: any) {

  const { page } = params;
  const [posts, setPosts] = useState(Data);
  const pageSize = 9;
  const [currentPage, setCurrentPage] = useState(1);
  // const [paginatePosts, setPaginatePosts] = useState([]);


  useEffect(()=>{
    paginate(posts, currentPage, pageSize);
  },[posts])


  const handlePageChange = (pageNo: any) => {
    setCurrentPage(pageNo);
  };
  
  // const handleDelete = (post) =>{
	// setPosts(posts.filter(p => p.id !== post.id ))
  // }

  const paginate = (items: any, pageNumber: any, pageSize: any) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items).slice(startIndex).take(pageSize).value();
    
  };

  const next =()=> setCurrentPage( currentPage + 1)

  const prev =()=> setCurrentPage( currentPage - 1)

   const paginatePosts = paginate(posts, currentPage, pageSize);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
          <Header/>
          <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 gap-4  md:grid-cols-3">
      {paginatePosts.map((post: any) => (
        <Link  key={post.id} href={`/blog/${post.id}`}>
        <BlogCard
            key={post.id}
            title={post.title.split(" ").slice(0, 8).join(" ") }
            createdAt={post.createdAt}
            content={post.content.split(" ").slice(0, 30).join(" ")}
            imageUrl={"https://picsum.photos/800/500"}
          />
      </Link>



      ))}

  
      </div>

      <Pagination
        items={posts}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        prev = {prev}
        next = {next}
      />
   
          </div>
    </main>
  )
}
