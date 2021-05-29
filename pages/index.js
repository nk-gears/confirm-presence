import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Ping Presence - Let every one at right time</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section class=""><div class="container mx-auto flex flex-col flex-col-reverse md:flex-row"><div class="md:w-6/12 py-20"><h2 class="text-2xl font-medium uppercase mb-3 text-indigo-600">transfer world-wide</h2><h3 class="text-lg text-gray-600 mb-8">Proident eiusmod est anim ipsum et officia ullamco minim elit pariatur nulla laboris officia. Dolor minim consequat in mollit ex. Aute in officia veniam esse duis qui qui velit laboris minim minim cupidatat. Enim proident Lorem duis nisi. Quis fugiat ad deserunt officia ipsum velit.</h3><div class="mb-5 flex space-x-5 items-start"><span class="text-white bg-indigo-400 rounded-lg h-12 w-12 flex items-center justify-center flex-shrink-0"><svg width="1em" height="1em" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="rounded" stroke-linejoin="rounded"><path stroke="none" d="M0 0h24v24H0z"></path><polyline points="21 12 17 12 14 20 10 4 7 12 3 12"></polyline></svg></span><div><div class="font-medium text-lg">Trade securely</div><div class="text-gray-700 mt-1">In cillum cupidatat cupidatat adipisicing in ullamco voluptate dolore.</div></div></div><div class="mb-5 flex space-x-5 items-start"><span class="text-white bg-indigo-400 rounded-lg h-12 w-12 flex items-center justify-center flex-shrink-0"><svg width="1em" height="1em" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="rounded" stroke-linejoin="rounded"><path stroke="none" d="M0 0h24v24H0z"></path><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5"></path><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5"></path></svg></span><div><div class="font-medium text-lg">Receive money instantly</div><div class="text-gray-700 mt-1">Aliqua aliqua id voluptate ut nisi fugiat ipsum sit incididunt nulla cupidatat.</div></div></div></div><div class="md:w-6/12"><div class="p-20"></div></div></div></section>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <section class="bg-indigo-500 text-white"><div class="container mx-auto py-32 text-center"><h2 class="text-5xl font-bold">The new standard in online payments</h2><h3 class="text-xl max-w-xl mx-auto mt-5">This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan.</h3><div class="mt-10 space-x-5"><button class="rounded-lg bg-green-500 text-white px-5 h-12 inline-flex items-center text-xl shadow hover:bg-green-600 hover:shadow-lg transition duration-150">Start Now</button><button class="rounded-lg bg-white text-gray-800 shadow px-5 h-12 inline-flex items-center text-xl hover:bg-gray-200 hover:shadow-lg transition duration-150">Contact Sales</button></div></div></section>

        <h1 className="text-6xl font-bold">
         Ping Presence
         
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
