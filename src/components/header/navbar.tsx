

export default function NavBar(){
    const NAV_ITEM = [
        {
          label: "home",
          href: "#",
          isActive: true,
        },
        {
          label: "pricing",
          href: "#",
          isActive: false,
        },
        {
          label: "events",
          href: "#",
          isActive: false,
        },
        {
          label: "company",
          href: "#",
          isActive: false,
        },
      ];
    
    return(
        <>
         <ul className="flex flex-col font-medium border-b-2 border-gray-300   bg-gray-50 gap-x-2 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent ">
              {NAV_ITEM.map((item, index) => (
                <li key={index}>
                  <a
                    className={`font-semibold text-gray-500  block py-3 px-4 lg:py-0 uppercase text-[13px]
                      transition-all ease-in-out ${item.isActive && "text-gray-800"} hover:text-gray-800 duration-300 `}
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
        </>
    )
}