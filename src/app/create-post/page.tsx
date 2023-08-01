import Header from "../components/header";

function CreatePostPage (){
    return (
      <div className="flex flex-col items-center min-h-screen">
          <Header/>
          <div className="mt-10">
        <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
        <div className="w-80">
          <label htmlFor="title" className="block font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter the title..."
          />
        </div>
        <div className="mt-4 w-80">
          <label htmlFor="image" className="block font-medium mb-1">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter the image URL..."
          />
        </div>
        <div className="mt-4 w-80">
          <label htmlFor="description" className="block font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter the description..."
          ></textarea>
        </div>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Submit
        </button>
        </div>
      </div>
    );
  };
  
  export default CreatePostPage;