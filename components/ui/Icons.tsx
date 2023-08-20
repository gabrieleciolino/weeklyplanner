export default function Icons({
  name,
  variant = 'primary',
}: {
  name: string;
  variant?: 'primary' | 'secondary';
}) {
  switch (name) {
    case 'newFile':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 16 16"
          className={variant === 'primary' ? 'primary-icon' : 'secondary-icon'}
        >
          <g clipPath="url(#clip0)">
            <path
              fill="#424242"
              fillRule="evenodd"
              d="M4 7H3V4H0V3h3V0h1v3h3v1H4v3zm6.5-5.9l3.4 3.5.1.4v8.5l-.5.5h-10l-.5-.5V8h1v5h9V6H9V2H5V1h5.2l.3.1zM10 2v3h2.9L10 2z"
              clipRule="evenodd"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0">
              <path fill="#fff" d="M0 0H16V16H0z"></path>
            </clipPath>
          </defs>
        </svg>
      );
    case 'edit':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 16 16"
          className={variant === 'primary' ? 'primary-icon' : 'secondary-icon'}
        >
          <path
            fill="#424242"
            d="M13.23 1h-1.46L3.52 9.25l-.16.22L1 13.59 2.41 15l4.12-2.36.22-.16L15 4.23V2.77L13.23 1zM2.41 13.59l1.51-3 1.45 1.45-2.96 1.55zm3.83-2.06L4.47 9.76l8-8 1.77 1.77-8 8z"
          ></path>
        </svg>
      );
    case 'structure':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 16 16"
          className={variant === 'primary' ? 'primary-icon' : 'secondary-icon'}
        >
          <path
            fill="#424242"
            fillRule="evenodd"
            d="M2 2L1 3v3l1 1h12l1-1V3l-1-1H2zm0 1h12v3H2V3zm-1 7l1-1h3l1 1v3l-1 1H2l-1-1v-3zm2 0H2v3h3v-3H3zm7 0l1-1h3l1 1v3l-1 1h-3l-1-1v-3zm2 0h-1v3h3v-3h-2z"
            clipRule="evenodd"
          ></path>
        </svg>
      );
    case 'save':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 16 16"
          className={variant === 'primary' ? 'primary-icon' : 'secondary-icon'}
        >
          <path
            fill="#424242"
            fillRule="evenodd"
            d="M13.353 1.146l1.5 1.5L15 3v11.5l-.5.5h-13l-.5-.5v-13l.5-.5H13l.353.146zM2 2v12h12V3.208L12.793 2H11v4H4V2H2zm6 0v3h2V2H8z"
            clipRule="evenodd"
          ></path>
        </svg>
      );
    case 'selection':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          className={variant === 'primary' ? 'primary-icon' : 'secondary-icon'}
        >
          <path fill="none" d="M0 0H256V256H0z"></path>
          <rect
            width="128"
            height="128"
            x="40"
            y="88"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
            rx="8"
          ></rect>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
            d="M160 40L144 40"
          ></path>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
            d="M200 40h8a8 8 0 018 8v8"
          ></path>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
            d="M216 112L216 96"
          ></path>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
            d="M200 168h8a8 8 0 008-8v-8M104 40h-8a8 8 0 00-8 8v8"
          ></path>
        </svg>
      );
    case 'palette':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 16 16"
          className={variant === 'primary' ? 'primary-icon' : 'secondary-icon'}
        >
          <path
            fill="#424242"
            fillRule="evenodd"
            d="M8 1.003a7 7 0 00-7 7v.43c.09 1.51 1.91 1.79 3 .7a1.87 1.87 0 012.64 2.64c-1.1 1.16-.79 3.07.8 3.2h.6a7 7 0 100-14l-.04.03zm0 13h-.52a.58.58 0 01-.36-.14.56.56 0 01-.15-.3 1.24 1.24 0 01.35-1.08 2.87 2.87 0 000-4 2.87 2.87 0 00-4.06 0 1 1 0 01-.9.34.41.41 0 01-.22-.12.42.42 0 01-.1-.29v-.37a6 6 0 116 6l-.04-.04zM9 3.997a1 1 0 11-2 0 1 1 0 012 0zm3 7.007a1 1 0 11-2 0 1 1 0 012 0zm-7-5a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM13 8a1 1 0 11-2 0 1 1 0 012 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      );
    case 'clear':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 16 16"
          className={variant === 'primary' ? 'primary-icon' : 'secondary-icon'}
        >
          <path
            fill="#424242"
            fillRule="evenodd"
            d="M8 1a7 7 0 110 14A7 7 0 018 1zM2 8a6 6 0 001.42 3.87l8.45-8.45A6 6 0 008.8 2.05 6 6 0 002 8zm12 0a6 6 0 00-1.42-3.87l-8.45 8.45A6 6 0 007.2 14 6 6 0 0014 8z"
            clipRule="evenodd"
          ></path>
        </svg>
      );
    case 'loading':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 16 16"
          className={variant === 'primary' ? 'primary-icon' : 'secondary-icon'}
        >
          <path
            fill="#424242"
            d="M8 .75c.172 0 .334.034.485.102a1.215 1.215 0 01.664.664c.067.15.101.312.101.484s-.034.333-.101.484a1.214 1.214 0 01-.266.399 1.324 1.324 0 01-.398.273A1.254 1.254 0 018 3.25c-.172 0-.333-.031-.484-.094a1.324 1.324 0 01-.672-.672A1.254 1.254 0 016.75 2c0-.172.031-.333.094-.484.068-.151.159-.284.273-.399.115-.114.248-.203.399-.265A1.17 1.17 0 018 .75zM2.633 3.758a1.111 1.111 0 01.68-1.031 1.084 1.084 0 01.883 0c.135.057.252.138.351.242.104.099.185.216.242.351a1.084 1.084 0 010 .883 1.122 1.122 0 01-.593.594 1.169 1.169 0 01-.883 0 1.19 1.19 0 01-.36-.234 1.19 1.19 0 01-.234-.36 1.169 1.169 0 01-.086-.445zM2 7a.941.941 0 01.703.297A.941.941 0 013 8a.97.97 0 01-.078.39 1.03 1.03 0 01-.531.532A.97.97 0 012 9a.97.97 0 01-.391-.078 1.104 1.104 0 01-.32-.211 1.103 1.103 0 01-.212-.32A.97.97 0 011 8a.97.97 0 01.29-.703A.97.97 0 012 7zm.883 5.242a.887.887 0 01.531-.805.863.863 0 01.68 0c.11.047.203.11.281.188a.887.887 0 01.188.96.887.887 0 01-1.148.461.913.913 0 01-.462-.46.863.863 0 01-.07-.344zM8 13.25c.209 0 .386.073.531.219a.723.723 0 01.22.531.723.723 0 01-.22.531.723.723 0 01-.53.219.723.723 0 01-.532-.219A.723.723 0 017.25 14c0-.208.073-.385.219-.531A.723.723 0 018 13.25zm3.617-1.008c0-.177.06-.325.18-.445s.268-.18.445-.18.326.06.446.18.18.268.18.445-.06.326-.18.445a.605.605 0 01-.446.18.605.605 0 01-.445-.18.605.605 0 01-.18-.445zM14 7.5a.48.48 0 01.352.148A.48.48 0 0114.5 8a.48.48 0 01-.148.352A.48.48 0 0114 8.5a.48.48 0 01-.351-.148A.48.48 0 0113.5 8a.48.48 0 01.149-.352A.48.48 0 0114 7.5zm-1.758-5.117c.188 0 .365.036.532.11a1.414 1.414 0 01.734.734c.073.166.11.343.11.53 0 .188-.037.365-.11.532a1.415 1.415 0 01-.734.734c-.167.073-.344.11-.532.11a1.31 1.31 0 01-.53-.11 1.413 1.413 0 01-.735-.734 1.311 1.311 0 01-.11-.531c0-.188.037-.365.11-.531a1.414 1.414 0 01.734-.735 1.31 1.31 0 01.531-.11z"
          ></path>
        </svg>
      );
    case 'google':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 488 512"
          className={variant === 'primary' ? 'primary-icon' : 'secondary-icon'}
        >
          <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
        </svg>
      );
    case 'github':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 496 512"
          className={variant === 'primary' ? 'primary-icon' : 'secondary-icon'}
        >
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
        </svg>
      );
  }
}
