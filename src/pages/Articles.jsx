import ArticleCard from "../components/ArticleCard";
import Menu from "../components/menu";
import Footer from "../components/footer";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";
function Articles() {
    const { t, i18n } = useTranslation();
    const [articles, setArticles]= useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://admin.mithaqaltashrie.com.sa/api/articles');
            if (Array.isArray(response.data.articles)) {
              setArticles(response.data.articles);
            } else {
              console.error('API response is not an array');
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchData();
      }, []);
      

    
    return(
        <>
        <Menu/>
        <div className="bg-secondary w-full relative h-28 md:h-72 flex flex-col justify-center">
            <img src="/images/overlay-5.png" className='absolute h-32 md:h-80 -bottom-4 md:-bottom-8 left-0 0 z-10' alt="" />
            <div className="relative flex md:flex-row-reverse px-4 md:px-10 lg:px-20 xl:px-36">
                <p className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-extrabold text-blue-semilight">
                    {t("Stay updated to the")}  <span className="text-primary">{t("Newest")}<br/>{t("legal")}</span> {t("information")}
                </p>
            </div>
        </div>
        <div className="w-full bg-white py-16 mx-auto px-8 md:px-0 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
            <div className="lg:px-14 w-full">
                <p className="text-black text-[40px] font-bold font-['Roboto']">{t("Mithaq Al Tashrie: Article collection")}</p>
                {/* <div className="grid lg:grid-cols-4 gap-11 mt-10">
                    <div className="lg:col-span-3">
                        <input 
                            type="text" placeholder={t("Search an article")} 
                            className="w-full px-4 py-2 bg-white rounded-full border border-gray placeholder:text-black placeholder:font-extralight" 
                        />
                    </div>
                    <div className="col-span-1">
                        <select className="px-4 py-2 bg-white rounded-full border border-gray font-extralight">
                            <option>{t("Pick a writer you want to read to")}</option>
                            <option>Mahmoud Ahmed</option>
                            <option value="">Ahmed Hammouda</option>
                            <option>Hammouda Mohamed Amin</option>
                        </select>
                    </div>
                </div> */}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
               {articles.map((article)=>(
                   <ArticleCard article={article}/>
                ))
                }
                

            </div>
        </div>
            <Footer/>
        </>
    );
}
export default Articles