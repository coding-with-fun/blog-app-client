import React from "react";

const Footer = () => {
    return (
        <div className="footer__container text-center py-2 fixed-bottom user-select-none bg-light">
            Made by{" "}
            <a
                href="https://github.com/harsh2124"
                target="_blank"
                rel="noreferrer"
            >
                Coderc
            </a>{" "}
            with{" "}
            <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="#ff0000"
                >
                    <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                    />
                </svg>
            </span>
        </div>
    );
};

export default Footer;
