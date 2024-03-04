import React from "react";
import Map from "../../components/map/Map";
const OtelLocation = () => {
  return (
    <div>
      <Map height={500} width={"100%"} lat={38.4241022} lng={27.1415059} />

      <div className="align-items-center mt-10 mb-10 max-w-screen-xl mx-auto">
        <ul className="small-view-center-aligment justify-center">
          <div className=" mr-10 mb-10 ">
            <span className="title flex gap-2 items-center">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.5896 0.349406C11.296 -0.00380235 11.992 0 11.992 0C11.992 0 12.6903 -0.00365913 13.3967 0.34955C14.1031 0.70276 14.8318 1.47468 14.8318 2.84229L14.8318 4.4194L16.1491 4.41942C16.877 4.41942 17.2872 4.83477 17.4934 5.21615C17.6996 5.59753 17.7264 5.9709 17.7264 5.9709L18.9866 15.4246C18.9866 15.4246 19.0813 16.1304 18.7653 16.8526C18.4249 17.6309 17.6628 18.3041 16.1491 18.3041H8.63444C8.614 18.3043 8.59342 18.3044 8.57271 18.3044H2.89315C1.15967 18.3044 0.428312 17.5781 0.151184 16.839C-0.125945 16.0997 0.0627065 15.3875 0.0627065 15.3875L1.31824 10.3676C1.32769 10.2807 1.3729 9.95919 1.54895 9.63332C1.75508 9.25195 2.17028 8.83659 2.89319 8.83659H5.40681L5.73561 5.97092C5.73561 5.97092 5.76238 5.5974 5.9685 5.21602C6.17462 4.83464 6.57999 4.41929 7.31273 4.41929L9.15214 4.41932V2.84229C9.15214 1.47468 9.88305 0.702756 10.5896 0.349406ZM9.15214 5.05063H7.31272C6.87908 5.05063 6.65788 5.26676 6.52291 5.51655C6.38794 5.76637 6.36455 6.02208 6.36455 6.02208L6.04354 8.83659H8.57281C9.30065 8.83659 9.71093 9.25195 9.9169 9.63332C10.0832 9.94083 10.1328 10.2447 10.1458 10.3508L11.4055 15.3875C11.4055 15.3875 11.5918 16.0999 11.3147 16.839C11.1991 17.1471 11.0112 17.4363 10.7278 17.675H16.1491C17.4759 17.675 17.9765 17.0839 18.1877 16.601C18.4235 16.062 18.3601 15.506 18.3601 15.506L17.0975 6.02208C17.0975 6.02208 17.0717 5.76635 16.9367 5.51655C16.8017 5.26676 16.578 5.05063 16.1493 5.05063H14.8319L14.8319 6.23028C15.0317 6.40483 15.1588 6.66128 15.1588 6.94459C15.1588 7.46364 14.7322 7.89039 14.213 7.89039C13.6939 7.89039 13.2672 7.46378 13.2672 6.94459C13.2672 6.42957 13.687 6.00325 14.2006 5.99649V5.05063H9.78347V6.23115C9.98332 6.40568 10.1106 6.66175 10.1106 6.94459C10.1106 7.46364 9.68166 7.89039 9.16247 7.89039C8.64342 7.89039 8.21667 7.46378 8.21667 6.94459C8.21667 6.42888 8.63763 6.00211 9.15214 5.99647V5.05063ZM14.2006 4.41939L9.78347 4.41932V2.84229C9.78347 1.68517 10.3155 1.19137 10.8714 0.913395C11.4274 0.635422 11.992 0.631476 11.992 0.631476C11.992 0.631476 12.5567 0.635421 13.1126 0.913395C13.6686 1.19137 14.2006 1.68517 14.2006 2.84229V4.41939ZM8.63113 17.675C10.079 17.6599 10.5492 17.0812 10.723 16.6177C10.9192 16.0945 10.7929 15.5414 10.7929 15.5414L9.53021 10.493C9.5257 10.4763 9.5226 10.4591 9.52091 10.4417C9.52091 10.4417 9.49752 10.1836 9.36255 9.93384C9.22744 9.68404 8.99275 9.46792 8.57274 9.46792H2.89319C2.47193 9.46792 2.24088 9.68418 2.10591 9.93384C1.97094 10.1836 1.94516 10.4417 1.94516 10.4417C1.94417 10.4591 1.94178 10.4761 1.93811 10.493L0.675318 15.5414C0.675318 15.5414 0.546686 16.0944 0.742944 16.6177C0.939044 17.1409 1.4657 17.6753 2.89318 17.6753H8.57274H8.57313V17.675H8.63113ZM3.79953 10.4158C3.28034 10.4158 2.85135 10.8426 2.85135 11.3616C2.85135 11.77 3.11677 12.1226 3.4827 12.2545V12.9412C3.4827 12.9412 3.47862 13.4806 3.75293 14.0292C4.02724 14.5778 4.63925 15.1498 5.69113 15.1498C6.74314 15.1498 7.35741 14.578 7.63174 14.0292C7.90605 13.4806 7.90197 12.9412 7.90197 12.9412L7.90207 12.2545C8.26814 12.1227 8.53365 11.7701 8.53365 11.3616C8.53365 10.8425 8.10463 10.4158 7.58547 10.4158C7.06628 10.4158 6.63967 10.8426 6.63967 11.3616C6.63967 11.7707 6.90456 12.1237 7.27078 12.2551V12.9412C7.27078 12.9412 7.26486 13.3469 7.06579 13.745C6.86671 14.1432 6.53282 14.5185 5.69129 14.5185C4.84976 14.5185 4.51585 14.1432 4.31679 13.745C4.11772 13.3469 4.11405 12.9412 4.11405 12.9412V12.2552C4.48041 12.1239 4.74533 11.7707 4.74533 11.3616C4.74533 10.8426 4.31873 10.4158 3.79953 10.4158ZM3.79953 11.0472C3.97762 11.0472 4.114 11.1837 4.114 11.3616C4.114 11.5397 3.97748 11.6785 3.79953 11.6785C3.62145 11.6785 3.48267 11.5397 3.48267 11.3616C3.48267 11.1835 3.62145 11.0472 3.79953 11.0472ZM7.90233 11.3616C7.90233 11.1837 7.76355 11.0472 7.58547 11.0472C7.40753 11.0472 7.27101 11.1835 7.27101 11.3616C7.27101 11.5397 7.40739 11.6785 7.58547 11.6785C7.76355 11.6785 7.90233 11.5397 7.90233 11.3616ZM9.47933 6.9446C9.47933 6.76651 9.34055 6.62774 9.16247 6.62774C8.98452 6.62774 8.848 6.76651 8.848 6.9446C8.848 7.12254 8.98438 7.25906 9.16247 7.25906C9.34055 7.25906 9.47933 7.12268 9.47933 6.9446ZM14.213 6.62774C14.3911 6.62774 14.5274 6.76651 14.5274 6.9446C14.5274 7.12268 14.3909 7.25906 14.213 7.25906C14.0349 7.25906 13.8961 7.12254 13.8961 6.9446C13.8961 6.76651 14.0349 6.62774 14.213 6.62774Z"
                  fill="#3f35bf"
                ></path>
              </svg>
              <h3 className="text-lg font-bold text-indigo-700">
                Çevredekiler
              </h3>
            </span>
            <ul className="list-disc text-base font-normal">
              <li className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
                Tiyatro Ve Konser Yeri 6.07 km.
              </li>

              <li className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
                Milas Tariş Fuar Merkezi 39.95 km.
              </li>

              <li className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
                Bodrum Kalesi 6.08 km.
              </li>

              <li className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
                Sırtlandağı Halepçamı Tabiatı Koruma Alanı 13.23 km.
              </li>

              <li className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
                Oasis AVM 6.17 km.
              </li>

              <li className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
                Türkkuyusu Meydanı 5.37 km.
              </li>

              <li className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
                Torba Club Woyage Plajı 0.34 km.
              </li>

              <li className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
                Bodrum Marina 5.95 km.
              </li>

              <li className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
                Antik Kilise 0.59 km.
              </li>

              <li className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
                Atatürk Büstü 6.23 km.
              </li>
            </ul>
          </div>

          <div className=" mr-10 mb-10 ">
            <span className="title flex gap-2 items-center">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.2886 0.707696C17.8277 0.244964 17.2313 0 16.5806 0C15.93 0 15.3335 0.244945 14.8727 0.707696L12.1347 3.45696L3.29705 1.63316C3.24278 1.63316 3.1887 1.60601 3.13443 1.60601C2.91753 1.60601 2.70063 1.68766 2.56503 1.85095L1.34516 3.07585C1.1553 3.26648 1.07399 3.51142 1.12826 3.78354C1.18253 4.05583 1.34516 4.27342 1.56206 4.3824L7.95987 7.62174L5.22172 10.3983L2.2396 9.88108H2.10401C1.88711 9.88108 1.67022 9.96273 1.53462 10.126L0.233416 11.4326C0.043558 11.6232 -0.0377555 11.8953 0.0165165 12.1403C0.0707885 12.4126 0.233416 12.6302 0.477352 12.7391L4.48949 14.6174L6.44136 18.5644C6.54972 18.8094 6.76662 18.9727 7.03777 19H7.17336C7.39025 19 7.60715 18.9184 7.74275 18.7551L8.96262 17.5302C9.15248 17.3395 9.23379 17.0674 9.17952 16.8225L8.66439 13.8281L11.4024 11.0788L14.6285 17.5029C14.7368 17.7479 14.9809 17.9112 15.2249 17.9385H15.3604C15.5773 17.9385 15.7942 17.8569 15.9298 17.6936L17.1497 16.4687C17.3396 16.278 17.4209 16.0059 17.3666 15.7337L15.5503 6.85964L18.2883 4.11037C19.2372 3.18452 19.2372 1.6602 18.2885 0.70756L18.2886 0.707696ZM17.7192 3.56575L14.683 6.64176L16.5806 15.9241L15.3607 17.149L11.5925 9.71768L7.77005 13.5559L8.33945 16.9585L7.11957 18.1834L5.05931 13.9915L0.803041 11.9771L2.10424 10.6705L5.49291 11.2422L9.31538 7.40405L1.91453 3.67463L3.1344 2.44974L12.3787 4.35516L15.4421 1.27914C15.7674 0.952548 16.1741 0.81641 16.5807 0.81641C16.9873 0.81641 17.394 0.979706 17.7193 1.27914C18.3428 1.90537 18.3428 2.93962 17.7193 3.56565L17.7192 3.56575Z"
                  fill="#3f35bf"
                ></path>
              </svg>
              <h3 className="text-lg font-bold text-indigo-700"> Ulaşım</h3>
            </span>
            <div className="list-disc text-base font-normal">
              <li className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
                Muğla Milas Bodrum Havalimanı 35.64 km.
              </li>

              <li className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
                Muğla Dalaman Havalimanı 202.45 km.
              </li>

              <li className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
                Bodrum Otogarı 2.07 km.
              </li>

              <li className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
                Söke Tren İstasyonu 75.01 km.
              </li>
              <li className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
                Otobüs Durağı 0.14 km.
              </li>

              <li className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
                İskele 0.05 km.
              </li>
            </div>
          </div>

          <div className=" mr-10 ">
            <span className="title   flex gap-2 items-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 4.50321C18 2.02034 15.9801 0 13.4968 0H4.50321C2.02034 0 0 2.02018 0 4.50321C0 6.35593 1.37309 7.88978 3.15414 8.15183L3.15398 17.5441C3.15398 17.7924 3.35551 17.9937 3.60362 17.9937H14.3959C14.6442 17.9937 14.8455 17.7922 14.8455 17.5441L14.8457 8.15183C16.6266 7.88976 18 6.35593 18 4.50321ZM12.1478 17.0942V8.55032C12.1478 8.30205 11.9462 8.10068 11.6981 8.10068C11.4498 8.10068 11.2485 8.30221 11.2485 8.55032V17.0942H9.44972V7.20129C9.44972 6.95301 9.24819 6.75165 9.00008 6.75165C8.75181 6.75165 8.55044 6.95318 8.55044 7.20129V17.0942H6.75169V8.55032C6.75169 8.30205 6.55016 8.10068 6.30205 8.10068C6.05378 8.10068 5.85241 8.30221 5.85241 8.55032V17.0942H4.05365V8.17211C5.55377 7.99379 6.72206 6.72186 6.73507 5.17765H11.2648C11.2779 6.72202 12.4462 7.99397 13.9463 8.17211V17.0942H12.1478ZM14.3074 7.29604C13.125 7.29604 12.1628 6.33401 12.1628 5.15147C12.1628 4.25501 12.8919 3.52588 13.7884 3.52588C14.4559 3.52588 14.999 4.06915 14.999 4.73648C14.999 4.98475 15.2005 5.18612 15.4486 5.18612C15.6969 5.18612 15.8983 4.98459 15.8983 4.73648C15.8983 3.57322 14.9518 2.62657 13.7884 2.62657C12.7032 2.62657 11.7787 3.3157 11.4223 4.27821H6.57744C6.22079 3.3157 5.29625 2.62657 4.2114 2.62657C3.04814 2.62657 2.10149 3.57306 2.10149 4.73648C2.10149 4.98475 2.30302 5.18612 2.55112 5.18612C2.7994 5.18612 3.00076 4.98459 3.00076 4.73648C3.00076 4.06899 3.54403 3.52588 4.21136 3.52588C5.10783 3.52588 5.83695 4.25501 5.83695 5.15147C5.83695 6.33385 4.87508 7.29604 3.69239 7.29604C2.15228 7.29604 0.899478 6.04308 0.899478 4.50313C0.899478 2.51603 2.51615 0.899358 4.50325 0.899358H13.4968C15.4839 0.899358 17.1006 2.51603 17.1006 4.50313C17.1006 6.04324 15.8475 7.29604 14.3074 7.29604Z"
                  fill="#3f35bf"
                ></path>
              </svg>

              <h3 className="text-lg font-bold text-indigo-700">
                Tarihi Yerler
              </h3>
            </span>
            <ul className="list-disc text-base font-normal">
              <li className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
                Mavsoleion Müzesi 5.71 km.
              </li>

              <li className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
                Müze 5.93 km.
              </li>

              <li className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
                Zeki Müren Sanat Müzesi 5.96 km.
              </li>

              <li className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
                Bodrum Su Altı Arkeoloji Müzesi 6.09 km.
              </li>

              <li className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
                Cam Batığı Müzesi 6.12 km.
              </li>

              <li className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
                Finike Batığı Müzesi 6.15 km.
              </li>

              <li className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
                Halikarnas Balıkçısı Müzesi 6.56 km.
              </li>

              <li className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
                Amfi Tiyatro 2.88 km.
              </li>

              <li className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
                Amfi Tiyatro 3.9 km.
              </li>

              <li className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
                Pedasa 3.93 km.
              </li>

              <li className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
                Antik Tiyatro 5.67 km.
              </li>

              <li className="@apply w-max border text-xs bg-[#1d8bcb] text-[white] font-semibold px-2.5 py-0.5 rounded-[10px] border-solid border-[#1d8bcb] inline-block mr-2">
                Tarihi Han 5.91 km.
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default OtelLocation;
