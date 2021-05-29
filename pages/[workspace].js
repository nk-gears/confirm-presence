import Head from 'next/head'

export default function Workspace() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>SuperPage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      

        <h1 className="text-6xl font-bold">
         Kashvi - Programming Session
         
        </h1>
        

        <p className="mt-3 text-2xl">
         Let everyone know ahead of time.
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
          
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
       
      </footer>
    </div>
  )
}
