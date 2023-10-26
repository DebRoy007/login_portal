import { api } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });
 

  return (
    <main className="flex min-h-screen flex-col items-center justify-center from-[#2e026d] to-[#15162c] ">
      <div className="flex justify-center items-center h-screen">
    <div className="w-96 h-fit p-6 drop-shadow-lg bg-white rounded">
        <h1 className="text-center text-indigo-800 font-extrabold">Login</h1>
        <h1 className="p-6 drop-shadow-lg font-light ">Hey, Enter your details to get sign in to your account!!!</h1>
        <div className="w-20 p-4">
            
            <input type=""  placeholder="User-ID" className="border border-gray-200 shadow-sm px-4 py-1 rounded" />
        </div>
        <div className="w-20 p-4">
           
            <input type="password"  placeholder="Password" className="border border-grey-200 shadow-sm px-4 py-1  rounded"/>
        </div>
        <div className="flex items-center justify-center">
           
            <button className="border-2 bg-indigo-700 rounded-full text-white px-4 py-2">login</button>
        </div>
        <h4 className="p-6 drop-shadow-lg font-light ">Don't have an account? <a href="https://tailwindcss.com/docs/configuration" className="text-indigo-700">Connect</a> ,wih Admin</h4>
      </div>
    </div>
    </main>
  );
}
