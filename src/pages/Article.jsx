import Contact from "../components/about/contact";
import ArticleComments from "../components/ArticleComments";
import ArticleWriter from "../components/ArticleWriter";
import Footer from "../components/footer";
import Menu from "../components/menu";
import RelevantArticles from "../components/RelevantArticles";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DOMPurify from 'dompurify';

function Article() {
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
      }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading article: {error.message}</p>;
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