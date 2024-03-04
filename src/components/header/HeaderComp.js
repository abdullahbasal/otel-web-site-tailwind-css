import { useState } from "react";
import PhoneImg from "../../assets/icons/phone.png";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import RegistrationModal from "../registration-modal/RegistrationModal";
import LoginModal from "../login-modal/LoginModal";

export default function HeaderComp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isOpenRegistrationModal, setIsOpenRegistrationModal] = useState(false);
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  const openRegistrationModal = () => {
    setIsOpenRegistrationModal(true);
  };

  const closeRegistrationModal = () => {
    setIsOpenRegistrationModal(false);
  };
  const openLoginModal = () => {
    setIsOpenLoginModal(true);
  };

  const closeLoginModal = () => {
    setIsOpenLoginModal(false);
  };

  return (
    <nav className="bg-white ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <img src={Logo} width={150} height={40} />
        </Link>
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${isMenuOpen ? "" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="flex items-center font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
            <li>
              <Link
                to={"tel:444444444"}
                className="flex items-center gap-2 py-2 px-3"
              >
                <img src={PhoneImg} width={22} height={22} /> 444 444 444
              </Link>
            </li>

            <li>
              <Link to={"/otels"}>Otel Ara</Link>
            </li>
            <li>
              <Link to="/about">Hakkımızda</Link>
            </li>
            <li>
              <Link to="/support">Yardım</Link>
            </li>
            <li>
              <Link to="/contact">İletişim</Link>
            </li>
            <li>
              <button
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={(e) => {
                  e.preventDefault();
                  openRegistrationModal();
                }}
              >
                Kayıt Ol
              </button>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <button
                  type="button"
                  className="m-0	 text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  onClick={(e) => {
                    e.preventDefault();
                    openLoginModal();
                  }}
                >
                  Giriş Yap
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {isOpenRegistrationModal && (
        <RegistrationModal
          isOpen={isOpenRegistrationModal}
          onClose={closeRegistrationModal}
        />
      )}
      {isOpenLoginModal && (
        <LoginModal isOpen={isOpenLoginModal} onClose={closeLoginModal} />
      )}
    </nav>
  );
}
