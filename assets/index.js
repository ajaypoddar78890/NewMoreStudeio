const logoCarousel = new Swiper(".trusted-by-section .swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  simulateTouch: false,
  centeredSlides: true,
  breakpoints: {
    1024: {
      slidesPerView: 7,
    },
    786: {
      slidesPerView: 4,
    },
    586: {
      slidesPerView: 4,
    },
  },
  autoplay: {
    enabled: true,
    delay: 0,
    pauseOnMouseEnter: false,
    disableOnInteraction: false,
  },
  centerInsufficientSlides: true,
  speed: 3000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Casestudies card effect here
var swiper = new Swiper(".case-studies-section .mySwiper", {
  effect: "cards",
  grabCursor: true,
});

const iconsLibrary = {
  quoteIcon:
    '<svg width="50" height="45" viewBox="0 0 50 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.559 21.1119C30.849 21.1119 31.0622 21.1119 31.2739 21.1119C34.8902 21.1119 38.5065 21.1119 42.1228 21.1119C46.7502 21.1135 49.9809 24.3316 49.995 28.9606C50.0029 31.384 50.0029 33.809 49.995 36.2325C49.9809 40.8457 46.7314 44.089 42.1213 44.0968C39.7167 44.1 37.312 44.1015 34.909 44.0968C30.4383 44.089 27.018 40.7062 27.0195 36.2387C27.0227 30.5313 27.043 24.8239 27.1183 19.1164C27.1528 16.4751 27.4929 13.8589 28.1905 11.2991C29.236 7.46329 31.625 4.64954 34.8745 2.49417C36.0125 1.73861 37.1741 1.01597 38.3419 0.305873C39.2793 -0.263146 40.3327 -0.0139061 40.8406 0.851379C41.3532 1.72607 41.0553 2.71519 40.1211 3.31556C38.7244 4.2122 37.3058 5.07748 35.9514 6.03369C33.6095 7.68588 32.1125 9.92904 31.4212 12.724C30.7456 15.4562 30.6359 18.2386 30.559 21.1119Z" fill="black"/><path d="M3.48829 21.112C3.77359 21.112 3.98521 21.112 4.19682 21.112C7.87272 21.112 11.5486 21.1042 15.2245 21.1136C19.0995 21.1246 22.1107 23.6405 22.824 27.4449C22.8632 27.6549 22.8945 27.8713 22.8961 28.0845C22.9086 30.9578 23.0105 33.8358 22.9023 36.7044C22.7487 40.8145 19.9475 43.7521 15.7857 44.0092C12.7697 44.1941 9.72086 44.1581 6.70333 43.9574C3.09327 43.7192 0.0349896 40.4414 0.0130439 36.8157C-0.0277123 30.3652 0.0287194 23.9116 0.158826 17.4628C0.212122 14.8638 0.698062 12.3008 1.62135 9.84136C2.81111 6.66708 5.04173 4.37376 7.78337 2.51779C8.93081 1.74185 10.1159 1.01608 11.2994 0.295006C12.1866 -0.245797 13.2086 -0.0200703 13.7197 0.784081C14.2636 1.64153 14.0065 2.68865 13.0958 3.27491C11.7837 4.12139 10.4482 4.93494 9.15654 5.81277C6.43685 7.6609 4.8019 10.2317 4.1592 13.453C3.65916 15.9564 3.51494 18.4848 3.48986 21.112H3.48829Z" fill="black"/></svg>',
  ideationIcon:
    '<svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.44531 0.0912273C3.14844 -0.0884602 2.76562 0.0131023 2.58594 0.302165C2.40625 0.591227 2.50781 0.981852 2.79687 1.16154L9.04688 4.91154C9.34375 5.09123 9.72656 4.98966 9.90625 4.7006C10.0859 4.41154 9.98437 4.02091 9.69531 3.84123L3.44531 0.0912273ZM47.1953 1.16154C47.4922 0.981852 47.5859 0.59904 47.4062 0.302165C47.2266 0.00528978 46.8437 -0.0884602 46.5469 0.0912273L40.2969 3.84123C40 4.02091 39.9062 4.40373 40.0859 4.7006C40.2656 4.99748 40.6484 5.09123 40.9453 4.91154L47.1953 1.16154ZM0.625 12.5053C0.28125 12.5053 0 12.7865 0 13.1303C0 13.474 0.28125 13.7553 0.625 13.7553H6.875C7.21875 13.7553 7.5 13.474 7.5 13.1303C7.5 12.7865 7.21875 12.5053 6.875 12.5053H0.625ZM43.125 12.5053C42.7812 12.5053 42.5 12.7865 42.5 13.1303C42.5 13.474 42.7812 13.7553 43.125 13.7553H49.375C49.7188 13.7553 50 13.474 50 13.1303C50 12.7865 49.7188 12.5053 49.375 12.5053H43.125ZM9.69531 21.1694C9.99219 20.9897 10.0859 20.6069 9.90625 20.31C9.72656 20.0131 9.34375 19.9194 9.04688 20.099L2.79687 23.849C2.5 24.0287 2.40625 24.4115 2.58594 24.7084C2.76562 25.0053 3.14844 25.099 3.44531 24.9194L9.69531 21.1694ZM40.9453 20.099C40.6484 19.9194 40.2656 20.0209 40.0859 20.31C39.9062 20.599 40.0078 20.9897 40.2969 21.1694L46.5469 24.9194C46.8437 25.099 47.2266 24.9975 47.4062 24.7084C47.5859 24.4194 47.4844 24.0287 47.1953 23.849L40.9453 20.099ZM37.5 13.7553C37.5 16.4037 36.6797 18.8569 35.2734 20.8803C34.9219 21.3881 34.5312 21.9194 34.1406 22.4584C33.1641 23.8022 32.1172 25.2319 31.3047 26.7084C30.7266 27.7631 30.3984 28.8803 30.2109 30.0053H31.4844C31.6563 29.0678 31.9453 28.1537 32.4062 27.31C33.1797 25.9037 34.1406 24.5834 35.1016 23.2631C35.5078 22.7084 35.9141 22.1537 36.3047 21.5912C37.8516 19.3647 38.7578 16.6694 38.7578 13.7553C38.75 6.16154 32.5937 0.00528979 25 0.00528979C17.4063 0.00528979 11.25 6.16154 11.25 13.7553C11.25 16.6694 12.1562 19.3725 13.7031 21.5912C14.0937 22.1537 14.5 22.7084 14.9063 23.2631C15.8672 24.5756 16.8281 25.8959 17.6016 27.31C18.0625 28.1537 18.3516 29.0678 18.5234 30.0053H19.7891C19.6016 28.8803 19.2734 27.7631 18.6953 26.7084C17.8828 25.224 16.8438 23.7944 15.8594 22.4584C15.4688 21.9194 15.0781 21.3881 14.7266 20.8803C13.3203 18.8569 12.5 16.4037 12.5 13.7553C12.5 6.84904 18.0937 1.25529 25 1.25529C31.9063 1.25529 37.5 6.84904 37.5 13.7553ZM17.5 13.1303C17.5 9.33341 20.5781 6.25529 24.375 6.25529C24.7188 6.25529 25 5.97404 25 5.63029C25 5.28654 24.7188 5.00529 24.375 5.00529C19.8906 5.00529 16.25 8.64591 16.25 13.1303C16.25 13.474 16.5312 13.7553 16.875 13.7553C17.2188 13.7553 17.5 13.474 17.5 13.1303ZM25 38.7553C22.2422 38.7553 20 36.5131 20 33.7553H30C30 36.5131 27.7578 38.7553 25 38.7553ZM18.75 33.3412V33.7553C18.75 37.2084 21.5469 40.0053 25 40.0053C28.4531 40.0053 31.25 37.2084 31.25 33.7553V33.3412C31.25 32.8803 30.875 32.5053 30.4141 32.5053H19.5859C19.125 32.5053 18.75 32.8803 18.75 33.3412Z" fill="black"/></svg>',
  productionIcon:
    '<svg width="50" height="45" viewBox="0 0 50 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.38889 11.1111C1.38889 5.73785 5.73785 1.38889 11.1111 1.38889C15.2431 1.38889 18.7847 3.96701 20.1823 7.61285C20.2865 7.88194 20.5469 8.05556 20.8333 8.05556C21.1198 8.05556 21.3802 7.88194 21.4844 7.61285C22.8819 3.96701 26.4236 1.38889 30.5556 1.38889C35.9288 1.38889 40.2778 5.73785 40.2778 11.1111C40.2778 16.4844 35.9288 20.8333 30.5556 20.8333H11.1111C5.73785 20.8333 1.38889 16.4844 1.38889 11.1111ZM11.1111 0C4.97396 0 0 4.97396 0 11.1111C0 17.2483 4.97396 22.2222 11.1111 22.2222H30.5556C36.6927 22.2222 41.6667 17.2483 41.6667 11.1111C41.6667 4.97396 36.6927 0 30.5556 0C26.3715 0 22.7257 2.30903 20.8333 5.72917C18.941 2.30903 15.2951 0 11.1111 0ZM46.5712 44.4444C48.4635 44.4444 50 42.908 50 41.0156V25.3385C50 23.342 48.2118 21.8316 46.2413 22.1615C45.9635 22.2049 45.7031 22.2917 45.4514 22.4045L38.8889 25.3472V26.8663L46.0243 23.6545C46.1719 23.5937 46.3194 23.5417 46.4757 23.5156C47.5955 23.3333 48.6111 24.1927 48.6111 25.3299V41.0156C48.6111 42.1441 47.6997 43.0556 46.5712 43.0556C46.2847 43.0556 45.9983 42.9948 45.7292 42.8733L38.8889 39.8003V41.3194L45.1649 44.1406C45.6076 44.3403 46.0851 44.4444 46.5712 44.4444ZM5.55556 29.1667H2.77778C2.01389 29.1667 1.38889 28.5417 1.38889 27.7778C1.38889 27.0139 2.01389 26.3889 2.77778 26.3889H5.55556H11.1111H30.5556C32.8559 26.3889 34.7222 28.2552 34.7222 30.5556V38.8889C34.7222 41.1892 32.8559 43.0556 30.5556 43.0556H11.1111C8.81076 43.0556 6.94444 41.1892 6.94444 38.8889V30.5556C6.94444 29.7917 6.31944 29.1667 5.55556 29.1667ZM4.16667 30.5556H5.55556V31.9444V38.8889C5.55556 41.9531 8.04687 44.4444 11.1111 44.4444H30.5556C33.6198 44.4444 36.1111 41.9531 36.1111 38.8889V30.5556C36.1111 27.4913 33.6198 25 30.5556 25H11.1111H5.55556H2.77778C1.24132 25 0 26.2413 0 27.7778C0 29.3142 1.24132 30.5556 2.77778 30.5556H4.16667ZM11.1111 6.94444C12.2162 6.94444 13.276 7.38343 14.0574 8.16483C14.8388 8.94623 15.2778 10.006 15.2778 11.1111C15.2778 12.2162 14.8388 13.276 14.0574 14.0574C13.276 14.8388 12.2162 15.2778 11.1111 15.2778C10.006 15.2778 8.94623 14.8388 8.16483 14.0574C7.38343 13.276 6.94444 12.2162 6.94444 11.1111C6.94444 10.006 7.38343 8.94623 8.16483 8.16483C8.94623 7.38343 10.006 6.94444 11.1111 6.94444ZM11.1111 16.6667C12.5845 16.6667 13.9976 16.0814 15.0395 15.0395C16.0814 13.9976 16.6667 12.5845 16.6667 11.1111C16.6667 9.63769 16.0814 8.22461 15.0395 7.18274C13.9976 6.14087 12.5845 5.55556 11.1111 5.55556C9.63769 5.55556 8.22461 6.14087 7.18274 7.18274C6.14087 8.22461 5.55556 9.63769 5.55556 11.1111C5.55556 12.5845 6.14087 13.9976 7.18274 15.0395C8.22461 16.0814 9.63769 16.6667 11.1111 16.6667ZM26.3889 11.1111C26.3889 10.5639 26.4967 10.0221 26.7061 9.5166C26.9155 9.01107 27.2224 8.55174 27.6093 8.16483C27.9962 7.77792 28.4555 7.47101 28.961 7.26161C29.4666 7.05222 30.0084 6.94444 30.5556 6.94444C31.1027 6.94444 31.6445 7.05222 32.1501 7.26161C32.6556 7.47101 33.1149 7.77792 33.5018 8.16483C33.8887 8.55174 34.1957 9.01107 34.4051 9.5166C34.6144 10.0221 34.7222 10.5639 34.7222 11.1111C34.7222 11.6583 34.6144 12.2001 34.4051 12.7056C34.1957 13.2111 33.8887 13.6705 33.5018 14.0574C33.1149 14.4443 32.6556 14.7512 32.1501 14.9606C31.6445 15.17 31.1027 15.2778 30.5556 15.2778C30.0084 15.2778 29.4666 15.17 28.961 14.9606C28.4555 14.7512 27.9962 14.4443 27.6093 14.0574C27.2224 13.6705 26.9155 13.2111 26.7061 12.7056C26.4967 12.2001 26.3889 11.6583 26.3889 11.1111ZM36.1111 11.1111C36.1111 9.63769 35.5258 8.22461 34.4839 7.18274C33.4421 6.14087 32.029 5.55556 30.5556 5.55556C29.0821 5.55556 27.6691 6.14087 26.6272 7.18274C25.5853 8.22461 25 9.63769 25 11.1111C25 12.5845 25.5853 13.9976 26.6272 15.0395C27.6691 16.0814 29.0821 16.6667 30.5556 16.6667C32.029 16.6667 33.4421 16.0814 34.4839 15.0395C35.5258 13.9976 36.1111 12.5845 36.1111 11.1111Z" fill="black"/></svg>',
  postProductionIcon:
    '<svg width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9375 7.03125V1.5625H6.25C3.66211 1.5625 1.5625 3.66211 1.5625 6.25V7.03125H10.9375ZM1.5625 8.59375V16.4062H10.9375V8.59375H1.5625ZM0 17.9688V17.1875V16.4062V8.59375V7.8125V7.03125V6.25C0 2.80273 2.80273 0 6.25 0H10.9375H11.7188H12.5H37.5H38.2812H39.0625H43.75C47.1973 0 50 2.80273 50 6.25V7.03125V7.8125V8.59375V16.4062V17.1875V17.9688V25.7812V26.5625V27.3438V35.1562V35.9375V36.7188V37.5C50 40.9473 47.1973 43.75 43.75 43.75H39.0625H38.2812H37.5H12.5H11.7188H10.9375H6.25C2.80273 43.75 0 40.9473 0 37.5V36.7188V35.9375V35.1562V27.3438V26.5625V25.7812V17.9688ZM1.5625 25.7812H10.9375V17.9688H1.5625V25.7812ZM1.5625 27.3438V35.1562H10.9375V27.3438H1.5625ZM10.9375 36.7188H1.5625V37.5C1.5625 40.0879 3.66211 42.1875 6.25 42.1875H10.9375V36.7188ZM12.5 42.1875H37.5V35.9375V26.5625V17.1875V7.8125V1.5625H12.5V7.8125V17.1875V26.5625V35.9375V42.1875ZM39.0625 1.5625V7.03125H48.4375V6.25C48.4375 3.66211 46.3379 1.5625 43.75 1.5625H39.0625ZM48.4375 8.59375H39.0625V16.4062H48.4375V8.59375ZM48.4375 17.9688H39.0625V25.7812H48.4375V17.9688ZM48.4375 27.3438H39.0625V35.1562H48.4375V27.3438ZM48.4375 36.7188H39.0625V42.1875H43.75C46.3379 42.1875 48.4375 40.0879 48.4375 37.5V36.7188Z" fill="black"/></svg>',
  deliveryIcon:
    '<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.4237 46.6386L28.2701 41.9897L24.588 48.4259C23.8848 49.6565 22.4394 50.2621 21.072 49.9007C19.7047 49.5393 18.7475 48.2989 18.7475 46.8828V38.0244L1.91951 31.0119C0.815871 30.5528 0.0736011 29.5176 0.00523415 28.326C-0.0631328 27.1345 0.542403 26.0113 1.57767 25.4156L2.34924 26.7731C1.83161 27.0661 1.52884 27.6326 1.56791 28.2284C1.60697 28.8241 1.97811 29.3418 2.52504 29.5762L19.021 36.4519L46.8366 1.56526C46.5827 1.57502 46.3287 1.64339 46.0943 1.77036L2.33948 26.7731L1.56791 25.4156L45.3228 0.412785C46.1334 -0.0462504 47.0808 -0.124384 47.9305 0.188151C48.1746 0.276051 48.4188 0.403018 48.6434 0.549519C48.7704 0.637419 48.8876 0.725319 48.995 0.822986C49.0829 0.90112 49.1611 0.979254 49.2294 1.06715C49.8252 1.75082 50.1084 2.67866 49.9619 3.59673L43.7113 44.2262C43.5647 45.1736 42.9885 46.0038 42.1486 46.4726C41.3086 46.9414 40.3027 47 39.4139 46.6288L39.4237 46.6386ZM20.5153 37.0672L28.8659 40.5442C28.8659 40.5442 28.8659 40.5442 28.8756 40.5442L40.0292 45.1931C40.4687 45.3787 40.9766 45.3494 41.3965 45.115C41.8165 44.8806 42.0997 44.4606 42.1779 43.9918L48.4286 3.36233C48.4872 3.00096 48.409 2.63959 48.2332 2.33683L20.5153 37.0672ZM20.3102 38.6787V46.8828C20.3102 47.5957 20.7888 48.211 21.4725 48.3966C22.1561 48.5822 22.8789 48.2794 23.2305 47.6641L26.8148 41.3939L20.3102 38.6787Z" fill="black"/></svg>',
  plus_icon:
    '<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M26.0417 1.04167C26.0417 0.46875 25.5729 0 25 0C24.4271 0 23.9583 0.46875 23.9583 1.04167V23.9583H1.04167C0.46875 23.9583 0 24.4271 0 25C0 25.5729 0.46875 26.0417 1.04167 26.0417H23.9583V48.9583C23.9583 49.5312 24.4271 50 25 50C25.5729 50 26.0417 49.5312 26.0417 48.9583V26.0417H48.9583C49.5312 26.0417 50 25.5729 50 25C50 24.4271 49.5312 23.9583 48.9583 23.9583H26.0417V1.04167Z" fill="white"/> </svg>',
};

// Plus icon here And FAQ Section logic Building Here
let insertIcon = document.querySelectorAll(".faq-ask span");
insertIcon.forEach((element) => {
  element.innerHTML = iconsLibrary.plus_icon;
});

function Expand() {}
const faq = document.querySelectorAll(".faq");
faq.forEach((element, index) => {
  let faqTrack = element.querySelector(".faq-ask");
  let faqAnswer = element.querySelector(".faq-answer");

  faqTrack.addEventListener("click", () => {
    let openFaq = faqAnswer.scrollHeight;
    element.classList.toggle("active");

    if (element.classList.contains("active")) {
      faqAnswer.style.height = `${openFaq}px`;
    } else {
      faqAnswer.style.height = 0;
    }
    collapse(index);
  });
});

const collapse = (index) => {
  faq.forEach((collapseElement, collapseIndex) => {
    let collapseFaqAnswer = collapseElement.querySelector(".faq-answer");
    if (collapseIndex != index) {
      collapseElement.classList.remove("active");
      collapseFaqAnswer.style.height = 0;
    }
  });
};

const quote = document.querySelectorAll(".testimonial-quote");
const ideation = document.querySelector(".ideation-icon");
const production = document.querySelector(".production-icon");
const postProduction = document.querySelector(".post-production-icon");
const delivery = document.querySelector(".delivery-icon");

ideation.innerHTML = iconsLibrary.ideationIcon;
production.innerHTML = iconsLibrary.productionIcon;
postProduction.innerHTML = iconsLibrary.postProductionIcon;
delivery.innerHTML = iconsLibrary.deliveryIcon;

quote.forEach((currElem) => {
  currElem.innerHTML = iconsLibrary.quoteIcon;
});

const leftTestimonial = new Swiper(".testimonial-cards > .left-moving ", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  simulateTouch: true,
  centeredSlides: true,
  breakpoints: {
    986: {
      slidesPerView: 3,
    },
    786: {
      slidesPerView: 2,
    },
  },
  autoplay: {
    enabled: true,
    delay: 0,
    pauseOnMouseEnter: false,
    disableOnInteraction: false,
  },
  centerInsufficientSlides: true,
  speed: 8000,
});

const rightTestimonial = new Swiper(".testimonial-cards > .right-moving", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  simulateTouch: true,
  centeredSlides: true,
  breakpoints: {
    986: {
      slidesPerView: 3,
    },
    786: {
      slidesPerView: 2,
    },
  },
  autoplay: {
    enabled: true,
    delay: 0,
    pauseOnMouseEnter: false,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  centerInsufficientSlides: true,
  speed: 8000,
});

//Lenis Insilized Here
const lenis = new Lenis({
  // Valeur entre 0 et 1
  // Valeur par défaut : 0,1
  // Plus la valeur est faible, plus le scroll sera fluide
  lerp: 0.05,
  // Valeur par défaut : 1
  // Plus la valeur est haute, plus le défilement sera rapide
  wheelMultiplier: 1,
});



// /Custom Tab


let filter_btn = document.querySelectorAll('.filter-btn');
let tab_items = document.querySelectorAll('.tab-item');

for (let i = 0; i < filter_btn.length; i++) {
  filter_btn[i].addEventListener('click', function () {
    for (let j = 0; j < filter_btn.length; j++) {
      filter_btn[j].classList.remove('active');
    }
    let select_tab = filter_btn[i].getAttribute('data-tab');
    filter_btn[i].classList.add('active');
    for (let t = 0; t < tab_items.length; t++) {
      document.querySelector('.tab-filter-item-container').style.height =
        tab_items[t].scrollHeight + 'px';
      if (tab_items[t].classList.contains(select_tab)) {
        tab_items[t].classList.add('select_tab');
      } else {
        tab_items[t].classList.remove('select_tab');
      }
    }
  });
}

for (let th = 0; th < tab_items.length; th++) {
  document.querySelector('.tab-filter-item-container').style.height =
    tab_items[th].scrollHeight + 'px';
}




// Custome Tab

var Content1 =document.getElementById("content1");
var Content2 =document.getElementById("content2");
var Content3 =document.getElementById("content3");

var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")

function openfilmMaking(){
  Content1.style.transform ="translateX(0)";
  Content2.style.transform ="translateX(100%)";
  Content3.style.transform ="translateX(100%)";

  Content1.style.transitionDelay="0.3s"
  Content2.style.transitionDelay="0s"
  Content3.style.transitionDelay="0s"
}
function openCorporateShoot(){
  Content1.style.transform ="translateX(100%)";
  Content2.style.transform ="translateX(0)";
  Content3.style.transform ="translateX(100%)";
  Content1.style.transitionDelay="0s"
  Content2.style.transitionDelay="0.3s"
  Content3.style.transitionDelay="0s"
}
function openaddShoot(){
  Content1.style.transform ="translateX(100%)";
  Content2.style.transform ="translateX(100%)";
  Content3.style.transform ="translateX(0)";
  Content1.style.transitionDelay="0s"
  Content2.style.transitionDelay="0s"
  Content3.style.transitionDelay="0.3s"
}


//animation

document.addEventListener('DOMContentLoaded', () => {
  const counterElement = document.getElementById('client-count');
  let start = 0;
  const end = 700;
  const duration = 2000; // 2 seconds

  const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of the element is in view
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateCount(counterElement, start, end, duration);
              observer.unobserve(entry.target);
          }
      });
  }, options);

  observer.observe(counterElement);

  function animateCount(element, start, end, duration) {
      let startTime = null;

      const step = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          element.textContent = Math.floor(progress * (end - start) + start);

          if (progress < 1) {
              requestAnimationFrame(step);
          }
      };

      requestAnimationFrame(step);
  }
});

//animation
document.addEventListener('DOMContentLoaded', () => {
  const counterElement = document.getElementById('client-count');
  let start = 0;
  const end = 700;
  const duration = 5000; // 2 seconds

  const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Trigger when 50% of the element is in view
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateCount(counterElement, start, end, duration);
              observer.unobserve(entry.target);
          }
      });
  }, options);

  observer.observe(counterElement);

  function animateCount(element, start, end, duration) {
      let startTime = null;

      const step = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          element.textContent = Math.floor(progress * (end - start) + start);

          if (progress < 1) {
              requestAnimationFrame(step);
          }
      };

      requestAnimationFrame(step);
  }
});



function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
