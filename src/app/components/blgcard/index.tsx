const BlogCard = ({ title, createdAt, content, imageUrl }: any) => {
    return (
      <div className="p-4 border rounded-lg">
        <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
        <h3 className="text-lg font-semibold my-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{createdAt}</p>
        <p className="text-sm">{content}</p>
      </div>
    );
  };
  
  export default BlogCard;