
function Home() {
  return (
    <>
    <div className="flex justify-center items-center bg-cyberpunk-bg mx-56 my-48 rounded-2xl">
      <div className="container grid grid-cols-2 text-cyberpunk-text">
        <div className="flex flex-col gap-4 items-center justify-center py-4 px-20">
            <h2 className="text-xl font-bold">Game Store</h2>
            <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio placeat dignissimos repellat amet doloremque alias voluptatem et ullam consequuntur, minima esse error laborum eligendi accusamus est, qui maiores aliquid quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi repudiandae saepe ipsum labore eum fuga ipsam dolor magni. Itaque numquam ea esse laborum suscipit quae labore, molestias ducimus veniam corrupti.
            </p>
            <div className="flex justify-around gap-4">
              <div className="cursor-pointer
              rounded-2xl border-cyberpunk-accent2 border-solid border-2 py-2 px-4 hover:bg-green-700 hover:border-transparent transition-all duration-300">
                Produtos
              </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="src\assets\img\logo.png" alt="Logo da Marca" className="w-2/3 rounded-2xl"/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
