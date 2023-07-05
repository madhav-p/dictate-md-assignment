export default function AddNewPost() {
  return (

    <main className="mx-auto w-full max-w-2xl mb-8">
      <h1 className="text-4xl font-bold py-8">Create new Post</h1>
      <form action="" className="flex flex-col gap-4 px-4 min-w-full">
        <label htmlFor="" className="flex flex-col gap-2">
          <p className="font-medium text-black text-lg">Title</p>
          <input type="text" name="title" className="rounded-sm border-gray-400 p-1 border" />
        </label>
        <label htmlFor="" className="flex flex-col gap-2">
          <p className="font-medium text-black text-lg">Author</p>
          <input type="text" name="author" className="rounded-sm border-gray-400 p-1 border" />
        </label>
        <label htmlFor="" className="flex flex-col gap-2">
          <p className="font-medium text-black text-lg">Content</p>
          <textarea name="body" className="rounded-sm h-[600px] border-gray-400 p-1 border" />
        </label>
        <button className="bg-blue-700 py-2 px-8 rounded-md text-white max-w-sm mx-auto">Publish</button>

      </form>
    </main>

  )
}