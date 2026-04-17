import { Carousel } from "react-responsive-carousel";

export default function TestimonialGallery(props){
    console.log(props)
    const testimonials = props?.testimonials;
    return (
        <Carousel showThumbs={false} infiniteLoop={true} centerMode={true} autoPlay={true} showIndicators={false} showStatus={false} showArrows={true} swipeable={true}>
        {testimonials && testimonials.map(
            (t, i) => (
              <div
                className={`flex flex-col justify-center pb-5 mx-auto duration-500 ease-linear gap-2 ${
                  i > 0 ? "md:w-1/3" : ""
                }`}
              >
                <div className="min-w-[300px] flex flex-col p-10 items-center bg-blue-50 dark:bg-slate-800 rounded mx-auto shadow-lg hover:shadow-md">
                  <img
                    src={t.coverImage.src}
                    alt={t.coverImage.alt}
                    className="sm:w-[150px] sm:h-[150px] rounded-full sm:mt-[-125px] w-[100px] h-[100px] mt-[-90px] dark:border-slate-600 border-slate-300 border-2"
                  />
                  <p className="text-lg italic font-serif my-5 text-center dark:text-slate-200 ">
                    <span className="text-lg ">"</span>
                    {t.description}
                    <span className="text-lg">"</span>
                  </p>
                  <span className="mr-2 opacity-75">-</span>
                  {t.author}
                  <a id="url" href={t.url} className="italic opacity-50">
                    {t.url}
                  </a>
                </div>
              </div>
            )
          )}
          </Carousel>
    )
}