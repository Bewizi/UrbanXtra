import { navLinks } from "../Constants"

const Nav = () => {
  return (
    <header className="flex bg-slate-600 justify-between items-center px-12 py-8 mb-10  ">
      <div>
        <h1 className="uppercase">Logo</h1>
      </div>
      <nav>
        <ul className="flex">
          {
            navLinks.map((item)=>(
              <li key={item.label}>
                <a href={item.href} className="px-12 uppercase" >
                  {item.label}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default Nav