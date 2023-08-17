export function LogomarkDefs(props) {
  return (
    <svg
      aria-hidden="true"
      className="absolute h-0 w-0"
      viewBox="0 0 1 1"
      {...props}
    >
      <clipPath id="_clip1">
        <path
          d="M428.115 184.722c23.5-40.397 66.757-68.898 113.651-73.973 38.756-4.195 79.029 7.435 109.627 31.803 14.437 11.499 26.695 25.726 36.035 41.628 89.356 153.604 178.074 307.579 267.11 461.37 14.135 24.532 20.66 52.919 19.613 80.995-.892 23.904-7.273 47.581-19.121 68.46-44.046 76.87-88.41 153.558-132.616 230.335-26.312 45.48-77.102 74.83-129.365 75.16-89.545.18-179.091 0-268.637 0-52.355-.11-103.093-29.35-129.499-74.31-44.65-76.75-88.982-153.689-133.473-230.537-26.263-45.582-26.247-104.318-.314-149.766 88.676-153.907 177.993-307.444 266.989-461.165zm-174.55 509.25a49.188 49.188 0 00.002 48.829c44.328 76.944 86.061 149.748 131.029 226.32 8.765 14.784 24.492 24.019 42.062 24.129 89.547.189 174.17.556 263.714-.001 17.207-.18 33.121-9.179 42.015-24.406 44.359-76.695 86.474-149.061 130.19-226.123 8.444-15.023 8.544-33.288-.159-48.541-88.734-153.97-172.228-299.683-262.219-452.922-9.484-15.996-27.493-25.455-46.152-23.977-15.959 1.263-30.247 10.126-38.489 24.158a122835.424 122835.424 0 00-261.993 452.534zM603.018 861.71a52 52 0 01-90.067 0l-89.325-154.716a52 52 0 0145.033-78H647.31a52 52 0 0145.033 78L603.018 861.71z"
          clipRule="nonzero"
        ></path>
      </clipPath>
      <defs>
        <linearGradient
          id="_Linear2"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          gradientTransform="matrix(1254 1.58844 -1.58844 1254 106 1024)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#70A2D7"></stop>
          <stop offset="0.31" stopColor="#7782DC"></stop>
          <stop offset="1" stopColor="#7E62E1"></stop>
        </linearGradient>
        <linearGradient
          id="_Linear3"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          gradientTransform="rotate(-89.61 1279.053 374.527) scale(1053.76444)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#70A2D7"></stop>
          <stop offset="0.46" stopColor="#7B70DF"></stop>
          <stop offset="1" stopColor="#7E62E1"></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}

function LogomarkPaths() {
  return (
    <g clipPath="url(#_clip1)">
      <path
        fill="url(#_Linear2)"
        d="M106 397H1360V1651H106z"
        transform="matrix(.84825 0 0 .84825 -66.315 -162.747) rotate(90 961.384 1061.827) scale(1.25997)"
      ></path>
      <path
        fill="url(#_Linear3)"
        d="M1523 1814H-57V398l468.716 735.45 92.468-161.447 170.551 296.007a61.303 61.303 0 00106.153.14l171.024-295.008L1043.62 1134 1523 398v1416z"
        transform="matrix(.84825 0 0 .84825 -66.315 -162.747) translate(5.973)"
      ></path>
    </g>
  )
}

export function Logomark(props) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1254 1254"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      {...props}
    >
      <LogomarkPaths />
    </svg>
  )
}

export function Logo(props) {
  return (
    <svg
      aria-hidden="true"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 4000 1254"
      {...props}
    >
      <LogomarkPaths />
      <g transform="translate(353.771 98.193) scale(.73161)">
        <g fill="currentColor" fillRule="nonzero">
          <path d="M1373.66 974.594c-14.57 0-27.24-5.385-38.01-16.153-10.77-10.769-16.15-23.438-16.15-38.007V335.127c0-14.569 5.38-27.238 16.15-38.007 10.77-10.768 23.44-16.153 38.01-16.153h5.7c14.57 0 27.24 5.385 38 16.153 10.77 10.769 16.16 23.438 16.16 38.007v585.307c0 14.569-5.39 27.238-16.16 38.007-10.76 10.768-23.43 16.153-38 16.153h-5.7zM1689.11 960.341c-9.5 9.502-21.22 14.253-35.15 14.253-13.94 0-25.82-4.751-35.63-14.253-9.82-9.502-14.73-21.22-14.73-35.156V527.062c0-12.669 4.59-23.596 13.78-32.781 9.18-9.185 20.11-13.777 32.78-13.777 12.67 0 23.59 4.592 32.78 13.777 9.18 9.185 14.09 20.112 14.73 32.781l.95 14.253c0 .633.31.95.95.95.63 0 1.26-.317 1.9-.95 44.97-46.875 96.28-70.313 153.92-70.313 57.65 0 99.77 16.311 126.38 48.934 26.6 32.623 39.9 85.991 39.9 160.104v246.095c0 13.302-4.75 24.704-14.25 34.206-9.5 9.502-20.9 14.253-34.2 14.253-13.31 0-24.87-4.751-34.69-14.253-9.81-9.502-14.72-20.904-14.72-34.206V694.293c0-57.011-6.97-95.809-20.91-116.397-13.93-20.587-39.27-30.88-76.01-30.88-29.77 0-57.8 13.144-84.09 39.432-26.29 26.288-39.43 54.318-39.43 84.09v254.647c0 13.936-4.75 25.654-14.26 35.156zM2243.07 960.341c-9.51 9.502-21.23 14.253-35.16 14.253-13.94 0-25.66-4.751-35.16-14.253-9.5-9.502-14.25-21.22-14.25-35.156V311.373c0-13.936 4.75-25.655 14.25-35.157 9.5-9.501 21.22-14.252 35.16-14.252 13.93 0 25.81 4.751 35.63 14.252 9.82 9.502 14.73 21.221 14.73 35.157v386.72c0 .634.31.951.95.951l1.9-.951 169.13-178.632c24.7-25.972 55.11-38.957 91.22-38.957h10.45c10.13 0 17.26 4.751 21.38 14.252 4.11 9.502 2.69 17.737-4.28 24.705l-185.28 192.885c-3.17 3.167-3.17 6.968 0 11.402l186.23 210.938c6.97 7.602 8.39 16.153 4.28 25.655-4.12 9.502-11.56 14.253-22.33 14.253h-10.45c-35.48 0-65.25-13.619-89.32-40.858l-171.03-195.735c-.63-.634-1.27-.951-1.9-.951-.64 0-.95.317-.95.951v187.184c0 13.936-5.07 25.654-15.2 35.156zM2821.72 547.016c-82.35 0-123.52 60.177-123.52 180.533 0 60.811 10.92 106.102 32.78 135.874 21.85 29.773 52.1 44.659 90.74 44.659 33.57 0 62.55-11.086 86.94-33.256 24.39-22.171 36.58-47.509 36.58-76.014V656.286c0-28.505-12.19-53.843-36.58-76.014-24.39-22.171-53.37-33.256-86.94-33.256zm-23.75 437.079c-57.65 0-105.31-23.12-143-69.362-37.69-46.242-56.54-108.637-56.54-187.184 0-81.082 18.21-144.11 54.64-189.085 36.42-44.975 84.72-67.462 144.9-67.462 56.37 0 104.52 20.27 144.42 60.811.64.634 1.27.95 1.9.95.64 0 .95-.316.95-.95v-220.44c0-13.936 4.91-25.655 14.73-35.157 9.82-9.501 21.7-14.252 35.63-14.252 13.94 0 25.66 4.751 35.16 14.252 9.5 9.502 14.25 21.221 14.25 35.157v616.662c0 12.669-4.59 23.596-13.78 32.781-9.18 9.185-20.11 13.778-32.78 13.778-12.67 0-23.59-4.593-32.78-13.778-9.18-9.185-14.09-20.112-14.73-32.781l-.95-14.252c0-.634-.31-.95-.95-.95-.63 0-1.26.316-1.9.95-23.43 25.971-46.55 44.183-69.36 54.635-22.8 10.452-49.41 15.677-79.81 15.677zM3275.9 959.391c-10.13 10.135-22.48 15.203-37.05 15.203-14.57 0-26.92-5.068-37.06-15.203s-15.2-22.487-15.2-37.057V529.913c0-13.936 4.75-25.655 14.25-35.157 9.5-9.501 21.22-14.252 35.16-14.252 13.93 0 25.81 4.751 35.63 14.252 9.82 9.502 14.73 21.221 14.73 35.157v44.658c0 .633.31.95.95.95 1.26 0 1.9-.317 1.9-.95 19-25.972 44.34-47.35 76.01-64.137 31.67-16.786 66.19-26.446 103.57-28.98 11.4-.634 21.06 2.85 28.98 10.452 7.92 7.601 11.88 17.103 11.88 28.505 0 11.402-3.96 21.062-11.88 28.98-7.92 7.918-17.58 12.194-28.98 12.828-60.81 2.533-105.63 18.211-134.45 47.033-28.82 28.822-43.23 71.422-43.23 127.798v185.284c0 14.57-5.07 26.922-15.21 37.057zM3939.12 727.549c0-120.356-43.7-180.533-131.12-180.533s-131.12 60.177-131.12 180.533c0 120.355 43.7 180.533 131.12 180.533s131.12-60.178 131.12-180.533zm39.91 190.034c-41.17 44.342-98.18 66.512-171.03 66.512s-129.86-22.329-171.03-66.987c-41.17-44.658-61.76-107.844-61.76-189.559s20.59-144.902 61.76-189.56c41.17-44.658 98.18-66.987 171.03-66.987s129.86 22.329 171.03 66.987c41.17 44.658 61.76 107.845 61.76 189.56s-20.59 145.06-61.76 190.034zM4244.13 656.286v142.526c0 29.138 12.19 54.635 36.58 76.489 24.39 21.854 53.37 32.781 86.94 32.781 38.01 0 68.1-15.203 90.27-45.609 22.17-30.405 33.26-75.38 33.26-134.924 0-120.356-41.18-180.533-123.53-180.533-33.57 0-62.55 10.927-86.94 32.781s-36.58 47.35-36.58 76.489zm-15.2 513.094c-9.5 9.5-21.22 14.25-35.16 14.25-13.93 0-25.65-4.75-35.16-14.25-9.5-9.5-14.25-21.22-14.25-35.16V527.062c0-12.669 4.59-23.596 13.78-32.781 9.18-9.185 20.11-13.777 32.78-13.777 12.67 0 23.75 4.592 33.26 13.777 9.5 9.185 14.56 20.112 15.2 32.781v14.253c0 .633.31.95.95.95.63 0 1.27-.317 1.9-.95 23.44-25.972 46.56-44.183 69.36-54.635 22.81-10.452 49.41-15.678 79.82-15.678 60.17 0 108.48 22.487 144.9 67.462 36.42 44.975 54.63 108.003 54.63 189.085 0 78.547-18.84 140.942-56.53 187.184-37.69 46.242-85.36 69.362-143 69.362-56.38 0-104.52-20.27-144.43-60.811-.63-.633-1.27-.95-1.9-.95-.63 0-.95.317-.95.95v210.936c0 13.94-5.07 25.66-15.2 35.16z"></path>
        </g>
      </g>
    </svg>
  )
}
