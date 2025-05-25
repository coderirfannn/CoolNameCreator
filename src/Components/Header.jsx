
import { Link } from "react-router-dom";
import { Sparkles} from "lucide-react"


function Header() {
  return (
    <div>
       <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link href="/" className="flex items-center justify-center">
          <Sparkles className="h-6 w-6 text-purple-600" />
          <span className="ml-2 text-xl font-bold">CoolNameCreator</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-purple-600 transition-colors">
            Features
          </Link>
          <Link href="#examples" className="text-sm font-medium hover:text-purple-600 transition-colors">
            Examples
          </Link> 
        
        </nav>
      </header>
      </div>
  )
}

export default Header