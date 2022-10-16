import Link from "next/link";
import { FaArrowRight, FaFacebookF, FaGooglePlus, FaPhone, FaSkype, FaYoutube } from "react-icons/fa";
import { MdArrowRight, MdEmail } from "react-icons/md"
import { BsFillCaretRightFill } from "react-icons/bs"
import { IconType } from "react-icons/lib";



const Footer = () => {
  return (
    <footer id="Footer">
      {/* this is widget session */}
      <FooterWidgetWrapper />
      {/* footer bottom center */}
      <FooterBottomCenter />


      {/* footer copy right */}
      <FooterCopy />

      {/* floating contact */}
      <InfoFloating />

    </footer >
  );
}
export default Footer;

const FooterWidgetWrapper = () => (
  <div className="__widget-wrapper pt-[60px] pb-[30px]">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row text-white font-light text-sm gap-4">
        <div className="col1 flex-1 leading-6 flex flex-col items-center mb-4">
          <h2 className="text-lg font-semibold mt-4 mb-1 text-[#F79727]">TỔNG QUAN VỀ CÔNG TY</h2>
          <div>
            <ul>
              <InfoItemWidget text="Giới thiệu Công ty" />
              <InfoItemWidget text="Sản phẩm bao Jumbo" />
              <InfoItemWidget text="Đối tác kinh doanh" />
              <InfoItemWidget text="Công nghệ sản xuất" />
              <InfoItemWidget text="Tin tức" />

            </ul>
          </div>
        </div>
        <div className="col1 flex-1 leading-6 flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-1 mt-4 text-[#F79727]">CÔNG TY BAO BÌ LOUIS</h2>
          <div>
            <ul>
              <InfoItemWidget label="Địa chỉ:" text="93/81/14A, KP 8, P. Tân Phong, Biên Hòa, Đồng Nai" />
              <InfoItemWidget label="Phone:" text="(+84) 2513 894 584" />
              <InfoItemWidget label="Fax:" text="(+84) 2513 894 587" />
              <InfoItemWidget label="Email:" text="hotrokh@louispack.com" />
              <InfoItemWidget label="Fanpage:" text="Louispack Company" />
            </ul>
          </div>
        </div>
        <div className="col1 flex-1 leading-6 flex flex-col items-center lg:items-start">
          <h2 className="text-lg font-semibold mb-1 mt-4 text-[#F79727]">DANH MỤC SẢN PHẨM</h2>
          <div>
            <ul>
              <InfoItemWidget text="Bao Jumbo cao cấp" />
              <InfoItemWidget text="Bao Jumbo ưa chuộng" />

            </ul>
          </div>
          <h2 className="text-lg font-semibold mb-1 mt-4 text-[#F79727]">HOTLINE HỖ TRỢ</h2>
          <div>
            <ul>
              <InfoItemWidget text="0915.77.88.74 (Ms. Cẩm)" />
              <InfoItemWidget text="0933.707.789 (Mr. Phương)" />

            </ul>
          </div>
        </div>

        <div className="col1 flex-1 flex flex-col items-center leading-6">
          <Link href="http://baojumbo.vn" title="Logo Lousipack">
            <a className="">
              <div className="image_frame image_item no_link scale-with-grid alignnone no_border inline-block p-4"><div className="image_wrapper"><img className="scale-with-grid " src="http://baojumbo.vn/wp-content/uploads/2020/11/logo-louispack-lien-he.png" alt="logo-louispack-lien-he" data-pagespeed-url-hash={477349034} />
              </div>
              </div>

            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

const FooterBottomCenter = () => (
  <div className="__footer-bottom-center relative">
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10">
      <hr className="my-10 h-[1.2px] bg-gray-100 border-0 dark:bg-gray-700"></hr>
    </div>
    <div className="footer-bottom-center-box flex justify-center items-center h-20">
      <div className="flex bg-[#f79727] rounded-full gap-2 z-30 text-white">
        <div className="__footer-social-item p-4">
          <Link href={'https://www.facebook.com'} target={"_blank"} title="Skype">
            <a>
              <FaFacebookF className="h-5 w-5" />
            </a>
          </Link>
        </div>
        <div className="__googleplus p-4">

          <Link href={'https://www.facebook.com'} target={"_blank"} title="Skype">
            <a >
              <FaGooglePlus className="h-5 w-5" />
            </a>
          </Link>
        </div>
        <div className="__youtube p-4">
          <Link href={'https://www.facebook.com'} target={"_blank"} title="Skype">
            <a>
              <FaYoutube className="h-5 w-5" />
            </a>
          </Link>
        </div>

        <div className="__youtube p-4">
          <Link href={'https://www.facebook.com'} target={"_blank"} title="Skype">
            <a>
              <FaSkype className="h-5 w-5" />
            </a>
          </Link>
        </div>

        <div className="__youtube p-4">
          <Link href={'https://www.facebook.com'} target={"_blank"} title="Skype">
            <a>
              <MdEmail className="h-5 w-5" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

const FooterCopy = () => (
  <div className="__copyright">
    <div className="container mx-auto">

      <div className="flex text-white justify-center gap-8 py-8">
        <div className="basis-1/3 flex flex-col">
          <p style={{ lineHeight: 40, margin: '20px 0 10px' }}>
            <Link href="http://baojumbo.vn" title="Lousipack">
              <a>
                <img className="scale-with-grid" src="http://baojumbo.vn/wp-content/uploads/2017/08/sologan-louis-footer.png" alt={'image'} width={250} data-pagespeed-url-hash={2862545840} />
              </a>
            </Link>
          </p>

          <div className="copyright text-sm font-light">
            © 2015 Louispack. Design by Hoangkas
          </div>
        </div>
        <div className="basis-2/3 flex justify-center items-center">

          <p className="text-sm font-light"> Louispack - Nhà cung cấp bao Jumbo hàng đầu Việt Nam với chất lượng tốt nhất, giá rẻ nhất, dịch vụ uy tín hàng đầu</p>

        </div>
      </div>
    </div>
  </div>
)

const InfoFloating = () => {
  return (
    <aside className="__floating">
      <section className="flex w-full mx-auto max-w-[1400] text-white py-2 text-lg">
        <Link href={"tel:0915778874"} title="Mr. Phương - 0915.77.88.74">
          <a className="flex-1 flex items-center justify-center hover:underline">
            <span>
              <FaPhone className="inline-block w-[18px] h-[18px] mr-2 mb-1" />
              Ms. Cẩm -
              <strong>0915.77.88.74</strong>
            </span>
          </a>
        </Link>
        <Link href="tel:0933707789" title="Ms. Cẩm - 0933.707.789">
          <a className="flex-1 flex items-center justify-center hover:underline">
            <span>
              <FaPhone className="inline w-[18px] h-[18px] mr-2 mb-1" />
              Mr. Phương -
              <strong>0933.707.789</strong>
            </span>
          </a>
        </Link>
      </section>
    </aside>
  );
}

const InfoItemWidget = ({
  label = "",
  text = "Sản phẩm bao Jumbo",
  LeftIcon = BsFillCaretRightFill
}: {
  label?: string,
  text: string,
  LeftIcon?: any
}) => {

  return (
    <li className="p-2 leading-6">
      <span className="inline mr-2 w-[12px] h-[12px] text-[#F79727]">
        {LeftIcon}
      </span>
      <BsFillCaretRightFill className="inline mr-2" size="12px" color={"#F79727"} />
      <label className="mr-2">{label}</label>
      <Link href={'/'} target={"_blank"} title="Skype">
        <a className="hover:underline">
          <span>{text}</span>
        </a>
      </Link>
    </li>
  )
}