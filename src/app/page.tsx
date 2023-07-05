export default function Home() {
  return (
    <main className='max-w-2xl p-8 m-auto grid items-center gap-8 text-center'>
      <h1 className='text-2xl font-bold'>
        Search app
      </h1>
      <p>
        This is a demo application built to demonstrate search hits UI. <br></br>
        The search is powered by Algolia, a fast full-text search engine. <br></br>
        This site is hosted on Vercel, and source code available {" "}
        <a className='underline' href='https://github.com/madhav-p/dictate-md-assignment'>
          here
        </a>
      </p>
      <p>
        This website was built as a part of Coder Bytes assignment
      </p>
      <p className='flex items-center justify-evenly'>
        <small>Go to</small>
        <a className='underline text-blue-700' href="./search"> Search Page</a>
        <a className='underline text-blue-700' href="./new"> Create Post Page</a>
      </p>
    </main>
  )
}
