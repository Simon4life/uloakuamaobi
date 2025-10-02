import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-background-light/50 dark:bg-background-dark/50 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 py-8 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © 2025 uloakuamaobi. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors" href="#">
                {/* Facebook */}
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path clipRule="evenodd" fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 
                  6.477 2 12c0 4.991 3.657 9.128 
                  8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 
                  1.492-3.89 3.777-3.89 1.094 0 2.238.195 
                  2.238.195v2.46h-1.26c-1.243 
                  0-1.63.771-1.63 1.562V12h2.773l-.443 
                  2.89h-2.33v6.988C18.343 21.128 
                  22 16.991 22 12z"></path>
                </svg>
              </a>
              <a className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors" href="#">
                {/* Twitter */}
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 
                  11.675-11.675 0-.178 0-.355-.012-.53A8.348 
                  8.348 0 0022 5.92a8.19 8.19 0 
                  01-2.357.646 4.118 4.118 0 
                  001.804-2.27 8.224 8.224 0 
                  01-2.605.996 4.107 4.107 0 
                  00-6.993 3.743 11.65 11.65 
                  0 01-8.457-4.287 4.106 4.106 
                  0 001.27 5.477A4.072 4.072 0 
                  012.8 9.71v.052a4.105 4.105 0 
                  003.292 4.022 4.095 4.095 0 
                  01-1.853.07 4.108 4.108 0 
                  003.834 2.85A8.233 8.233 0 
                  012 18.407a11.616 11.616 
                  0 006.29 1.84"></path>
                </svg>
              </a>
              <a className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors" href="#">
                {/* Instagram */}
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path clipRule="evenodd" fillRule="evenodd" d="M12.315 
                  2c2.43 0 2.784.013 3.808.06 1.064.049 
                  1.791.218 2.427.465a4.902 4.902 
                  0 012.714 2.714c.247.636.416 
                  1.363.465 2.427.048 1.024.06 
                  1.378.06 3.808s-.012 2.784-.06 
                  3.808c-.049 1.064-.218 1.791-.465 
                  2.427a4.902 4.902 0 
                  01-2.714 2.714c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 
                  4.902 0 01-2.714-2.714c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 
                  4.902 0 012.714-2.714c.636-.247 
                  1.363-.416 2.427-.465C9.53 
                  2.013 9.884 2 12.315 2zM12 
                  8.118a4.682 4.682 0 100 
                  9.364 4.682 4.682 0 000-9.364zM12 
                  16a2.882 2.882 0 110-5.764 
                  2.882 2.882 0 010 5.764zm4.935-8.219a1.312 
                  1.312 0 11-2.625 0 
                  1.312 1.312 0 012.625 0z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer