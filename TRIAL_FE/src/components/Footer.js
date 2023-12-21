export default function Footer(props) {
  return (
    <div>
      <footer className="  dark:bg-gray-800 flex flex-col justify-center items-center pt-10">
        <div className="w-full mx-auto max-w-screen-xl p-4   justify-center items-center">
          <ul className="flex flex-wrap justify-center items-center mt-3 text-sm font-medium text-gray-500 text-neutral-500 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
               About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Game
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Jobs
              </a>
            </li>
          </ul>
        </div>
        <div>
            
        </div>
 
        <div>
        <span className="text-sm text-gray-500 sm:text-center text-neutral-500 pb-10">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline ">
              TRIAL.
            </a>
            Project for Trial.
          </span>
          </div>
      </footer>
    </div>
  );
}
