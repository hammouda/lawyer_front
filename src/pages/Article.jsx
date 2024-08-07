import Contact from "../components/about/contact";
import ArticleComments from "../components/ArticleComments";
import ArticleWriter from "../components/ArticleWriter";
import Footer from "../components/footer";
import Menu from "../components/menu";
import RelevantArticles from "../components/RelevantArticles";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useParams } from "react-router-dom";
import DOMPurify from 'dompurify';

function Article() {
  const { t, i18n } = useTranslation();
    const { id } = useParams();
    const [article, setArticle]= useState();
    const [error, setError]= useState();
    const [loading, setLoading]= useState(true);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://54.247.72.79/api/articles/${id}`);
           
            setArticle(response.data.article);   
            setLoading(false) 
          } catch (error) {
            setError(error)
          }
          setLoading(false) 

        };

        fetchData();
      }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading article: {error.message}</p>;
    const download=()=>{
      const link = document.createElement('a');
      link.href = 'http://54.247.72.79/storage/'+article.file.download_link;
      link.download = article.file.original_name;
      link.click();
    }
    return(<>
    <Menu/>
    <div className="w-full bg-white py-16 mx-auto px-8 md:px-0 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <div className="grid md:grid-cols-4 gap-10 lg:gap-28">
            <div className="col-span-1 ">
                <ArticleWriter writer={article.writer} image={article.image}/>
            </div>
            <div className="md:col-span-3">
            <div className="">
                <div className="flex flex-col gap-y-2 lg:gap-y-4 mb-8">
                    <p className="text-[#21393e] text-2xl lg:text-5xl font-semibold">{article.title}</p>
                   
                </div>
                <div className="flex flex-col gap-y-7">
                    <p className="text-black text-base text-justify">
                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.content) }} />
                    </p>   
                </div>
                <div className="flex flex-col gap-y-7">
                    {article.file && 
                    <button 
                      className='mt-5 bg-secondary text-white border border-white rounded-full px-8 py-2 cursor-pointer hover:bg-white hover:text-secondary'
                      onClick={download}
                    >{t("Download File")}
                    </button>}
                </div>
                <ArticleComments article={article.id}/>
            </div>
            </div>
        </div>
            <RelevantArticles/>
    </div>
    <Contact/>
    <Footer/>
    </>);

}
export default Article;