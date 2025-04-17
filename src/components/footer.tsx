export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-gray-900/30 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">© {currentYear} Zin Phoo Mon. All rights reserved.</p>
        <p className="text-gray-500 text-sm mt-2">Fullstack Developer since 2017</p>
      </div>
    </footer>
  )
}
