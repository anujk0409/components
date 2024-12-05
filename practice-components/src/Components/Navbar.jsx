export function Navbar({title}){
    return <div className="flex justify-evenly w-360 h-12  pt-3 bg-gray ">
        <div>
            <img src="/Logo.png" alt="logo"></img>
        </div>
        <div className="flex   list-none gap-5  font-bold">

    <div >
        <li><a className="hover:text-white" href="/">Shopping</a></li>
    </div>
    <div>
        <li><a className="hover:text-white" href="/">Tracking</a></li>
    </div>
    <div>
        <li><a className="hover:text-white" href="/">Support</a></li>
    </div>
    <div>
        <li><a className="hover:text-white" href="/">Account</a></li>
    </div>

        </div>

        <div className="flex gap-3">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
            </div>
            <div className="shadow-xl shadow-light_gray">
                <input className="bg-light_gray  rounded text-start text-lg  " type="text" placeholder="Search here"></input>
            </div>
        </div>

<div className="flex gap-3">
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
    </div>
    <div className="bg-silver hover:bg-darkSilver font-bold h-7 w-42 border-solid border-lg rounded " >
<button className="text-lg hover:text-white pl-2 pr-2 shadow-lg ">SignUp/SignIn</button>
    </div>
</div>

    </div>
}