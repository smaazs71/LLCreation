import React from "react";

const page = () => {
  return (
    <div>
      <div dir="ltr">
        <div className="relative flex min-h-screen w-full justify-center py-5 md:py-8">
          <button className="absolute top-5 flex h-8 w-8 items-center justify-center text-gray-200 transition-colors hover:text-gray-400 ltr:left-5 rtl:right-5 md:top-1/2 md:-mt-8 md:h-16 md:w-16 md:text-gray-300 ltr:md:left-10 rtl:md:right-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 219.151 219.151"
              fill="currentColor"
            >
              <path d="M109.576 219.151c60.419 0 109.573-49.156 109.573-109.576C219.149 49.156 169.995 0 109.576 0S.002 49.156.002 109.575c0 60.42 49.155 109.576 109.574 109.576zm0-204.151c52.148 0 94.573 42.426 94.574 94.575 0 52.149-42.425 94.575-94.574 94.576-52.148-.001-94.573-42.427-94.573-94.577C15.003 57.427 57.428 15 109.576 15z"></path>
              <path d="M94.861 156.507a7.502 7.502 0 0010.606 0 7.499 7.499 0 00-.001-10.608l-28.82-28.819 83.457-.008a7.5 7.5 0 00-.001-15l-83.46.008 28.827-28.825a7.5 7.5 0 00-10.607-10.608l-41.629 41.628a7.495 7.495 0 00-2.197 5.303 7.51 7.51 0 002.198 5.305l41.627 41.624z"></path>
            </svg>
          </button>
          <div className="my-auto flex flex-col">
            <div className="flex h-full min-h-screen w-screen flex-col justify-center bg-light py-6 px-5 sm:p-8 md:h-auto md:min-h-0 md:max-w-[480px] md:rounded-xl">
              <div className="flex justify-center">
                <a className="inline-flex" href="/">
                  <span className="relative h-[2.125rem] w-32 overflow-hidden md:w-[8.625rem]">
                    <img
                      alt="Pickbazar"
                      loading="eager"
                      decoding="async"
                      data-nimg="fill"
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw"
                      src="/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2295%2FLogo-new.png&amp;w=3840&amp;q=75"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                    />
                  </span>
                </a>
              </div>
              <p className="mt-4 mb-8 text-sm text-center text-body sm:mt-5 sm:mb-10 md:text-base">
                Login with your email &amp; password
              </p>
              <form>
                <div className="mb-5">
                  <label className="mb-3 block text-sm font-semibold leading-none text-body-dark">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="flex w-full appearance-none items-center px-4 text-sm text-heading transition duration-300 ease-in-out focus:outline-0 focus:ring-0 border border-border-base rounded focus:border-accent h-12"
                  />
                </div>
                <div className="mb-5">
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-semibold text-body">
                      Password
                    </label>
                    <button
                      type="button"
                      className="text-xs text-accent transition-colors duration-200 hover:text-accent-hover focus:font-semibold focus:text-accent-700 focus:outline-0"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="w-full appearance-none rounded py-3 text-sm text-heading transition duration-300 ease-in-out focus:outline-0 focus:ring-0 ltr:pl-4 ltr:pr-11 rtl:pr-4 rtl:pl-11 border border-border-base focus:border-accent"
                    />
                    <label className="absolute top-5 -mt-2 cursor-pointer text-body ltr:right-4 rtl:left-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        ></path>
                      </svg>
                    </label>
                  </div>
                </div>
                <div className="mt-8">
                  <button
                    data-variant="normal"
                    className="inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-0 focus:shadow focus:ring-1 focus:ring-accent-700 bg-accent text-white border border-transparent hover:bg-accentHover px-5 py-0 h-12 w-full sm:h-12"
                  >
                    Login
                  </button>
                </div>
              </form>
              <div className="relative flex flex-col items-center justify-center mt-8 mb-6 text-sm text-heading sm:mt-11 sm:mb-8">
                <hr className="w-full" />
                <span className="absolute -top-2.5 bg-light px-2 ltr:left-2/4 ltr:-ml-4 rtl:right-2/4 rtl:-mr-4">
                  Or
                </span>
              </div>
              <div className="grid grid-cols-1 gap-4 mt-2">
                <button
                  data-variant="normal"
                  className="inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-0 focus:shadow focus:ring-1 focus:ring-accent-700 bg-primary text-white border border-transparent hover:bg-accent-hover px-5 py-0 h-12 hover:!bg-primaryHover"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.986"
                    height="20.39"
                    viewBox="0 0 19.986 20.39"
                    className="w-4 h-4 ltr:mr-3 rtl:ml-3"
                  >
                    <path
                      data-name="Path 2"
                      d="M10.195 20.39c5.883 0 9.791-4.13 9.791-9.958a8.711 8.711 0 00-.166-1.7H10.2v3.5h5.787a5.522 5.522 0 01-5.787 4.402 6.441 6.441 0 010-12.88 5.727 5.727 0 014.062 1.571l2.764-2.655A9.749 9.749 0 0010.195 0a10.195 10.195 0 000 20.39z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Login with Google
                </button>
                <button
                  data-variant="normal"
                  className="inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-0 focus:shadow focus:ring-1 focus:ring-accent-700 bg-accent text-white border border-transparent hover:bg-accent-hover px-5 py-0 h-12 h-11 w-full !bg-gray-500 !text-white hover:!bg-gray-600 sm:h-12"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27.442 27.442"
                    className="h-5 text-white ltr:mr-2 rtl:ml-2"
                    fill="currentColor"
                  >
                    <path d="M19.494 0H7.948a1.997 1.997 0 00-1.997 1.999v23.446c0 1.102.892 1.997 1.997 1.997h11.546a1.998 1.998 0 001.997-1.997V1.999A1.999 1.999 0 0019.494 0zm-8.622 1.214h5.7c.144 0 .261.215.261.481s-.117.482-.261.482h-5.7c-.145 0-.26-.216-.26-.482s.115-.481.26-.481zm2.85 24.255a1.275 1.275 0 110-2.55 1.275 1.275 0 010 2.55zm6.273-4.369H7.448V3.373h12.547V21.1z"></path>
                  </svg>
                  Login with Mobile number
                </button>
                <button
                  data-variant="normal"
                  className="inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-0 focus:shadow focus:ring-1 focus:ring-accent-700 bg-accent text-white border border-transparent hover:bg-accent-hover px-5 py-0 h-12 h-11 w-full !bg-pink-700 !text-white hover:!bg-pink-800 sm:h-12"
                >
                  <svg
                    height="24"
                    viewBox="0 0 32 32"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="h-6 text-white ltr:mr-2 rtl:ml-2"
                  >
                    <path d="M23 26.896c2.664 0 4.832-2.167 4.832-4.831S25.664 17.233 23 17.233c-1.828 0-3.403 1.032-4.224 2.533h-5.553c-.82-1.501-2.395-2.533-4.223-2.533-2.664 0-4.832 2.168-4.832 4.832s2.168 4.83 4.832 4.83 4.831-2.166 4.831-4.83c0-.103-.024-.198-.03-.3h4.397c-.006.102-.03.197-.03.3A4.837 4.837 0 0 0 23 26.895zm0-7.663c1.561 0 2.832 1.27 2.832 2.832s-1.27 2.83-2.832 2.83-2.832-1.269-2.832-2.83 1.27-2.832 2.832-2.832zM9 24.896c-1.562 0-2.832-1.27-2.832-2.831S7.438 19.233 9 19.233s2.831 1.27 2.831 2.832-1.27 2.83-2.831 2.83zM30.274 14.784a52.039 52.039 0 0 0-4.757-1.114L23.98 5.911c-.06-.29-.24-.54-.49-.68a1.03 1.03 0 0 0-.84-.06 18.806 18.806 0 0 1-13.3 0 .967.967 0 0 0-.83.06c-.26.14-.44.39-.5.68l-1.537 7.76a52.048 52.048 0 0 0-4.758 1.113 1 1 0 0 0-.687 1.237c.152.53.706.833 1.237.687a49.898 49.898 0 0 1 27.45 0 1.001 1.001 0 0 0 .549-1.924zM8.587 13.32 9.76 7.431a20.76 20.76 0 0 0 12.48 0l1.17 5.888a51.879 51.879 0 0 0-14.823 0z"></path>
                  </svg>
                  Checkout as guest
                </button>
              </div>
              <div className="relative flex flex-col items-center justify-center mt-8 mb-6 text-sm text-heading sm:mt-11 sm:mb-8">
                <hr className="w-full" />
              </div>
              <div className="text-sm text-center text-body sm:text-base">
                Don't have any account?{" "}
                <button className="font-semibold underline transition-colors duration-200 text-accent hover:text-accent-hover hover:no-underline focus:text-accent-hover focus:no-underline focus:outline-0 ltr:ml-1 rtl:mr-1">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="Toastify"></div>
      </div>
    </div>
  );
};

export default page;
