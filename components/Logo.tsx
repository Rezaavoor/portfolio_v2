import { css, useTheme } from "@emotion/react";

interface Props {
  size: number;
  name?:
    | "twitter"
    | "linkedin"
    | "instagram"
    | "github"
    | "facebook"
    | "email"
    | "website";
  link?: string;
}

export default function Logo({ size, name, link }: Props) {
  const theme = useTheme();

  const website = (
    <a
      href={link || "https://rezaa.vercel.app/"}
      target="_blank"
      css={css`
        width: ${size + "px"};
        height: ${size + "px"};
        ${theme.mq[2]} {
          //768
          width: ${size / 1.3 + "px"};
          height: ${size / 1.3 + "px"};
        }
      `}
    >
      <svg
        css={css`
          width: ${size + "px"};
          height: ${size + "px"};
          ${theme.mq[2]} {
            //768
            width: ${size / 1.3 + "px"};
            height: ${size / 1.3 + "px"};
          }
        `}
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.2222 0C31.2242 0 32.185 0.447766 32.8935 1.2448C33.602 2.04183 34 3.12283 34 4.25V29.75C34 30.8772 33.602 31.9582 32.8935 32.7552C32.185 33.5522 31.2242 34 30.2222 34H3.77778C2.77585 34 1.81496 33.5522 1.10649 32.7552C0.398015 31.9582 0 30.8772 0 29.75V4.25C0 3.12283 0.398015 2.04183 1.10649 1.2448C1.81496 0.447766 2.77585 0 3.77778 0H30.2222ZM30.2222 17H3.77778V29.75H30.2222V17ZM30.2222 4.25H3.77778V12.75H30.2222V4.25ZM7.55556 6.375C8.05652 6.375 8.53697 6.59888 8.8912 6.9974C9.24544 7.39591 9.44444 7.93641 9.44444 8.5C9.44444 9.06359 9.24544 9.60409 8.8912 10.0026C8.53697 10.4011 8.05652 10.625 7.55556 10.625C7.05459 10.625 6.57414 10.4011 6.21991 10.0026C5.86567 9.60409 5.66667 9.06359 5.66667 8.5C5.66667 7.93641 5.86567 7.39591 6.21991 6.9974C6.57414 6.59888 7.05459 6.375 7.55556 6.375ZM13.2222 6.375C13.7232 6.375 14.2036 6.59888 14.5579 6.9974C14.9121 7.39591 15.1111 7.93641 15.1111 8.5C15.1111 9.06359 14.9121 9.60409 14.5579 10.0026C14.2036 10.4011 13.7232 10.625 13.2222 10.625C12.7213 10.625 12.2408 10.4011 11.8866 10.0026C11.5323 9.60409 11.3333 9.06359 11.3333 8.5C11.3333 7.93641 11.5323 7.39591 11.8866 6.9974C12.2408 6.59888 12.7213 6.375 13.2222 6.375ZM18.8889 6.375C19.3899 6.375 19.8703 6.59888 20.2245 6.9974C20.5788 7.39591 20.7778 7.93641 20.7778 8.5C20.7778 9.06359 20.5788 9.60409 20.2245 10.0026C19.8703 10.4011 19.3899 10.625 18.8889 10.625C18.3879 10.625 17.9075 10.4011 17.5532 10.0026C17.199 9.60409 17 9.06359 17 8.5C17 7.93641 17.199 7.39591 17.5532 6.9974C17.9075 6.59888 18.3879 6.375 18.8889 6.375Z"
          fill={theme.colors.text}
        />
      </svg>
    </a>
  );

  const twitter = (
    <a
      href="https://twitter.com/rezaavoor"
      target="_blank"
      css={css`
        width: ${size + "px"};
        height: ${size + "px"};
        ${theme.mq[2]} {
          //768
          width: ${size / 1.3 + "px"};
          height: ${size / 1.3 + "px"};
        }
      `}
    >
      <svg
        css={css`
          width: ${size + "px"};
          height: ${size + "px"};
          ${theme.mq[2]} {
            //768
            width: ${size / 1.3 + "px"};
            height: ${size / 1.3 + "px"};
          }
        `}
        // width={size}
        // height={size}
        viewBox="0 0 37 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.5 2.38728C9.65566 2.38728 2.48438 9.70199 2.48438 18.7232C2.48438 27.7445 9.65566 35.0592 18.5 35.0592C27.3443 35.0592 34.5156 27.7445 34.5156 18.7232C34.5156 9.70199 27.3443 2.38728 18.5 2.38728ZM26.1968 14.7012C26.2075 14.8726 26.2075 15.0513 26.2075 15.2263C26.2075 20.5792 22.2108 26.7453 14.9072 26.7453C12.655 26.7453 10.5673 26.078 8.8084 24.9294C9.13015 24.9659 9.43759 24.9805 9.76648 24.9805C11.6254 24.9805 13.3342 24.3387 14.6963 23.2521C12.9517 23.2156 11.486 22.0488 10.9855 20.4443C11.5968 20.5355 12.1474 20.5355 12.7766 20.3714C11.8783 20.1853 11.0709 19.6876 10.4915 18.9631C9.91219 18.2386 9.59662 17.3318 9.59846 16.3968V16.3458C10.124 16.6484 10.7424 16.8344 11.3895 16.8599C10.8455 16.4901 10.3994 15.9892 10.0908 15.4014C9.78208 14.8137 9.62035 14.1574 9.61991 13.4906C9.61991 12.7358 9.81295 12.0466 10.1597 11.4486C11.1568 12.7006 12.4009 13.7245 13.8114 14.4539C15.2218 15.1832 16.7669 15.6017 18.3463 15.6821C17.785 12.9291 19.8013 10.7011 22.2251 10.7011C23.369 10.7011 24.3986 11.1897 25.1243 11.9774C26.0216 11.806 26.8796 11.4632 27.6446 11.0038C27.3479 11.9409 26.7259 12.7322 25.9001 13.2317C26.7009 13.1442 27.473 12.9181 28.188 12.6009C27.6482 13.4104 26.9726 14.1287 26.1968 14.7012Z"
          fill={theme.colors.text}
        />
      </svg>
    </a>
  );

  const linkedin = (
    <a
      href="https://www.linkedin.com/in/reza-hosseini-9a3959187/"
      target="_blank"
      css={css`
        width: ${size + "px"};
        height: ${size + "px"};
        ${theme.mq[2]} {
          //768
          width: ${size / 1.3 + "px"};
          height: ${size / 1.3 + "px"};
        }
      `}
    >
      <svg
        css={css`
          width: ${size + "px"};
          height: ${size + "px"};
          ${theme.mq[2]} {
            //768
            width: ${size / 1.3 + "px"};
            height: ${size / 1.3 + "px"};
          }
        `}
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.82666 4.24763C1.82666 3.5487 2.10431 2.87841 2.59852 2.3842C3.09273 1.88998 3.76303 1.61234 4.46195 1.61234H30.7317C31.078 1.61177 31.4211 1.67953 31.7412 1.81173C32.0614 1.94393 32.3523 2.13798 32.5974 2.38276C32.8424 2.62754 33.0368 2.91826 33.1693 3.23826C33.3019 3.55826 33.37 3.90126 33.3698 4.24763V30.5173C33.3702 30.8638 33.3023 31.2069 33.1699 31.527C33.0375 31.8472 32.8434 32.1381 32.5985 32.3831C32.3536 32.6282 32.0628 32.8225 31.7427 32.955C31.4226 33.0876 31.0795 33.1557 30.7331 33.1555H4.46195C4.11576 33.1555 3.77296 33.0873 3.45314 32.9548C3.13331 32.8222 2.84274 32.628 2.59801 32.3831C2.35328 32.1383 2.1592 31.8476 2.02685 31.5277C1.8945 31.2078 1.82647 30.865 1.82666 30.5188V4.24763ZM14.312 13.6389H18.5832V15.7838C19.1998 14.5508 20.7769 13.441 23.147 13.441C27.6906 13.441 28.7674 15.8971 28.7674 20.4035V28.7509H24.1692V21.43C24.1692 18.8636 23.5527 17.4155 21.987 17.4155C19.8149 17.4155 18.9116 18.9768 18.9116 21.43V28.7509H14.312V13.6389ZM6.42623 28.5545H11.0258V13.441H6.42623V28.5531V28.5545ZM11.6839 8.51169C11.6926 8.90551 11.6225 9.29709 11.4778 9.66346C11.3331 10.0298 11.1166 10.3636 10.8412 10.6452C10.5657 10.9268 10.2368 11.1505 9.87368 11.3033C9.51059 11.456 9.12064 11.5347 8.72672 11.5347C8.33281 11.5347 7.94286 11.456 7.57977 11.3033C7.21667 11.1505 6.88774 10.9268 6.61228 10.6452C6.33683 10.3636 6.12039 10.0298 5.97567 9.66346C5.83096 9.29709 5.76088 8.90551 5.76955 8.51169C5.78658 7.73867 6.10561 7.00305 6.65833 6.46236C7.21106 5.92168 7.95352 5.61892 8.72672 5.61892C9.49993 5.61892 10.2424 5.92168 10.7951 6.46236C11.3478 7.00305 11.6669 7.73867 11.6839 8.51169Z"
          fill={theme.colors.text}
        />
      </svg>
    </a>
  );
  const instagram = (
    <a
      href="https://instagram.com/reza_avoor"
      target="_blank"
      css={css`
        width: ${size + "px"};
        height: ${size + "px"};
        ${theme.mq[2]} {
          //768
          width: ${size / 1.3 + "px"};
          height: ${size / 1.3 + "px"};
        }
      `}
    >
      <svg
        css={css`
          width: ${size + "px"};
          height: ${size + "px"};
          ${theme.mq[2]} {
            //768
            width: ${size / 1.3 + "px"};
            height: ${size / 1.3 + "px"};
          }
        `}
        viewBox="0 0 35 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.096 2.3677C12.7779 2.29028 13.3141 2.27307 17.5982 2.27307C21.8824 2.27307 22.4186 2.29171 24.099 2.3677C25.7794 2.44369 26.9264 2.71181 27.93 3.10036C28.981 3.49752 29.9345 4.11835 30.7231 4.92126C31.526 5.70841 32.1454 6.66044 32.5411 7.71283C32.9311 8.71648 33.1978 9.8635 33.2752 11.541C33.3526 13.2257 33.3698 13.7619 33.3698 18.0446C33.3698 22.3288 33.3512 22.865 33.2752 24.5468C33.1992 26.2244 32.9311 27.3714 32.5411 28.375C32.1454 29.4276 31.5249 30.3812 30.7231 31.1695C29.9345 31.9724 28.981 32.5918 27.93 32.9875C26.9264 33.3775 25.7794 33.6442 24.1019 33.7216C22.4186 33.799 21.8824 33.8162 17.5982 33.8162C13.3141 33.8162 12.7779 33.7976 11.096 33.7216C9.41852 33.6456 8.2715 33.3775 7.26785 32.9875C6.21535 32.5917 5.26174 31.9713 4.47342 31.1695C3.67105 30.3818 3.05013 29.4287 2.65395 28.3765C2.2654 27.3728 1.99871 26.2258 1.92129 24.5483C1.84387 22.8636 1.82666 22.3273 1.82666 18.0446C1.82666 13.7605 1.8453 13.2243 1.92129 11.5439C1.99728 9.8635 2.2654 8.71648 2.65395 7.71283C3.05071 6.66055 3.6721 5.70742 4.47485 4.91983C5.26205 4.11763 6.2147 3.49672 7.26642 3.10036C8.27007 2.71181 9.41709 2.44512 11.0946 2.3677H11.096ZM23.9714 5.20658C22.3082 5.13059 21.8092 5.11482 17.5982 5.11482C13.3872 5.11482 12.8883 5.13059 11.2251 5.20658C9.68664 5.27684 8.85218 5.53349 8.29587 5.74999C7.56034 6.03674 7.03415 6.37655 6.48214 6.92855C5.95888 7.43762 5.55618 8.05734 5.30358 8.74228C5.08707 9.29859 4.83043 10.1331 4.76017 11.6715C4.68418 13.3347 4.66841 13.8336 4.66841 18.0446C4.66841 22.2557 4.68418 22.7546 4.76017 24.4178C4.83043 25.9562 5.08707 26.7907 5.30358 27.347C5.55592 28.0309 5.95881 28.6517 6.48214 29.1607C6.99113 29.6841 7.61196 30.087 8.29587 30.3393C8.85218 30.5558 9.68664 30.8125 11.2251 30.8827C12.8883 30.9587 13.3858 30.9745 17.5982 30.9745C21.8107 30.9745 22.3082 30.9587 23.9714 30.8827C25.5098 30.8125 26.3443 30.5558 26.9006 30.3393C27.6361 30.0526 28.1623 29.7127 28.7143 29.1607C29.2377 28.6517 29.6406 28.0309 29.8929 27.347C30.1094 26.7907 30.366 25.9562 30.4363 24.4178C30.5123 22.7546 30.5281 22.2557 30.5281 18.0446C30.5281 13.8336 30.5123 13.3347 30.4363 11.6715C30.366 10.1331 30.1094 9.29859 29.8929 8.74228C29.6061 8.00676 29.2663 7.48056 28.7143 6.92855C28.2052 6.40533 27.5855 6.00263 26.9006 5.74999C26.3443 5.53349 25.5098 5.27684 23.9714 5.20658ZM15.5838 22.9066C16.7088 23.3749 17.9615 23.4381 19.128 23.0854C20.2944 22.7327 21.3022 21.986 21.9793 20.9728C22.6564 19.9596 22.9607 18.7427 22.8402 17.5301C22.7198 16.3174 22.182 15.1842 21.3189 14.324C20.7687 13.7741 20.1034 13.3531 19.3709 13.0911C18.6384 12.8292 17.8569 12.733 17.0828 12.8094C16.3086 12.8857 15.5611 13.1328 14.8938 13.5327C14.2266 13.9327 13.6564 14.4756 13.2242 15.1224C12.792 15.7692 12.5086 16.5037 12.3944 17.2732C12.2801 18.0427 12.3379 18.8279 12.5636 19.5724C12.7892 20.3168 13.1771 21.002 13.6994 21.5785C14.2216 22.1551 14.8652 22.6086 15.5838 22.9066ZM11.866 12.3124C12.6188 11.5596 13.5124 10.9625 14.496 10.5551C15.4795 10.1477 16.5337 9.93802 17.5982 9.93802C18.6628 9.93802 19.717 10.1477 20.7005 10.5551C21.684 10.9625 22.5777 11.5596 23.3305 12.3124C24.0833 13.0652 24.6804 13.9588 25.0878 14.9424C25.4952 15.9259 25.7049 16.9801 25.7049 18.0446C25.7049 19.1092 25.4952 20.1634 25.0878 21.1469C24.6804 22.1305 24.0833 23.0241 23.3305 23.7769C21.8102 25.2972 19.7482 26.1513 17.5982 26.1513C15.4482 26.1513 13.3863 25.2972 11.866 23.7769C10.3457 22.2566 9.49161 20.1947 9.49161 18.0446C9.49161 15.8946 10.3457 13.8327 11.866 12.3124ZM27.5028 11.1453C27.6893 10.9693 27.8387 10.7577 27.942 10.523C28.0452 10.2883 28.1004 10.0352 28.1041 9.77881C28.1079 9.52239 28.0601 9.26783 27.9637 9.0302C27.8673 8.79257 27.7242 8.5767 27.5429 8.39537C27.3615 8.21403 27.1457 8.07093 26.908 7.97452C26.6704 7.87811 26.4158 7.83037 26.1594 7.8341C25.903 7.83784 25.65 7.89299 25.4152 7.99628C25.1805 8.09958 24.9689 8.24891 24.7929 8.43546C24.4507 8.79824 24.2633 9.28013 24.2706 9.77881C24.2779 10.2775 24.4792 10.7537 24.8319 11.1064C25.1845 11.459 25.6608 11.6604 26.1594 11.6676C26.6581 11.6749 27.14 11.4875 27.5028 11.1453Z"
          fill={theme.colors.text}
        />
      </svg>
    </a>
  );
  const github = (
    <a
      href={link || "https://github.com/Rezaavoor"}
      target="_blank"
      css={css`
        width: ${size + "px"};
        height: ${size + "px"};
        ${theme.mq[2]} {
          //768
          width: ${size / 1.3 + "px"};
          height: ${size / 1.3 + "px"};
        }
      `}
    >
      <svg
        css={css`
          width: ${size + "px"};
          height: ${size + "px"};
          ${theme.mq[2]} {
            //768
            width: ${size / 1.3 + "px"};
            height: ${size / 1.3 + "px"};
          }
        `}
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.8661 0.232117C7.76465 0.232117 0.392883 7.60388 0.392883 16.7053C0.392883 23.9947 5.10834 30.1516 11.6564 32.3343C12.4801 32.4784 12.789 31.9842 12.789 31.5518C12.789 31.1606 12.7684 29.8633 12.7684 28.4837C8.62949 29.2456 7.55873 27.4747 7.22927 26.5481C7.04394 26.0745 6.24087 24.6125 5.54076 24.2212C4.9642 23.9124 4.14054 23.1505 5.52017 23.1299C6.81744 23.1093 7.74406 24.3242 8.05293 24.8184C9.53552 27.31 11.9035 26.6099 12.8508 26.1774C12.9949 25.1067 13.4273 24.386 13.9009 23.9741C10.2356 23.5623 6.40561 22.1415 6.40561 15.8405C6.40561 14.049 7.04394 12.5664 8.09411 11.4133C7.92938 11.0015 7.35282 9.31298 8.25884 7.04791C8.25884 7.04791 9.63847 6.61549 12.789 8.73641C14.1068 8.36577 15.5071 8.18044 16.9073 8.18044C18.3075 8.18044 19.7077 8.36577 21.0256 8.73641C24.1761 6.5949 25.5557 7.04791 25.5557 7.04791C26.4617 9.31298 25.8852 11.0015 25.7205 11.4133C26.7706 12.5664 27.409 14.0284 27.409 15.8405C27.409 22.1621 23.5583 23.5623 19.8931 23.9741C20.4902 24.4889 21.005 25.4773 21.005 27.0217C21.005 29.225 20.9844 30.9958 20.9844 31.5518C20.9844 31.9842 21.2933 32.499 22.1169 32.3343C25.3871 31.2302 28.2287 29.1284 30.2419 26.3248C32.255 23.5212 33.3383 20.1569 33.3393 16.7053C33.3393 7.60388 25.9676 0.232117 16.8661 0.232117Z"
            fill={theme.colors.text}
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect
              width="32.9464"
              height="32.9464"
              fill="white"
              transform="translate(0.392883 0.232117)"
            />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
  const facebook = (
    <a
      href="https://www.facebook.com/reza.hosseini.1029770"
      target="_blank"
      css={css`
        width: ${size + "px"};
        height: ${size + "px"};
        ${theme.mq[2]} {
          //768
          width: ${size / 1.3 + "px"};
          height: ${size / 1.3 + "px"};
        }
      `}
    >
      <svg
        css={css`
          width: ${size + "px"};
          height: ${size + "px"};
          ${theme.mq[2]} {
            //768
            width: ${size / 1.3 + "px"};
            height: ${size / 1.3 + "px"};
          }
        `}
        viewBox="0 0 41 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M35.2344 4.6808H5.76562C5.05693 4.6808 4.48438 5.25336 4.48438 5.96205V35.4308C4.48438 36.1395 5.05693 36.7121 5.76562 36.7121H35.2344C35.9431 36.7121 36.5156 36.1395 36.5156 35.4308V5.96205C36.5156 5.25336 35.9431 4.6808 35.2344 4.6808ZM31.5348 14.0299H28.9763C26.9703 14.0299 26.5819 14.9829 26.5819 16.3842V19.4712H31.3706L30.746 24.3039H26.5819V36.7121H21.5891V24.308H17.413V19.4712H21.5891V15.9078C21.5891 11.7717 24.1155 9.51752 27.8071 9.51752C29.5769 9.51752 31.0943 9.64965 31.5388 9.70971V14.0299H31.5348Z"
          fill={theme.colors.text}
        />
      </svg>
    </a>
  );
  const email = (
    <a
      href="mailto:reza.avoor@gmail.com"
      css={css`
        width: ${size + "px"};
        height: ${size + "px"};
        ${theme.mq[2]} {
          //768
          width: ${size / 1.3 + "px"};
          height: ${size / 1.3 + "px"};
        }
      `}
    >
      <svg
        css={css`
          width: ${size + "px"};
          height: ${size + "px"};
          ${theme.mq[2]} {
            //768
            width: ${size / 1.3 + "px"};
            height: ${size / 1.3 + "px"};
          }
        `}
        viewBox="0 0 37 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.2277 7.00111H4.77232C4.16552 7.00111 3.58357 7.24699 3.1545 7.68464C2.72543 8.12229 2.48438 8.71588 2.48438 9.33482V28.0045C2.48438 28.6234 2.72543 29.217 3.1545 29.6546C3.58357 30.0923 4.16552 30.3382 4.77232 30.3382H32.2277C32.8345 30.3382 33.4164 30.0923 33.8455 29.6546C34.2746 29.217 34.5156 28.6234 34.5156 28.0045V9.33482C34.5156 8.71588 34.2746 8.12229 33.8455 7.68464C33.4164 7.24699 32.8345 7.00111 32.2277 7.00111ZM29.7109 9.33482L18.5 17.2461L7.28906 9.33482H29.7109ZM4.77232 28.0045V10.3967L17.8479 19.6265C18.0394 19.762 18.2669 19.8346 18.5 19.8346C18.7331 19.8346 18.9606 19.762 19.1521 19.6265L32.2277 10.3967V28.0045H4.77232Z"
          fill={theme.colors.text}
        />
      </svg>
    </a>
  );

  const myLogo = (
    <a href="/">
      <svg
        css={css`
          width: ${size + "px"};
          height: ${size + "px"};
          ${theme.mq[2]} {
            //768
            width: ${size / 1.3 + "px"};
            height: ${size / 1.3 + "px"};
          }
        `}
        viewBox={"0 0 83 85"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M69.1667 5.0303H13.8333C8.27701 5.0303 3.77273 9.53458 3.77273 15.0909V70.4242C3.77273 75.9806 8.27702 80.4848 13.8333 80.4848H69.1667C74.723 80.4848 79.2273 75.9806 79.2273 70.4242V15.0909C79.2273 9.53458 74.723 5.0303 69.1667 5.0303ZM13.8333 1.25757C6.19339 1.25757 0 7.45096 0 15.0909V70.4242C0 78.0642 6.1934 84.2576 13.8333 84.2576H69.1667C76.8066 84.2576 83 78.0642 83 70.4242V15.0909C83 7.45096 76.8066 1.25757 69.1667 1.25757H13.8333Z"
          fill={theme.colors.text}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.0606 59.0844V8.80304L66.9747 43.02L44.4026 56.6747L66.9747 75.7913H49.0782L33.2777 63.1004L10.0606 77.5583V64.225L46.4985 43.02L19.8956 26.6344V53.6225L10.0606 59.0844Z"
          fill={theme.colors.text}
        />
        <path
          d="M76.3477 73.292C76.3477 75.6125 74.5521 77.4937 72.337 77.4937C70.122 77.4937 68.3263 75.6125 68.3263 73.292C68.3263 70.9714 70.122 69.0903 72.337 69.0903C74.5521 69.0903 76.3477 70.9714 76.3477 73.292Z"
          fill={theme.colors.text}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M72.337 76.2361C73.8031 76.2361 75.0902 74.9738 75.0902 73.292C75.0902 71.6102 73.8031 70.3478 72.337 70.3478C70.871 70.3478 69.5839 71.6102 69.5839 73.292C69.5839 74.9738 70.871 76.2361 72.337 76.2361ZM72.337 77.4937C74.5521 77.4937 76.3477 75.6125 76.3477 73.292C76.3477 70.9714 74.5521 69.0903 72.337 69.0903C70.122 69.0903 68.3263 70.9714 68.3263 73.292C68.3263 75.6125 70.122 77.4937 72.337 77.4937Z"
          fill={theme.colors.text}
        />
      </svg>
    </a>
  );

  switch (name) {
    case "twitter":
      return twitter;
    case "linkedin":
      return linkedin;
    case "instagram":
      return instagram;
    case "github":
      return github;
    case "facebook":
      return facebook;
    case "email":
      return email;
    case "website":
      return website;

    default:
      return myLogo;
  }
}
