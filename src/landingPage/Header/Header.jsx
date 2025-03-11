export default function Header ()
{
    return (
       <>
       <div className="grid grid-cols-3 bg-gray-100 dark:bg-gray-900  ">

        <div className="col-1 items-center justify-center flex">
       <input type="search" placeholder="Search For Countries ..." className="  bg-gray-300 rounded-xl outline-none p-4 w-full md:w-3/4"></input>
       </div>

       <div className="col-1">
       </div>

       <div className="col-1 items-center justify-center flex ">
       <select className="bg-gray-300 rounded-xl outline-none p-4 w-full md:w-3/4">
        <option className="text-gray-400" >Filter By Region</option>
        <option  className="text-gray-400">Europe</option>
        <option className="text-gray-400">Asia</option>
        <option className="text-gray-400">Africa</option>
        <option className="text-gray-400">America</option>
       </select>
       </div>
      
       </div>
       
       </> 
    )
}


